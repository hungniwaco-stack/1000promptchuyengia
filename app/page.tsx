import BuyButton from "./BuyButton";
import CheckoutModal from "./CheckoutModal";
import PricingSection from "./PricingSection";
import PromoPopup from "./PromoPopup";
import SchemaMarkup from "./SchemaMarkup";
import { comboProduct, products } from "./products";

const comboName = comboProduct.title;

const heroStats = [
  { value: "1000", label: "prompt sẵn dùng" },
  { value: "10", label: "lĩnh vực thực chiến" },
  { value: "199K", label: "combo trọn bộ" },
  { value: "Vài phút", label: "nhận file tự động" },
];

const heroBullets = [
  "1000 prompt thực chiến, chia sẵn theo mục tiêu công việc",
  "10 lĩnh vực: kinh doanh, marketing, bán hàng, tài chính, năng suất...",
  "Dùng được với ChatGPT, Gemini, Claude và các công cụ AI phổ biến",
  "Combo 199K, thanh toán QR và nhận file qua email trong vài phút",
];

const trustBadges = [
  {
    title: "Thanh toán QR an toàn",
    text: "Chuyển khoản theo mã ORD, hệ thống tự đối soát.",
    icon: "QR",
  },
  {
    title: "Nhận file tự động",
    text: "File/link prompt được gửi qua email sau khi khớp thanh toán.",
    icon: "MAIL",
  },
  {
    title: "Hỗ trợ Zalo nếu lỗi",
    text: "Liên hệ 0944 851719 hoặc hatmuadem@gmail.com.",
    icon: "ZALO",
  },
];

const deliverables = [
  {
    title: "10 file Word",
    text: "Bao phủ kinh doanh, tài chính, marketing, bán hàng, năng suất, lãnh đạo, kiếm tiền online, AI trong kinh doanh, cuộc sống và prompt đa lĩnh vực.",
  },
  {
    title: "100 prompt/pack",
    text: "Tổng cộng 1000 prompt có cấu trúc rõ ràng để sao chép, thay thông tin trong ngoặc và dùng ngay.",
  },
  {
    title: "Dùng với nhiều AI",
    text: "Phù hợp với ChatGPT, Gemini, Claude và các công cụ AI phổ biến khác.",
  },
  {
    title: "Giao file qua email",
    text: "Sau khi thanh toán đúng nội dung ORD..., hệ thống gửi file tự động tới email đã nhập.",
  },
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

const previewRows = [
  "Mục tiêu prompt: Tạo kế hoạch marketing 30 ngày",
  "Vai trò AI: Chuyên gia growth marketing cho doanh nghiệp nhỏ",
  "Đầu vào cần thay: ngành hàng, ngân sách, kênh bán, khách hàng mục tiêu",
  "Kết quả mong muốn: lịch nội dung, ý tưởng chiến dịch, KPI và việc cần làm",
];

const productHooks = [
  "Từ ý tưởng đến kế hoạch 30 ngày",
  "Kiểm soát tiền, chi tiêu, đầu tư",
  "Ra chiến dịch, nội dung, định vị",
  "Chốt sale và xử lý từ chối",
  "Lập lịch, học nhanh, làm sâu",
  "Giao việc, họp, phản hồi đội nhóm",
  "Affiliate, blog, kênh nội dung",
  "Tự động hóa và vận hành bằng AI",
  "Thói quen, stress, cân bằng sống",
  "Kết hợp nhiều góc nhìn để giải bài khó",
];

const testimonials = [
  {
    name: "Lan Nguyễn",
    role: "Chủ shop mỹ phẩm online",
    brand: "TP. Hồ Chí Minh",
    initials: "LN",
    quote: "Trước đây mình mất cả buổi mới ra được 1 bài bán hàng. Sau khi dùng bộ prompt này, khoảng 15–20 phút là có bản nháp đủ dùng. Tuần đầu mình viết được 9 bài — nhiều hơn cả tháng trước cộng lại.",
  },
  {
    name: "Minh Tuấn",
    role: "Freelancer content & copywriting",
    brand: "Hà Nội",
    initials: "MT",
    quote: "Phần prompt phân tích insight khách hàng giúp mình rút ngắn thời gian research từ 2 tiếng xuống còn khoảng 30 phút. Đã dùng được ngay từ ngày đầu mà không cần đọc hướng dẫn dài.",
  },
  {
    name: "Hà Phương",
    role: "Trưởng nhóm vận hành",
    brand: "Công ty logistics, Đà Nẵng",
    initials: "HP",
    quote: "Mình dùng chủ yếu phần lãnh đạo và quản lý đội nhóm. Prompt viết email nội bộ, họp 1-1 và đánh giá hiệu suất tiết kiệm cho mình khoảng 3–4 tiếng mỗi tuần.",
  },
  {
    name: "Thanh Bình",
    role: "Người kinh doanh tự do",
    brand: "Cần Thơ",
    initials: "TB",
    quote: "Ban đầu tôi không tin lắm vì đã thử nhiều thứ về AI rồi. Nhưng khác ở chỗ prompt ở đây có cấu trúc rõ — tôi biết điền gì vào đâu. Dùng thử pack kinh doanh trước, thấy ổn thì mua combo luôn.",
  },
  {
    name: "Khánh Linh",
    role: "Sinh viên năm 4, sắp đi làm",
    brand: "Hà Nội",
    initials: "KL",
    quote: "Mình mua vì muốn học cách dùng AI cho công việc sau này. Pack năng suất và phát triển bản thân thực sự giúp ích — lên kế hoạch học, viết CV, chuẩn bị phỏng vấn đều có prompt sẵn.",
  },
];

const policyHighlights = [
  {
    title: "Giao file tự động",
    text: "Sau khi hệ thống xác nhận thanh toán đúng mã đơn, file/link prompt được gửi qua email đã nhập khi đặt hàng.",
    href: "/chinh-sach-giao-file",
  },
  {
    title: "Hỗ trợ sau mua",
    text: "Nếu sau 10 phút chưa nhận file, khách có thể tra cứu mã đơn hoặc liên hệ hotline/email để được kiểm tra thủ công.",
    href: "/ho-tro",
  },
  {
    title: "Quyền sử dụng rõ ràng",
    text: "Prompt dùng cho cá nhân/công việc nội bộ. Không phân phối lại nguyên bộ file nếu chưa có sự đồng ý.",
    href: "/dieu-khoan-su-dung",
  },
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
  {
    question: "1000 Prompt Chuyên Gia là gì?",
    answer: "1000 Prompt Chuyên Gia là bộ 10 file Word gồm 1000 prompt AI được viết sẵn, chia theo 10 lĩnh vực thực chiến: kinh doanh, tài chính, marketing, bán hàng, năng suất, lãnh đạo, kiếm tiền online, AI trong kinh doanh, cuộc sống và đa lĩnh vực. Bạn chỉ cần chọn prompt phù hợp, điền thông tin vào phần trong ngoặc và dán vào ChatGPT, Gemini hoặc Claude.",
  },
  {
    question: "Bộ prompt này phù hợp với ai?",
    answer: "Phù hợp với người mới bắt đầu dùng AI chưa biết cách hỏi hiệu quả, chủ shop và người kinh doanh nhỏ cần tiết kiệm thời gian, freelancer viết nội dung và làm marketing, nhân sự văn phòng muốn tăng năng suất, và người đang học cách dùng AI cho công việc thực tế.",
  },
  {
    question: "Mua combo trọn bộ hay mua lẻ từng pack?",
    answer: "Nếu bạn dùng AI cho nhiều mục đích khác nhau, combo trọn bộ 199.000đ tiết kiệm hơn nhiều so với mua lẻ 10 pack riêng (490.000đ). Nếu chỉ cần đúng một lĩnh vực cụ thể, bạn có thể mua lẻ từng pack với giá 49.000đ/pack.",
  },
  {
    question: "Prompt AI mua sẵn có hơn tự viết không?",
    answer: "Prompt viết sẵn giúp bạn bỏ qua giai đoạn thử-sai tốn thời gian. Mỗi prompt trong bộ đã được cấu trúc đúng vai trò, ngữ cảnh và yêu cầu đầu ra — thứ mà người mới dùng AI thường mất nhiều tuần mới tự tối ưu được. Bạn vẫn cần điền thông tin thực tế của mình vào, AI không làm thay hoàn toàn.",
  },
  {
    question: "Sau khi mua có được cập nhật thêm prompt không?",
    answer: "File bạn nhận là phiên bản hiện tại tại thời điểm mua. Nếu có phiên bản cập nhật lớn, Hữu Hùng AI sẽ thông báo qua email đã đăng ký. Bạn có thể liên hệ để hỏi về tình trạng cập nhật trước khi mua.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-3 py-3 md:gap-4 md:py-4">
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo Hữu Hùng AI"
              className="h-16 w-auto max-w-[190px] object-contain md:h-20 md:max-w-[230px]"
            />
          </a>
          <nav>
            <ul className="flex flex-wrap gap-3 text-sm font-extrabold md:gap-7 md:text-base">
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

      <section id="gioi-thieu" className="relative isolate overflow-hidden bg-slate-950 py-14 text-white md:py-20">
        <img
          src="/images/banner.png"
          alt="Banner 1000 Prompt Chuyên Gia"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="mx-auto grid w-[92%] max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-md bg-amber-300 px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-slate-950">
              Combo tốt nhất cho người mới dùng AI
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              1000 Prompt Chuyên Gia dùng ngay trong 10 lĩnh vực
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 md:text-lg">
              Bộ file Word giúp bạn hỏi AI rõ hơn, ra kết quả nhanh hơn và không phải tự nghĩ cấu trúc prompt từ đầu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BuyButton packageName={comboName} className="btn btn-accent px-6 py-4 text-base">
                Mua Combo 199,000đ
              </BuyButton>
              <a href="#thu-vien" className="btn bg-white text-slate-950 hover:bg-slate-100">Xem 10 lĩnh vực</a>
            </div>
            <div className="mt-5 grid max-w-2xl gap-2">
              {heroBullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold leading-6 text-white backdrop-blur">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-extrabold text-slate-950">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <div className="text-2xl font-extrabold text-amber-200">{item.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-amber-300 bg-white p-5 text-slate-950 shadow-2xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-amber-700">Deal tốt nhất</p>
                <h2 className="text-2xl font-extrabold">Trọn bộ 1000 Prompt</h2>
              </div>
              <div className="rounded-md bg-red-600 px-3 py-2 text-sm font-extrabold text-white">Tiết kiệm 291K</div>
            </div>
            <div className="grid gap-3 rounded-lg bg-amber-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <span>Mua lẻ 10 pack</span>
                <span className="font-extrabold text-slate-500 line-through">490,000đ</span>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-amber-200 pt-3">
                <span className="font-bold">Combo trọn bộ</span>
                <span className="text-3xl font-extrabold text-red-600">{comboProduct.price}</span>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {trustBadges.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="flex h-10 w-12 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-extrabold text-blue-700">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-extrabold">{item.title}</div>
                    <p className="text-sm leading-5 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Nhận gì sau khi mua</p>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Giá trị cốt lõi được gom lại cho người lướt nhanh</h2>
            <p className="text-slate-600">
              Bạn nhận đủ bộ file Word, có prompt mẫu theo từng bối cảnh và có thể bắt đầu dùng ngay với công cụ AI quen thuộc.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 font-extrabold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ve-huu-hung-ai" className="bg-slate-50 py-14">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Về Hữu Hùng AI</p>
            <h2 className="text-2xl font-bold md:text-3xl">Người đứng sau bộ 1000 Prompt Chuyên Gia</h2>
          </div>
          <div className="grid gap-4 text-slate-700">
            <p className="leading-7">
              Mình là Hữu Hùng, người mê mày mò AI và áp dụng nó vào công việc kinh doanh, sáng tạo nội dung và quản lý thời gian hằng ngày.
            </p>
            <p className="leading-7">
              Sau khi tự xây rất nhiều bộ prompt cho bản thân và cho bạn bè xung quanh, mình nhận ra đa số mọi người đều tốn quá nhiều thời gian “nghĩ câu hỏi cho AI” thay vì tập trung vào kết quả.
            </p>
            <p className="leading-7">
              Bộ “1000 Prompt Chuyên Gia” ra đời để giúp bạn rút ngắn giai đoạn thử - sai, có khung prompt rõ ràng, điền thông tin là dùng được ngay, từ đó tiết kiệm thời gian nhưng vẫn giữ được chất riêng trong công việc của mình.
            </p>
          </div>
        </div>
      </section>

      <section id="mien-phi" className="scroll-mt-32 bg-slate-950 py-14 text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-2 text-center text-sm font-extrabold uppercase tracking-wide text-amber-300">Miễn phí</p>
          <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">5 prompt mẫu để bạn thử ngay</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-slate-300">
            Thay phần trong ngoặc vuông rồi dùng trực tiếp với ChatGPT, Gemini hoặc Claude.
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

      <section className="bg-white py-14">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Xem trước sản phẩm</p>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">File Word được chia mục rõ ràng, dễ sao chép để dùng ngay</h2>
            <p className="mb-5 text-slate-600">
              Mỗi pack gồm 10 phần nội dung và 100 prompt. Prompt được viết theo cấu trúc vai trò, bối cảnh, đầu vào cần thay và kết quả mong muốn.
            </p>
            <a href="#mien-phi" className="btn btn-primary inline-flex">
              Xem prompt mẫu miễn phí
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="rounded-lg border border-slate-300 bg-white p-4">
                <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500">Preview file Word</div>
                    <div className="font-extrabold text-slate-950">PACK 3: Marketing & Thương hiệu</div>
                  </div>
                  <div className="rounded-md bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">DOCX</div>
                </div>
                <div className="grid gap-3">
                  {previewRows.map((row, index) => (
                    <div key={row} className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm">
                      <span className="mr-2 font-extrabold text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                      {row}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-amber-200">Cách dùng trong 3 bước</div>
                  <div className="font-extrabold">Copy, thay thông tin, gửi cho AI</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 pl-1 text-xl font-extrabold text-slate-950">
                  ▶
                </div>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="rounded-md bg-white/10 p-3">1. Chọn prompt đúng mục tiêu công việc.</div>
                <div className="rounded-md bg-white/10 p-3">2. Thay phần [thông tin của bạn].</div>
                <div className="rounded-md bg-white/10 p-3">3. Dán vào ChatGPT, Gemini hoặc Claude.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-10">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-amber-700">Đã thấy cấu trúc file?</p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-950">Lấy trọn bộ 10 lĩnh vực để dùng ngay hôm nay</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Một lần mua, nhận đủ 10 file Word và 1000 prompt để áp dụng cho công việc, kinh doanh, nội dung và quản lý cá nhân.
            </p>
          </div>
          <BuyButton packageName={comboName} className="btn btn-accent w-full justify-center px-6 py-4 text-base md:w-auto">
            Mua Combo 199,000đ
          </BuyButton>
        </div>
      </section>

      <section id="thu-vien" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">Danh mục 10 Gói Sản Phẩm</h2>
          <p className="mx-auto mb-7 max-w-3xl text-center text-slate-600">
            Mỗi pack có một “hook” riêng để người mua nhận ra nhanh gói phù hợp với nhu cầu hiện tại.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.title} className="card">
                <img
                  className="aspect-video w-full object-cover"
                  src={product.image}
                  alt={`Hình minh họa ${product.title}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex h-full flex-col p-4">
                  <div className="mb-3 rounded-md bg-blue-50 px-3 py-2 text-sm font-extrabold text-blue-800">
                    {productHooks[index]}
                  </div>
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
                  <p className="grow text-sm leading-6">{product.desc}</p>
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

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-2 text-center text-sm font-extrabold uppercase tracking-wide text-amber-300">Phản hồi sử dụng</p>
          <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">Người dùng khác đang áp dụng prompt như thế nào?</h2>
          <p className="mx-auto mb-7 max-w-3xl text-center text-sm leading-6 text-slate-300">
            Một vài ví dụ phản hồi ẩn danh theo bối cảnh sử dụng thực tế, giúp bạn hình dung bộ prompt có thể đi vào công việc hằng ngày ra sao.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-700 bg-slate-900 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-950/30">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-amber-200">{item.name}</div>
                    <div className="text-sm text-slate-300">{item.role}</div>
                  </div>
                </div>
                <div className="mb-3 text-sm font-extrabold tracking-[0.15em] text-amber-300">★★★★★</div>
                <p className="mb-4 text-sm leading-6 text-slate-100">"{item.quote}"</p>
                <div className="rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-300">
                  {item.brand}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Nếu bạn cũng muốn có sẵn khung hỏi AI thay vì bắt đầu từ trang trắng, combo trọn bộ là lựa chọn tiết kiệm nhất.
            </p>
            <BuyButton packageName={comboName} className="btn btn-accent px-6 py-4 text-base">
              Mua Combo 199,000đ
            </BuyButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Chính sách rõ ràng trước khi mua</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {policyHighlights.map((item) => (
              <a key={item.title} href={item.href} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="mb-2 text-lg font-extrabold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="gioi-thieu-tac-gia" className="bg-white py-14">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-700">Người tạo ra bộ prompt này</p>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Về Hữu Hùng</h2>
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-amber-300 text-3xl font-extrabold text-slate-950 shadow-lg lg:h-32 lg:w-32 lg:text-4xl">
              HH
            </div>
            <div className="grid gap-4 text-slate-700">
              <p className="text-base leading-8">
                Tôi là Hữu Hùng — người xây dựng bộ <strong>1000 Prompt Chuyên Gia</strong>. Tôi bắt đầu dùng AI từ đầu năm 2023 và dành phần lớn thời gian sau đó để thử, sai, tinh chỉnh hàng trăm cách hỏi khác nhau cho các việc thực tế trong kinh doanh và marketing.
              </p>
              <p className="text-base leading-8">
                Điều tôi nhận ra là phần lớn người Việt không thiếu công cụ AI — họ thiếu cách hỏi đúng. ChatGPT hay Gemini đều mạnh, nhưng câu hỏi chung chung thì cho ra kết quả chung chung. Tôi tập hợp lại những prompt đã hoạt động tốt trong thực tế — không phải lý thuyết, không phải bản dịch từ tiếng Anh — và đóng gói thành bộ 1000 prompt chia theo 10 lĩnh vực để bất kỳ ai cũng dùng được ngay từ ngày đầu.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800">📍 Phan Rang – Ninh Thuận</span>
                <span className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800">📧 hungniwaco@gmail.com</span>
                <span className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800">📞 0944 851 719</span>
              </div>
            </div>
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
          <div className="mt-3 flex flex-wrap gap-4 font-semibold">
            <a href="/chinh-sach-giao-file">Chính sách giao file</a>
            <a href="/ho-tro">Hỗ trợ</a>
            <a href="/dieu-khoan-su-dung">Điều khoản sử dụng</a>
          </div>
        </div>
      </footer>

      <CheckoutModal />
      <PromoPopup />
      <SchemaMarkup />
    </main>
  );
}
