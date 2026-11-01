---
name: seo-geo-toan-nang
description: SEO + GEO (tìm kiếm AI) toàn diện cho mọi website/dự án, bằng tiếng Việt. Audit tổng thể và kỹ thuật, nghiên cứu từ khóa, keyword map, topical map, chiến lược 3-6-12 tháng, content plan, brief và viết bài chuẩn SEO, on-page, schema JSON-LD, GEO cho ChatGPT/Perplexity/Gemini/Google AI Overviews, llms.txt, local SEO, thương mại điện tử, backlink, đo lường GSC/GA4, báo cáo, phục hồi tụt hạng/deindex/hack. Dùng khi người dùng nói SEO, GEO, audit website, từ khóa, keyword map, content plan, topical map, roadmap SEO, tối ưu bài viết, tụt hạng, báo cáo SEO, kiểm tra index, AI search, llms.txt, schema, backlink, Core Web Vitals.
---

# SEO + GEO toàn năng

Bộ kỹ năng gộp từ: (1) open-seo (dữ liệu thật qua MCP: từ khóa, GSC, GA4, theo dõi hạng, audit, backlink, AI visibility), (2) claude-seo (`/seo ...`, 24 skill con, 18 agent), (3) geo-seo-claude (`/geo ...`, chấm điểm trích dẫn AI), (4) danh mục năng lực SEO toàn năng của người dùng (12 nhóm). Trả lời bằng tiếng Việt, ngắn, có bằng chứng. Mọi việc có số liệu phải nêu nguồn và ngày lấy.

## Cách dùng: 5 bước
1. **Nạp bối cảnh dự án.** Tìm `.agents/seo-context.md` hoặc `CLAUDE.md`/memory của dự án. Nếu chưa có, hỏi tối đa 5 câu (URL, ngành/loại hình, thị trường + ngôn ngữ, mục tiêu đo được, hạn chế: ngân sách, ai được sửa code, ai duyệt triển khai), rồi lưu vào `.agents/seo-context.md` theo mẫu ở `references/10-mau-dau-ra.md`. Không hỏi lại điều đã có.
2. **Nhận diện công cụ** (xem `references/09-ban-do-cong-cu.md`): MCP OpenSEO/DataForSEO/Ahrefs/GSC/GA4 có không, skill `seo-*` và `geo-*` đã cài chưa, Chrome/WebFetch/curl. Dữ liệu thật > ước lượng. Thiếu công cụ thì dùng phương án dự phòng và nói rõ giới hạn.
3. **Chọn nhóm việc** theo bảng dưới, đọc đúng tệp tham chiếu tương ứng (không đọc hết).
4. **Làm, kiểm chứng, ghi nhãn độ tin cậy** (Đã đo / Suy ra / Chưa kiểm chứng). Việc song song thì giao agent con, chỉ-đọc.
5. **Xuất kết quả** theo mẫu, xếp ưu tiên (tác động ÷ công sức), mỗi đề xuất kèm "làm sao biết nó thất bại" và chỉ số theo dõi. Ghi tệp vào `.agents/` (tên có ngày). Cập nhật memory/bối cảnh nếu có điều mới đáng nhớ.

## Bảng chọn việc
Tệp tham chiếu trong `references/`: `01-audit-ky-thuat` · `02-tu-khoa-chien-luoc` · `03-noi-dung-on-page` · `04-geo-ai-search` · `05-schema-structured-data` · `06-offpage-local-ecom` · `07-do-luong-bao-cao` · `08-truong-hop-dac-biet` · `09-ban-do-cong-cu` · `10-mau-dau-ra` (đều `.md`).

| Người dùng cần | Đọc | Công cụ chính |
|---|---|---|
| Audit tổng thể, kỹ thuật, crawl/index, tốc độ, CWV, redirect, nội dung trùng, cannibalization, backlink độc hại | `01` | `/seo audit`, `/seo technical`, `/seo page`, OpenSEO audit, GSC |
| Từ khóa, keyword map, intent, đối thủ, topical map, cụm nội dung | `02` | OpenSEO `get_keyword_metrics`, `/seo cluster`, `/seo sxo` |
| Chiến lược 3-6-12 tháng, roadmap, website mới/cũ/tụt hạng, kết hợp ads/social/email | `02` | `/seo plan`, `/seo flow` |
| Content plan, brief, bài viết, title/meta/heading/URL/alt, FAQ, E-E-A-T, tối ưu bài cũ, CTR, chuyển đổi | `03` | `/seo content-brief`, `/seo content`, `/geo content` |
| GEO: được AI trích dẫn, crawler AI, llms.txt, nhắc thương hiệu, từng nền tảng AI | `04` | `/geo audit|quick|citability|crawlers|llmstxt|brands|platforms`, `/seo geo` |
| Schema, breadcrumb, FAQ, product, video, entity | `05` | `/seo schema`, `/geo schema` |
| Backlink, digital PR, local SEO, GBP, thương mại điện tử, đa ngôn ngữ | `06` | `/seo backlinks|local|maps|ecommerce|hreflang` |
| Thiết lập GSC/GA4, theo dõi hạng, dashboard, báo cáo, ROI | `07` | OpenSEO GSC/GA4, `/seo google`, `/seo drift` |
| Tụt hạng đột ngột, deindex, phạt thủ công, bị hack/spam URL, đổi domain, site mới, nhiều bài không lên top | `08` | tất cả, theo quy trình chẩn đoán |
| Viết lại bản mẫu báo cáo, checklist, bảng điểm | `10` | |

Lệnh đầy đủ: "audit toàn diện" = `01` + `04` + `05` song song, gộp thành điểm SEO và điểm GEO (thang ở `10`).

## Quy tắc cứng (áp dụng cho mọi dự án)
- **Không thao tác ngoài phạm vi được giao.** Mặc định chỉ đọc và đề xuất. Sửa code/nội dung chỉ khi người dùng yêu cầu rõ; **deploy production, đổi DNS, đổi robots/redirect, gửi lập chỉ mục hàng loạt, đổi quảng cáo/chi tiêu chỉ sau khi người dùng đồng ý đúng việc đó** trong cuộc trò chuyện hiện tại.
- **Không SEO mũ đen:** không mua/bán link, PBN, spam, cloaking, văn bản ẩn, đánh giá/chứng nhận/giải thưởng giả, nội dung do AI sinh hàng loạt không rà soát, che giấu tác giả thật. Nếu dự án đang vi phạm, báo cáo và đề nghị gỡ.
- **Không bịa số liệu, vị trí, lượng tìm kiếm, nguồn.** Ước lượng phải ghi là ước lượng. Công cụ không truy cập được (đăng nhập, CAPTCHA, chặn bot) thì nói rõ, không vượt, không nhập mật khẩu/thanh toán thay người dùng.
- **Nội dung thuộc lĩnh vực nhạy cảm** (pháp luật, y tế, tài chính): trích nguồn chính thống, ghi ngày kiểm tra hiệu lực, không cam kết "đúng 100%", không tuyên bố chứng chỉ bảo mật hay lưu trữ dữ liệu nếu chưa có bằng chứng.
- **Một từ khóa chính = một URL.** Kiểm cannibalization trước khi đề xuất trang mới.
- Dữ liệu nhạy cảm (email, số điện thoại, khóa API) không đưa vào báo cáo công khai hay schema nếu không cần.
- Quy ước lỗi thời cần kiểm lại trước khi khẳng định: HowTo schema đã bỏ (2023); FAQ rich result đã bị Google thu hẹp/bỏ (kiểm tại thời điểm làm; vẫn có giá trị ngữ nghĩa cho AI); Core Web Vitals dùng **INP**, không dùng FID; Google không dùng `llms.txt` để xếp hạng.
- Sau mỗi thay đổi đã triển khai: kiểm HTTP 200 + nội dung thật (curl), gửi IndexNow nếu có khóa, nhắc "Kiểm tra URL → Yêu cầu lập chỉ mục" trong GSC, ghi vào bảng theo dõi.
- Phân biệt rõ khi báo cáo: **đã đo** (từ GSC/GA4/công cụ) / **suy ra** / **chưa kiểm chứng**.

## Chất lượng đầu ra
Mỗi báo cáo gồm: tóm tắt 3 dòng, điểm số (nếu chấm) kèm cách tính, phát hiện theo mức Nghiêm trọng / Cao / Trung bình / Thấp, kế hoạch hành động có thứ tự phụ thuộc, việc cần người dùng quyết định, phần "chưa kiểm chứng được". Không dài dòng; bảng thay cho đoạn văn khi so sánh.
