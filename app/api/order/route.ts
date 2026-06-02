import { NextResponse } from "next/server";
import { getCatalogItemByTitle } from "../../products";

type OrderPayload = {
  name: string;
  phone: string;
  email: string;
  packageName: string;
};

function buildOrderId() {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate(),
  ).padStart(2, "0")}${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(
    2,
    "0",
  )}${String(now.getSeconds()).padStart(2, "0")}`;
  return `ORD-${stamp}`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePhone(phone: string) {
  return phone.replace(/\s+/g, "").replace(/^\+84/, "0");
}

function isValidPhone(phone: string) {
  return /^(0[3|5|7|8|9])[0-9]{8}$/.test(phone);
}

export async function POST(req: Request) {
  try {
    const notionApiKey = process.env.NOTION_API_KEY;
    const notionOrdersDbId = process.env.NOTION_ORDERS_DB_ID;

    if (!notionApiKey || !notionOrdersDbId) {
      return NextResponse.json(
        { ok: false, message: "Thiếu biến môi trường Notion." },
        { status: 500 },
      );
    }

    const body = (await req.json()) as Partial<OrderPayload>;
    const name = body.name?.trim() ?? "";
    const phone = normalizePhone(body.phone?.trim() ?? "");
    const email = body.email?.trim().toLowerCase() ?? "";
    const packageName = body.packageName?.trim() ?? "";

    if (!name || !phone || !email || !packageName) {
      return NextResponse.json(
        { ok: false, message: "Thiếu dữ liệu bắt buộc." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, message: "Email không hợp lệ." }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { ok: false, message: "Số điện thoại không hợp lệ." },
        { status: 400 },
      );
    }

    const catalogItem = getCatalogItemByTitle(packageName);
    if (!catalogItem) {
      return NextResponse.json(
        { ok: false, message: "Gói sản phẩm không hợp lệ." },
        { status: 400 },
      );
    }

    const orderId = buildOrderId();

    const notionRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: notionOrdersDbId },
        properties: {
          "Order ID": {
            title: [{ text: { content: orderId } }],
          },
          Name: {
            rich_text: [{ text: { content: name } }],
          },
          Phone: {
            phone_number: phone,
          },
          Email: {
            email,
          },
          Package: {
            rich_text: [{ text: { content: packageName } }],
          },
          Amount: {
            number: catalogItem.amount,
          },
          "Payment Status": {
            select: { name: "Pending" },
          },
          "Delivery Status": {
            select: { name: "Not Sent" },
          },
        },
      }),
    });

    if (!notionRes.ok) {
      const errText = await notionRes.text();
      return NextResponse.json(
        { ok: false, message: "Không thể ghi đơn vào Notion.", detail: errText },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, orderId });
  } catch {
    return NextResponse.json({ ok: false, message: "Đã xảy ra lỗi khi tạo đơn." }, { status: 500 });
  }
}
