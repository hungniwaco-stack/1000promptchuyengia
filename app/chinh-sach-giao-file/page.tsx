import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách giao file - 1000 Prompt Chuyên Gia",
  description: "Thông tin về cách nhận file prompt sau khi thanh toán tại 1000 Prompt Chuyên Gia.",
};

export default function DeliveryPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Chính sách giao file</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>Sau khi bạn tạo đơn và chuyển khoản đúng nội dung mã đơn dạng ORD..., hệ thống SePay sẽ tự động xác nhận thanh toán.</p>
          <p>Khi thanh toán được xác nhận, website sẽ gửi file/link prompt qua email bạn đã nhập trong form đặt hàng. Với combo, email sẽ bao gồm đủ 10 pack.</p>
          <p>Thông thường email được gửi trong vài phút. Nếu sau 10 phút chưa nhận, vui lòng kiểm tra hộp thư Spam/Quảng cáo hoặc tra cứu đơn hàng trên website.</p>
          <p>Nếu vẫn chưa thấy email, hãy liên hệ hotline 0944 851719 hoặc email hatmuadem@gmail.com kèm mã đơn để được kiểm tra thủ công.</p>
        </div>
      </section>
    </main>
  );
}
