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
      "Payment Status"?: { select?: { name?: string } | null };
    };
  }>;
};

const orderCodePattern = /ORD-\d{14}/i;

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

function extractOrderId(payload: SepayPayload) {
  const directCode = payload.code?.match(orderCodePattern)?.[0];
  if (directCode) {
    return directCode.toUpperCase();
  }

  const contentCode = payload.content?.match(orderCodePattern)?.[0];
  if (contentCode) {
    return contentCode.toUpperCase();
  }

  return "";
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

    return json(true, 200, { orderId, status: "paid" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown webhook error";
    return json(false, 500, { message });
  }
}
