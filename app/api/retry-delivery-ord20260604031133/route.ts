import { NextResponse } from "next/server";

type NotionOrderQueryResponse = {
  results?: Array<{
    id: string;
    properties?: {
      Email?: { email?: string | null };
      Name?: { rich_text?: Array<{ plain_text?: string }> };
      Package?: { rich_text?: Array<{ plain_text?: string }> };
      "Payment Status"?: { select?: { name?: string } | null };
      "Delivery Status"?: { select?: { name?: string } | null };
    };
  }>;
};

type PromptPackQueryResponse = {
  results?: Array<{
    properties?: Record<string, unknown>;
  }>;
};

const orderId = "ORD20260604031133";
const expectedEmail = "bupsenxanh@gmail.com";

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
    files?: Array<{ file?: { url?: string }; external?: { url?: string } }>;
  };

  return prop?.files?.[0]?.file?.url || prop?.files?.[0]?.external?.url || "";
}

async function findOrder(notionApiKey: string, notionOrdersDbId: string) {
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
        title: { equals: orderId },
      },
      page_size: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`notion_order_${res.status}`);
  }

  const data = (await res.json()) as NotionOrderQueryResponse;
  return data.results?.[0] ?? null;
}

async function getPack6Link(notionApiKey: string, promptPacksDbId: string) {
  const res = await fetch(`https://api.notion.com/v1/databases/${promptPacksDbId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "Pack No",
        number: { equals: 6 },
      },
      page_size: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`notion_pack_${res.status}`);
  }

  const data = (await res.json()) as PromptPackQueryResponse;
  const page = data.results?.[0];
  const properties = page?.properties ?? {};
  const title = titleToPlain(properties["Pack Code"]) || "PACK 6";
  const url = getFileUrl(properties.File);

  if (!url) {
    throw new Error("missing_pack_6_file_url");
  }

  return { title, url };
}

async function markSent(pageId: string, notionApiKey: string) {
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
    throw new Error(`notion_mark_sent_${res.status}`);
  }
}

export async function POST(req: Request) {
  const url = new URL(req.url);

  if (url.searchParams.get("orderId") !== orderId || url.searchParams.get("email") !== expectedEmail) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const notionApiKey = process.env.NOTION_API_KEY;
  const notionOrdersDbId = process.env.NOTION_ORDERS_DB_ID;
  const promptPacksDbId = process.env.NOTION_PROMPT_PACKS_DB_ID;
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.DELIVERY_FROM_EMAIL;

  if (!notionApiKey || !notionOrdersDbId || !promptPacksDbId || !resendApiKey || !from) {
    return NextResponse.json({ ok: false, message: "Missing production env" }, { status: 500 });
  }

  try {
    const order = await findOrder(notionApiKey, notionOrdersDbId);
    if (!order) {
      return NextResponse.json({ ok: false, message: "Order not found" }, { status: 404 });
    }

    const email = order.properties?.Email?.email;
    const paymentStatus = order.properties?.["Payment Status"]?.select?.name;
    if (email !== expectedEmail || paymentStatus !== "Paid") {
      return NextResponse.json({ ok: false, message: "Order is not ready for delivery" }, { status: 400 });
    }

    const customerName = richTextToPlain(order.properties?.Name);
    const packageName = richTextToPlain(order.properties?.Package);
    const pack = await getPack6Link(notionApiKey, promptPacksDbId);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: email,
        subject: `File prompt cho đơn ${orderId}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
            <p>Chào ${customerName || "bạn"},</p>
            <p>Hữu Hùng AI đã xác nhận thanh toán cho đơn <strong>${orderId}</strong>.</p>
            <p>Gói bạn đã mua: <strong>${packageName}</strong></p>
            <p>Link tải file prompt:</p>
            <ul><li><a href="${pack.url}" target="_blank" rel="noreferrer">${pack.title}</a></li></ul>
            <p>Nếu cần hỗ trợ, bạn chỉ cần phản hồi email này.</p>
            <p>Trân trọng,<br/>Hữu Hùng AI</p>
          </div>
        `,
        text: `Chào ${customerName || "bạn"},\n\nHữu Hùng AI đã xác nhận thanh toán cho đơn ${orderId}.\nGói bạn đã mua: ${packageName}\n\nLink tải file prompt:\n${pack.title}: ${pack.url}\n\nTrân trọng,\nHữu Hùng AI`,
        reply_to: process.env.DELIVERY_REPLY_TO_EMAIL || undefined,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json({ ok: false, message: "Resend failed", detail }, { status: 500 });
    }

    await markSent(order.id, notionApiKey);

    return NextResponse.json({ ok: true, sent: true, orderId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown retry error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
