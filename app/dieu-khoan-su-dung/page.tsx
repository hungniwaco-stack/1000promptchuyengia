import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng - 1000 Prompt Chuyên Gia",
  description: "Điều khoản sử dụng, quyền và giới hạn khi dùng bộ 1000 Prompt AI sau khi mua tại 1000 Prompt Chuyên Gia.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Điều khoản sử dụng</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>Khi bạn thanh toán và nhận file từ 1000 Prompt Chuyên Gia, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng để hiểu rõ quyền lợi và trách nhiệm của mình.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Bản chất sản phẩm</h2>
          <p>Bộ prompt được cung cấp dưới dạng sản phẩm nội dung số (file Word), không phải phần mềm hay dịch vụ AI. Sản phẩm được thiết kế để hỗ trợ học tập, làm việc, kinh doanh và sáng tạo nội dung khi bạn sử dụng cùng các công cụ AI như ChatGPT, Gemini hoặc Claude.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Phạm vi sử dụng được phép</h2>
          <p>Bạn có thể sử dụng prompt cho nhu cầu cá nhân, công việc nội bộ trong doanh nghiệp của mình, hoặc triển khai trực tiếp cho hoạt động kinh doanh, marketing, chăm sóc khách hàng của bạn. Bạn được quyền chỉnh sửa, tuỳ biến nội dung prompt cho phù hợp với ngữ cảnh riêng của mình mà không cần xin phép thêm.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Những điều không được phép</h2>
          <p>Bạn không được phân phối lại, bán lại, chia sẻ công khai nguyên bộ file, hoặc đóng gói lại toàn bộ/một phần nội dung thành sản phẩm khác để kinh doanh nếu chưa có sự đồng ý bằng văn bản từ Hữu Hùng AI. Việc chia sẻ file cho người khác dùng miễn phí dưới mọi hình thức (nhóm kín, diễn đàn, mạng xã hội) cũng không được phép vì ảnh hưởng trực tiếp đến quyền lợi của những khách hàng đã mua đúng giá.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Giới hạn trách nhiệm với kết quả từ AI</h2>
          <p>Kết quả bạn nhận được khi dùng prompt phụ thuộc vào công cụ AI bạn sử dụng, dữ liệu đầu vào bạn cung cấp và cách bạn chỉnh sửa prompt cho phù hợp với tình huống thực tế. Hữu Hùng AI không đảm bảo AI luôn trả lời chính xác 100%, vì đây là đặc điểm chung của mọi công cụ AI hiện nay, không riêng sản phẩm này. Bạn nên tự kiểm tra lại thông tin quan trọng — đặc biệt là số liệu, cam kết pháp lý hoặc quyết định tài chính — trước khi áp dụng vào công việc thực tế.</p>

          <h2 className="text-xl font-extrabold text-slate-950">Thay đổi điều khoản</h2>
          <p>Hữu Hùng AI có thể cập nhật điều khoản sử dụng này khi cần thiết để phù hợp với thực tế vận hành. Phiên bản mới nhất luôn được đăng tại địa chỉ này. Nếu có thắc mắc về điều khoản, vui lòng liên hệ hotline/Zalo 0944 851719 hoặc email hatmuadem@gmail.com trước khi sử dụng sản phẩm.</p>
        </div>
      </section>
    </main>
  );
}
