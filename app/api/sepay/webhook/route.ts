import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SepayPayload = {
  id?: number;
  gateway?: string;
  transactionDate?: string;
  accountNumber?: string;
  subAccount?: string;
  code?: string | null;
  content?: string;
  transferType?: "in" | "out";
  description?: string;
  transferAmount?: number;
  accumulated?: number;
  referenceCode?: string;
};

type NotionQueryResponse = {
  results?: Array<{
    id: string;
    properties?: {
      Amount?: { number?: number | null };
      Email?: { email?: string | null };
      Name?: { rich_text?: Array<{ plain_text?: string }> };
      Package?: { rich_text?: Array<{ plain_text?: string }> };
      "Payment Status"?: { select?: { name?: string } | null };
      "Delivery Status"?: { select?: { name?: string } | null };
    };
  }>;
};

type OrderPage = NonNullable<NotionQueryResponse["results"]>[number];

type PromptPackLink = {
  title: string;
  url: string;
};

type PromptPackQueryResponse = {
  results?: Array<{
    properties?: Record<string, unknown>;
  }>;
};

const orderCodePattern = /ORD\d{14}/i;

function json(success: boolean, status = 200, extra: Record<string, unknown> = {}) {
  return NextResponse.json({ success, ...extra }, { status });
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function verifySepaySignature(rawBody: string, req: Request) {
  const secret = process.env.SEPAY_WEBHOOK_SECRET;

  if (!secret) {
    return false;
  }

  const signature = req.headers.get("X-SePay-Signature") || "";
  const timestamp = req.headers.get("X-SePay-Timestamp") || "";
  const timestampSeconds = Number(timestamp);
  const nowSeconds = Math.floor(Date.now() / 1000);

  if (!signature || !timestamp || !Number.isFinite(timestampSeconds)) {
    return false;
  }

  if (Math.abs(nowSeconds - timestampSeconds) > 300) {
    return false;
  }

  const expected = `sha256=${createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex")}`;

  return safeCompare(expected, signature);
}

function normalizeOrderId(orderCode: string) {
  return orderCode.toUpperCase();
}

function extractOrderId(payload: SepayPayload) {
  const candidates = [payload.code, payload.content, payload.description];

  for (const candidate of candidates) {
    const orderCode = candidate?.match(orderCodePattern)?.[0];
    if (orderCode) {
      return normalizeOrderId(orderCode);
    }
  }

  return "";
}

function richTextToPlain(value: unknown) {
  const richText = (value as { rich_text?: Array<{ plain_text?: string }> })?.rich_text;
  return richText?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
}

function titleToPlain(value: unknown) {
  const title = (value as { title?: Array<{ plain_text?: string }> })?.title;
  return title?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
}

function getFileUrl(value: unknown) {
  const prop = value as {
    url?: string;
    files?: Array<{ file?: { url?: string }; external?: { url?: string } }>;
    rich_text?: Array<{ plain_text?: string }>;
  };

  return prop?.url || prop?.files?.[0]?.file?.url || prop?.files?.[0]?.external?.url || prop?.rich_text?.[0]?.plain_text || "";
}

function getPackNoFromProductTitle(packageName: string) {
  const match = packageName.match(/PACK\s+(\d+)/i);
  return match ? Number(match[1]) : null;
}

async function findOrderPage(orderId: string, notionApiKey: string, notionOrdersDbId: string) {
  const res = await fetch(`https://api.notion.com/v1/databases/${notionOrdersDbId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "Order ID",
        title: {
          equals: orderId,
        },
      },
      page_size: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = (await res.json()) as NotionQueryResponse;
  return data.results?.[0] ?? null;
}

async function markOrderPaid(pageId: string, notionApiKey: string) {
  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        "Payment Status": {
          select: { name: "Paid" },
        },
      },
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}

async function markDeliverySent(pageId: string, notionApiKey: string) {
  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        "Delivery Status": {
          select: { name: "Sent" },
        },
      },
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}

async function fetchPromptPackLinks(packageName: string, notionApiKey: string) {
  const promptPacksDbId = process.env.NOTION_PROMPT_PACKS_DB_ID;

  if (!promptPacksDbId) {
    throw new Error("Missing NOTION_PROMPT_PACKS_DB_ID");
  }

  const packNo = getPackNoFromProductTitle(packageName);
  const isCombo = packNo === null;
  const res = await fetch(`https://api.notion.com/v1/databases/${promptPacksDbId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...(isCombo
        ? {}
        : {
            filter: {
              property: "Pack No",
              number: {
                equals: packNo,
              },
            },
          }),
      sorts: [
        {
          property: "Pack No",
          direction: "ascending",
        },
      ],
      page_size: isCombo ? 10 : 1,
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = (await res.json()) as PromptPackQueryResponse;
  const links =
    data.results
      ?.map((page) => {
        const properties = page.properties ?? {};
        const title = titleToPlain(properties["Pack Code"]) || richTextToPlain(properties["Name"]) || "Prompt pack";
        const url = getFileUrl(properties.File);

        return { title, url };
      })
      .filter((link): link is PromptPackLink => Boolean(link.url)) ?? [];

  if (!links.length) {
    throw new Error("No prompt pack file links found");
  }

  return links;
}

function buildDeliveryEmail(orderId: string, customerName: string, packageName: string, links: PromptPackLink[]) {
  const linkItems = links
    .map(
      (link) =>
        `<li style="margin:8px 0"><a href="${link.url}" target="_blank" rel="noreferrer">${link.title}</a></li>`,
    )
    .join("");
  const textLinks = links.map((link) => `${link.title}: ${link.url}`).join("\n");

  return {
    subject: `File prompt cho đơn ${orderId}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <p>Chào ${customerName || "bạn"},</p>
        <p>Hữu Hùng AI đã xác nhận thanh toán cho đơn <strong>${orderId}</strong>.</p>
        <p>Gói bạn đã mua: <strong>${packageName}</strong></p>
        <p>Link tải file prompt:</p>
        <ul>${linkItems}</ul>
        <p>Nếu cần hỗ trợ, bạn chỉ cần phản hồi email này.</p>
        <p>Trân trọng,<br/>Hữu Hùng AI</p>
      </div>
    `,
    text: `Chào ${customerName || "bạn"},\n\nHữu Hùng AI đã xác nhận thanh toán cho đơn ${orderId}.\nGói bạn đã mua: ${packageName}\n\nLink tải file prompt:\n${textLinks}\n\nTrân trọng,\nHữu Hùng AI`,
  };
}

async function sendDeliveryEmail(orderId: string, orderPage: OrderPage, notionApiKey: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.DELIVERY_FROM_EMAIL;

  if (!resendApiKey || !from) {
    return { sent: false, reason: "email_not_configured" };
  }

  const email = orderPage.properties?.Email?.email;
  const customerName = richTextToPlain(orderPage.properties?.Name);
  const packageName = richTextToPlain(orderPage.properties?.Package);

  if (!email || !packageName) {
    return { sent: false, reason: "missing_order_email_or_package" };
  }

  const links = await fetchPromptPackLinks(packageName, notionApiKey);
  const message = buildDeliveryEmail(orderId, customerName, packageName, links);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: message.subject,
      html: message.html,
      text: message.text,
      reply_to: process.env.DELIVERY_REPLY_TO_EMAIL || undefined,
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return { sent: true, count: links.length };
}

export async function POST(req: Request) {
  const rawBody = await req.text();

  if (!verifySepaySignature(rawBody, req)) {
    return json(false, 401, { message: "Unauthorized" });
  }

  const notionApiKey = process.env.NOTION_API_KEY;
  const notionOrdersDbId = process.env.NOTION_ORDERS_DB_ID;

  if (!notionApiKey || !notionOrdersDbId) {
    return json(false, 500, { message: "Missing Notion environment variables" });
  }

  let payload: SepayPayload;
  try {
    payload = JSON.parse(rawBody) as SepayPayload;
  } catch {
    return json(false, 400, { message: "Invalid JSON payload" });
  }

  if (payload.transferType !== "in") {
    return json(true, 200, { ignored: "not_money_in" });
  }

  const orderId = extractOrderId(payload);
  if (!orderId) {
    return json(true, 200, { ignored: "missing_order_code" });
  }

  try {
    const page = await findOrderPage(orderId, notionApiKey, notionOrdersDbId);

    if (!page) {
      return json(true, 200, { ignored: "order_not_found", orderId });
    }

    const expectedAmount = page.properties?.Amount?.number;
    const actualAmount = payload.transferAmount;

    if (typeof expectedAmount === "number" && actualAmount !== expectedAmount) {
      return json(true, 200, {
        ignored: "amount_mismatch",
        orderId,
        expectedAmount,
        actualAmount,
      });
    }

    const currentPaymentStatus = page.properties?.["Payment Status"]?.select?.name;
    if (currentPaymentStatus !== "Paid") {
      await markOrderPaid(page.id, notionApiKey);
    }

    const currentDeliveryStatus = page.properties?.["Delivery Status"]?.select?.name;
    if (currentDeliveryStatus === "Sent") {
      return json(true, 200, { orderId, status: "paid", delivery: "already_sent" });
    }

    const delivery = await sendDeliveryEmail(orderId, page, notionApiKey);
    if (delivery.sent) {
      await markDeliverySent(page.id, notionApiKey);
    }

    return json(true, 200, { orderId, status: "paid", delivery });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown webhook error";
    return json(false, 500, { message });
  }
}
