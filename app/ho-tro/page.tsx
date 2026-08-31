import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hỗ trợ - 1000 Prompt Chuyên Gia",
  description: "Kênh hỗ trợ, cách xử lý sự cố thanh toán và câu hỏi thường gặp khi mua bộ 1000 Prompt Chuyên Gia.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Hỗ trợ khách hàng</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>Đội ngũ Hữu Hùng AI hỗ trợ trực tiếp cho mọi vấn đề liên quan đến đặt hàng, thanh toán và nhận file prompt. Trang này tổng hợp cách liên hệ nhanh nhất và những câu hỏi khách hàng thường gặp nhất.</p>

          <div className="rounded-lg bg-blue-50 p-4 text-blue-950">
            <div className="font-extrabold">Kênh liên hệ</div>
            <div>Hotline/Zalo: 0944 851719</div>
            <div>Email: hatmuadem@gmail.com</div>
          </div>

          <p>Nếu bạn cần kiểm tra đơn hàng, vui lòng chuẩn bị sẵn mã đơn dạng ORD... (có trong nội dung chuyển khoản hoặc màn hình QR khi đặt hàng) để việc hỗ trợ được nhanh hơn. Trước khi liên hệ trực tiếp, bạn có thể tự vào trang <a href="/tra-cuu-don-hang" className="font-bold text-blue-700 hover:underline">Tra cứu đơn hàng</a> để xem ngay trạng thái thanh toán và trạng thái giao file mà không cần chờ phản hồi.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Câu hỏi thường gặp</h2>
          <p><strong>Chuyển khoản rồi nhưng chưa thấy trạng thái cập nhật?</strong> Hệ thống thường xác nhận trong vài phút. Nếu quá 10 phút vẫn chưa thấy đổi trạng thái, kiểm tra lại nội dung chuyển khoản có đúng mã đơn ORD... không, rồi liên hệ hotline kèm mã đơn để được kiểm tra thủ công.</p>
          <p><strong>Đã thanh toán nhưng không thấy email chứa file?</strong> Kiểm tra hộp thư Spam/Quảng cáo trước. Nếu vẫn không thấy, khả năng cao địa chỉ email lúc đặt hàng bị nhập sai — liên hệ ngay để được gửi lại đúng email.</p>
          <p><strong>Muốn đổi từ mua lẻ sang mua combo?</strong> Liên hệ trực tiếp qua hotline/Zalo kèm mã đơn cũ, đội ngũ sẽ hỗ trợ tính chênh lệch và gửi bổ sung các pack còn thiếu.</p>
          <p><strong>Prompt dùng không hiệu quả như mong đợi?</strong> Gửi mô tả cụ thể tình huống bạn đang dùng qua email hoặc Zalo, đội ngũ sẽ hướng dẫn cách chỉnh prompt phù hợp hơn với nhu cầu của bạn.</p>

          <a href="/tra-cuu-don-hang" className="btn btn-accent w-fit">Tra cứu đơn hàng</a>
        </div>
      </section>
    </main>
  );
}
