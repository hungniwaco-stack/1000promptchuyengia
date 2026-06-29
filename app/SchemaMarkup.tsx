/**
 * SchemaMarkup.tsx
 * JSON-LD structured data for SEO / AEO / GEO
 * Schemas: WebSite, Product (combo) + AggregateRating, FAQPage, ItemList (10 packs)
 */

const BASE_URL = "https://www.1000promptchuyengia.shop";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Hữu Hùng AI – 1000 Prompt Chuyên Gia",
  url: BASE_URL,
  description:
    "Bộ 1000 Prompt AI chuyên gia cho kinh doanh, marketing, bán hàng, tài chính, năng suất và ứng dụng AI thực chiến.",
  publisher: {
    "@type": "Person",
    name: "Hữu Hùng",
    url: BASE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/bai-viet?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const comboProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${BASE_URL}/#combo-product`,
  name: "Combo Toàn Diện: 1000 Prompt Hữu Hùng AI",
  description:
    "Trọn bộ 1000 Prompt AI chuyên gia chia thành 10 lĩnh vực: kinh doanh, tài chính cá nhân, marketing, bán hàng, năng suất, lãnh đạo, kiếm tiền online, AI trong kinh doanh, cuộc sống và đa lĩnh vực. Dùng được với ChatGPT, Gemini, Claude.",
  url: BASE_URL,
  image: `${BASE_URL}/images/banner.webp`,
  brand: {
    "@type": "Brand",
    name: "Hữu Hùng AI",
  },
  offers: {
    "@type": "Offer",
    url: BASE_URL,
    priceCurrency: "VND",
    price: "199000",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Person",
      name: "Hữu Hùng",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Lan N." },
      reviewBody:
        "Mình dùng prompt để viết lại bài bán hàng và kịch bản tư vấn. Chỉ cần thay thông tin sản phẩm là có bản nháp khá chắc để chỉnh tiếp.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Minh T." },
      reviewBody:
        "Phần marketing và bán hàng giúp mình lên outline nhanh hơn. Có nhiều câu hỏi gợi ý rất tiện khi cần khai thác insight khách hàng.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Hà P." },
      reviewBody:
        "Các prompt về lập kế hoạch, ưu tiên công việc và viết email giúp mình tiết kiệm thời gian khi dùng ChatGPT hằng ngày.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tôi nhận file như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi chuyển khoản đúng mã đơn ORD..., hệ thống xác nhận thanh toán và gửi link/file prompt qua email bạn đã nhập trong form.",
      },
    },
    {
      "@type": "Question",
      name: "Có dùng được với ChatGPT miễn phí không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Prompt có thể dùng với ChatGPT miễn phí, Gemini, Claude hoặc các công cụ AI tương tự. Bản trả phí của các công cụ AI thường cho kết quả mạnh hơn.",
      },
    },
    {
      "@type": "Question",
      name: "Thanh toán xong bao lâu nhận file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thông thường hệ thống gửi tự động trong vài phút sau khi tiền vào tài khoản và mã chuyển khoản khớp đơn hàng. Bạn cũng có thể vào trang Tra cứu đơn hàng để kiểm tra trạng thái.",
      },
    },
    {
      "@type": "Question",
      name: "Có cần biết kỹ thuật mới dùng được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không. Mỗi prompt được viết để bạn điền thông tin của mình vào phần gợi ý, sau đó dán trực tiếp vào công cụ AI.",
      },
    },
    {
      "@type": "Question",
      name: "Có xuất hóa đơn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiện website ưu tiên bán lẻ và giao file tự động. Nếu bạn cần chứng từ riêng, vui lòng liên hệ trước khi thanh toán.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "10 Gói Prompt AI Chuyên Gia – Hữu Hùng AI",
  description:
    "Danh sách 10 pack prompt AI theo từng lĩnh vực, mỗi pack 100 prompt dùng ngay với ChatGPT, Gemini, Claude.",
  url: BASE_URL,
  numberOfItems: 10,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "PACK 1: 100 Prompt Kinh Doanh & Startup",
      description:
        "Bộ lệnh tối ưu để lên ý tưởng khởi nghiệp, lập kế hoạch kinh doanh chi tiết, phân tích đối thủ cạnh tranh và thiết kế mô hình doanh thu.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "PACK 2: 100 Prompt Quản Lý Tài Chính Cá Nhân",
      description:
        "Lập ngân sách thông minh, tối ưu chi tiêu hàng tháng, chiến lược đầu tư sinh lời và quản lý nợ hiệu quả.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PACK 3: 100 Prompt Marketing & Xây Dựng Thương Hiệu",
      description:
        "Chiến dịch quảng cáo bùng nổ, bài PR sắc bén, kịch bản video viral TikTok/Reels và định vị thương hiệu.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "PACK 4: 100 Prompt Bán Hàng & Đàm Phán",
      description:
        "Kịch bản chốt sale đỉnh cao, xử lý từ chối và nghệ thuật đàm phán B2B/B2C.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "PACK 5: 100 Prompt Phát Triển Bản Thân & Năng Suất",
      description:
        "Lập kế hoạch ngày/tuần, học tập siêu tốc và quản lý thời gian để x3 hiệu suất.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "PACK 6: 100 Prompt Lãnh Đạo & Quản Lý Đội Nhóm",
      description:
        "Giao việc hiệu quả, truyền cảm hứng, giải quyết xung đột và xây dựng văn hóa công ty.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "PACK 7: 100 Prompt Kiếm Tiền Online & Thu Nhập Thụ Động",
      description:
        "Affiliate Marketing, xây kênh Youtube/TikTok kiếm tiền, viết blog và các nguồn thu nhập thụ động.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "PACK 8: 100 Prompt AI & Công Nghệ Trong Kinh Doanh",
      description:
        "Tự động hóa quy trình, phân tích dữ liệu bằng AI, chăm sóc khách hàng và tối ưu vận hành.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "PACK 9: 100 Prompt Cuộc Sống & Hạnh Phúc",
      description:
        "Chánh niệm, quản lý stress, cải thiện các mối quan hệ và xây dựng thói quen sống tích cực.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "PACK 10: 100 Prompt Fusion (Đa Lĩnh Vực)",
      description:
        "Giải quyết vấn đề phức tạp với góc nhìn chéo từ kinh tế, tâm lý học và công nghệ.",
      url: BASE_URL,
      offers: { "@type": "Offer", price: "49000", priceCurrency: "VND" },
    },
  ],
};

export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comboProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
