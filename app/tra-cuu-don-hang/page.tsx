"use client";

import { FormEvent, useState } from "react";

type OrderStatus = {
  orderId: string;
  amount: number | null;
  email: string;
  packageName: string;
  paymentStatus: string;
  deliveryStatus: string;
};

const formatCurrency = (amount: number | null) =>
  typeof amount === "number" ? `${new Intl.NumberFormat("vi-VN").format(amount)} VNĐ` : "Đang cập nhật";

function statusLabel(status: string, type: "payment" | "delivery") {
  if (type === "payment") {
    return status === "Paid" ? "Đã thanh toán" : "Chờ thanh toán";
  }

  return status === "Sent" ? "Đã gửi file" : "Chưa gửi file";
}

function statusClass(status: string, type: "payment" | "delivery") {
  const done = type === "payment" ? status === "Paid" : status === "Sent";
  return done
    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
    : "border-amber-200 bg-amber-50 text-amber-800";
}

export default function OrderLookupPage() {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<OrderStatus | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedOrderId = orderId.trim().toUpperCase();

    setError("");
    setOrder(null);

    if (!/^ORD\d{14}$/.test(normalizedOrderId)) {
      setError("Vui lòng nhập đúng mã đơn dạng ORDYYYYMMDDHHMMSS.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/order-status?orderId=${encodeURIComponent(normalizedOrderId)}`);
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.message || "Không thể tra cứu đơn hàng lúc này.");
        return;
      }

      setOrder(data.order as OrderStatus);
    } catch {
      setError("Có lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-[92%] max-w-5xl items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo Hữu Hùng AI" className="h-16 w-auto object-contain" />
          </a>
          <a href="/" className="btn btn-primary px-4 py-2 text-sm">
            Về trang chủ
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-[92%] max-w-5xl gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Tra cứu đơn hàng</p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
            Kiểm tra thanh toán và trạng thái gửi file
          </h1>
          <p className="text-base leading-7 text-slate-600">
            Nhập mã đơn bắt đầu bằng ORD để xem hệ thống đã xác nhận thanh toán và gửi file prompt qua email hay chưa.
          </p>
          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-950">
            Mã đơn nằm trong nội dung chuyển khoản hoặc màn hình QR sau khi bạn tạo đơn. Ví dụ: ORD20260603125554.
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="order-id">
              Mã đơn hàng
            </label>
            <input
              id="order-id"
              className="input text-lg font-bold uppercase"
              placeholder="ORDYYYYMMDDHHMMSS"
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              autoComplete="off"
            />
            <button type="submit" disabled={loading} className="btn btn-primary mt-4 w-full disabled:opacity-60">
              {loading ? "Đang tra cứu..." : "Tra cứu đơn hàng"}
            </button>
          </form>

          {error && <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}

          {order && (
            <div className="mt-6 grid gap-4">
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-500">Mã đơn</div>
                <div className="mt-1 break-all text-xl font-extrabold text-slate-950">{order.orderId}</div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className={`rounded-lg border p-4 font-extrabold ${statusClass(order.paymentStatus, "payment")}`}>
                  {statusLabel(order.paymentStatus, "payment")}
                </div>
                <div className={`rounded-lg border p-4 font-extrabold ${statusClass(order.deliveryStatus, "delivery")}`}>
                  {statusLabel(order.deliveryStatus, "delivery")}
                </div>
              </div>

              <dl className="grid gap-3 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="font-semibold text-slate-500">Gói đã mua</dt>
                  <dd className="mt-1 font-bold text-slate-950">{order.packageName || "Đang cập nhật"}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="font-semibold text-slate-500">Số tiền</dt>
                  <dd className="mt-1 font-bold text-red-600">{formatCurrency(order.amount)}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="font-semibold text-slate-500">Email nhận file</dt>
                  <dd className="mt-1 font-bold text-slate-950">{order.email || "Đang cập nhật"}</dd>
                </div>
              </dl>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                Nếu đã thanh toán đúng mã đơn nhưng sau 10 phút trạng thái chưa đổi hoặc chưa nhận file, vui lòng liên hệ 0944 851719 / hatmuadem@gmail.com.
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
