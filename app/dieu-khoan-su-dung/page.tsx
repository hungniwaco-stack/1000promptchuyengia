import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng - 1000 Prompt Chuyên Gia",
  description: "Điều khoản sử dụng bộ prompt sau khi mua tại 1000 Prompt Chuyên Gia.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="mx-auto w-[92%] max-w-4xl py-12">
        <a href="/" className="btn btn-primary mb-8 inline-flex px-4 py-2 text-sm">Về trang chủ</a>
        <h1 className="mb-4 text-3xl font-extrabold text-slate-950 md:text-4xl">Điều khoản sử dụng</h1>
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p>Bộ prompt được cung cấp dưới dạng sản phẩm nội dung số để hỗ trợ học tập, làm việc, kinh doanh và sáng tạo nội dung với AI.</p>
          <p>Bạn có thể sử dụng prompt cho nhu cầu cá nhân, công việc nội bộ hoặc triển khai cho hoạt động kinh doanh của mình.</p>
          <p>Không phân phối lại, bán lại, chia sẻ công khai nguyên bộ file hoặc đóng gói lại thành sản phẩm khác nếu chưa có sự đồng ý từ Hữu Hùng AI.</p>
          <p>Kết quả từ AI phụ thuộc vào công cụ bạn dùng, dữ liệu đầu vào và cách bạn chỉnh sửa prompt. Bạn nên kiểm tra lại thông tin quan trọng trước khi áp dụng vào quyết định kinh doanh, tài chính hoặc pháp lý.</p>
        </div>
      </section>
    </main>
  );
}
