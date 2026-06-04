import BuyButton from "./BuyButton";
import CheckoutModal from "./CheckoutModal";
import PricingSection from "./PricingSection";
import { comboProduct, products } from "./products";

const comboName = comboProduct.title;

const deliverables = [
  "10 file Word theo 10 lĩnh vực thực chiến: kinh doanh, tài chính, marketing, bán hàng, năng suất, lãnh đạo, kiếm tiền online, AI trong kinh doanh, cuộc sống và prompt đa lĩnh vực.",
  "100 prompt/pack, tổng cộng 1000 prompt có cấu trúc rõ ràng để sao chép và dùng ngay.",
  "Dùng tốt với ChatGPT, Gemini, Claude và các công cụ AI phổ biến khác.",
  "File được gửi tự động qua email sau khi hệ thống xác nhận thanh toán.",
];

const samplePrompts = [
  {
    title: "Lên kế hoạch kinh doanh 30 ngày",
    text: "Bạn là cố vấn startup. Hãy giúp tôi lập kế hoạch 30 ngày để kiểm chứng ý tưởng [mô tả ý tưởng], gồm chân dung khách hàng, giả thuyết cần kiểm chứng, kênh tiếp cận, chỉ số đo lường và việc cần làm từng tuần.",
  },
  {
    title: "Viết nội dung bán hàng",
    text: "Bạn là chuyên gia copywriting. Hãy viết bài bán hàng cho [sản phẩm/dịch vụ] theo công thức AIDA, nhấn mạnh nỗi đau của khách hàng, lợi ích cụ thể, bằng chứng tin cậy và lời kêu gọi hành động rõ ràng.",
  },
  {
    title: "Phân tích chi tiêu cá nhân",
    text: "Bạn là chuyên gia tài chính cá nhân. Dựa trên thu nhập [số tiền], chi phí cố định [liệt kê], mục tiêu tiết kiệm [mục tiêu], hãy đề xuất ngân sách tháng, khoản cần cắt giảm và kế hoạch theo dõi đơn giản.",
  },
  {
    title: "Tối ưu lịch làm việc",
    text: "Bạn là huấn luyện viên năng suất. Hãy thiết kế lịch làm việc một tuần cho tôi với mục tiêu [mục tiêu], các ràng buộc [thời gian/ràng buộc], ưu tiên việc quan trọng và có khung nghỉ phục hồi.",
  },
  {
    title: "Xử lý từ chối khi bán hàng",
    text: "Bạn là chuyên gia bán hàng B2B/B2C. Hãy tạo 10 cách phản hồi khi khách nói '[lý do từ chối]', mỗi cách gồm câu trả lời ngắn, câu hỏi gợi mở và bước tiếp theo để giữ cuộc trò chuyện.",
  },
];

const commitments = [
  "Thanh toán xong, hệ thống tự động xác nhận và gửi file qua email.",
  "Không cần kiến thức kỹ thuật, chỉ cần sao chép prompt và thay phần trong ngoặc.",
  "Dùng được ngay cho công việc, học tập, kinh doanh và sáng tạo nội dung.",
  "Hỗ trợ qua email hoặc hotline/Zalo nếu cần kiểm tra đơn hàng.",
];

const faqs = [
  {
    question: "Tôi nhận file như thế nào?",
    answer: "Sau khi chuyển khoản đúng mã đơn ORD..., hệ thống xác nhận thanh toán và gửi link/file prompt qua email bạn đã nhập trong form.",
  },
  {
    question: "Có dùng được với ChatGPT miễn phí không?",
    answer: "Có. Prompt có thể dùng với ChatGPT miễn phí, Gemini, Claude hoặc các công cụ AI tương tự. Bản trả phí của các công cụ AI thường cho kết quả mạnh hơn.",
  },
  {
    question: "Thanh toán xong bao lâu nhận file?",
    answer: "Thông thường hệ thống gửi tự động trong vài phút sau khi tiền vào tài khoản và mã chuyển khoản khớp đơn hàng. Bạn cũng có thể vào trang Tra cứu đơn hàng để kiểm tra trạng thái.",
  },
  {
    question: "Có cần biết kỹ thuật mới dùng được không?",
    answer: "Không. Mỗi prompt được viết để bạn điền thông tin của mình vào phần gợi ý, sau đó dán trực tiếp vào công cụ AI.",
  },
  {
    question: "Có xuất hóa đơn không?",
    answer: "Hiện website ưu tiên bán lẻ và giao file tự động. Nếu bạn cần chứng từ riêng, vui lòng liên hệ trước khi thanh toán.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo Hữu Hùng AI"
              className="h-24 w-auto max-w-[230px] object-contain"
            />
          </a>
          <nav>
            <ul className="flex flex-wrap gap-4 text-base font-extrabold md:gap-7">
              <li><a href="#gioi-thieu">Giới thiệu</a></li>
              <li><a href="/bai-viet">Bài viết</a></li>
              <li><a href="#thu-vien">Thư viện Prompt</a></li>
              <li><a href="#bang-gia">Bảng giá</a></li>
              <li><a href="#mien-phi">Miễn phí</a></li>
              <li><a href="/tra-cuu-don-hang">Tra cứu đơn</a></li>
              <li><a href="#lien-he">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="gioi-thieu" className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-10">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <img
              src="/images/banner.png"
              alt="Banner 1000 Prompt Chuyên Gia"
              className="w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              <span className="block">Mở Khóa Sức Mạnh AI</span>
              <span className="block">Với 1000 Prompt Chuyên Gia</span>
            </h1>
            <p className="mb-8 max-w-4xl text-base md:text-lg">
              <span className="block">Giải pháp tối ưu x10 hiệu suất làm việc, tiết kiệm thời gian và tạo ra đột phá doanh thu.</span>
              <span className="block">Được tinh lọc bởi Hữu Hùng AI.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#thu-vien" className="btn btn-primary">Khám phá ngay</a>
              <BuyButton packageName={comboName} className="btn btn-accent">Mua Combo Trọn Bộ</BuyButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Nhận gì sau khi mua</p>
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">Một bộ prompt có thể dùng ngay, không phải tự mò từ đầu</h2>
            <div className="grid gap-3">
              {deliverables.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-6 shadow-md">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-amber-700">Deal tốt nhất</p>
            <h2 className="text-2xl font-extrabold text-slate-950 md:text-3xl">Combo trọn bộ 1000 Prompt</h2>
            <div className="mt-5 grid gap-3 rounded-lg bg-white p-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span>Mua lẻ 10 pack</span>
                <span className="font-extrabold text-slate-500 line-through">490,000đ</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Combo trọn bộ</span>
                <span className="text-2xl font-extrabold text-red-600">{comboProduct.price}</span>
              </div>
              <div className="rounded-lg bg-emerald-50 p-3 font-bold text-emerald-800">
                Tiết kiệm 291,000đ và nhận đủ 10 lĩnh vực trong một lần mua.
              </div>
            </div>
            <BuyButton packageName={comboName} className="btn btn-accent mt-5 w-full py-4 text-base">
              Mua Combo 199,000đ
            </BuyButton>
          </div>
        </div>
      </section>

      <section id="mien-phi" className="scroll-mt-32 bg-slate-950 py-14 text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-2 text-center text-sm font-extrabold uppercase tracking-wide text-amber-300">Miễn phí</p>
          <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">5 prompt mẫu để bạn thử ngay</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-slate-300">
            Dưới đây là vài prompt mẫu theo phong cách trong bộ 1000 Prompt. Bạn có thể thay phần trong ngoặc vuông rồi dùng trực tiếp với ChatGPT, Gemini hoặc Claude.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {samplePrompts.map((prompt) => (
              <article key={prompt.title} className="rounded-lg border border-slate-700 bg-slate-900 p-5">
                <h3 className="mb-3 text-lg font-extrabold text-amber-200">{prompt.title}</h3>
                <p className="text-sm leading-6 text-slate-100">{prompt.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="thu-vien" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Danh mục 10 Gói Sản Phẩm</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="card">
                <img
                  className="aspect-video w-full object-cover"
                  src={product.image}
                  alt={`Hình minh họa ${product.title}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex h-full flex-col p-4">
                  <h3 className="mb-2 text-base font-bold">{product.title}</h3>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-100 bg-red-50 p-3">
                    <div>
                      <div className="text-xs font-semibold uppercase text-slate-500">Giá bán</div>
                      <div className="text-xl font-extrabold text-red-600">{product.price}</div>
                    </div>
                    <BuyButton packageName={product.title} className="btn btn-primary px-4 py-2 text-sm">
                      Thanh toán ngay
                    </BuyButton>
                  </div>
                  <p className="grow text-sm">{product.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="bg-white py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Cam kết khi mua 1000 Prompt Chuyên Gia</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <div key={item} className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm font-bold text-blue-950">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Câu hỏi thường gặp</h2>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-extrabold text-slate-950">{faq.question}</h3>
                <p className="text-sm leading-6 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="lien-he" className="bg-slate-900 py-7 text-slate-100">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-1 text-sm">
          <div>© 2026 Hữu Hùng AI. Đã đăng ký bản quyền.</div>
          <div>Hotline: 0944 851719</div>
          <div>Email: hatmuadem@gmail.com</div>
          <div>Địa chỉ: Phan Rang - Khánh Hòa</div>
        </div>
      </footer>

      <CheckoutModal />
    </main>
  );
}
