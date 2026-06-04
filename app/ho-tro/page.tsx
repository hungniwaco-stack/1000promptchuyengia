import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hỗ trợ - 1000 Prompt Chuyên Gia",
  description: "Kênh hỗ trợ khách hàng sau khi mua bộ 1000 Prompt Chuyên Gia.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Hỗ trợ khách hàng</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>Nếu bạn cần kiểm tra đơn hàng, vui lòng chuẩn bị mã đơn dạng ORD... để việc hỗ trợ nhanh hơn.</p>
          <div className="rounded-lg bg-blue-50 p-4 text-blue-950">
            <div className="font-extrabold">Kênh liên hệ</div>
            <div>Hotline/Zalo: 0944 851719</div>
            <div>Email: hatmuadem@gmail.com</div>
          </div>
          <p>Trước khi liên hệ, bạn có thể vào trang Tra cứu đơn hàng để xem trạng thái thanh toán và giao file.</p>
          <a href="/tra-cuu-don-hang" className="btn btn-accent w-fit">Tra cứu đơn hàng</a>
        </div>
      </section>
    </main>
  );
}
