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

export default function OrderLookupForm() {
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
  );
}
