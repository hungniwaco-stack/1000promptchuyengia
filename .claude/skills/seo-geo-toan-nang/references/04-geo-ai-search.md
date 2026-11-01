# 04. GEO: tối ưu cho tìm kiếm AI

Triết lý: GEO-first, SEO-supported. Nền SEO tốt vẫn là điều kiện cần; GEO thêm: được AI **đọc được**, **tin được**, **trích dẫn được**, và **nhận ra thương hiệu**. Lệnh: `/geo audit|quick|page|citability|crawlers|llmstxt|brands|platforms|schema|technical|content|report|report-pdf|compare|proposal` (nếu chưa cài thì làm tay theo dưới đây). Lưu ý: các số liệu thị trường trong skill gốc là do tác giả công cụ dẫn, hãy kiểm lại trước khi dùng với khách.

## Thang điểm GEO tổng hợp (0–100)
| Nhóm | Trọng số | Đo bằng |
|---|---|---|
| Khả năng được trích dẫn và hiển thị với AI | 25% | điểm citability từng đoạn, khối trả lời, quyền truy cập crawler, llms.txt |
| Uy tín thương hiệu bên ngoài | 20% | nhắc đến trên YouTube, Reddit/diễn đàn, Wikipedia/Wikidata, LinkedIn, báo chí; sự hiện diện thực thể |
| Chất lượng nội dung, E-E-A-T | 20% | chuyên môn, dữ liệu gốc, tác giả, trang tin cậy |
| Nền tảng kỹ thuật | 15% | SSR, CWV, crawl, mobile, bảo mật |
| Dữ liệu có cấu trúc | 10% | JSON-LD đầy đủ, đúng, `sameAs` |
| Tối ưu theo nền tảng | 10% | sẵn sàng cho Google AIO, ChatGPT, Perplexity, Gemini, Copilot |
Mức: 90+ xuất sắc, 75–89 tốt, 60–74 khá, 40–59 trung bình, <40 yếu. Thang này là của công cụ, không phải chuẩn ngành; ghi rõ khi báo cáo.

## 1. Truy cập của crawler AI
Kiểm `robots.txt` theo từng bot: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot, Bytespider, Amazonbot. Phân biệt **huấn luyện** (GPTBot, Google-Extended, CCBot) với **tìm kiếm/truy xuất** (OAI-SearchBot, PerplexityBot, ChatGPT-User): chặn huấn luyện không làm mất trích dẫn trong tìm kiếm. Gửi yêu cầu thật với từng User-Agent để phát hiện tường lửa/Cloudflare chặn (robots cho phép nhưng WAF trả 403). Tùy chọn khai báo `Content-Signal: ai-train=…, search=…, ai-retrieval=…` theo chính sách của chủ site (không tính điểm). Không chặn tất cả bot nếu muốn được AI trích dẫn.

## 2. `llms.txt`
Tệp `/llms.txt` (Markdown): `# Tên`, `> tóm tắt 1–2 câu có dữ kiện chính`, các mục `##` với danh sách `- [Tiêu đề](URL): mô tả`, mục `## Optional`. Bổ sung `/llms-full.txt` (nội dung đầy đủ) nếu có thể. Liệt kê trang cốt lõi (sản phẩm, giá, so sánh, hướng dẫn, danh mục), không liệt kê trang rác. Cập nhật khi thêm bài. Giá trị: tiện cho một số hệ thống AI; **Google không dùng để xếp hạng**; chi phí thấp, không thay thế nội dung tốt.

## 3. Khả năng được trích dẫn (citability)
Mỗi đoạn/khối được chấm theo 5 chiều: câu trả lời rõ ràng độc lập (đọc riêng vẫn hiểu), độ giàu dữ kiện (số liệu, tên, ngày, điều khoản), cấu trúc dễ tách (tiêu đề câu hỏi, danh sách, bảng), độc đáo (không phải nội dung phổ thông), và dễ trích (câu ngắn, 40–60 từ cho khối trả lời). Làm: đoạn trả lời trực tiếp dưới mỗi H2 dạng câu hỏi; bảng so sánh; định nghĩa một câu; số liệu có nguồn và ngày; thông tin riêng của bạn (dữ liệu gốc, quy trình, lỗi thường gặp); bớt đoạn quảng cáo lặp.

## 4. Thương hiệu và thực thể
AI nhận diện qua thực thể, không chỉ liên kết. Kiểm: kết quả tìm tên thương hiệu (có bị lẫn với nghĩa phổ thông/đối thủ không), `Organization` + `sameAs` đủ hồ sơ có thật (YouTube, Facebook, LinkedIn, GitHub, Crunchbase…), trang giới thiệu, tên thương hiệu nhất quán mọi nơi, nhắc đến ở nơi AI hay lấy (YouTube, Reddit/diễn đàn, Wikipedia/Wikidata nếu đủ điều kiện, báo chí, danh bạ ngành). Quan hệ: nhắc thương hiệu tương quan với hiển thị AI mạnh hơn liên kết ngược theo một số nghiên cứu ngành (kiểm lại nguồn). Cách xây: nội dung hữu ích tham gia cộng đồng đúng cách, PR có thật, video, hồ sơ chuyên gia. **Không** dựng hồ sơ/đánh giá giả; không spam diễn đàn. Wikipedia không khả thi nếu chưa có đưa tin độc lập.

## 5. Theo nền tảng
| Nền tảng | Cần |
|---|---|
| Google AI Overviews | xếp hạng top 10 theo truy vấn, đoạn trả lời trực tiếp, schema đúng, E-E-A-T, nguồn chính thống, nội dung mới |
| ChatGPT (search) | cho OAI-SearchBot/ChatGPT-User, hiện diện trong chỉ mục Bing, thực thể rõ, nội dung dễ trích, tác giả |
| Perplexity | cho PerplexityBot, nguồn gốc/chính thống, cập nhật mới, thảo luận cộng đồng (Reddit/diễn đàn), trích dẫn nguồn |
| Gemini | hệ sinh thái Google (YouTube, hồ sơ, Knowledge Graph), nội dung đa phương tiện |
| Bing Copilot | Bing Webmaster đã xác minh, IndexNow, sitemap, hệ sinh thái Microsoft (LinkedIn) |
Kiểm tra thực tế khi có thể: hỏi từng nền tảng các truy vấn mục tiêu và ghi ai được trích (công cụ tìm kiếm kiểu API thường không thấy AI Overviews; nếu không thấy thì nói "chưa kiểm chứng"). OpenSEO có `run_ai_visibility_check` / theo dõi AI visibility (tốn credit; báo giá bằng `estimate_ai_visibility_cost` trước).

## 6. Kỹ thuật cho AI
Nội dung quan trọng phải có trong HTML gốc (SSR/SSG): crawler AI thường không chạy JavaScript. Trang công cụ client-render cần khối giới thiệu phía máy chủ. Tốc độ phản hồi nhanh, không chặn bot bằng thử thách JS. Dữ liệu có cấu trúc ở `05`.

## 7. Theo dõi tiến bộ (`/geo compare`)
Lưu điểm cơ sở và đo lại hàng tháng; ghi hành động đã làm, thay đổi điểm theo nhóm, truy vấn AI nào bắt đầu trích dẫn. Cùng dòng GA4: nguồn "AI assistant/referral" và các domain chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai.

## Giao hàng cho khách (nếu làm dịch vụ)
`/geo report` (báo cáo), `/geo report-pdf` (PDF cần pandoc + Chrome), `/geo proposal` (đề xuất gói Basic/Standard/Premium), `/geo prospect` (theo dõi khách tiềm năng). Giá, điều khoản, cam kết kết quả do người dùng quyết; không hứa "chắc chắn được AI trích".
