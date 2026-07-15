export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO datetime: "2026-07-01T06:45:00+07:00" hoặc "YYYY-MM-DD"
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
    publishedAt: "2026-06-26T06:45:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt kinh doanh", "AI cho startup", "ChatGPT kinh doanh", "prompt startup", "100 prompt AI"],
    intro:
      "100 Prompt Kinh Doanh và Startup là bộ câu lệnh AI có sẵn, giúp người kinh doanh nhỏ và người mới khởi nghiệp dùng ChatGPT hoặc Gemini hiệu quả ngay từ lần đầu, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao người kinh doanh cần bộ 100 prompt AI này",
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
        heading: "Bên trong bộ 100 prompt kinh doanh và startup có gì",
        body: [
          "100 prompt thực chiến, chia theo 10 nhóm việc cụ thể mà người làm kinh doanh hay gặp: tìm và kiểm tra ý tưởng kinh doanh, viết nội dung bán hàng và mô tả sản phẩm, lên kế hoạch marketing theo từng giai đoạn, phân tích đối thủ và thị trường, xây dựng quy trình quản lý và vận hành, lập kế hoạch tài chính cơ bản cho startup, ứng dụng AI vào việc ra quyết định hàng ngày, và nhiều nhóm prompt thực chiến khác.",
        ],
      },
      {
        heading: "Ví dụ prompt AI kinh doanh thực chiến",
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
    publishedAt: "2026-06-30T19:15:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt tài chính", "AI đầu tư", "quản lý tài chính", "prompt đầu tư", "ChatGPT tài chính"],
    intro:
      "100 Prompt Tài Chính và Đầu Tư là bộ câu lệnh AI có sẵn, giúp người quản lý tài chính cá nhân và nhà đầu tư dùng ChatGPT hoặc Gemini để có thêm góc nhìn rõ ràng trước mỗi quyết định, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao nhà đầu tư cần bộ 100 prompt tài chính AI này",
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
        heading: "Bên trong bộ 100 prompt tài chính và đầu tư có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: quản lý tài chính cá nhân, đầu tư chứng khoán, đầu tư bất động sản, đầu tư vàng và hàng hóa, đầu tư tiền số, doanh nghiệp và quản trị tài chính, đầu tư khởi nghiệp, chiến lược làm giàu và tăng thu nhập, quản trị rủi ro và bảo hiểm, mindset tài chính.",
        ],
      },
      {
        heading: "Ví dụ prompt AI tài chính thực chiến",
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
    publishedAt: "2026-07-01T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt marketing", "AI marketing", "xây dựng thương hiệu", "content marketing", "prompt thương hiệu"],
    intro:
      "100 Prompt Marketing và Xây Dựng Thương Hiệu là bộ câu lệnh AI có sẵn, giúp người làm marketing và chủ thương hiệu dùng ChatGPT hoặc Gemini để ra ý tưởng nhanh hơn, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao người làm marketing cần bộ 100 prompt AI này",
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
        heading: "Bên trong bộ 100 prompt marketing và thương hiệu có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: chiến lược marketing tổng thể, digital marketing, thương hiệu và định vị, content marketing, quảng cáo sáng tạo, marketing trải nghiệm khách hàng, influencer và PR, marketing đột phá, dữ liệu và performance marketing, truyền cảm hứng sáng tạo.",
        ],
      },
      {
        heading: "Ví dụ prompt AI marketing thực chiến",
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
    publishedAt: "2026-07-01T19:15:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt bán hàng", "AI bán hàng", "chốt sale", "xử lý phản đối", "đàm phán giá"],
    intro:
      "100 Prompt Bán Hàng và Đàm Phán là bộ câu lệnh AI có sẵn, giúp người bán hàng dùng ChatGPT hoặc Gemini để có sẵn câu trả lời trước mỗi tình huống khó, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao người bán hàng cần bộ 100 prompt AI này",
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
        heading: "Bên trong bộ 100 prompt bán hàng và đàm phán có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: kỹ năng chốt sale, xử lý phản đối khách hàng, nghệ thuật thuyết phục, kỹ năng đàm phán giá, bán hàng online, chốt hợp đồng, bán hàng B2B và Enterprise, bán hàng B2C và Retail, tư duy bán hàng, thương lượng nâng cao.",
        ],
      },
      {
        heading: "Ví dụ prompt AI bán hàng thực chiến",
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
    publishedAt: "2026-07-02T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt phát triển bản thân", "AI năng suất", "quản lý thời gian", "xây dựng thói quen", "ChatGPT năng suất"],
    intro:
      "100 Prompt Phát Triển Bản Thân và Năng Suất là bộ câu lệnh AI có sẵn, giúp bạn có thêm một góc nhìn và hành động cụ thể mỗi ngày khi dùng ChatGPT hoặc Gemini, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ 100 prompt AI phát triển bản thân này",
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
        heading: "Bên trong bộ 100 prompt phát triển bản thân và năng suất có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: tư duy và mindset thành công, quản lý thời gian và năng suất, kỹ năng giao tiếp cá nhân, sức khỏe và thói quen tích cực, học tập và phát triển kỹ năng, lãnh đạo bản thân, quản lý cảm xúc và stress, xây dựng thói quen thành công, quản lý mục tiêu và sự nghiệp, truyền cảm hứng và động lực sống.",
        ],
      },
      {
        heading: "Ví dụ prompt AI phát triển bản thân thực chiến",
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
    publishedAt: "2026-07-02T19:15:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt lãnh đạo", "AI quản lý", "quản lý đội nhóm", "xử lý xung đột nhân viên", "ChatGPT quản lý"],
    intro:
      "100 Prompt Lãnh Đạo và Quản Lý Đội Nhóm là bộ câu lệnh AI có sẵn, giúp quản lý và trưởng nhóm dùng ChatGPT hoặc Gemini để chuẩn bị trước mỗi tình huống khó với nhân viên, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao quản lý cần bộ 100 prompt AI lãnh đạo này",
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
        heading: "Bên trong bộ 100 prompt lãnh đạo và quản lý đội nhóm có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: tư duy lãnh đạo, xây dựng đội nhóm, quản lý hiệu suất, kỹ năng giao tiếp lãnh đạo, quản trị xung đột, truyền cảm hứng và động viên nhân viên, huấn luyện và phát triển nhân viên, văn hóa doanh nghiệp, lãnh đạo trong khủng hoảng, lãnh đạo truyền cảm hứng toàn diện.",
        ],
      },
      {
        heading: "Ví dụ prompt AI lãnh đạo thực chiến",
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
    publishedAt: "2026-07-03T06:45:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt kiếm tiền online", "AI affiliate", "thu nhập thụ động", "freelance AI", "kinh doanh online"],
    intro:
      "100 Prompt Kiếm Tiền Online và Thu Nhập Thụ Động là bộ câu lệnh AI có sẵn, giúp bạn có ngay một hướng đi cụ thể để bắt đầu kiếm thêm thu nhập, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ 100 prompt AI kiếm tiền online này",
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
        heading: "Bên trong bộ 100 prompt kiếm tiền online và thu nhập thụ động có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: kinh doanh online, affiliate marketing, kinh doanh số (digital products), freelance và dịch vụ online, kiếm tiền từ YouTube/TikTok/Podcast, thương mại điện tử quốc tế, thu nhập thụ động, kinh doanh nội dung số, kiếm tiền từ công nghệ mới, tư duy làm giàu và tự do tài chính.",
        ],
      },
      {
        heading: "Ví dụ prompt AI kiếm tiền online thực chiến",
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
    publishedAt: "2026-07-03T19:15:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["ứng dụng AI kinh doanh", "tự động hóa doanh nghiệp", "AI cho doanh nghiệp nhỏ", "prompt công nghệ", "AI vận hành"],
    intro:
      "100 Prompt AI và Công Nghệ Trong Kinh Doanh là bộ câu lệnh AI có sẵn, giúp chủ doanh nghiệp tìm ra điểm bắt đầu ứng dụng AI cụ thể cho từng bộ phận, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao doanh nghiệp cần bộ 100 prompt AI công nghệ này",
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
        heading: "Bên trong bộ 100 prompt AI và công nghệ kinh doanh có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: AI trong marketing, AI trong bán hàng, AI trong quản trị doanh nghiệp, AI trong đầu tư và tài chính, AI trong chăm sóc khách hàng, AI trong sản xuất và vận hành, AI trong nhân sự, Blockchain và Web3, tự động hóa (automation), xu hướng công nghệ.",
        ],
      },
      {
        heading: "Ví dụ prompt AI ứng dụng công nghệ thực chiến",
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
    publishedAt: "2026-07-04T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt cuộc sống", "AI hạnh phúc", "nuôi dạy con AI", "sức khỏe tinh thần", "cân bằng cuộc sống"],
    intro:
      "100 Prompt Cuộc Sống và Hạnh Phúc là bộ câu lệnh AI có sẵn, giúp bạn có thêm một góc nhìn cho những việc quan trọng trong đời sống cá nhân, không cần biết viết prompt từ đầu.",
    sections: [
      {
        heading: "Vì sao bạn cần bộ 100 prompt AI cuộc sống và hạnh phúc này",
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
        heading: "Bên trong bộ 100 prompt cuộc sống và hạnh phúc có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm: gia đình và hôn nhân, nuôi dạy con cái, sức khỏe và thể chất, sức khỏe tinh thần và mindfulness, quan hệ và giao tiếp xã hội, hạnh phúc và phát triển bản thân, sáng tạo và nghệ thuật, tài chính cá nhân đời sống, du lịch và trải nghiệm, truyền cảm hứng và cuộc sống ý nghĩa.",
        ],
      },
      {
        heading: "Ví dụ prompt AI cuộc sống thực chiến",
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
    publishedAt: "2026-07-04T19:15:00+07:00",
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
        heading: "Bên trong bộ 100 prompt fusion đa lĩnh vực có gì",
        body: [
          "100 prompt thực chiến chia theo 10 nhóm fusion: kinh doanh và AI, marketing và sáng tạo, lãnh đạo và phát triển bản thân, đàm phán và tâm lý học, kinh doanh và cuộc sống, AI và học tập/giáo dục, marketing và đời sống xã hội, sáng tạo và lãnh đạo, tài chính và hạnh phúc, tương lai và con người.",
        ],
      },
      {
        heading: "Ví dụ prompt AI fusion đa lĩnh vực thực chiến",
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

  // ── AEO Article 1 — 2026-07-14T07:00 ────────────────────────────────────
  {
    slug: "prompt-ai-la-gi-tai-sao-nen-dung-prompt-viet-san",
    title: "Prompt AI Là Gì? Tại Sao Người Việt Nên Dùng Prompt Viết Sẵn Thay Vì Tự Hỏi AI",
    description:
      "Prompt AI là câu lệnh bạn nhập vào ChatGPT, Gemini hay Claude để yêu cầu AI làm việc cụ thể. Bài viết giải thích prompt là gì, tại sao cách hỏi AI quyết định chất lượng kết quả, và khi nào nên dùng prompt viết sẵn thay vì tự hỏi.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-14T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: [
      "prompt AI là gì",
      "cách viết prompt AI",
      "prompt ChatGPT",
      "prompt viết sẵn",
      "cách dùng AI hiệu quả",
    ],
    intro:
      "Prompt AI là câu lệnh hoặc đoạn văn bạn nhập vào công cụ AI như ChatGPT, Gemini hay Claude để yêu cầu AI làm một việc cụ thể. Chất lượng prompt quyết định trực tiếp chất lượng câu trả lời — hỏi mơ hồ thì nhận được kết quả chung chung, hỏi rõ ràng thì AI cho ra kết quả dùng được ngay.",
    sections: [
      {
        heading: "Prompt AI là gì — định nghĩa đơn giản nhất",
        body: [
          "Prompt là đầu vào bạn cung cấp cho AI. Nó có thể là một câu hỏi ngắn, một đoạn mô tả chi tiết, hoặc một tập lệnh có cấu trúc. Khi bạn nhập 'viết email xin việc', đó là một prompt. Khi bạn nhập 'Đóng vai chuyên gia tuyển dụng, viết email xin vị trí marketing manager cho người có 3 năm kinh nghiệm, tone chuyên nghiệp nhưng không cứng nhắc, dưới 200 từ', đó cũng là một prompt — nhưng kết quả sẽ khác hoàn toàn.",
          "AI không đọc được ý định của bạn. Nó chỉ xử lý đúng những gì bạn viết. Đây là lý do người dùng AI cùng một công cụ nhưng nhận kết quả rất khác nhau.",
        ],
      },
      {
        heading: "Vì sao cách hỏi AI quyết định 80% chất lượng kết quả",
        body: [
          "Thử nghiệm đơn giản: hỏi ChatGPT 'giúp tôi viết caption Instagram' và hỏi lại 'Đóng vai chuyên gia social media. Viết 3 caption Instagram cho ảnh sản phẩm kem dưỡng da ban đêm, nhắm đến phụ nữ 25–35 tuổi quan tâm đến skincare tự nhiên. Tone ấm, gần gũi. Mỗi caption dưới 150 ký tự, có emoji và hashtag phù hợp.' Kết quả lần hai có thể dùng ngay, lần đầu thì không.",
          "Theo nghiên cứu về prompt engineering, một prompt có đủ 4 yếu tố — vai trò (role), ngữ cảnh (context), yêu cầu cụ thể (task) và định dạng đầu ra (format) — cho kết quả tốt hơn 60–70% so với câu hỏi thông thường. Hầu hết người dùng AI phổ thông chỉ dùng câu hỏi thông thường.",
        ],
      },
      {
        heading: "Mất bao lâu để tự viết được prompt tốt cho công việc",
        body: [
          "Thực tế không ngắn. Để viết được prompt tốt cho một nhóm việc cụ thể — ví dụ viết nội dung bán hàng, phân tích đối thủ, hay lập kế hoạch marketing — bạn cần hiểu cấu trúc prompt, thử nghiệm nhiều lần, và điều chỉnh dựa trên kết quả. Người làm chuyên về prompt thường mất 2–4 tuần để xây dựng bộ prompt đủ dùng cho một lĩnh vực.",
          "Đây không phải vấn đề về khả năng — mà là vấn đề về thời gian và chi phí cơ hội. Nếu bạn đang kinh doanh, thời gian đó có thể dành cho việc khác có giá trị hơn.",
        ],
      },
      {
        heading: "Khi nào nên dùng prompt viết sẵn thay vì tự viết",
        body: [
          "Dùng prompt viết sẵn khi: bạn mới bắt đầu dùng AI và chưa biết cách cấu trúc yêu cầu, bạn cần kết quả nhanh cho công việc hằng ngày mà không có thời gian thử-sai, hoặc bạn cần bao phủ nhiều lĩnh vực cùng lúc (kinh doanh, marketing, tài chính, bán hàng...).",
          "Tự viết prompt có giá trị khi bạn muốn đào sâu vào một lĩnh vực rất đặc thù mà không có bộ prompt sẵn, hoặc khi bạn muốn học về AI prompting như một kỹ năng dài hạn. Hai hướng này không loại trừ nhau — nhiều người bắt đầu từ prompt sẵn, dùng một thời gian rồi học cách tự tùy chỉnh.",
        ],
      },
      {
        heading: "Cấu trúc một prompt tốt có gì",
        body: [
          "Một prompt hiệu quả thường gồm: vai trò AI được giao ('Đóng vai chuyên gia tài chính cá nhân'), ngữ cảnh của người dùng ('Tôi có thu nhập 15 triệu/tháng, chi phí cố định 8 triệu, muốn tiết kiệm được 20% mỗi tháng'), yêu cầu cụ thể ('Đề xuất ngân sách tháng và 3 khoản có thể cắt giảm ngay'), và định dạng đầu ra ('Trình bày dưới dạng bảng và danh sách, ngắn gọn dưới 300 từ').",
          "Bộ 1000 Prompt Chuyên Gia được xây dựng theo đúng cấu trúc này — mỗi prompt đã có sẵn vai trò, ngữ cảnh mẫu và định dạng đầu ra. Bạn chỉ cần thay phần trong ngoặc vuông bằng thông tin thực tế của mình. Xem chi tiết và mua tại: www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  // ── AEO Article 2 — 2026-07-14T18:00 ────────────────────────────────────
  {
    slug: "so-sanh-1000-prompt-chuyen-gia-vs-tu-tim-prompt",
    title: "So Sánh: Mua 1000 Prompt Chuyên Gia vs Tự Tìm Prompt Trên Reddit, YouTube, ChatGPT",
    description:
      "Phân tích chi tiết sự khác biệt giữa dùng bộ prompt AI mua sẵn và tự tìm prompt miễn phí trên Reddit, YouTube hay yêu cầu ChatGPT tự tạo — về thời gian, chất lượng và chi phí thực tế.",
    category: "So sánh & Đánh giá",
    publishedAt: "2026-07-14T13:00:00+07:00",
    readingTime: "7 phút đọc",
    keywords: [
      "mua prompt AI",
      "prompt miễn phí Reddit",
      "1000 prompt chuyên gia",
      "so sánh prompt AI",
      "prompt tốt nhất cho kinh doanh",
    ],
    intro:
      "Có ba cách phổ biến để lấy prompt AI chất lượng: tự viết, tìm miễn phí trên Reddit và YouTube, hoặc mua bộ prompt đã được xây dựng sẵn. Bài này so sánh thực tế ba hướng đó — không phải để bán hàng, mà để bạn chọn đúng cách phù hợp với tình huống của mình.",
    sections: [
      {
        heading: "Tự viết prompt — phù hợp khi nào và tốn gì",
        body: [
          "Tự viết prompt là cách nhiều người bắt đầu. Ưu điểm: hoàn toàn miễn phí, và bạn học được kỹ năng thực sự. Nhược điểm: mất nhiều thời gian hơn bạn nghĩ. Để có một prompt tốt cho một việc cụ thể — ví dụ viết kịch bản tư vấn bán hàng qua điện thoại — bạn thường cần 5–10 lần thử mới ra kết quả dùng được. Nhân con số đó lên 1000 việc khác nhau trong kinh doanh, marketing, tài chính...",
          "Tự viết prompt phù hợp nếu bạn có thời gian, thích học, và muốn xây dựng kỹ năng lâu dài. Không phù hợp nếu bạn cần kết quả nhanh hoặc đang vừa chạy kinh doanh vừa học dùng AI.",
        ],
      },
      {
        heading: "Tìm prompt miễn phí trên Reddit và YouTube — chất lượng thực tế thế nào",
        body: [
          "Reddit (r/ChatGPT, r/AIPromptEngineering) và YouTube có hàng nghìn prompt miễn phí. Vấn đề không phải thiếu số lượng mà là thiếu hệ thống. Phần lớn prompt trên Reddit được viết cho người dùng phương Tây, ngữ cảnh kinh doanh khác với Việt Nam. Một số prompt viral trên YouTube thường là prompt chung chung, ấn tượng khi demo nhưng không thực chiến với công việc hằng ngày.",
          "Ngoài ra, bạn phải tự phân loại, lưu trữ, và nhớ khi nào dùng prompt nào. Không có tổ chức theo lĩnh vực, không có hướng dẫn cách điền thông tin. Thực tế nhiều người thu thập được vài chục prompt từ Reddit rồi không dùng vì không biết bắt đầu từ đâu.",
        ],
      },
      {
        heading: "Nhờ ChatGPT tự tạo prompt cho mình — có hiệu quả không",
        body: [
          "Đây là cách thú vị và miễn phí. Bạn hỏi ChatGPT 'viết cho tôi một prompt để phân tích đối thủ cạnh tranh' và nó sẽ tạo ra một cái. Kết quả thường ổn cho việc thử nghiệm lần đầu.",
          "Hạn chế: ChatGPT tạo ra prompt chung, không được tinh chỉnh qua thực tế. Bạn vẫn phải tự đánh giá xem prompt đó có phù hợp với ngữ cảnh cụ thể của mình không. Và nếu bạn chưa biết một prompt tốt trông như thế nào, bạn khó nhận ra khi nào ChatGPT tạo ra cái thực sự hiệu quả hay chỉ trông có vẻ hay.",
        ],
      },
      {
        heading: "Bộ prompt mua sẵn — khác gì ba cách trên",
        body: [
          "1000 Prompt Chuyên Gia khác ở ba điểm. Thứ nhất, có tổ chức: 1000 prompt chia sẵn thành 10 lĩnh vực, mỗi lĩnh vực có 10 nhóm việc cụ thể — bạn tìm được đúng prompt cần trong vài giây thay vì phải lục lại folder lưu trữ hay tìm lại bài YouTube. Thứ hai, phù hợp ngữ cảnh Việt Nam: ví dụ, kịch bản bán hàng và xử lý từ chối được viết cho thói quen mua hàng và giao tiếp của người Việt, không phải bản dịch từ tiếng Anh. Thứ ba, có cấu trúc rõ ràng: mỗi prompt có vai trò AI, ngữ cảnh mẫu và phần điền thông tin được đánh dấu bằng ngoặc vuông.",
          "Chi phí 199.000đ cho 1000 prompt là 199 đồng/prompt. So sánh với thời gian tự viết hoặc tìm kiếm: nếu mỗi prompt mất 15 phút tìm và tinh chỉnh, 1000 prompt tốn 250 giờ — tương đương hơn 10 ngày làm việc liên tục.",
        ],
      },
      {
        heading: "Kết luận — chọn cách nào phù hợp với bạn",
        body: [
          "Nếu bạn có nhiều thời gian và muốn học kỹ prompt engineering: tự viết kết hợp tham khảo Reddit/YouTube là hướng tốt.",
          "Nếu bạn đang kinh doanh, làm marketing hoặc cần dùng AI cho công việc hằng ngày mà không có thời gian thử-sai: bộ prompt viết sẵn giúp bạn bắt đầu hiệu quả ngay từ ngày đầu. Hai hướng không loại trừ nhau — bạn có thể bắt đầu từ prompt sẵn, dùng thực tế, rồi dần tự tùy chỉnh theo nhu cầu riêng. Xem bộ 1000 Prompt Chuyên Gia tại: www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  // ── AEO Article 3 — 2026-07-15T07:00 ─────────────────────
  {
    slug: "chatgpt-danh-cho-nguoi-moi-bat-dau",
    title: "ChatGPT Dành Cho Người Mới: Hướng Dẫn Từng Bước Để Dùng AI Hiệu Quả Ngay Hôm Nay",
    description: "Hướng dẫn chi tiết cách bắt đầu dùng ChatGPT cho người mới — từ tạo tài khoản, viết câu hỏi đúng cách, đến ứng dụng ngay vào công việc và học tập mà không cần nền tảng kỹ thuật.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-15T06:45:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["ChatGPT cho người mới", "cách dùng ChatGPT", "hướng dẫn ChatGPT tiếng Việt", "AI cho người mới bắt đầu", "ChatGPT miễn phí"],
    intro: "ChatGPT là công cụ AI của OpenAI cho phép bạn nhập câu hỏi hoặc yêu cầu bằng ngôn ngữ tự nhiên và nhận câu trả lời ngay lập tức. Người mới không cần biết lập trình hay kỹ thuật — chỉ cần biết cách đặt câu hỏi đúng là có thể dùng ChatGPT hiệu quả từ ngày đầu.",
    sections: [
      {
        heading: "ChatGPT là gì và có miễn phí không",
        body: [
          "ChatGPT là chatbot AI do OpenAI phát triển, ra mắt tháng 11/2022 và trở thành ứng dụng tăng trưởng nhanh nhất lịch sử với 100 triệu người dùng chỉ sau 2 tháng. Bản miễn phí (ChatGPT 4o mini) đủ dùng cho hầu hết công việc hằng ngày — viết lách, tóm tắt, phân tích, lên ý tưởng. Bản trả phí ChatGPT Plus (20 USD/tháng) mạnh hơn với GPT-4o và các tính năng nâng cao.",
          "Bạn truy cập tại chat.openai.com, đăng ký bằng email hoặc tài khoản Google/Microsoft, hoàn toàn miễn phí. Giao diện hỗ trợ tiếng Việt — bạn có thể hỏi và nhận câu trả lời bằng tiếng Việt bình thường.",
        ],
      },
      {
        heading: "Sai lầm phổ biến nhất của người mới dùng ChatGPT",
        body: [
          "Hỏi quá ngắn và quá chung chung. 'Viết bài bán hàng' hay 'phân tích thị trường' — ChatGPT sẽ cho ra kết quả chung chung tương xứng. AI không đọc được ngữ cảnh của bạn nếu bạn không cung cấp.",
          "Sai lầm thứ hai là bỏ cuộc sau lần đầu. Nếu câu trả lời chưa đúng ý, bạn có thể tiếp tục trong cùng cuộc trò chuyện: 'Viết lại ngắn hơn', 'Thêm ví dụ cụ thể', 'Đổi giọng văn thân thiện hơn' — ChatGPT nhớ toàn bộ ngữ cảnh trong một cuộc hội thoại.",
        ],
      },
      {
        heading: "Công thức viết câu hỏi ChatGPT cho kết quả dùng được ngay",
        body: [
          "Công thức đơn giản: [Vai trò] + [Ngữ cảnh] + [Yêu cầu cụ thể] + [Định dạng đầu ra]. Ví dụ thay vì hỏi 'viết caption Instagram', hãy hỏi: 'Đóng vai chuyên gia social media. Viết 3 caption Instagram cho ảnh sản phẩm kem dưỡng da, nhắm đến phụ nữ 25–35 tuổi. Tone ấm, gần gũi. Mỗi caption dưới 150 ký tự, có emoji và hashtag.' Kết quả dùng được ngay, không cần sửa nhiều.",
        ],
      },
      {
        heading: "5 việc người mới nên thử ngay với ChatGPT",
        body: [
          "Một: tóm tắt tài liệu dài — dán văn bản vào và hỏi 'tóm tắt 5 điểm chính'. Hai: viết email chuyên nghiệp — mô tả tình huống và yêu cầu AI viết thay. Ba: lên ý tưởng — 'cho tôi 10 ý tưởng nội dung TikTok về [chủ đề]'. Bốn: giải thích khái niệm khó — 'giải thích [thuật ngữ] cho người không có chuyên môn'. Năm: soạn kế hoạch — 'lập kế hoạch 30 ngày để học [kỹ năng] với 1 giờ/ngày'.",
        ],
      },
      {
        heading: "Bước tiếp theo sau khi đã quen dùng ChatGPT cơ bản",
        body: [
          "Khi đã quen với ChatGPT, bước nâng cấp tự nhiên là có sẵn bộ prompt được viết đúng chuẩn cho từng công việc cụ thể — thay vì phải nghĩ lại từ đầu mỗi lần. Bộ 1000 Prompt Chuyên Gia tại www.1000promptchuyengia.shop cung cấp 1000 prompt thực chiến chia theo 10 lĩnh vực, phù hợp cho người đã biết dùng ChatGPT và muốn khai thác sâu hơn vào công việc.",
        ],
      },
    ],
  },

  {
    slug: "10-prompt-ai-hay-nhat-cho-nguoi-kinh-doanh-nho",
    title: "10 Prompt AI Hay Nhất Cho Người Kinh Doanh Nhỏ Tại Việt Nam (Dùng Ngay Với ChatGPT)",
    description: "Danh sách 10 prompt AI thực chiến tốt nhất cho chủ shop, người kinh doanh nhỏ và startup Việt Nam — từ viết bài bán hàng, phân tích đối thủ đến chăm sóc khách hàng, tất cả dùng được ngay với ChatGPT miễn phí.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-15T19:15:00+07:00",
    readingTime: "8 phút đọc",
    keywords: ["prompt AI cho kinh doanh", "ChatGPT cho chủ shop", "prompt bán hàng", "AI cho doanh nghiệp nhỏ Việt Nam", "prompt marketing tiếng Việt"],
    intro: "10 prompt AI dưới đây được chọn lọc từ bộ 1000 Prompt Chuyên Gia dựa trên mức độ ứng dụng thực tế — phù hợp với chủ shop nhỏ, người bán hàng online và startup Việt Nam muốn tiết kiệm thời gian bằng AI mà không cần kiến thức kỹ thuật.",
    sections: [
      {
        heading: "Prompt 1–3: Viết nội dung bán hàng nhanh hơn",
        body: [
          "Prompt 1 — Mô tả sản phẩm hấp dẫn: 'Đóng vai chuyên gia copywriting. Viết mô tả sản phẩm cho [tên sản phẩm] nhắm đến [đối tượng khách hàng]. Nhấn mạnh lợi ích [lợi ích chính], giá [giá], và có lời kêu gọi hành động rõ ràng. Dưới 150 từ.'",
          "Prompt 2 — Caption mạng xã hội: 'Viết 3 caption cho bài đăng Facebook/Instagram quảng cáo [sản phẩm]. Mỗi caption dưới 100 từ, có emoji và hashtag. Một caption nhấn vào vấn đề, một nhấn vào lợi ích, một dạng câu hỏi tương tác.'",
          "Prompt 3 — Kịch bản tư vấn chat: 'Bạn là nhân viên tư vấn bán hàng online. Viết kịch bản chat tư vấn cho khách hỏi về [sản phẩm], gồm: câu chào, câu hỏi tìm hiểu nhu cầu, giới thiệu sản phẩm, xử lý câu hỏi về giá, và câu chốt đơn.'",
        ],
      },
      {
        heading: "Prompt 4–6: Phân tích thị trường và đối thủ",
        body: [
          "Prompt 4 — Phân tích đối thủ: 'Đóng vai chuyên gia nghiên cứu thị trường. Tôi bán [sản phẩm] tại [kênh]. Phân tích 3 kiểu đối thủ phổ biến trong ngành: điểm mạnh, điểm yếu, cách thu hút khách. Gợi ý 2 điểm khác biệt tôi có thể khai thác.'",
          "Prompt 5 — Chân dung khách hàng: 'Xây dựng chân dung khách hàng lý tưởng cho [sản phẩm]. Bao gồm: độ tuổi, nghề nghiệp, thu nhập, vấn đề đang gặp, điều họ thực sự muốn, và kênh thường dùng để tìm giải pháp.'",
          "Prompt 6 — USP không dựa vào giá: 'Tôi đang bán [sản phẩm] giá [giá], đối thủ bán [khoảng giá đối thủ]. Đề xuất 5 điểm bán hàng độc đáo không dựa vào giá thấp hơn, tập trung vào giá trị và trải nghiệm khách hàng.'",
        ],
      },
      {
        heading: "Prompt 7–8: Chăm sóc khách hàng",
        body: [
          "Prompt 7 — Trả lời đánh giá tiêu cực: 'Khách hàng để lại đánh giá: [nội dung]. Viết câu trả lời chuyên nghiệp, thừa nhận vấn đề không phòng thủ, sẵn sàng hỗ trợ và giữ được uy tín thương hiệu. Dưới 80 từ.'",
          "Prompt 8 — Email chăm sóc sau mua: 'Viết email gửi khách 3 ngày sau khi mua [sản phẩm]. Mục tiêu: hỏi thăm trải nghiệm, cung cấp tip hữu ích, gợi ý nhẹ nhàng để lại đánh giá. Tone thân thiện, không quá bán hàng.'",
        ],
      },
      {
        heading: "Prompt 9–10: Lên kế hoạch và vận hành",
        body: [
          "Prompt 9 — Kế hoạch marketing tháng: 'Đóng vai chuyên gia growth marketing. Tôi bán [sản phẩm], ngân sách [số tiền]/tháng, kênh chính [Facebook/TikTok/Zalo]. Lên kế hoạch marketing 30 ngày gồm lịch đăng bài, loại nội dung mỗi tuần, và 2 ý tưởng mini campaign phù hợp ngân sách.'",
          "Prompt 10 — Giải quyết vấn đề kinh doanh: 'Tôi đang gặp vấn đề: [mô tả cụ thể]. Phân tích 3 nguyên nhân khả năng nhất và đề xuất giải pháp thực tế có thể triển khai trong 2 tuần với nguồn lực hạn chế.' Đây là 10 prompt từ bộ 1000 Prompt Chuyên Gia tại www.1000promptchuyengia.shop — nơi có thêm 990 prompt thực chiến khác.",
        ],
      },
    ],
  },

  {
    slug: "ai-co-the-lam-gi-cho-nhan-vien-van-phong",
    title: "AI Có Thể Làm Gì Cho Nhân Viên Văn Phòng? 8 Việc Cụ Thể Dùng Được Ngay Hôm Nay",
    description: "Tổng hợp 8 việc văn phòng cụ thể mà AI (ChatGPT, Gemini, Claude) có thể hỗ trợ ngay hôm nay — từ viết email, tóm tắt tài liệu, lên kế hoạch đến chuẩn bị báo cáo và tổng kết cuộc họp.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-16T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["AI cho nhân viên văn phòng", "ChatGPT công việc văn phòng", "AI tăng năng suất làm việc", "ứng dụng AI vào công việc", "Gemini cho dân văn phòng"],
    intro: "AI không thay thế nhân viên văn phòng — nhưng người biết dùng AI sẽ làm được nhiều hơn người không dùng trong cùng một khoảng thời gian. Dưới đây là 8 việc cụ thể mà ChatGPT, Gemini hoặc Claude có thể hỗ trợ ngay hôm nay, không cần cài thêm phần mềm hay học kỹ thuật gì đặc biệt.",
    sections: [
      {
        heading: "1. Viết và chỉnh sửa email chuyên nghiệp nhanh hơn",
        body: [
          "Mô tả tình huống cho AI: người nhận là ai, mục đích email, điểm chính cần truyền đạt và tone mong muốn. AI sẽ viết draft đầu tiên trong vài giây. Với email khó như từ chối đề xuất, phản hồi khiếu nại, hay xin gia hạn deadline — AI giúp bạn chọn từ ngữ cẩn thận hơn so với viết trong lúc đang stress.",
        ],
      },
      {
        heading: "2. Tóm tắt tài liệu và báo cáo dài",
        body: [
          "Dán toàn bộ nội dung vào ChatGPT và yêu cầu: 'Tóm tắt 5 điểm chính', 'Liệt kê các quyết định cần phê duyệt', hoặc 'Rút ra 3 rủi ro được đề cập'. Với tài liệu tiếng Anh dài, AI dịch và tóm tắt đồng thời — tiết kiệm đáng kể so với đọc toàn bộ rồi mới dịch.",
        ],
      },
      {
        heading: "3. Chuẩn bị nội dung họp và tổng kết sau họp",
        body: [
          "Trước họp: nhập agenda và yêu cầu AI đề xuất câu hỏi cần đặt ra, điểm cần làm rõ. Sau họp: nhập ghi chú thô và yêu cầu 'tổng kết quyết định, người phụ trách và deadline'. Kết quả là biên bản họp sạch hơn nhiều so với ghi tay rồi ngồi sắp xếp lại.",
        ],
      },
      {
        heading: "4–5. Lên kế hoạch và soạn báo cáo",
        body: [
          "Kế hoạch: mô tả danh sách việc đang có, deadline và mức độ quan trọng — yêu cầu AI sắp xếp theo ma trận ưu tiên hoặc đề xuất lịch làm việc ngày/tuần.",
          "Báo cáo: cung cấp số liệu thô và yêu cầu AI viết phần phân tích, nhận xét xu hướng hoặc đề xuất hành động. AI không thay bạn trong việc thu thập và kiểm chứng số liệu, nhưng phần diễn giải và viết lách AI làm rất nhanh.",
        ],
      },
      {
        heading: "6–8. Dịch thuật, nghiên cứu nhanh và học kỹ năng mới",
        body: [
          "Dịch thuật: tài liệu kỹ thuật tiếng Anh sang tiếng Việt chính xác hơn Google Translate, có ngữ cảnh. Nghiên cứu: hỏi AI về khái niệm, quy trình hoặc thông tin nền trước khi bước vào cuộc họp hay dự án mới — nhớ kiểm tra lại thông tin quan trọng từ nguồn gốc.",
          "Học kỹ năng: yêu cầu AI giải thích một kỹ năng bạn muốn học, đặt câu hỏi theo, và xin bài tập thực hành. Từ Excel nâng cao, kỹ năng thuyết trình đến cách đọc báo cáo tài chính. Để có sẵn bộ prompt tối ưu cho từng tình huống văn phòng, xem thêm tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  {
    slug: "gemini-vs-chatgpt-cong-cu-ai-nao-tot-hon-cho-nguoi-viet",
    title: "Gemini vs ChatGPT: Công Cụ AI Nào Phù Hợp Hơn Cho Người Việt Nam Năm 2026",
    description: "So sánh trực tiếp Gemini và ChatGPT về chất lượng tiếng Việt, khả năng tích hợp, giá và trường hợp dùng phù hợp — để bạn chọn đúng công cụ cho công việc thực tế.",
    category: "So sánh & Đánh giá",
    publishedAt: "2026-07-16T19:15:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["Gemini vs ChatGPT", "so sánh AI 2026", "Gemini tiếng Việt", "ChatGPT tiếng Việt", "công cụ AI tốt nhất"],
    intro: "Gemini (Google) và ChatGPT (OpenAI) là hai công cụ AI phổ biến nhất hiện nay. Cả hai đều xử lý tiếng Việt được, nhưng khác nhau rõ ở tốc độ, khả năng tích hợp và điểm mạnh từng lĩnh vực — nên câu trả lời đúng là tùy mục đích dùng, không có cái nào tốt hơn tuyệt đối.",
    sections: [
      {
        heading: "Gemini và ChatGPT khác nhau ở đâu về cơ bản",
        body: [
          "ChatGPT (GPT-4o) do OpenAI phát triển, ra mắt 2022, có hệ sinh thái plugin và GPT tùy chỉnh rộng nhất thị trường. Gemini do Google DeepMind phát triển, tích hợp sâu với Google Search, Google Docs, Gmail và toàn bộ Google Workspace. Nếu bạn dùng Google hàng ngày, Gemini có lợi thế về tích hợp — nếu bạn cần khả năng tùy biến và plugin đa dạng, ChatGPT có hệ sinh thái mạnh hơn.",
        ],
      },
      {
        heading: "So sánh chất lượng tiếng Việt: cái nào hiểu và viết tốt hơn",
        body: [
          "Cả hai xử lý tiếng Việt tốt hơn hẳn so với 2–3 năm trước. Trong các bài kiểm tra thực tế 2025–2026: ChatGPT GPT-4o cho câu trả lời tiếng Việt tự nhiên hơn, ít lỗi ngữ pháp hơn và giữ ngữ điệu tốt hơn khi viết nội dung sáng tạo. Gemini 2.0 Flash nhanh hơn và tốt hơn khi tóm tắt tài liệu tiếng Việt dài, đặc biệt khi kết hợp với Google Docs.",
          "Kết luận thực tế: dùng ChatGPT để viết nội dung, copywriting, phân tích sâu. Dùng Gemini để tóm tắt, nghiên cứu nhanh, và làm việc trong Google Workspace.",
        ],
      },
      {
        heading: "Bản miễn phí: Gemini hay ChatGPT dùng được hơn",
        body: [
          "Bản miễn phí của Gemini (Gemini 2.0 Flash) hiện khá mạnh và không giới hạn số lượt dùng. Bản miễn phí ChatGPT (GPT-4o mini) đủ dùng cho hầu hết tác vụ nhưng có giới hạn tin nhắn với GPT-4o đầy đủ. Về mặt miễn phí, Gemini đang có lợi thế hơn cho người dùng phổ thông không muốn trả phí.",
        ],
      },
      {
        heading: "Nên dùng cái nào cho từng mục đích cụ thể",
        body: [
          "Viết bài, content, copywriting → ChatGPT GPT-4o. Tóm tắt tài liệu dài, email, Google Docs → Gemini. Code và lập trình → ChatGPT (hoặc Claude). Tìm kiếm thông tin mới nhất → Gemini (tích hợp Google Search). Tùy biến workflow, plugin, GPT riêng → ChatGPT. Dùng đa thiết bị trong Google ecosystem → Gemini.",
          "Lời khuyên thực tế: mở cả hai tab và dùng song song — chúng miễn phí và bổ trợ nhau tốt hơn là cạnh tranh. Nếu muốn prompt được viết sẵn chuẩn cho cả hai, xem bộ 1000 Prompt Chuyên Gia tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  {
    slug: "prompt-engineering-la-gi-huong-dan-tu-a-den-z",
    title: "Prompt Engineering Là Gì? Hướng Dẫn Từ A Đến Z Cho Người Không Có Nền Tảng Kỹ Thuật",
    description: "Giải thích prompt engineering theo cách đơn giản nhất: là gì, tại sao quan trọng, và 5 kỹ thuật cốt lõi bất kỳ ai cũng học được trong một buổi chiều.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-17T06:45:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["prompt engineering là gì", "học prompt engineering", "kỹ thuật viết prompt", "prompt AI hiệu quả", "prompt engineering cho người mới"],
    intro: "Prompt engineering là kỹ năng viết câu lệnh (prompt) cho AI sao cho AI hiểu đúng ý và trả lời đúng nhu cầu. Không cần biết lập trình — bất kỳ ai biết viết câu rõ ràng đều có thể học prompt engineering trong vài giờ và áp dụng ngay vào công việc.",
    sections: [
      {
        heading: "Prompt engineering là gì và tại sao nó quan trọng",
        body: [
          "Prompt là câu lệnh bạn nhập vào AI. Prompt engineering là nghệ thuật và kỹ thuật viết prompt sao cho AI hiểu đúng ngữ cảnh, đúng yêu cầu, và cho ra kết quả dùng được ngay — thay vì phải chỉnh sửa nhiều lần.",
          "Tầm quan trọng: cùng một AI nhưng hai người dùng prompt khác nhau sẽ nhận được kết quả chất lượng chênh lệch rất lớn. Prompt tốt là sự khác biệt giữa câu trả lời chung chung và câu trả lời đúng việc đúng người.",
        ],
      },
      {
        heading: "5 kỹ thuật prompt engineering cốt lõi",
        body: [
          "1. Role prompting — cho AI một vai trò: 'Đóng vai chuyên gia tư vấn tài chính với 10 năm kinh nghiệm'. AI sẽ điều chỉnh tone, mức độ chuyên sâu và góc nhìn theo vai trò được giao.",
          "2. Context setting — cung cấp ngữ cảnh đầy đủ trước khi yêu cầu. Thay vì 'viết email', hãy kể: đây là email gửi cho ai, mục tiêu là gì, tone mong muốn như thế nào.",
          "3. Few-shot examples — cho AI xem ví dụ mẫu kết quả bạn muốn. 'Tôi muốn caption theo phong cách này: [ví dụ]. Hãy viết 3 caption tương tự cho sản phẩm X.'",
          "4. Chain of thought — yêu cầu AI suy nghĩ từng bước trước khi trả lời: 'Hãy phân tích từng bước trước khi đưa ra kết luận.' Đặc biệt hiệu quả cho bài toán phức tạp hoặc cần lập luận.",
          "5. Output format — chỉ định cụ thể định dạng đầu ra: 'Trả lời dưới dạng bảng với 3 cột', 'Liệt kê 5 điểm, mỗi điểm tối đa 2 câu', 'Viết dưới 150 từ'. Kết quả sẽ dùng được ngay mà không cần format lại.",
        ],
      },
      {
        heading: "Prompt engineering khác học AI như thế nào",
        body: [
          "Học AI thường bao gồm machine learning, lập trình Python, xử lý dữ liệu — cần nền tảng kỹ thuật. Prompt engineering không cần bất kỳ kỹ năng lập trình nào. Bạn chỉ cần hiểu rõ bạn muốn gì và diễn đạt điều đó bằng ngôn ngữ tự nhiên một cách có cấu trúc.",
          "Đây là lý do tại sao prompt engineering đang được gọi là 'kỹ năng của thập kỷ' — nó nằm ở giao điểm của tư duy rõ ràng và sử dụng công cụ AI, không phải kỹ thuật thuần túy. Để có sẵn 1000 prompt đã được engineering chuẩn cho 10 lĩnh vực, xem tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  {
    slug: "tai-sao-ai-tra-loi-khong-dung-y-cach-khac-phuc",
    title: "Tại Sao AI Trả Lời Không Đúng Ý? 5 Nguyên Nhân và Cách Khắc Phục Ngay",
    description: "Giải thích 5 lý do phổ biến khiến ChatGPT, Gemini hoặc Claude trả lời không đúng ý — và cách điều chỉnh prompt ngay trong cuộc trò chuyện để ra kết quả tốt hơn.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-17T19:15:00+07:00",
    readingTime: "5 phút đọc",
    keywords: ["AI trả lời sai", "ChatGPT không hiểu ý", "cách sửa prompt", "AI cho kết quả không đúng", "tại sao AI không hiểu"],
    intro: "AI không đọc được suy nghĩ của bạn — nó chỉ xử lý đúng những gì bạn viết vào. Khi AI trả lời không đúng ý, 95% là do prompt chưa đủ thông tin, chưa rõ ngữ cảnh, hoặc chưa xác định đúng yêu cầu đầu ra. Tin tốt: bạn không cần viết lại từ đầu, chỉ cần biết cách tinh chỉnh trong cùng cuộc trò chuyện.",
    sections: [
      {
        heading: "Nguyên nhân 1–2: Prompt quá ngắn và thiếu ngữ cảnh",
        body: [
          "Prompt quá ngắn là nguyên nhân số 1. 'Viết bài marketing' hay 'phân tích đối thủ' buộc AI phải đoán bạn đang làm trong ngành gì, với sản phẩm gì, cho khách hàng nào. AI sẽ cho ra câu trả lời trung bình, áp dụng được cho tất cả và không đặc biệt phù hợp với ai.",
          "Thiếu ngữ cảnh là nguyên nhân số 2. AI không biết bạn là ai, bạn đang ở giai đoạn nào, và kết quả sẽ được dùng để làm gì. Cung cấp: bạn là ai (vai trò/ngành), tình huống hiện tại, và kết quả bạn cần dùng để làm gì.",
        ],
      },
      {
        heading: "Nguyên nhân 3–5: Format, ảo giác AI, và yêu cầu mâu thuẫn",
        body: [
          "Không chỉ định format đầu ra — AI có thể viết dưới dạng đoạn văn trong khi bạn cần danh sách. Luôn nói rõ: 'trả lời dạng bảng', 'liệt kê 5 điểm', 'viết dưới 100 từ'.",
          "AI hallucination (ảo giác AI) — AI có thể bịa ra số liệu, tên người, hoặc sự kiện nghe có vẻ thật. Không dùng AI để tra cứu số liệu cụ thể mà không kiểm chứng lại. Với câu hỏi thực tế, thêm: 'chỉ dùng thông tin bạn chắc chắn, nếu không chắc hãy nói rõ'.",
          "Yêu cầu mâu thuẫn trong một prompt — 'viết ngắn gọn nhưng đầy đủ chi tiết, thân thiện nhưng chuyên nghiệp'. AI sẽ chọn một trong hai hoặc trung hòa không ra gì. Ưu tiên một tiêu chí, hoặc tách thành nhiều prompt.",
        ],
      },
      {
        heading: "Cách sửa khi AI đã trả lời sai (trong cùng cuộc trò chuyện)",
        body: [
          "Không cần viết lại từ đầu. Trong cùng chat, tiếp tục với: 'Viết lại ngắn hơn, chỉ giữ 3 điểm quan trọng nhất' — hoặc 'Câu trả lời quá chung chung. Tôi cụ thể cần [X]. Viết lại với ngữ cảnh này.' AI nhớ toàn bộ lịch sử cuộc trò chuyện và sẽ điều chỉnh theo.",
          "Câu hỏi hữu ích sau câu trả lời sai: 'Tôi cần kết quả cho [đối tượng cụ thể], tone [cụ thể], dưới [số từ/dòng]. Viết lại.' Để có sẵn prompt đúng chuẩn ngay từ đầu mà không cần sửa nhiều lần, xem bộ 1000 Prompt Chuyên Gia tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  {
    slug: "ai-danh-cho-hoc-sinh-sinh-vien-cach-dung-chatgpt-hoc-tap",
    title: "AI Dành Cho Học Sinh Sinh Viên: 7 Cách Dùng ChatGPT Học Tập Hiệu Quả Không Bị Thụ Động",
    description: "Hướng dẫn 7 cách học sinh sinh viên có thể dùng ChatGPT để học tập hiệu quả hơn — từ hiểu bài khó, ôn tập, viết luận đến luyện ngoại ngữ — mà không bị lệ thuộc hay mất kỹ năng tự học.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-18T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["AI cho học sinh", "ChatGPT học tập", "dùng AI để học", "ChatGPT cho sinh viên", "học tập với AI"],
    intro: "ChatGPT và các công cụ AI có thể trở thành người thầy gia sư 24/7 miễn phí, kiên nhẫn giải thích không giới hạn và điều chỉnh theo tốc độ học của từng người. Dưới đây là 7 cách dùng AI để học tập thực sự hiệu quả — không phải để AI làm bài thay, mà để hiểu bài sâu hơn và nhanh hơn.",
    sections: [
      {
        heading: "1–3: Hiểu bài khó, ôn tập và tự kiểm tra",
        body: [
          "Giải thích khái niệm khó theo cách bạn hiểu: 'Giải thích [khái niệm] bằng ngôn ngữ đơn giản nhất, dùng ví dụ thực tế trong cuộc sống hàng ngày. Tôi là học sinh lớp 11 chưa có nền tảng về chủ đề này.' AI có thể giải thích cùng một khái niệm theo nhiều cách khác nhau cho đến khi bạn hiểu.",
          "Ôn tập bằng câu hỏi: 'Tạo 10 câu hỏi trắc nghiệm về [chủ đề] mức độ [cơ bản/trung bình/nâng cao].' Sau đó: 'Giải thích tại sao đáp án đúng là [X], không phải [Y].' Hiệu quả hơn đọc lại sách vì bạn đang chủ động xử lý thông tin.",
          "Tạo flashcard: 'Tóm tắt [chương/bài] thành 20 cặp câu hỏi-trả lời ngắn, mỗi cặp tối đa 2 dòng.' Dán vào app flashcard yêu thích hoặc tự ôn bằng cách che một vế.",
        ],
      },
      {
        heading: "4–5: Viết luận và nghiên cứu có trách nhiệm",
        body: [
          "Dùng AI để lên outline, không phải viết thay: 'Tôi cần viết luận về [chủ đề], 1500 từ, góc nhìn [X]. Gợi ý cấu trúc 5 đoạn với luận điểm chính mỗi đoạn.' Sau đó tự viết từng đoạn — đây mới là lúc bạn học thực sự.",
          "Kiểm tra lập luận của bạn: sau khi viết xong, dán vào và hỏi: 'Lập luận nào trong bài này yếu nhất? Phản biện ra sao?' AI như người phản biện thông minh giúp bạn tự cải thiện bài trước khi nộp.",
        ],
      },
      {
        heading: "6–7: Luyện ngoại ngữ và lập kế hoạch học tập",
        body: [
          "Luyện hội thoại: 'Đóng vai người bản ngữ, trò chuyện với tôi về [chủ đề] bằng tiếng Anh. Sau mỗi tin nhắn, sửa lỗi ngữ pháp và gợi ý cách diễn đạt tự nhiên hơn.' Đây là cách luyện Speaking/Writing miễn phí không giới hạn thời gian.",
          "Lập kế hoạch ôn thi: 'Tôi có 3 tuần ôn thi [môn], hiện tại [điểm/mức độ], học được 2 tiếng/ngày. Lập lịch ôn tập theo từng ngày, ưu tiên phần nào trước.' AI sẽ lên lịch cụ thể hơn bạn tự lên vì nó không có thiên kiến về chủ đề nào bạn ngại học. Xem thêm bài về cách viết prompt hiệu quả tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },

  {
    slug: "chatgpt-co-the-thay-nhan-vien-marketing-khong",
    title: "ChatGPT Có Thể Thay Thế Nhân Viên Marketing Không? Phân Tích Thực Tế 2026",
    description: "Phân tích thực tế những công việc marketing mà AI đang làm tốt, những việc AI không thể thay, và chiến lược phù hợp cho doanh nghiệp vừa và nhỏ tại Việt Nam.",
    category: "So sánh & Đánh giá",
    publishedAt: "2026-07-18T19:15:00+07:00",
    readingTime: "7 phút đọc",
    keywords: ["ChatGPT thay nhân viên marketing", "AI marketing", "AI thay thế người làm marketing", "ứng dụng AI trong marketing", "ChatGPT marketing 2026"],
    intro: "Câu trả lời ngắn: không hoàn toàn, nhưng AI đang thay thế một phần đáng kể công việc marketing lặp lại và tốn thời gian. Người làm marketing biết dùng AI sẽ làm được khối lượng công việc của 2–3 người, không bị thay thế bởi AI mà bị thay bởi người khác biết dùng AI tốt hơn.",
    sections: [
      {
        heading: "Những công việc marketing AI đang làm tốt ngay hôm nay",
        body: [
          "Viết bản nháp đầu tiên: caption mạng xã hội, mô tả sản phẩm, email marketing, bài blog — AI viết draft nhanh và bạn chỉnh lại. Tiết kiệm 60–80% thời gian so với viết từ đầu. Brainstorming ý tưởng: trong 2 phút AI cho ra 20 góc độ nội dung cho một chủ đề mà bạn mất cả buổi mới nghĩ được. A/B test copy: viết 5–10 biến thể tiêu đề, CTA, mô tả để test nhanh chóng.",
          "Nghiên cứu và tóm tắt: AI đọc và tóm tắt báo cáo thị trường, bài phân tích đối thủ, xu hướng ngành trong vài phút. Lên kế hoạch nội dung: từ một chủ đề, AI phân tách ra lịch content 30 ngày với angle cụ thể từng bài.",
        ],
      },
      {
        heading: "Những việc AI chưa thể thay thế người làm marketing",
        body: [
          "Xây dựng quan hệ và cộng đồng — AI không thể reply comment đúng lúc với cảm xúc thật, không thể tạo kết nối cá nhân với KOL/partner, không hiểu subtlety văn hóa địa phương đủ sâu để tránh phát ngôn nhạy cảm.",
          "Chiến lược cấp cao — quyết định positioning, chọn thị trường mục tiêu, ứng phó khủng hoảng truyền thông đòi hỏi phán đoán chiến lược từ kinh nghiệm thực tế. AI là công cụ thực thi, không thay được tư duy chiến lược. Sáng tạo đột phá — idea viral thực sự thường đến từ việc kết hợp ngữ cảnh văn hóa, thời điểm, và cảm xúc mà AI không tự sinh ra được.",
        ],
      },
      {
        heading: "Chiến lược thực tế cho doanh nghiệp vừa và nhỏ",
        body: [
          "Không nên: sa thải toàn bộ team content và thay bằng AI — output sẽ nhạt, thiếu cá tính thương hiệu, và dễ bị phát hiện là AI-generated gây mất uy tín.",
          "Nên: dùng AI để tăng output của team hiện có. 1 người làm content với AI tốt bằng 2–3 người không dùng AI. Đầu tư vào việc train team cách dùng AI + prompt tốt thay vì tuyển thêm người làm thủ công. Bộ 1000 Prompt Chuyên Gia tại www.1000promptchuyengia.shop có 100 prompt chuyên về marketing — đủ để team content của bạn bắt đầu dùng AI hiệu quả ngay từ ngày đầu.",
        ],
      },
    ],
  },

  {
    slug: "cach-viet-prompt-ai-de-tao-content-ban-hang-hieu-qua",
    title: "Cách Viết Prompt AI Để Tạo Content Bán Hàng Không Nhạt, Không Sáo Rỗng",
    description: "Hướng dẫn thực tế cách viết prompt cho ChatGPT và Gemini để ra content bán hàng có cá tính, đúng đối tượng, không bị nhạt như AI-generic — kèm ví dụ trước/sau cụ thể.",
    category: "Kiến thức AI",
    publishedAt: "2026-07-19T06:45:00+07:00",
    readingTime: "6 phút đọc",
    keywords: ["prompt viết content bán hàng", "ChatGPT viết content", "prompt marketing", "AI viết bài bán hàng", "content AI không nhạt"],
    intro: "Vấn đề phổ biến nhất khi dùng AI viết content bán hàng: kết quả đúng ngữ pháp nhưng nhạt, nghe như chatbot, không có giọng thương hiệu, và khách hàng đọc là biết ngay AI viết. Nguyên nhân không phải AI kém — mà prompt chưa cung cấp đủ thông tin về giọng điệu, đối tượng và cá tính thương hiệu.",
    sections: [
      {
        heading: "Tại sao content AI thường bị nhạt và cách bắt đầu khắc phục",
        body: [
          "AI viết theo xác suất trung bình — nó dùng những từ và cấu trúc phổ biến nhất trong dữ liệu huấn luyện. Không có giọng thương hiệu cụ thể trong prompt → AI dùng giọng trung tính, an toàn, không gây phản ứng cảm xúc.",
          "Khắc phục bắt đầu từ chỉ định giọng điệu cụ thể: thay vì 'thân thiện và chuyên nghiệp' (quá chung), hãy nói 'như người anh/chị đã làm ngành này 5 năm, nói chuyện thẳng thắn, không hoa mỹ, hay dùng ví dụ cụ thể'. Hoặc cho AI xem 1–2 đoạn bạn đã viết trước làm mẫu tham chiếu.",
        ],
      },
      {
        heading: "Công thức prompt content bán hàng có kết quả",
        body: [
          "Cấu trúc: [Vai trò] + [Đối tượng đọc] + [Vấn đề của họ] + [Sản phẩm giải quyết gì] + [Giọng điệu cụ thể] + [Format và độ dài].",
          "Ví dụ trước (prompt nhạt): 'Viết caption Instagram bán kem dưỡng da.' Kết quả: generic, không ai dừng lại đọc. Ví dụ sau (prompt đầy đủ): 'Đóng vai chuyên gia skincare có 7 năm tư vấn da nhờn ở Sài Gòn. Viết caption Instagram cho kem dưỡng ẩm [tên], nhắm đến phụ nữ 25–35 tuổi da nhờn đang bị bóng dầu mùa hè. Nỗi đau: dùng kem nào cũng bóng như đổ dầu. Giải pháp: kem này thấm trong 30 giây, không bóng, phù hợp dưới lớp trang điểm. Giọng: gần gũi, hơi hài hước, không quảng cáo lộ liễu. 3 phiên bản, mỗi bản dưới 100 ký tự + 5 hashtag phù hợp.' Kết quả: 3 caption khác nhau về angle, dùng được ngay.",
        ],
      },
      {
        heading: "3 kỹ thuật nâng cấp content AI ngay trong cuộc trò chuyện",
        body: [
          "Một: cho AI xem ví dụ bạn thích. Dán vào một đoạn content bạn thấy hay (của mình hoặc đối thủ) và nói 'viết theo phong cách này nhưng cho sản phẩm của tôi'. Hai: yêu cầu AI viết lại với một cảm xúc cụ thể — 'viết lại để người đọc cảm thấy tò mò', 'viết để khách hàng thấy mình hiểu được họ'. Ba: yêu cầu nhiều phiên bản với angle khác nhau — vấn đề, lợi ích, câu chuyện, bằng chứng — rồi chọn cái tốt nhất.",
          "Để có sẵn bộ prompt content bán hàng đã được viết chuẩn cho nhiều ngành và tình huống khác nhau, xem bộ 1000 Prompt Chuyên Gia (Pack 3 Marketing + Pack 4 Bán Hàng) tại www.1000promptchuyengia.shop",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
