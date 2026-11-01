# Báo cáo audit SEO + GEO: www.1000promptchuyengia.shop (01/11/2026)

## Tóm tắt (3 dòng)
Nền kỹ thuật và dữ liệu có cấu trúc khá vững (robots/sitemap/schema Product-Offer-FAQ đầy đủ), nhưng có 1 lỗ hổng kỹ thuật nghiêm trọng: bài viết lên lịch tương lai **truy cập được trực tiếp qua URL trước ngày công bố** (đã kiểm chứng thật). Điểm yếu lớn nhất vẫn là uy tín bên ngoài (0 backlink, 1 mạng xã hội yếu) và rủi ro chính sách từ 3 review 5 sao chưa xác minh trong schema. GEO (sẵn sàng AI search) ở mức trung bình, thiếu bot tìm kiếm quan trọng của ChatGPT.

Điểm: **SEO 55/100 · GEO 50/100 · Schema 66/100** (thang của skill `seo-geo-toan-nang`, không phải chuẩn chính thức của Google — cách tính nêu dưới).

## Phát hiện

### 🔴 NGHIÊM TRỌNG

**1. URL bài viết lên lịch tương lai truy cập được công khai trước ngày công bố**
- Bằng chứng [Đã đo]: truy cập trực tiếp `https://www.1000promptchuyengia.shop/bai-viet/dung-chatgpt-can-bang-cuoc-song-cham-soc-ban-than` (lên lịch 02/11/2026 20h, kiểm tra lúc 01/11/2026) → tải đầy đủ nội dung, không phải 404.
- Nguyên nhân [Đã đo, code]: `app/bai-viet/[slug]/page.tsx` không lọc theo `publishedAt <= now` (chỉ `app/bai-viet/page.tsx` — trang danh sách — mới lọc). `app/sitemap.ts` liệt kê TẤT CẢ bài trong `blogPosts.ts`, kể cả bài chưa tới hạn, vào sitemap công khai.
- Tác động: crawler (Google/Bing/AI) có thể index và trích dẫn nội dung trước khi chủ đích công bố; mất kiểm soát thời điểm "ra mắt" bài, có thể lộ nội dung marketing/giá trước kế hoạch.
- Cách sửa: thêm điều kiện `if (new Date(post.publishedAt) > new Date()) notFound();` vào đầu `BlogPostPage`, và lọc `blogPosts.filter(p => new Date(p.publishedAt) <= new Date())` trong `sitemap.ts` trước khi map URL.
- Công sức: S (nhỏ, 1 file logic + 1 điều kiện sitemap).
- Phụ thuộc: không có.
- Cách biết đã sửa thành công: truy cập trực tiếp 1 URL bài chưa tới hạn → phải ra trang 404; sitemap.xml không còn liệt kê URL đó cho tới đúng giờ.
- Chỉ số theo dõi: không còn bài "chưa đăng" nào lọt vào GSC Coverage trước ngày publishedAt.

**2. 3 review 5 sao trong schema `Product` chưa xác minh là thật**
- Bằng chứng [Đã đo, code `app/SchemaMarkup.tsx` dòng 125-166]: `aggregateRating` (5/5, reviewCount 3) + 3 `Review` (tên viết tắt "Lan N.", "Minh T.", "Hà P.", không link/ảnh xác minh). Chính code đã tự ghi chú cảnh báo rủi ro này (dòng 118-124) nhưng chưa xử lý.
- Tác động: vi phạm chính sách "self-serving reviews" của Google nếu không xác minh được — rủi ro Google gỡ rich snippet hoặc action thủ công.
- Cách sửa (người dùng quyết, xem mục "Cần người dùng quyết định"): (a) thay bằng review thật có bằng chứng (ảnh chụp/link MXH, đã xin phép khách), hoặc (b) gỡ `aggregateRating` + `review` khỏi JSON-LD, giữ lại dạng text thường trên trang (không đánh dấu structured data).
- Công sức: S nếu gỡ, M nếu thay bằng review thật (cần thu thập từ khách).
- Chỉ số theo dõi: Search Console → "Trải nghiệm" / cảnh báo structured data không còn báo lỗi review.

### 🟠 CAO

**3. `lastModified` trong sitemap dùng ngày build (`new Date()`) thay vì ngày thật**
- Bằng chứng [Đã đo, code `app/sitemap.ts` dòng 9-18]: trang chủ và `/bai-viet` dùng `lastModified: new Date()` — đổi theo mỗi lần Vercel build, không phản ánh ngày nội dung thực sự đổi.
- Tác động: Google có thể giảm tần suất crawl lại vì tín hiệu "mới" không đáng tin; sai lệch với khuyến nghị kỹ thuật Next.js trong skill.
- Cách sửa: đặt mốc thời gian cố định, chỉ cập nhật thủ công khi nội dung trang đó thực sự đổi (không phải mỗi lần deploy).
- Công sức: S.

**4. Thiếu `OAI-SearchBot` trong robots.txt — bot tìm kiếm/trích dẫn của ChatGPT**
- Bằng chứng [Đã đo, live robots.txt + code `app/robots.ts`]: đã có `GPTBot` (huấn luyện) và `ChatGPT-User` (duyệt web theo yêu cầu người dùng), nhưng thiếu `OAI-SearchBot` — bot chuyên cho tính năng ChatGPT Search/trích dẫn trong câu trả lời.
- Tác động: giảm khả năng được ChatGPT Search trích dẫn trực tiếp (khác với bị chặn huấn luyện — đây là mất cơ hội hiển thị khi người dùng ChatGPT tìm kiếm).
- Cách sửa: thêm rule `{ userAgent: "OAI-SearchBot", allow: "/" }` vào `app/robots.ts`. Cân nhắc thêm `Applebot-Extended` (Apple Intelligence) nếu muốn phủ rộng hơn — ưu tiên thấp hơn cho thị trường VN.
- Công sức: S.

**5. Uy tín thương hiệu bên ngoài rất mỏng**
- Bằng chứng [Đã đo, đã ghi nhận từ phiên trước]: `sameAs` trong schema chỉ có 1 link Facebook (huuhungai, 29 follower, 2 bài, bị gắn nhãn "Nội dung do AI tạo"). 0 backlink đo được qua Bing Webmaster Tools.
- Tác động: AI (GEO) và Google đều dùng tín hiệu thực thể/nhắc-đến bên ngoài để đánh giá độ tin cậy — hiện gần như không có.
- Cách sửa: không code hộ được — cần nội dung/PR/kênh thật (đã có lộ trình 8 tuần cho fanpage từ phiên 02/9, xem `CLAUDE.md`).

### 🟡 TRUNG BÌNH

**6. Thiếu header bảo mật tuỳ chỉnh (HSTS/CSP/X-Frame-Options/Referrer-Policy/Permissions-Policy)**
- Bằng chứng [Suy ra từ code]: không có file `next.config.*` nào trong repo để khai báo `headers()` — Vercel có thể tự thêm một số header mặc định nhưng không đầy đủ CSP/X-Frame-Options/Permissions-Policy. [Chưa kiểm chứng trực tiếp header live — WebFetch không đọc được raw response header].
- Tác động: thấp tới SEO trực tiếp, nhưng ảnh hưởng điểm bảo mật/Core Web Vitals phụ và rủi ro clickjacking nhẹ.
- Cách sửa: thêm `next.config.ts` với `headers()` trả về các header cơ bản.
- Công sức: S.

**7. `llms.txt` chưa đúng 100% định dạng chuẩn (thiếu dòng tóm tắt `>` ngay sau H1)**
- Bằng chứng [Đã đo, `public/llms.txt` dòng 1-3]: 2 dòng đầu đều bắt đầu bằng `#` (tiêu đề + dòng mô tả), không có dòng `>` tóm tắt theo đúng spec llms.txt.
- Tác động: thấp (Google không dùng để xếp hạng; một số hệ thống AI parse llms.txt có thể bỏ qua phần không đúng cấu trúc).
- Cách sửa: đổi dòng 2 thành `> Hữu Hùng AI là đơn vị cung cấp 1000+ prompt AI chuyên nghiệp bằng tiếng Việt...` (dạng blockquote).
- Công sức: S.

**8. Schema tác giả (`Person`) thiếu `sameAs`/`jobTitle` riêng**
- Bằng chứng [Đã đo, `app/bai-viet/[slug]/page.tsx`]: `author: { "@type": "Person", name: "Nguyen Huu Hung", url: BASE_URL }` — thiếu `sameAs` hồ sơ cá nhân và `jobTitle`, dùng chung URL trang chủ thay vì trang tác giả riêng.
- Tác động: giảm điểm E-E-A-T/thực thể tác giả.
- Cách sửa: tạo trang "Về Hữu Hùng" riêng (đã note từ trước là thiếu), trỏ `url` author về đó + thêm `sameAs`.

### ⚪ THẤP

**9. `seller` trong Offer là `Person` thay vì `Organization`**
- Nhất quán thương hiệu sẽ tốt hơn nếu `seller` trỏ về cùng `Organization` dùng cho `publisher`/`Organization` schema (qua `@id`) thay vì tạo `Person` riêng. Không bắt buộc, ảnh hưởng rất nhỏ.

## Cách tính điểm

**SEO 55/100** (trọng số theo thang skill): Kỹ thuật 62×22% + Nội dung/E-E-A-T 48×23% + On-page 72×15% + Hiệu năng/mobile 70×10% [Suy ra, chưa đo lại CWV] + Dữ liệu cấu trúc 60×10% + Uy tín ngoài 15×10% + Sẵn sàng AI 55×10% = **55,5/100**.

**GEO 50/100** (thang riêng mục `04`): Citability 70×25% + Uy tín ngoài 15×20% + E-E-A-T 40×20% + Kỹ thuật 65×15% + Dữ liệu cấu trúc 60×10% + Theo nền tảng 55×10% = **49,75/100**.

**Schema 66/100** (thang mục `05`): Tổ chức 20/20 + Bài viết 15/15 + Tác giả 7/15 + sameAs 5/15 + speakable 0/10 + Breadcrumb 5/5 + WebSite 5/5 + Không dùng loại lỗi thời 5/5 + Hợp lệ cú pháp 4/5 [chưa chạy Rich Results Test thật] = 66/100.

## Kế hoạch hành động (thứ tự phụ thuộc)

**Tuần 1 (không phụ thuộc gì, làm ngay):**
1. Chặn truy cập bài chưa tới hạn (`notFound()` trong `[slug]/page.tsx`) + lọc sitemap theo ngày — việc #1, Nghiêm trọng.
2. Quyết định hướng xử lý review/aggregateRating (#2) — cần người dùng chọn phương án trước khi sửa code.
3. Sửa `lastModified` sitemap (#3).
4. Thêm `OAI-SearchBot` vào robots.txt (#4).
5. Sửa định dạng `llms.txt` (#7).

**Tuần 2-4:**
6. Thêm `next.config.ts` với security headers cơ bản (#6).
7. Tạo trang "Về Hữu Hùng" + cập nhật schema tác giả (#8) — gắn với việc thu thập ảnh/video thật đã note từ trước.

**Tháng 2-3 (phụ thuộc nội dung/PR thật, không code hộ được):**
8. Xây uy tín bên ngoài: fanpage gỡ nhãn AI theo lộ trình 8 tuần đã có, thu thập review/case study thật, tìm cơ hội được nhắc đến trên kênh/diễn đàn liên quan.

## Cần người dùng quyết định
- Review/aggregateRating trong schema: gỡ ngay, hay chờ thu thập review thật rồi thay? (ảnh hưởng tới việc có nên sửa code #2 ngay tuần này không)
- Có muốn mình sửa luôn 5 việc "Tuần 1" (đều là sửa code, công sức nhỏ) trong phiên này không, hay để anh duyệt từng việc?

## Chưa kiểm chứng được
- Core Web Vitals thực tế (LCP/INP/CLS) — chưa chạy lại PageSpeed/CrUX trong phiên này, dựa vào audit ảnh webp đã làm 22/8 để suy ra cải thiện, không phải số đo mới.
- Header bảo mật response thật (chỉ suy ra từ việc thiếu cấu hình trong code).
- Dữ liệu GSC/GA4 thật (impression, CTR, vị trí) — không có MCP kết nối trong phiên này để đo trực tiếp.
- Rich Results Test / Schema.org Validator thật cho từng loại trang — chưa chạy công cụ kiểm định chính thức.
