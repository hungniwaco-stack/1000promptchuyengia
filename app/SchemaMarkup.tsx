/**
 * SchemaMarkup.tsx
 * JSON-LD structured data for SEO / AEO / GEO
 * Schemas: WebSite, Product (combo) + AggregateRating, FAQPage, ItemList (10 packs)
 */

const BASE_URL = "https://www.1000promptchuyengia.shop";

// Liên kết mạng xã hội / thực thể xác thực thương hiệu (E-E-A-T).
// Thêm URL vào đây mỗi khi có thêm kênh chính thức (Zalo OA, TikTok, Youtube...).
const SAME_AS = ["https://www.facebook.com/huuhungai/"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Hữu Hùng AI",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.webp`,
  image: `${BASE_URL}/images/og-image.jpg`,
  sameAs: SAME_AS,
  founder: {
    "@type": "Person",
    name: "Hữu Hùng",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+84-944-851-719",
    email: "hatmuadem@gmail.com",
    areaServed: "VN",
    availableLanguage: "Vietnamese",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Hữu Hùng AI – 1000 Prompt Chuyên Gia",
  url: BASE_URL,
  description:
    "Bộ 1000 Prompt AI chuyên gia cho kinh doanh, marketing, bán hàng, tài chính, năng suất và ứng dụng AI thực chiến.",
  publisher: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Hữu Hùng AI",
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
  image: `${BASE_URL}/images/og-image.jpg`,
  brand: {
    "@type": "Brand",
    name: "Hữu Hùng AI",
  },
  offers: {
    "@type": "Offer",
    url: BASE_URL,
    priceCurrency: "VND",
    price: "199000",
    validFrom: "2026-01-01",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Person",
      name: "Hữu Hùng",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "VND",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "VN",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: "0",
          maxValue: "10",
          unitCode: "MIN",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: "0",
          maxValue: "0",
          unitCode: "MIN",
        },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "VN",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    },
  },
  // LƯU Ý QUAN TRỌNG: Google chỉ cho phép review/aggregateRating trong
  // structured data khi review là thật và có thể xác minh (self-serving
  // reviews policy). Nếu 3 review bên dưới không phải review thật từ khách
  // (có ảnh chụp màn hình / link mạng xã hội xác minh), nên: (1) thay bằng
  // review thật đã xin phép khách hàng, hoặc (2) xoá aggregateRating +
  // review khỏi schema và chỉ hiển thị dạng testimonial thường trên trang,
  // không đánh dấu JSON-LD, để tránh rủi ro Google gỡ rich snippet/phạt.
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
    {
      "@type": "Question",
      name: "1000 Prompt Chuyên Gia là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1000 Prompt Chuyên Gia là bộ 10 file Word gồm 1000 câu lệnh (prompt) AI được viết sẵn bằng tiếng Việt, do Hữu Hùng AI biên soạn. Bộ prompt chia theo 10 lĩnh vực thực chiến, mỗi lĩnh vực 100 prompt: kinh doanh và khởi nghiệp, quản lý tài chính cá nhân, marketing và xây dựng thương hiệu, bán hàng và đàm phán, phát triển bản thân và năng suất, lãnh đạo và quản lý đội nhóm, kiếm tiền online, ứng dụng AI và công nghệ trong kinh doanh, cuộc sống và hạnh phúc, và nhóm prompt đa lĩnh vực (fusion). Mỗi prompt đã cấu trúc sẵn theo vai trò, bối cảnh, nhiệm vụ và định dạng đầu ra — người dùng chỉ cần điền thông tin của mình vào phần gợi ý rồi dán trực tiếp vào ChatGPT, Gemini hoặc Claude. Giá 49.000đ/pack lẻ hoặc 199.000đ cho combo trọn bộ 10 pack, nhận file tự động qua email sau khi thanh toán.",
      },
    },
    {
      "@type": "Question",
      name: "Bộ 1000 Prompt Chuyên Gia phù hợp với ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phù hợp với người mới bắt đầu dùng AI chưa biết cách hỏi hiệu quả, chủ shop và người kinh doanh nhỏ cần tiết kiệm thời gian, freelancer viết nội dung và làm marketing, nhân sự văn phòng muốn tăng năng suất, và người đang học cách dùng AI cho công việc thực tế.",
      },
    },
    {
      "@type": "Question",
      name: "Mua combo 1000 prompt hay mua lẻ từng pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nếu bạn dùng AI cho nhiều mục đích khác nhau, combo trọn bộ 199.000đ tiết kiệm hơn nhiều so với mua lẻ 10 pack riêng (490.000đ). Nếu chỉ cần đúng một lĩnh vực cụ thể, bạn có thể mua lẻ từng pack với giá 49.000đ/pack.",
      },
    },
    {
      "@type": "Question",
      name: "Prompt AI mua sẵn có tốt hơn tự viết prompt không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prompt viết sẵn giúp bạn bỏ qua giai đoạn thử-sai tốn thời gian. Mỗi prompt trong bộ đã được cấu trúc đúng vai trò, ngữ cảnh và yêu cầu đầu ra — thứ mà người mới dùng AI thường mất nhiều tuần mới tự tối ưu được. Bạn vẫn cần điền thông tin thực tế của mình vào, AI không làm thay hoàn toàn.",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Hữu Hùng",
  alternateName: "Nguyen Huu Hung",
  url: BASE_URL,
  email: "hungniwaco@gmail.com",
  sameAs: SAME_AS,
  knowsAbout: [
    "AI Prompting",
    "ChatGPT",
    "Gemini",
    "Kinh doanh online",
    "Marketing",
    "Năng suất cá nhân",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI Prompt Specialist",
    description: "Chuyên xây dựng và phân phối bộ prompt AI thực chiến cho doanh nghiệp và cá nhân Việt Nam.",
  },
  worksFor: {
    "@type": "Organization",
    name: "Hữu Hùng AI",
    url: BASE_URL,
  },
};

export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
