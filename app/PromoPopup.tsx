"use client";

import { useEffect, useState } from "react";
import BuyButton from "./BuyButton";
import { comboProduct } from "./products";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  function dismiss() {
    sessionStorage.setItem("promo_dismissed", "1");
    setVisible(false);
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-end justify-center p-4 md:items-center">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative w-full max-w-md rounded-2xl border border-amber-300 bg-white p-6 shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          aria-label="Đóng"
        >
          ✕
        </button>
        <div className="mb-1 inline-flex rounded-md bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
          Ưu đãi hôm nay
        </div>
        <h2 className="mt-3 text-xl font-extrabold text-slate-950">
          Trọn bộ 1000 Prompt – chỉ 199,000đ
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Mua lẻ 10 pack hết 490,000đ. Combo tiết kiệm 291,000đ — nhận file tự động qua email ngay sau thanh toán.
        </p>
        <div className="mt-4 flex gap-3">
          <div onClick={dismiss} className="flex-1">
            <BuyButton
              packageName={comboProduct.title}
              className="btn btn-accent w-full justify-center py-3 text-sm"
            >
              Mua ngay 199,000đ
            </BuyButton>
          </div>
          <button
            onClick={dismiss}
            className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50"
          >
            Để sau
          </button>
        </div>
      </div>
    </div>
  );
}
