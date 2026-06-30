export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO datetime: "2026-07-01T07:00:00+07:00" hoặc "YYYY-MM-DD"
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  giftLink?: string;        // Google Drive link quà tặng 30 prompt miễn phí
  giftLinkLabel?: string;   // Tên bộ prompt tặng
};

export const blogPosts: BlogPost[] = [
  // ── Pack 1 — 2026-06-26T07:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-kinh-doanh-startup",
    title: "100 Prompt AI Giúp Bạn Kinh Doanh Hiệu Quả Hơn — Không Cần Biết Lập Trình",
    description:
      "Bộ 100 Prompt Kinh Doanh & Startup giúp người mới khởi nghiệp và chủ shop nhỏ dùng ChatGPT, Gemini hiệu quả ngay từ lần đầu — không cần kiến thức kỹ thuật.",
    category: "Kinh doanh & Startup",
    publishedAt: "2026-06-26T07:00:00+07:00",
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
    giftLink: "https://docs.google.com/document/d/1ScW0ar_Gb-2qTd1KhLh6w6zjxzzHSjzY/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Kinh Doanh và Startup",
  },

  // ── Pack 2 — 2026-06-30T18:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-tai-chinh-dau-tu",
    title: "100 Prompt AI Giúp Bạn Quản Lý Tài Chính và Đầu Tư Thông Minh Hơn",
    description:
      "Bộ 100 Prompt Tài Chính và Đầu Tư giúp nhà đầu tư cá nhân và người tự quản lý tài chính dùng ChatGPT, Gemini để có thêm góc nhìn rõ ràng trước mỗi quyết định quan trọng.",
    category: "Tài chính & Đầu tư",
    publishedAt: "2026-06-30T18:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt tài chính", "AI đầu tư", "quản lý tài chính", "prompt đầu tư", "ChatGPT tài chính"],
    intro:
      "100 Prompt Tài Chính và Đầu Tư là bộ câu lệnh AI có sẵn, giúp người quản lý tài chính cá nhân và nhà đầu tư dùng ChatGPT hoặc Gemini để có thêm góc nhìn rõ ràng trước mỗi quyết định, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Khi hỏi AI những câu chung như \"tôi nên đầu tư gì\", câu trả lời cũng sẽ chung không kém. Nhưng khi hỏi đúng cách, có ngữ cảnh, có số liệu cụ thể về tình hình tài chính của bạn, AI có thể giúp bạn nhìn rõ một quyết định chỉ trong vài phút.",
          "Theo khảo sát của Decision Lab, 60% người Việt đã từng trải nghiệm AI ít nhất một lần, nhưng chỉ 3% đang dùng hàng ngày một cách thực chất. Bộ prompt này giải quyết đúng điểm nghẽn đó.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người đang tự quản lý tài chính cá nhân, nhà đầu tư cá nhân ở các kênh như chứng khoán, bất động sản, vàng, tiền số, và người đang muốn xây dựng chiến lược tăng thu nhập hoặc giảm rủi ro tài chính.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: quản lý tài chính cá nhân, đầu tư chứng khoán, đầu tư bất động sản, đầu tư vàng và hàng hóa, đầu tư tiền số, doanh nghiệp và quản trị tài chính, đầu tư khởi nghiệp, chiến lược làm giàu và tăng thu nhập, quản trị rủi ro và bảo hiểm, mindset tài chính.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm đầu tư chứng khoán: \"Đóng vai một cố vấn tài chính có kinh nghiệm. Dựa trên danh mục đầu tư gồm các mã cổ phiếu mà tôi cung cấp, hãy đánh giá mức độ rủi ro tổng thể, chỉ ra những mã đang chiếm tỷ trọng quá lớn, và gợi ý cách phân bổ lại để cân bằng hơn.\"",
          "Một prompt như vậy giúp bạn có cái nhìn rõ ràng về danh mục của mình, thay vì chỉ dựa vào cảm tính.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn prompt phù hợp, sao chép dán vào ChatGPT hoặc Gemini, thay các phần trong dấu ngoặc vuông bằng thông tin thực tế của bạn. Không cần nền tảng tài chính chuyên sâu.",
          "Lưu ý: đây là công cụ giúp có thêm góc nhìn, không thay thế tư vấn từ chuyên gia tài chính có giấy phép. Quyết định đầu tư cuối cùng vẫn thuộc về bạn.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1gd-hvgWFOWD7Obi4isCrlIYFXWezk3m8/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Tài Chính và Đầu Tư",
  },

  // ── Pack 3 — 2026-07-01T07:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-marketing-thuong-hieu",
    title: "100 Prompt AI Giúp Bạn Làm Marketing và Xây Dựng Thương Hiệu Hiệu Quả Hơn",
    description:
      "Bộ 100 Prompt Marketing và Xây Dựng Thương Hiệu giúp người làm marketing và chủ thương hiệu dùng ChatGPT, Gemini ra ý tưởng chiến dịch, viết content và định vị thương hiệu nhanh hơn.",
    category: "Marketing & Thương hiệu",
    publishedAt: "2026-07-01T07:00:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt marketing", "AI marketing", "xây dựng thương hiệu", "content marketing", "prompt thương hiệu"],
    intro:
      "100 Prompt Marketing và Xây Dựng Thương Hiệu là bộ câu lệnh AI có sẵn, giúp người làm marketing và chủ thương hiệu dùng ChatGPT hoặc Gemini để ra ý tưởng nhanh hơn, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Khi hỏi AI những câu chung như \"viết content cho thương hiệu của tôi\", câu trả lời cũng sẽ chung không kém — vì AI không có đủ thông tin về thương hiệu, khách hàng và bối cảnh cụ thể của bạn.",
          "Một prompt hỏi đúng cách có thể cho ra ngay một bản kế hoạch chiến dịch, một concept content, hay một thông điệp định vị thương hiệu chỉ trong vài phút.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người làm marketing một mình hoặc trong nhóm nhỏ, chủ doanh nghiệp đang tự xây dựng thương hiệu, và người làm content muốn rút ngắn thời gian brainstorm ý tưởng.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: chiến lược marketing tổng thể, digital marketing, thương hiệu và định vị, content marketing, quảng cáo sáng tạo, marketing trải nghiệm khách hàng, influencer và PR, marketing đột phá, dữ liệu và performance marketing, truyền cảm hứng sáng tạo.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm thương hiệu và định vị: \"Đóng vai một chuyên gia định vị thương hiệu. Dựa trên sản phẩm, khách hàng mục tiêu và đối thủ mà tôi cung cấp, hãy đề xuất một câu định vị thương hiệu ngắn gọn, khác biệt, và giải thích vì sao câu định vị đó phù hợp với thị trường hiện tại.\"",
          "Một prompt như vậy giúp bạn có ngay một hướng định vị cụ thể, thay vì ngồi brainstorm cả buổi mà chưa ra được gì.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn prompt phù hợp, sao chép dán vào ChatGPT hoặc Gemini, thay các phần trong dấu ngoặc vuông bằng thông tin về sản phẩm và khách hàng của bạn.",
          "Không cần biết lập trình, không cần có kinh nghiệm làm marketing chuyên sâu.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1cVgpFRzcWFXvbiwFX2-Vt9c4B3d-2KcW/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Marketing và Thương Hiệu",
  },

  // ── Pack 4 — 2026-07-01T18:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-ban-hang-dam-phan",
    title: "100 Prompt AI Giúp Bạn Bán Hàng và Đàm Phán Tự Tin Hơn",
    description:
      "Bộ 100 Prompt Bán Hàng và Đàm Phán giúp người bán hàng và nhân viên kinh doanh dùng ChatGPT, Gemini để có sẵn câu trả lời xử lý phản đối, chốt hợp đồng và đàm phán giá tự tin hơn.",
    category: "Bán hàng & Đàm phán",
    publishedAt: "2026-07-01T18:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt bán hàng", "AI bán hàng", "chốt sale", "xử lý phản đối", "đàm phán giá"],
    intro:
      "100 Prompt Bán Hàng và Đàm Phán là bộ câu lệnh AI có sẵn, giúp người bán hàng dùng ChatGPT hoặc Gemini để có sẵn câu trả lời trước mỗi tình huống khó, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Vấn đề của người bán hàng thường không phải vì không biết bán, mà vì khi khách hàng từ chối hoặc đưa ra lý do để không mua, không có ai ở bên để hỏi cách phản hồi sao cho khéo, sao cho không mất khách.",
          "Một prompt rõ ngữ cảnh có thể cho ngay một câu trả lời xử lý phản đối, một cách chốt hợp đồng, hay một chiến thuật đàm phán giá — chỉ trong vài giây.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người trực tiếp bán hàng, người chạy sale online, nhân viên kinh doanh B2B hoặc B2C, và người thường phải đàm phán với khách hàng, đối tác, hoặc nhà cung cấp.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: kỹ năng chốt sale, xử lý phản đối khách hàng, nghệ thuật thuyết phục, kỹ năng đàm phán giá, bán hàng online, chốt hợp đồng, bán hàng B2B và Enterprise, bán hàng B2C và Retail, tư duy bán hàng, thương lượng nâng cao.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm xử lý phản đối: \"Đóng vai một chuyên gia bán hàng giàu kinh nghiệm. Khách hàng của tôi đang nói rằng giá sản phẩm cao hơn so với đối thủ. Hãy đưa ra ba cách phản hồi khác nhau, vừa giữ được giá trị sản phẩm, vừa không làm khách hàng cảm thấy bị ép.\"",
          "Một prompt như vậy giúp bạn có sẵn nhiều phương án trả lời, thay vì phải ứng biến ngay tại chỗ và dễ bị cuốn theo cuộc thương lượng của khách.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn prompt phù hợp với tình huống đang gặp, sao chép dán vào ChatGPT hoặc Gemini, thay thông tin sản phẩm và bối cảnh vào phần dấu ngoặc vuông.",
          "Không cần biết lập trình, không cần có kinh nghiệm bán hàng lâu năm.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1DBLB6r7TJA-1QDeSBRfEu2wqrD_Q71pT/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Bán Hàng và Đàm Phán",
  },

  // ── Pack 5 — 2026-07-02T07:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-phat-trien-ban-than-nang-suat",
    title: "100 Prompt AI Giúp Bạn Phát Triển Bản Thân và Làm Việc Năng Suất Hơn",
    description:
      "Bộ 100 Prompt Phát Triển Bản Thân và Năng Suất giúp bạn có thêm góc nhìn cụ thể mỗi ngày khi dùng ChatGPT, Gemini để quản lý thời gian, xây dựng thói quen và cân bằng cảm xúc.",
    category: "Phát triển bản thân",
    publishedAt: "2026-07-02T07:00:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt phát triển bản thân", "AI năng suất", "quản lý thời gian", "xây dựng thói quen", "ChatGPT năng suất"],
    intro:
      "100 Prompt Phát Triển Bản Thân và Năng Suất là bộ câu lệnh AI có sẵn, giúp bạn có thêm một góc nhìn và hành động cụ thể mỗi ngày khi dùng ChatGPT hoặc Gemini, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Đọc sách hay nghe podcast về phát triển bản thân thì nhiều, nhưng áp dụng đúng vào tình huống cụ thể của mình lại là chuyện khác. Một prompt rõ ngữ cảnh có thể cho bạn ngay một kế hoạch quản lý thời gian, một cách nhìn khác về một thói quen xấu, hay một lời động viên đúng lúc bạn cần.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người muốn cải thiện năng suất làm việc, người đang xây dựng thói quen mới, và người cần một công cụ hỗ trợ quản lý cảm xúc và mục tiêu trong cuộc sống hàng ngày.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: tư duy và mindset thành công, quản lý thời gian và năng suất, kỹ năng giao tiếp cá nhân, sức khỏe và thói quen tích cực, học tập và phát triển kỹ năng, lãnh đạo bản thân, quản lý cảm xúc và stress, xây dựng thói quen thành công, quản lý mục tiêu và sự nghiệp, truyền cảm hứng và động lực sống.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm quản lý cảm xúc: \"Đóng vai một chuyên gia tâm lý tích cực. Tôi đang cảm thấy quá tải vì công việc dồn lại nhiều. Hãy giúp tôi nhìn lại tình huống này theo hướng bình tĩnh hơn, và gợi ý ba việc cụ thể tôi có thể làm ngay trong hôm nay để giảm áp lực.\"",
          "Một prompt như vậy giúp bạn có một góc nhìn khác và vài bước hành động cụ thể, ngay khi đang cần.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn prompt phù hợp với điều đang muốn cải thiện, sao chép dán vào ChatGPT hoặc Gemini, điền hoàn cảnh thật của bạn vào phần dấu ngoặc vuông.",
          "Không cần biết lập trình, không cần nền tảng tâm lý hay kỹ năng sống chuyên sâu. Nếu đang trải qua khó khăn tâm lý nghiêm trọng, nên tìm đến chuyên gia có chuyên môn.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1J2xWAS1rs9g0ELYC_Z_1hiIb7XASW0z9/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Phát Triển Bản Thân",
  },

  // ── Pack 6 — 2026-07-02T18:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-lanh-dao-quan-ly-doi-nhom",
    title: "100 Prompt AI Giúp Bạn Lãnh Đạo và Quản Lý Đội Nhóm Hiệu Quả Hơn",
    description:
      "Bộ 100 Prompt Lãnh Đạo và Quản Lý Đội Nhóm giúp quản lý, trưởng nhóm dùng ChatGPT, Gemini để chuẩn bị trước mỗi tình huống khó với nhân viên, từ xung đột đến động viên và huấn luyện.",
    category: "Lãnh đạo & Quản lý",
    publishedAt: "2026-07-02T18:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt lãnh đạo", "AI quản lý", "quản lý đội nhóm", "xử lý xung đột nhân viên", "ChatGPT quản lý"],
    intro:
      "100 Prompt Lãnh Đạo và Quản Lý Đội Nhóm là bộ câu lệnh AI có sẵn, giúp quản lý và trưởng nhóm dùng ChatGPT hoặc Gemini để chuẩn bị trước mỗi tình huống khó với nhân viên, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Nhiều người được lên làm quản lý vì giỏi chuyên môn, nhưng đến lúc xử lý xung đột giữa nhân viên hay động viên một người đang chán việc thì lại lúng túng — vì không có sẵn câu trả lời.",
          "Một prompt rõ ngữ cảnh có thể cho ngay một cách mở đầu cuộc nói chuyện khó, một kế hoạch huấn luyện nhân viên mới, hay một hướng giải quyết xung đột trong nhóm.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với quản lý, trưởng nhóm, chủ doanh nghiệp đang quản lý nhân sự, và người mới được giao vai trò lãnh đạo lần đầu.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: tư duy lãnh đạo, xây dựng đội nhóm, quản lý hiệu suất, kỹ năng giao tiếp lãnh đạo, quản trị xung đột, truyền cảm hứng và động viên nhân viên, huấn luyện và phát triển nhân viên, văn hóa doanh nghiệp, lãnh đạo trong khủng hoảng, lãnh đạo truyền cảm hứng toàn diện.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm quản trị xung đột: \"Đóng vai một chuyên gia quản trị nhân sự. Hai nhân viên trong nhóm của tôi đang có mâu thuẫn về cách phân chia công việc, ảnh hưởng đến không khí làm việc chung. Hãy gợi ý cho tôi cách mở đầu một buổi nói chuyện riêng với từng người, và cách dẫn dắt để hai bên cùng tìm ra hướng giải quyết.\"",
          "Một prompt như vậy giúp bạn có sẵn cách tiếp cận trước khi vào cuộc trò chuyện, thay vì tự xử lý theo cảm tính.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn prompt phù hợp với tình huống đang gặp với nhân viên, sao chép dán vào ChatGPT hoặc Gemini, điền chi tiết thật về nhóm của mình.",
          "Không cần biết lập trình, không cần nhiều năm kinh nghiệm quản lý.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1kCaVlHETVDwVBg78ZdjnXuDCQP02XY7q/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Lãnh Đạo và Quản Lý",
  },

  // ── Pack 7 — 2026-07-03T07:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-kiem-tien-online-thu-nhap-thu-dong",
    title: "100 Prompt AI Giúp Bạn Kiếm Tiền Online và Xây Dựng Thu Nhập Thụ Động",
    description:
      "Bộ 100 Prompt Kiếm Tiền Online giúp bạn có ngay hướng đi cụ thể để bắt đầu kiếm thêm thu nhập từ affiliate, freelance, nội dung số, YouTube, TikTok và thu nhập thụ động.",
    category: "Kiếm tiền online",
    publishedAt: "2026-07-03T07:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt kiếm tiền online", "AI affiliate", "thu nhập thụ động", "freelance AI", "kinh doanh online"],
    intro:
      "100 Prompt Kiếm Tiền Online và Thu Nhập Thụ Động là bộ câu lệnh AI có sẵn, giúp bạn có ngay một hướng đi cụ thể để bắt đầu kiếm thêm thu nhập, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Affiliate, bán hàng online, làm content hay thu nhập thụ động — mỗi hướng đều có người làm được, nhưng đa số người mới lại không biết nên chọn cái nào và bắt đầu như thế nào.",
          "Một prompt rõ ngữ cảnh có thể cho ngay một hướng đi phù hợp với điều kiện của bạn, một kế hoạch bắt đầu, hay một cách triển khai cụ thể cho từng mô hình.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người muốn bắt đầu kiếm thêm thu nhập online, người làm freelance, và người đang tìm cách xây dựng một nguồn thu thụ động bên cạnh công việc chính.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: kinh doanh online, affiliate marketing, kinh doanh số (digital products), freelance và dịch vụ online, kiếm tiền từ YouTube/TikTok/Podcast, thương mại điện tử quốc tế, thu nhập thụ động, kinh doanh nội dung số, kiếm tiền từ công nghệ mới, tư duy làm giàu và tự do tài chính.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm affiliate marketing: \"Đóng vai một chuyên gia affiliate marketing. Tôi đang có một kênh nội dung trong ngành làm đẹp, với lượng người theo dõi vừa phải. Hãy gợi ý ba loại sản phẩm affiliate phù hợp để tôi bắt đầu, và cách lồng ghép link giới thiệu vào nội dung một cách tự nhiên, không gây phản cảm.\"",
          "Một prompt như vậy giúp bạn có ngay một hướng đi cụ thể cho đúng tình huống của mình.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn nhóm phù hợp với hướng kiếm tiền đang quan tâm, sao chép dán vào ChatGPT hoặc Gemini, điền hoàn cảnh thật của bạn vào phần dấu ngoặc vuông.",
          "AI không tự kiếm tiền thay bạn — kết quả còn phụ thuộc vào sản phẩm, thị trường và mức độ kiên trì. Nhưng bộ prompt giúp bạn rút ngắn giai đoạn mò mẫm ban đầu.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1-78QCHc8ruBvqSD_DuXlkDOYgyo41zbp/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Kiếm Tiền Online",
  },

  // ── Pack 8 — 2026-07-03T18:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-ai-cong-nghe-kinh-doanh",
    title: "100 Prompt AI Giúp Bạn Ứng Dụng AI và Công Nghệ Vào Kinh Doanh",
    description:
      "Bộ 100 Prompt AI và Công Nghệ Trong Kinh Doanh giúp chủ doanh nghiệp tìm ra điểm bắt đầu ứng dụng AI cụ thể cho từng bộ phận: marketing, bán hàng, chăm sóc khách hàng, nhân sự và vận hành.",
    category: "AI & Công nghệ",
    publishedAt: "2026-07-03T18:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["ứng dụng AI kinh doanh", "tự động hóa doanh nghiệp", "AI cho doanh nghiệp nhỏ", "prompt công nghệ", "AI vận hành"],
    intro:
      "100 Prompt AI và Công Nghệ Trong Kinh Doanh là bộ câu lệnh AI có sẵn, giúp chủ doanh nghiệp tìm ra điểm bắt đầu ứng dụng AI cụ thể cho từng bộ phận, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Marketing, bán hàng, nhân sự, vận hành — mỗi bộ phận đều có thể dùng AI, nhưng dùng như thế nào cho từng việc cụ thể thì không phải ai cũng hình dung ra.",
          "Một prompt rõ ngữ cảnh có thể cho ngay một quy trình tự động hóa công việc lặp lại, một cách ứng dụng AI vào chăm sóc khách hàng, hay một gợi ý cụ thể cho từng bộ phận.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với chủ doanh nghiệp nhỏ, người quản lý vận hành, và người muốn tìm điểm khởi đầu rõ ràng để ứng dụng AI vào công ty của mình.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: AI trong marketing, AI trong bán hàng, AI trong quản trị doanh nghiệp, AI trong đầu tư và tài chính, AI trong chăm sóc khách hàng, AI trong sản xuất và vận hành, AI trong nhân sự, Blockchain và Web3, tự động hóa (automation), xu hướng công nghệ.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm AI trong chăm sóc khách hàng: \"Đóng vai một chuyên gia vận hành doanh nghiệp. Cửa hàng của tôi đang nhận khoảng vài chục câu hỏi giống nhau mỗi ngày từ khách hàng qua tin nhắn. Hãy gợi ý cho tôi một quy trình dùng AI để tự động trả lời các câu hỏi thường gặp, và những câu hỏi nào nên vẫn để người thật xử lý.\"",
          "Một prompt như vậy giúp bạn có ngay một hướng triển khai cụ thể cho chính doanh nghiệp của mình.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn nhóm phù hợp với bộ phận cần cải thiện, sao chép dán vào ChatGPT hoặc Gemini, điền thông tin thật về doanh nghiệp vào phần dấu ngoặc vuông.",
          "Không cần nền tảng công nghệ chuyên sâu. Bộ prompt giúp bạn có điểm khởi đầu rõ ràng trước khi quyết định đầu tư sâu hơn vào công nghệ.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1o7mM8OtAX7XYmCU4n7vbedmbJtZlGQ9L/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt AI và Công Nghệ",
  },

  // ── Pack 9 — 2026-07-04T07:00 ───────────────────────────────────────────
  {
    slug: "100-prompt-cuoc-song-hanh-phuc",
    title: "100 Prompt AI Giúp Bạn Cân Bằng Cuộc Sống và Hạnh Phúc Hơn",
    description:
      "Bộ 100 Prompt Cuộc Sống và Hạnh Phúc giúp bạn có thêm góc nhìn cho những việc quan trọng trong đời sống cá nhân: gia đình, nuôi con, sức khỏe tinh thần, quan hệ và hạnh phúc mỗi ngày.",
    category: "Cuộc sống & Hạnh phúc",
    publishedAt: "2026-07-04T07:00:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt cuộc sống", "AI hạnh phúc", "nuôi dạy con AI", "sức khỏe tinh thần", "cân bằng cuộc sống"],
    intro:
      "100 Prompt Cuộc Sống và Hạnh Phúc là bộ câu lệnh AI có sẵn, giúp bạn có thêm một góc nhìn cho những việc quan trọng trong đời sống cá nhân, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ prompt này",
        body: [
          "Nhiều người dành cả ngày lo công việc, đến khi về nhà thì không còn nhiều sức để dành cho gia đình, sức khỏe, hay chính bản thân mình.",
          "Một prompt rõ ngữ cảnh có thể cho ngay một cách mở lời với con, một cách chăm sóc tinh thần cho chính mình, hay một gợi ý để cuộc sống có thêm chút ý nghĩa mỗi ngày.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người muốn cân bằng cuộc sống tốt hơn, gần gũi hơn với người thân, hoặc đơn giản là cần thêm một góc nhìn để chăm sóc tinh thần cho chính mình.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: gia đình và hôn nhân, nuôi dạy con cái, sức khỏe và thể chất, sức khỏe tinh thần và mindfulness, quan hệ và giao tiếp xã hội, hạnh phúc và phát triển bản thân, sáng tạo và nghệ thuật, tài chính cá nhân đời sống, du lịch và trải nghiệm, truyền cảm hứng và cuộc sống ý nghĩa.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm nuôi dạy con cái: \"Con tôi đang ở tuổi dậy thì và gần đây có vẻ ít chia sẻ với tôi hơn. Hãy gợi ý cho tôi vài câu mở đầu nhẹ nhàng để bắt đầu một cuộc trò chuyện thật với con, mà không khiến con cảm thấy bị tra hỏi.\"",
          "Một prompt như vậy giúp bạn có sẵn một cách tiếp cận nhẹ nhàng hơn, thay vì phải tự mò mẫm trong những tình huống nhạy cảm với người thân.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn nhóm phù hợp với giai đoạn hoặc hoàn cảnh hiện tại, sao chép dán vào ChatGPT hoặc Gemini, điền hoàn cảnh thật của bạn vào phần cần thiết.",
          "Đây là công cụ giúp có thêm góc nhìn, không thay thế tư vấn từ chuyên gia tâm lý hoặc chuyên gia gia đình khi cần thiết.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1sgMKw6SqYKsBTELCl0vhgPIDaFMZigZR/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Cuộc Sống và Hạnh Phúc",
  },

  // ── Pack 10 — 2026-07-04T18:00 ──────────────────────────────────────────
  {
    slug: "100-prompt-fusion-da-linh-vuc",
    title: "100 Prompt AI Fusion Đa Lĩnh Vực — Một Câu Hỏi, Nhiều Góc Nhìn",
    description:
      "Bộ 100 Prompt Fusion kết hợp hai lĩnh vực trong cùng một prompt, dành cho người đã quen dùng AI và muốn câu trả lời sát với thực tế nhiều chiều hơn — kinh doanh, tâm lý, tài chính, lãnh đạo và cuộc sống.",
    category: "Fusion & Đa lĩnh vực",
    publishedAt: "2026-07-04T18:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt fusion", "AI đa lĩnh vực", "prompt kết hợp", "ChatGPT nâng cao", "prompt chuyên sâu"],
    intro:
      "100 Prompt Fusion, Đa Lĩnh Vực là bộ câu lệnh AI kết hợp hai lĩnh vực trong cùng một prompt, dành cho người đã quen dùng AI và muốn câu trả lời sát với thực tế nhiều chiều hơn.",
    sections: [
      {
        heading: "Vì sao bộ này khác 9 bộ trước",
        body: [
          "Trong công việc và cuộc sống thật, vấn đề của bạn ít khi chỉ thuộc về một lĩnh vực duy nhất. Một cuộc đàm phán tăng lương không chỉ là chuyện kỹ năng thương lượng, mà còn liên quan đến việc hiểu tâm lý người ngồi đối diện.",
          "9 bộ trước mỗi bộ tập trung vào một lĩnh vực riêng. Bộ này kết hợp hai lĩnh vực lại trong cùng một prompt — để AI tính đến cả hai yếu tố cùng lúc, thay vì bạn phải tự ghép hai lời khuyên riêng lẻ lại với nhau.",
        ],
      },
      {
        heading: "Bộ tài liệu này dành cho ai",
        body: [
          "Phù hợp với người đã quen dùng AI, đã từng dùng các bộ prompt theo từng lĩnh vực riêng, và muốn có những câu trả lời sâu hơn cho các tình huống thực tế nhiều chiều.",
        ],
      },
      {
        heading: "Bên trong bộ tài liệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm fusion: kinh doanh và AI, marketing và sáng tạo, lãnh đạo và phát triển bản thân, đàm phán và tâm lý học, kinh doanh và cuộc sống, AI và học tập/giáo dục, marketing và đời sống xã hội, sáng tạo và lãnh đạo, tài chính và hạnh phúc, tương lai và con người.",
        ],
      },
      {
        heading: "Ví dụ một prompt trong bộ",
        body: [
          "Đây là một prompt thuộc nhóm Fusion Đàm phán và Tâm lý học: \"Đóng vai một chuyên gia kết hợp đàm phán và tâm lý học hành vi. Tôi sắp đàm phán tăng lương với cấp trên, nhưng người đó có tính cách khá thận trọng và ít khi đưa ra quyết định ngay tại chỗ. Hãy giúp tôi xây dựng cách tiếp cận vừa dựa trên chiến thuật đàm phán, vừa phù hợp với tâm lý của một người thận trọng như vậy.\"",
          "Một prompt như vậy giúp bạn có một câu trả lời đã tính đến cả hai yếu tố cùng lúc.",
        ],
      },
      {
        heading: "Cách sử dụng",
        body: [
          "Mở file, chọn nhóm fusion phù hợp với tình huống đang gặp, sao chép dán vào ChatGPT hoặc Gemini, thay thông tin thực tế của bạn vào phần dấu ngoặc vuông.",
          "Không cần biết lập trình. Không cần có kinh nghiệm ở cả hai lĩnh vực được kết hợp.",
        ],
      },
    ],
    giftLink: "https://docs.google.com/document/d/1P0lBIapfakEqb_xGzWvJd1syqqyOgOzY/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true",
    giftLinkLabel: "30 Prompt Fusion Đa Lĩnh Vực",
  },

  // ── Bài viết tổng quát ───────────────────────────────────────────────────
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
          "Một câu hỏi như \"viết bài quảng cáo\" thường cho kết quả mờ nhạt. Hãy thêm sản phẩm, khách hàng mục tiêu, kênh đăng và mục tiêu chuyển đổi.",
          "Ví dụ: \"Bạn là chuyên gia Facebook Ads. Hãy viết 3 mẫu quảng cáo cho khóa học AI dành cho chủ shop online, mục tiêu là tăng đăng ký tư vấn.\"",
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
