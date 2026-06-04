import { NextResponse } from "next/server";

type NotionOrderQueryResponse = {
  results?: Array<{
    properties?: {
      Amount?: { number?: number | null };
      Email?: { email?: string | null };
      Package?: { rich_text?: Array<{ plain_text?: string }> };
      "Payment Status"?: { select?: { name?: string } | null };
      "Delivery Status"?: { select?: { name?: string } | null };
    };
  }>;
};

const orderIdPattern = /^ORD\d{14}$/;

function richTextToPlain(value: unknown) {
  const richText = (value as { rich_text?: Array<{ plain_text?: string }> })?.rich_text;
  return richText?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
}

function maskEmail(email: string) {
  const [name, domain] = email.split("@");

  if (!name || !domain) {
    return "";
  }

  const visibleName = name.length <= 2 ? name[0] : `${name.slice(0, 2)}***`;
  return `${visibleName}@${domain}`;
}

function normalizeOrderId(value: string) {
  return value.trim().toUpperCase();
}

export async function GET(req: Request) {
  const notionApiKey = process.env.NOTION_API_KEY;
  const notionOrdersDbId = process.env.NOTION_ORDERS_DB_ID;

  if (!notionApiKey || !notionOrdersDbId) {
    return NextResponse.json(
      { ok: false, message: "Hệ thống tra cứu đơn hàng chưa được cấu hình." },
      { status: 500 },
    );
  }

  const url = new URL(req.url);
  const orderId = normalizeOrderId(url.searchParams.get("orderId") ?? "");

  if (!orderIdPattern.test(orderId)) {
    return NextResponse.json(
      { ok: false, message: "Mã đơn không hợp lệ. Vui lòng nhập đúng dạng ORDYYYYMMDDHHMMSS." },
      { status: 400 },
    );
  }

  const notionRes = await fetch(`https://api.notion.com/v1/databases/${notionOrdersDbId}/query`, {
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

  if (!notionRes.ok) {
    return NextResponse.json(
      { ok: false, message: "Không thể tra cứu đơn hàng lúc này. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }

  const data = (await notionRes.json()) as NotionOrderQueryResponse;
  const order = data.results?.[0];

  if (!order) {
    return NextResponse.json(
      { ok: false, message: "Không tìm thấy đơn hàng với mã này." },
      { status: 404 },
    );
  }

  const properties = order.properties ?? {};

  return NextResponse.json({
    ok: true,
    order: {
      orderId,
      amount: properties.Amount?.number ?? null,
      email: properties.Email?.email ? maskEmail(properties.Email.email) : "",
      packageName: richTextToPlain(properties.Package),
      paymentStatus: properties["Payment Status"]?.select?.name ?? "Pending",
      deliveryStatus: properties["Delivery Status"]?.select?.name ?? "Not Sent",
    },
  });
}
