import type { Metadata } from "next";
import OrderLookupForm from "./OrderLookupForm";

export const metadata: Metadata = {
  title: "Tra cứu đơn hàng - 1000 Prompt Chuyên Gia",
  description: "Nhập mã đơn ORD... để kiểm tra trạng thái thanh toán và trạng thái gửi file prompt sau khi mua tại 1000 Prompt Chuyên Gia.",
  alternates: {
    canonical: "/tra-cuu-don-hang",
  },
};

export default function OrderLookupPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-[92%] max-w-5xl items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center">
            <img src="/images/logo.webp" alt="Logo Hữu Hùng AI" className="h-16 w-auto object-contain" width={160} height={80} />
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
            Nhập mã đơn bắt đầu bằng ORD để xem hệ thống đã xác nhận thanh toán và gửi file prompt qua email hay chưa. Kết quả hiển thị ngay lập tức, không cần chờ liên hệ hỗ trợ.
          </p>
          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-950">
            Mã đơn nằm trong nội dung chuyển khoản hoặc màn hình QR sau khi bạn tạo đơn. Ví dụ: ORD20260603125554.
          </div>

          <div className="mt-8 grid gap-4 text-sm leading-6 text-slate-600">
            <h2 className="text-lg font-extrabold text-slate-950">Mã đơn hàng lấy ở đâu?</h2>
            <p>
              Khi bạn tạo đơn tại trang chủ và bấm mua pack lẻ hoặc combo, hệ thống sẽ hiển thị mã đơn dạng
              <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800">ORDYYYYMMDDHHMMSS</code>
              ngay trên màn hình QR thanh toán. Mã này cũng chính là nội dung chuyển khoản bắt buộc phải nhập đúng khi chuyển tiền, vì hệ thống dùng mã đơn để tự động đối chiếu giao dịch.
            </p>

            <h2 className="text-lg font-extrabold text-slate-950">Hai trạng thái bạn sẽ thấy</h2>
            <p>
              <strong>Trạng thái thanh toán</strong> cho biết hệ thống SePay đã nhận được tiền và đối chiếu đúng mã đơn hay chưa. <strong>Trạng thái giao file</strong> cho biết email chứa link tải prompt đã được gửi thành công hay chưa. Hai trạng thái này độc lập với nhau — đơn có thể đã thanh toán nhưng giao file đang xử lý trong vài phút.
            </p>

            <h2 className="text-lg font-extrabold text-slate-950">Chưa tra được đơn hàng?</h2>
            <p>
              Nếu hệ thống báo không tìm thấy đơn, hãy kiểm tra lại mã đơn có đúng định dạng 17 ký tự bắt đầu bằng ORD không (không chứa dấu gạch ngang). Nếu vẫn không tra được sau khi đã thanh toán, vui lòng liên hệ hotline/Zalo 0944 851719 hoặc email hatmuadem@gmail.com kèm mã đơn để được kiểm tra thủ công.
            </p>
          </div>
        </div>

        <OrderLookupForm />
      </section>
    </main>
  );
}
