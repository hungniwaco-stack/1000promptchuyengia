# Báo cáo tối ưu SEO — 1000 Prompt Chuyên Gia
**Ngày thực hiện:** 22/08/2026 · **Phạm vi:** Website (Next.js) + Bing/AI search + Google Search Console

---

## 1. Tóm tắt

Đã đọc toàn bộ codebase, đối chiếu với site đang chạy (commit mới nhất `9229cfa`, 20/07/2026), và sửa trực tiếp 7 file code + tạo 15 file ảnh tối ưu. Phát hiện lớn nhất: **ảnh trên trang chủ nặng gấp ~40 lần mức cần thiết**, làm chậm tốc độ tải — đây là điểm trừ SEO kỹ thuật nghiêm trọng nhất, nặng hơn cả các việc đã ghi trong CLAUDE.md trước đó.

| Hạng mục | Trước | Sau session này |
|---|---|---|
| Kỹ thuật (tốc độ, ảnh, favicon) | Yếu — chưa ai phát hiện | Đã sửa phần lớn |
| Schema/AEO | Khá tốt | Tốt hơn (thêm Organization, sameAs, Breadcrumb) |
| GEO (llms.txt) | Có nhưng sai thông tin | Đã sửa chính xác + đầy đủ 30 bài |
| Nội dung mới | — | **Dừng từ 27/07, chưa viết tiếp** (26 ngày) |
| Bing / GSC | Chưa setup | Cần bạn tự làm (hướng dẫn bên dưới) |

---

## 2. Đã sửa trực tiếp trong code (đã ghi vào máy bạn)

### 2.1. Tối ưu ảnh — tác động lớn nhất đến tốc độ tải trang
Ảnh gốc trong `public/images/` rất nặng vì chưa từng được nén cho web. Đã tạo bản `.webp`/`.jpg` mới **bên cạnh** file gốc (không xoá/ghi đè file cũ theo đúng nguyên tắc trong CLAUDE.md), rồi trỏ code sang dùng bản mới:

| File | Trước | Sau | Giảm |
|---|---|---|---|
| `banner.png` → `banner.webp` (ảnh hero) | 1.77 MB | 87 KB | 95% |
| `logo.png` → `logo.webp` (dùng ở mọi trang) | 847 KB | 8.5 KB | 99% |
| 10× `pack-XX.png` → `pack-XX.webp` | ~1.8 MB/ảnh (~18 MB tổng) | ~45 KB/ảnh (~450 KB tổng) | 97.5% |
| Ảnh chia sẻ mạng xã hội | Không có (dùng nhầm banner tỷ lệ 2.4:1) | `og-image.jpg` chuẩn **1200×630** | Mới |

**Tổng dung lượng ảnh trên trang chủ giảm từ ~20.6 MB xuống ~0.55 MB (giảm ~97%).** Đây là nguyên nhân chính khiến Core Web Vitals (LCP) — một yếu tố xếp hạng của Google — trước đây chắc chắn ở mức kém, đặc biệt với khách dùng mạng di động.

*File đã sửa: `app/page.tsx`, `app/bai-viet/page.tsx`, `app/bai-viet/[slug]/page.tsx`, `app/products.ts`, `app/layout.tsx`.*

### 2.2. Thêm favicon (icon tab trình duyệt)
Website trước đây **không có favicon** — không có `app/icon.png` hay bất kỳ file icon nào. Đã tạo `app/icon.png` (512×512, từ logo) theo đúng convention của Next.js App Router để tự động sinh favicon.

### 2.3. Chuẩn hoá ảnh Open Graph / Twitter Card
`layout.tsx` trước đây dùng `banner.png` (1942×809, tỷ lệ sai) làm ảnh chia sẻ Facebook/Zalo — dễ bị crop xấu. Đã đổi sang `og-image.jpg` đúng chuẩn 1200×630, đồng thời **thêm ảnh chia sẻ riêng cho từng bài blog** (`app/bai-viet/[slug]/page.tsx` trước đây không có ảnh OG nào cho bài viết).

### 2.4. Chuẩn bị sẵn xác minh Bing Webmaster Tools
Thêm cơ chế đọc biến môi trường `BING_VERIFICATION_CODE` trong `app/layout.tsx` — chỉ cần bạn lấy mã thật từ Bing rồi set trên Vercel (hướng dẫn ở mục 3), không cần sửa code lần nữa.

### 2.5. Nâng cấp Schema (JSON-LD) cho E-E-A-T
- Thêm **Organization schema** với `sameAs` trỏ về Facebook chính thức (`facebook.com/huuhungai`) và `ContactPoint` (hotline, email) — giúp Google/AI hiểu đây là thực thể kinh doanh có thật.
- Thêm `sameAs` vào Person schema (Hữu Hùng).
- Thêm **BreadcrumbList** cho mỗi bài blog.
- Thêm `image`, `dateModified`, `mainEntityOfPage` vào Article schema (trước đây thiếu, làm giảm khả năng lên rich result).
- Sửa `image` trong Product schema từ banner sai tỷ lệ sang `og-image.jpg`.

⚠️ **Cần bạn quyết định:** `comboProductSchema` đang có `aggregateRating` (5 sao, reviewCount: 3) và 3 review mẫu. Google **chỉ cho phép** review/rating trong structured data nếu là review thật, có thể xác minh. Đã ghi chú cảnh báo ngay trong code (`app/SchemaMarkup.tsx`). Nếu 3 review này chưa xin phép khách hàng thật hoặc không có bằng chứng (ảnh chụp màn hình, link Facebook), nên thay bằng review thật hoặc gỡ `aggregateRating`/`review` khỏi schema để tránh rủi ro bị Google phạt/gỡ rich snippet — mình chưa tự xoá vì đây là quyết định nội dung, không phải lỗi kỹ thuật.

### 2.6. Sửa `public/llms.txt` — thông tin sai lệch quan trọng
File này hướng dẫn AI (ChatGPT, Claude, Gemini, Perplexity) hiểu về thương hiệu khi họ crawl site — nhưng đang **sai 2 điểm cốt lõi**:
- Ghi "giao hàng qua Google Drive" — thực tế giao hàng qua **email tự động** (đã xác nhận trong `chinh-sach-giao-file/page.tsx` và `AGENTS.md`). Google Drive chỉ dùng cho quà tặng miễn phí trong bài blog.
- Ghi "hỗ trợ qua Facebook Messenger" — thực tế là **hotline/Zalo 0944 851719 và email hatmuadem@gmail.com**.
- Danh sách bài viết chỉ có 11/30 bài, ngày cập nhật ghi 20/7 dù đã hơn 1 tháng.

Nếu AI trả lời sai về cách nhận hàng/liên hệ, khách hàng sẽ bối rối hoặc mất niềm tin — đã sửa lại chính xác 100% và liệt kê đủ 30 bài, tăng khả năng được AI trích dẫn đúng.

---

## 3. Việc bạn cần tự làm (không thể làm thay từ đây)

### 3.1. Đẩy code lên GitHub (bắt buộc để các fix ở trên có hiệu lực)
Mở PowerShell:
```powershell
cd D:\Hungniwaco\CODEX\1000-Prompt-Website
del .git\index.lock
git add .
git commit -m "seo: toi uu anh, favicon, schema, llms.txt"
git push
```
*(Có 1 file khoá `.git/index.lock` còn sót lại từ trước — lệnh `del` ở trên sẽ dọn nó, nếu không `git add` sẽ báo lỗi.)*

Sau khi Vercel deploy xong (vài phút), vào https://www.1000promptchuyengia.shop kiểm tra:
- Tab trình duyệt có favicon chưa.
- Dán link trang chủ vào https://developers.facebook.com/tools/debug/ → bấm "Scrape Again" để Facebook lấy lại ảnh chia sẻ mới (1200×630).

### 3.2. Setup Bing Webmaster Tools (30 phút — chưa làm từ trước)
Quan trọng vì **ChatGPT Search và Microsoft Copilot dùng chỉ mục của Bing** — không có trên Bing nghĩa là gần như vô hình với 2 kênh AI này.
1. Vào https://www.bing.com/webmasters, đăng nhập bằng tài khoản Microsoft.
2. "Add a site" → nhập `https://www.1000promptchuyengia.shop`.
3. Chọn xác minh bằng **HTML Meta Tag** → copy phần `content="..."` trong thẻ họ đưa ra.
4. Vào Vercel → Project Settings → Environment Variables → thêm `BING_VERIFICATION_CODE` = mã vừa copy → Save → Redeploy.
5. Quay lại Bing Webmaster bấm "Verify".
6. Sau khi verify: vào mục Sitemaps → submit `https://www.1000promptchuyengia.shop/sitemap.xml`.

### 3.3. Google Search Console — việc định kỳ
- Sau mỗi lần deploy có bài mới: vào https://search.google.com/search-console → "Kiểm tra URL" → dán URL bài mới → "Yêu cầu lập chỉ mục".
- Vào mục **Core Web Vitals / Trải nghiệm trang** để xem điểm tốc độ có cải thiện sau khi ảnh được nén (nên kiểm tra lại sau ~1-2 tuần Google crawl lại).
- Vào mục **Coverage** kiểm tra xem 30 bài blog + các trang chính sách đã được index đủ chưa.

### 3.4. Rà lại review thật (mục 2.5 ở trên)
Nếu muốn giữ sao đánh giá hiển thị trên Google, cần xin phép 3 khách hàng dùng làm review thật (ảnh chụp tin nhắn/Facebook), hoặc cho biết để mình gỡ `aggregateRating` khỏi schema.

---

## 4. Khoảng trống lớn nhất còn lại: nội dung ngừng cập nhật

Bài blog gần nhất đăng **27/07/2026**. Hôm nay là **22/08/2026** — **26 ngày không có bài mới, không có commit nào lên GitHub**. Với một site đang xây content cluster AEO (30 bài, 1 pillar + nhiều spoke), khoảng dừng này sẽ khiến:
- Google giảm dần tần suất crawl vì thấy site "ít cập nhật".
- Mất đà tích luỹ backlink/entity mà content cluster đang xây.

Đây là ưu tiên **quan trọng hơn kỹ thuật** ở giai đoạn tiếp theo. Nếu bạn muốn, mình có thể lên kế hoạch Phase 3 nội dung (chủ đề, lịch đăng, từ khoá AEO mới) trong một phiên làm việc riêng — nhắn cho mình khi sẵn sàng.

---

## 5. Checklist nhanh

- [ ] Chạy 3 lệnh git ở mục 3.1 để đẩy code lên
- [ ] Kiểm tra site live sau khi Vercel deploy xong (favicon, tốc độ tải, ảnh chia sẻ)
- [ ] Scrape lại link trên Facebook Debugger
- [ ] Setup Bing Webmaster Tools + set `BING_VERIFICATION_CODE` trên Vercel
- [ ] Submit sitemap cho Bing
- [ ] Yêu cầu lập chỉ mục vài URL quan trọng trên Google Search Console
- [ ] Quyết định giữ/gỡ aggregateRating (review thật hay không)
- [ ] Lên kế hoạch nội dung blog tiếp theo (Phase 3)
