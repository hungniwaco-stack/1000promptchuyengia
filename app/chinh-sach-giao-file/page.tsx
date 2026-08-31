import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách giao file - 1000 Prompt Chuyên Gia",
  description: "Cách nhận file prompt tự động qua email sau khi thanh toán, thời gian giao hàng và cách xử lý khi chưa nhận được file tại 1000 Prompt Chuyên Gia.",
};

export default function DeliveryPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Chính sách giao file</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>1000 Prompt Chuyên Gia là sản phẩm số nên toàn bộ quy trình giao hàng diễn ra tự động, không cần chờ vận chuyển vật lý. Trang này giải thích chi tiết từng bước để bạn yên tâm khi đặt mua, dù là mua lẻ từng pack hay mua combo trọn bộ.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Quy trình giao file diễn ra như thế nào?</h2>
          <p>Sau khi bạn tạo đơn và chuyển khoản đúng nội dung mã đơn dạng ORD..., hệ thống SePay sẽ tự động đối chiếu số tiền và nội dung chuyển khoản với đơn hàng của bạn. Bước xác nhận này diễn ra qua webhook, không có con người can thiệp thủ công nên tốc độ xử lý rất nhanh và không bị giới hạn theo giờ hành chính.</p>
          <p>Khi thanh toán được xác nhận khớp, hệ thống sẽ tự động cập nhật trạng thái đơn hàng và gửi email chứa link tải file prompt đến đúng địa chỉ email bạn đã nhập trong form đặt hàng. Với đơn mua combo, email sẽ bao gồm đầy đủ link tải của cả 10 pack; với đơn mua lẻ, email chỉ gửi đúng pack bạn đã chọn.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Mất bao lâu để nhận được file?</h2>
          <p>Thông thường email được gửi tự động trong vòng vài phút kể từ lúc tiền vào tài khoản, vì bước xác nhận thanh toán và bước gửi email đều được xử lý tự động ngay sau nhau. Nếu bạn chuyển khoản vào giờ cao điểm hoặc ngân hàng xử lý giao dịch chậm hơn bình thường, thời gian có thể kéo dài thêm nhưng hiếm khi quá 10 phút.</p>
          <p>Nếu sau 10 phút bạn vẫn chưa thấy email, bước đầu tiên nên làm là kiểm tra kỹ hộp thư Spam, Quảng cáo (Promotions) hoặc mục Cập nhật trong Gmail, vì email tự động đôi khi bị bộ lọc thư rác phân loại nhầm. Bạn cũng có thể vào trang <a href="/tra-cuu-don-hang" className="font-bold text-blue-700 hover:underline">Tra cứu đơn hàng</a> và nhập mã đơn ORD... để kiểm tra ngay trạng thái thanh toán và trạng thái giao file mà không cần chờ liên hệ.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Nếu vẫn chưa nhận được file thì làm sao?</h2>
          <p>Nếu đã kiểm tra Spam và tra cứu đơn hàng nhưng vẫn chưa thấy file, khả năng cao là email bạn nhập bị sai chính tả hoặc hệ thống thanh toán gặp trục trặc hiếm gặp. Trong trường hợp này, hãy liên hệ hotline/Zalo 0944 851719 hoặc email hatmuadem@gmail.com, kèm theo mã đơn ORD... và email bạn đã dùng để đặt hàng, để được kiểm tra và gửi lại file thủ công trong thời gian sớm nhất.</p>
          <p>File prompt được giao dưới dạng link tải, bạn nên tải về và lưu trữ lại trên thiết bị hoặc Google Drive cá nhân ngay sau khi nhận, để tránh trường hợp link hết hạn truy cập hoặc email bị xoá nhầm sau này.</p>
        </div>
      </section>
    </main>
  );
}
