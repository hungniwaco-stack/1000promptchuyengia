"use client";

import { useEffect, useState } from "react";
import BuyButton from "./BuyButton";
import { comboProduct, products } from "./products";

const pricingHash = "#bang-gia";

export default function PricingSection() {
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    const updatePricingVisibility = () => {
      const shouldShowPricing = window.location.hash === pricingHash;
      setShowPricing(shouldShowPricing);

      if (shouldShowPricing) {
        requestAnimationFrame(() => {
          document.getElementById("bang-gia")?.scrollIntoView({ block: "start" });
        });
      }
    };

    updatePricingVisibility();
    window.addEventListener("hashchange", updatePricingVisibility);
    return () => window.removeEventListener("hashchange", updatePricingVisibility);
  }, []);

  if (!showPricing) {
    return <section id="bang-gia" className="scroll-mt-32" aria-hidden="true" />;
  }

  return (
    <section id="bang-gia" className="scroll-mt-32 py-14">
      <div className="mx-auto w-[92%] max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">Bảng giá từng gói Prompt</h2>
        <p className="mx-auto mb-7 max-w-3xl text-center text-slate-600">
          Có thể mua riêng từng pack theo đúng nhu cầu, hoặc chọn combo trọn bộ để tiết kiệm hơn.
        </p>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-100 text-sm uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-5 py-4">Gói Prompt</th>
                  <th className="w-40 px-5 py-4 text-right">Giá</th>
                  <th className="w-48 px-5 py-4 text-right">Mua riêng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {products.map((product) => (
                  <tr key={product.title}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{product.title}</td>
                    <td className="px-5 py-4 text-right text-lg font-extrabold text-red-600">{product.price}</td>
                    <td className="px-5 py-4 text-right">
                      <BuyButton packageName={product.title} className="btn btn-primary px-4 py-2 text-sm">
                        Mua gói này
                      </BuyButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {products.map((product) => (
              <div key={product.title} className="rounded-lg border border-slate-200 p-4">
                <h3 className="mb-2 text-sm font-bold text-slate-900">{product.title}</h3>
                <div className="mb-3 text-xl font-extrabold text-red-600">{product.price}</div>
                <BuyButton packageName={product.title} className="btn btn-primary w-full">
                  Mua gói này
                </BuyButton>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border-2 border-amber-500 bg-amber-50 p-7 text-center shadow-md">
          <h3 className="mb-3 text-2xl font-extrabold md:text-3xl">{comboProduct.title}</h3>
          <p className="text-sm font-bold text-slate-700">Mua lẻ 10 pack: <span className="line-through">490,000đ</span></p>
          <p className="mb-2 text-2xl font-extrabold text-red-600">Combo chỉ {comboProduct.price}</p>
          <p className="mb-5 font-bold text-emerald-700">Tiết kiệm 291,000đ và nhận đủ 1000 prompt.</p>
          <BuyButton packageName={comboProduct.title} className="btn btn-accent px-8 py-4 text-base">
            SỞ HỮU TRỌN BỘ NGAY HÔM NAY
          </BuyButton>
        </div>
      </div>
    </section>
  );
}
