export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "100-prompt-kinh-doanh-startup",
    title: "100 Prompt AI Giúp Bạn Kinh Doanh Hiệu Quả Hơn — Không Cần Biết Lập Trình",
    description:
      "Bộ 100 Prompt Kinh Doanh & Startup giúp người mới khởi nghiệp và chủ shop nhỏ dùng ChatGPT, Gemini hiệu quả ngay từ lần đầu — không cần kiến thức kỹ thuật.",
    category: "Kinh doanh & Startup",
    publishedAt: "2026-06-26",
    readingTime: "7 phút đọc",
    keywords: ["prompt kinh doanh", "AI cho startup", "ChatGPT kinh doanh", "prompt startup", "100 prompt AI"],
    intro:
      "100 Prompt Kinh Doanh và Startup là bộ câu lệnh AI có sẵn, giúp người kinh doanh nhỏ và người mới khởi nghiệp dùng ChatGPT hoặc Gemini hiệu quả ngay từ lần đầu, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Phần lớn người Việt đã từng dùng AI, nhưng chưa thực sự khai thác được nó vào công việc. Theo khảo sát của Decision Lab (đối tác YouGov tại Việt Nam), 60% người được hỏi nói đã từng trải nghiệm AI ít nhất một lần, nhưng chỉ 3% đang dùng hàng ngày một cách thực chất.",
          "Vấn đề thường không phải vì AI yếu, mà vì người dùng chưa biết cách đặt câu hỏi để AI trả lời đúng việc mình cần. Theo khảo sát của McKinsey, dù 72% doanh nghiệp trên thế giới đã ứng dụng AI vào ít nhất một bộ phận, các doanh nghiệp nhỏ tại Việt Nam vẫn còn lúng túng, phần nhiều vì không biết bắt đầu từ đâu.",
          "Bộ 100 Prompt Kinh Doanh và Startup được làm ra để giải quyết đúng điểm nghẽn này: bạn không cần tự nghĩ ra cách hỏi, chỉ cần chọn prompt đúng với việc đang cần làm.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với ba nhóm người: người đang kinh doanh nhỏ cần một trợ lý AI hỗ trợ việc hàng ngày, người mới khởi nghiệp chưa có kinh nghiệm dùng AI vào công việc, và người làm marketing, bán hàng, quản lý muốn rút ngắn thời gian brainstorm.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến, chia theo 10 nhóm việc cụ thể mà người làm kinh doanh hay gặp: tìm và kiểm tra ý tưởng kinh doanh, viết nội dung bán hàng và mô tả sản phẩm, lên kế hoạch marketing theo từng giai đoạn, phân tích đối thủ và thị trường, xây dựng quy trình quản lý và vận hành, lập kế hoạch tài chính cơ bản cho startup, ứng dụng AI vào việc ra quyết định hàng ngày, và nhiều nhóm prompt thực chiến khác.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm phân tích thị trường: \"Đóng vai một chuyên gia nghiên cứu thị trường. Phân tích 3 đối thủ cạnh tranh trực tiếp của [tên sản phẩm/ngành], chỉ ra điểm mạnh, điểm yếu, và một khoảng trống thị trường mà [sản phẩm của tôi] có thể khai thác. Trình bày dưới dạng bảng so sánh.\"",
          "Khác với một câu hỏi mơ hồ kiểu \"phân tích thị trường giúp tôi\", prompt này cho AI đủ ngữ cảnh để trả lời cụ thể, dùng được ngay mà không cần sửa nhiều.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Bốn bước đơn giản: mở file và chọn prompt phù hợp với việc đang cần, sao chép và dán vào ChatGPT hoặc Gemini, thay các phần trong dấu ngoặc vuông bằng thông tin thực tế của bạn, sau đó nhận kết quả và điều chỉnh nếu cần.",
          "Không cần biết lập trình, không cần có kinh nghiệm dùng AI trước đó.",
        ],
      },
      {
        heading: "AI rút ngắn thời gian — bạn vẫn là người quyết định",
        body: [
          "AI không thay bạn làm kinh doanh, và bộ prompt này không biến 10 triệu thành 100 triệu chỉ qua một đêm. Việc kinh doanh vẫn cần sản phẩm tốt, vẫn cần bạn ra quyết định.",
          "Nhưng AI có thể rút ngắn rất nhiều thời gian ở những việc lặp lại như brainstorm, viết draft đầu tiên, hay tổng hợp thông tin — để bạn dành thời gian cho những việc chỉ con người mới làm được.",
        ],
      },
    ],
  },
  {
    slug: "cach-viet-prompt-ai-hieu-qua",
    title: "Cách viết prompt AI hiệu quả cho người mới bắt đầu",
    description:
      "Hướng dẫn cách đặt vai trò, bối cảnh, mục tiêu và tiêu chí đầu ra để ChatGPT, Gemini hoặc Claude trả lời đúng ý hơn.",
    category: "Mẹo sử dụng AI",
    publishedAt: "2026-06-04",
    readingTime: "5 phút đọc",
    keywords: ["cách viết prompt", "prompt AI", "ChatGPT", "Gemini", "Claude"],
    intro:
      "Một prompt tốt không chỉ là câu hỏi. Đó là bản mô tả ngắn gọn về vai trò, bối cảnh, mục tiêu và tiêu chuẩn kết quả mà bạn mong muốn AI tạo ra.",
    sections: [
      {
        heading: "Bắt đầu bằng vai trò rõ ràng",
        body: [
          "Hãy cho AI biết nó cần đóng vai ai: chuyên gia marketing, cố vấn tài chính cá nhân, trợ lý bán hàng hay biên tập viên nội dung.",
          "Vai trò càng rõ, câu trả lời càng ít chung chung và dễ dùng hơn trong công việc thực tế.",
        ],
      },
      {
        heading: "Thêm bối cảnh và mục tiêu",
        body: [
          "Một câu hỏi như “viết bài quảng cáo” thường cho kết quả mờ nhạt. Hãy thêm sản phẩm, khách hàng mục tiêu, kênh đăng và mục tiêu chuyển đổi.",
          "Ví dụ: “Bạn là chuyên gia Facebook Ads. Hãy viết 3 mẫu quảng cáo cho khóa học AI dành cho chủ shop online, mục tiêu là tăng đăng ký tư vấn.”",
        ],
      },
      {
        heading: "Yêu cầu định dạng đầu ra",
        body: [
          "Nếu cần bảng, checklist, dàn ý, email hoặc kịch bản video, hãy nói rõ ngay trong prompt.",
          "Định dạng tốt giúp bạn tiết kiệm thời gian chỉnh sửa và có thể copy vào công cụ làm việc nhanh hơn.",
        ],
      },
    ],
  },
  {
    slug: "ung-dung-ai-trong-kinh-doanh-nho",
    title: "7 cách ứng dụng AI trong kinh doanh nhỏ",
    description:
      "Gợi ý các việc chủ shop, freelancer và doanh nghiệp nhỏ có thể giao cho AI để tiết kiệm thời gian mỗi ngày.",
    category: "AI cho kinh doanh",
    publishedAt: "2026-06-04",
    readingTime: "6 phút đọc",
    keywords: ["AI trong kinh doanh", "tự động hóa", "prompt kinh doanh", "năng suất"],
    intro:
      "AI không chỉ dành cho công ty lớn. Với prompt đúng, doanh nghiệp nhỏ có thể dùng AI để lên ý tưởng, chăm sóc khách hàng, viết nội dung và phân tích dữ liệu cơ bản.",
    sections: [
      {
        heading: "Viết nội dung nhanh hơn",
        body: [
          "AI có thể hỗ trợ viết caption, email, mô tả sản phẩm, kịch bản video ngắn và bài đăng chăm sóc cộng đồng.",
          "Điểm quan trọng là bạn cần đưa phong cách thương hiệu, khách hàng mục tiêu và mục tiêu bài viết vào prompt.",
        ],
      },
      {
        heading: "Chuẩn hóa chăm sóc khách hàng",
        body: [
          "Bạn có thể tạo bộ câu trả lời cho các câu hỏi thường gặp: giá, bảo hành, giao hàng, hoàn tiền, hướng dẫn sử dụng.",
          "Sau đó tinh chỉnh giọng văn để đội ngũ trả lời thống nhất và chuyên nghiệp hơn.",
        ],
      },
      {
        heading: "Lên kế hoạch và phân tích nhanh",
        body: [
          "AI hỗ trợ lập kế hoạch tuần, phân loại công việc, phân tích ưu tiên và đề xuất kịch bản hành động.",
          "Với dữ liệu bán hàng đơn giản, AI cũng có thể giúp nhận diện sản phẩm bán chạy, nhóm khách hàng tiềm năng và điểm cần cải thiện.",
        ],
      },
    ],
  },
  {
    slug: "checklist-chon-cong-cu-ai-phu-hop",
    title: "Checklist chọn công cụ AI phù hợp với công việc",
    description:
      "Một checklist thực tế giúp bạn chọn công cụ AI theo mục tiêu: viết nội dung, phân tích, thiết kế, bán hàng hay quản lý công việc.",
    category: "Công cụ AI",
    publishedAt: "2026-06-04",
    readingTime: "4 phút đọc",
    keywords: ["công cụ AI", "chọn AI", "ChatGPT", "AI productivity", "mẹo AI"],
    intro:
      "Không có công cụ AI nào tốt nhất cho mọi người. Công cụ phù hợp là công cụ giải quyết đúng việc, dễ dùng, có chi phí hợp lý và tạo ra kết quả ổn định.",
    sections: [
      {
        heading: "Xác định việc cần tối ưu",
        body: [
          "Trước khi chọn công cụ, hãy viết rõ bạn muốn AI giúp việc gì: viết, tóm tắt, phân tích, thiết kế, lập kế hoạch hay hỗ trợ bán hàng.",
          "Nếu mục tiêu mơ hồ, bạn sẽ dễ mua nhiều công cụ nhưng không dùng đều.",
        ],
      },
      {
        heading: "Kiểm tra chất lượng đầu ra",
        body: [
          "Hãy thử cùng một prompt trên vài công cụ khác nhau và so sánh độ chính xác, giọng văn, khả năng hiểu tiếng Việt và mức dễ chỉnh sửa.",
          "Đừng chỉ nhìn tính năng. Hãy nhìn kết quả cuối cùng có giúp bạn tiết kiệm thời gian thật không.",
        ],
      },
      {
        heading: "Tính chi phí theo thói quen sử dụng",
        body: [
          "Nếu dùng hằng ngày cho công việc, một công cụ trả phí tốt có thể đáng tiền. Nếu chỉ dùng thỉnh thoảng, hãy bắt đầu bằng bản miễn phí hoặc gói thấp.",
          "Quan trọng nhất là xây dựng thư viện prompt riêng để khai thác công cụ hiệu quả hơn.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
