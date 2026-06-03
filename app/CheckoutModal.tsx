"use client";

import { useEffect, useState } from "react";
import { getCatalogItemByTitle } from "./products";

type CheckoutOpenEvent = CustomEvent<{ packageName: string }>;

type CreatedOrder = {
  orderId: string;
  amount: number;
  bankCode: string;
  bankAccountNumber: string;
  paymentContent: string;
  qrUrl: string;
};

const formatCurrency = (amount: number) => new Intl.NumberFormat("vi-VN").format(amount) + " VNĐ";

export default function CheckoutModal() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [createdOrder, setCreatedOrder] = useState<CreatedOrder | null>(null);

  useEffect(() => {
    const openCheckout = (event: Event) => {
      const { packageName } = (event as CheckoutOpenEvent).detail;
      setSelectedPackage(packageName);
      setFormError("");
      setCreatedOrder(null);
      setOpen(true);
    };

    window.addEventListener("checkout:open", openCheckout);
    return () => window.removeEventListener("checkout:open", openCheckout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const normalizePhone = (input: string) => input.replace(/\s+/g, "").replace(/^\+84/, "0");
  const isValidPhone = (input: string) => /^(0[35789])[0-9]{8}$/.test(input);
  const isValidEmail = (input: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/55 p-4" onClick={() => setOpen(false)}>
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" aria-label="Đóng form" className="absolute right-3 top-2 h-11 w-11 rounded-full text-3xl text-slate-500" onClick={() => setOpen(false)}>×</button>
        <h3 className="text-xl font-extrabold">Form Thanh Toán</h3>
        <p className="mt-1 font-bold text-blue-900">Gói đã chọn: {selectedPackage}</p>
        {createdOrder ? (
          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_280px]">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white">
                ✓
              </div>
              <h4 className="text-2xl font-extrabold text-emerald-800">Đã tạo mã thanh toán</h4>
              <p className="mt-3 text-sm text-emerald-900">
                Vui lòng quét QR hoặc chuyển khoản đúng thông tin bên dưới. SePay sẽ tự động xác nhận khi tiền vào tài khoản.
              </p>

              <dl className="mt-5 grid gap-3 text-sm">
                <div className="rounded-lg bg-white p-3">
                  <dt className="font-semibold text-slate-500">Mã đơn / nội dung chuyển khoản</dt>
                  <dd className="mt-1 break-all text-lg font-extrabold text-slate-950">{createdOrder.paymentContent}</dd>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <dt className="font-semibold text-slate-500">Số tiền</dt>
                  <dd className="mt-1 text-lg font-extrabold text-red-600">{formatCurrency(createdOrder.amount)}</dd>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <dt className="font-semibold text-slate-500">Tài khoản nhận</dt>
                  <dd className="mt-1 font-bold text-slate-950">
                    {createdOrder.bankAccountNumber} - {createdOrder.bankCode}
                  </dd>
                  <dd className="text-slate-700">NGUYEN HUU HUNG</dd>
                </div>
              </dl>

              <button type="button" className="btn btn-primary mt-5" onClick={() => setOpen(false)}>
                Đã hiểu
              </button>
            </div>
            <img
              src={createdOrder.qrUrl}
              alt="Mã QR thanh toán SePay"
              className="h-auto w-full rounded-lg border border-slate-300 object-contain"
            />
          </div>
        ) : (
          <form
            className="mt-4 grid gap-5 md:grid-cols-[1fr_280px]"
            onSubmit={async (event) => {
              event.preventDefault();
              setFormError("");
              const normalizedPhone = normalizePhone(phone);
              if (name.trim().length < 2) {
                setFormError("Vui lòng nhập họ tên hợp lệ (tối thiểu 2 ký tự).");
                return;
              }
              if (!isValidPhone(normalizedPhone)) {
                setFormError("Số điện thoại không hợp lệ. Ví dụ: 09xxxxxxxx.");
                return;
              }
              if (!isValidEmail(email.trim().toLowerCase())) {
                setFormError("Email không hợp lệ.");
                return;
              }
              if (!getCatalogItemByTitle(selectedPackage)) {
                setFormError("Gói đã chọn không hợp lệ. Vui lòng chọn lại gói trên website.");
                return;
              }
              setSubmitting(true);
              try {
                const res = await fetch("/api/order", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: name.trim(),
                    phone: normalizedPhone,
                    email: email.trim().toLowerCase(),
                    packageName: selectedPackage,
                  }),
                });
                const data = await res.json();
                if (!res.ok || !data.ok) {
                  setFormError(data.message || "Gửi đơn thất bại. Vui lòng thử lại.");
                  return;
                }
                setCreatedOrder(data as CreatedOrder);
                setName("");
                setPhone("");
                setEmail("");
              } catch {
                setFormError("Có lỗi kết nối. Vui lòng thử lại sau.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div>
              <label className="label">Họ và Tên</label>
              <input className="input" required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
              <label className="label">Số điện thoại</label>
              <input className="input" required autoComplete="tel" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
              <label className="label">Email nhận file</label>
              <input className="input" type="email" required autoComplete="email" inputMode="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <div className="mt-3 rounded-lg border border-dashed border-slate-400 bg-slate-50 p-3 text-sm">
                Sau khi tạo mã, hệ thống sẽ hiển thị QR thanh toán riêng cho đơn hàng này.
              </div>
              {formError && (
                <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700">
                  {formError}
                </p>
              )}
              <button type="submit" disabled={submitting} className="btn btn-primary mt-4 w-full disabled:opacity-60">
                {submitting ? "Đang tạo mã..." : "Tạo Mã Thanh Toán"}
              </button>
            </div>
            <img
              src="/images/qr-acb.png"
              alt="Mã QR thanh toán"
              className="h-auto w-full rounded-lg border border-slate-300 object-contain"
            />
          </form>
        )}
      </div>
    </div>
  );
}
