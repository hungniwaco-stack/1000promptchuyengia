# Project Memory — 1000 Prompt Website

## Thông tin cơ bản
- **Owner:** Nguyen Huu Hung — hungniwaco@gmail.com
- **Domain:** www.1000promptchuyengia.shop
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Hosting:** Vercel (deploy bằng git push)
- **Repo local:** `D:\Hungniwaco\CODEX\1000-Prompt-Website`
- **Shell path (sandbox):** `/sessions/sharp-focused-franklin/mnt/1000-Prompt-Website/`

## Cấu trúc dữ liệu bài viết
File nguồn: `app/blogPosts.ts`

```ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO datetime "2026-07-01T07:00:00+07:00" hoặc "YYYY-MM-DD"
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
  giftLink?: string;       // Google Drive link 30 prompt miễn phí
  giftLinkLabel?: string;  // Tên bộ prompt tặng
};
```

**Filter bài đã xuất bản (`app/bai-viet/page.tsx`):**
```ts
const now = new Date();
const publishedPosts = blogPosts.filter((p) => new Date(p.publishedAt) <= now);
```
> Dùng `force-dynamic` để lọc theo giờ thực, không dùng string comparison.

## Lịch đăng bài (1 bài/ngày lúc 6h45 sáng giờ VN — từ 16/7/2026)
| Pack | Slug | publishedAt | giftLink (doc ID) |
|------|------|------------|-------------------|
| 1 | 100-prompt-kinh-doanh-startup | 2026-06-26T07:00:00+07:00 | 1ScW0ar_Gb-2qTd1KhLh6w6zjxzzHSjzY |
| 2 | 100-prompt-tai-chinh-dau-tu | 2026-06-30T18:00:00+07:00 | 1gd-hvgWFOWD7Obi4isCrlIYFXWezk3m8 |
| 3 | 100-prompt-marketing-thuong-hieu | 2026-07-01T07:00:00+07:00 | 1cVgpFRzcWFXvbiwFX2-Vt9c4B3d-2KcW |
| 4 | 100-prompt-ban-hang-dam-phan | 2026-07-01T18:00:00+07:00 | 1DBLB6r7TJA-1QDeSBRfEu2wqrD_Q71pT |
| 5 | 100-prompt-phat-trien-ban-than-nang-suat | 2026-07-02T07:00:00+07:00 | 1J2xWAS1rs9g0ELYC_Z_1hiIb7XASW0z9 |
| 6 | 100-prompt-lanh-dao-quan-ly-doi-nhom | 2026-07-02T18:00:00+07:00 | 1kCaVlHETVDwVBg78ZdjnXuDCQP02XY7q |
| 7 | 100-prompt-kiem-tien-online-thu-nhap-thu-dong | 2026-07-03T07:00:00+07:00 | 1-78QCHc8ruBvqSD_DuXlkDOYgyo41zbp |
| 8 | 100-prompt-ai-cong-nghe-kinh-doanh | 2026-07-03T18:00:00+07:00 | 1o7mM8OtAX7XYmCU4n7vbedmbJtZlGQ9L |
| 9 | 100-prompt-cuoc-song-hanh-phuc | 2026-07-04T07:00:00+07:00 | 1sgMKw6SqYKsBTELCl0vhgPIDaFMZigZR |
| 10 | 100-prompt-fusion-da-linh-vuc | 2026-07-04T18:00:00+07:00 | 1P0lBIapfakEqb_xGzWvJd1syqqyOgOzY |
| - | cach-viet-prompt-ai-hieu-qua | 2026-06-04 | (không có gift) |
| - | ung-dung-ai-trong-kinh-doanh-nho | 2026-06-04 | (không có gift) |
| - | checklist-chon-cong-cu-ai-phu-hop | 2026-06-04 | (không có gift) |

**Format giftLink đầy đủ:**
`https://docs.google.com/document/d/{ID}/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true`

## Nguồn nội dung bài viết (docx)
Thư mục thứ hai được mount:
- Windows: `D:\Hungniwaco\1000 CÂU PROMPT SIÊU CẤP VIP PRO\Nội dung Đăng từ ngày (26.6.2026)\Bài viết Website`
- Sandbox: `/sessions/sharp-focused-franklin/mnt/Bài viết Website/`

Các file: `Bai 1 - Pack 1.docx` → `Bai 10 - Pack 10.docx`

## Git workflow — CONFIRMED WORKING

**Sandbox KHÔNG thể tự push** — không có TTY để nhập credentials. Mọi push phải chạy từ PowerShell của user.

**Workflow chuẩn sau mỗi lần tôi sửa xong:**
```powershell
cd D:\Hungniwaco\CODEX\1000-Prompt-Website
git add .
git commit -m "mô tả thay đổi"
git push
```
Windows Credential Manager nhớ token sau lần đăng nhập đầu tiên → những lần sau không cần nhập lại.

**Vấn đề thường gặp:**
- `.git/index.lock` hoặc `.git/HEAD.lock` → chạy `del .git\index.lock` từ PowerShell
- `git add` không có dấu chấm → phải là `git add .` (có dấu chấm)
- `.git` là thư mục ẩn trên Windows → mở bằng `notepad .git\config` trong PowerShell

**KHÔNG làm:**
- Đừng nhúng GitHub token vào URL git config — sandbox không push được dù có token trong URL
- Đừng chụp màn hình terminal khi token đang hiển thị — token bị lộ phải revoke ngay
- Đừng dùng `Read-Host "TOKEN"` — đặt token làm prompt text thay vì input
- Sandbox không thể edit `.git/config` qua Edit tool (protected location) — dùng bash hoặc notepad

**Remote URL sạch (không nhúng token):**
`https://github.com/hungniwaco-stack/1000promptchuyengia.git`

## Bài học kỹ thuật quan trọng
1. **Không dùng Python script để replace nội dung lớn trong file TypeScript** — dễ bị truncate. Dùng Write tool (ghi toàn bộ file) hoặc Edit tool (thay đoạn nhỏ).
2. **`force-dynamic` bắt buộc** cho các page lọc theo thời gian — không có nó Next.js cache kết quả build.
3. **So sánh datetime:** dùng `new Date(p.publishedAt) <= new Date()`, không dùng string comparison `p.publishedAt <= today`.
4. **Hiển thị ngày:** dùng `.slice(0, 10)` để cắt bỏ phần giờ trong ISO string khi render.
5. **Gift link block** nằm trong `app/bai-viet/[slug]/page.tsx`, hiển thị có điều kiện `{post.giftLink && ...}`.
6. **PowerShell `@` splatting:** URL chứa `@github.com` bị PowerShell hiểu là splat operator → bọc toàn bộ URL trong dấu ngoặc kép `"..."`.
7. **`git remote set-url` với token trong URL vẫn fail từ sandbox** — git tách username/token và hỏi password riêng qua TTY → không dùng cách này.
8. **Vercel MCP** trả về 403 cho project này — không dùng được `deploy_to_vercel`. Deploy tự động qua GitHub khi push.
9. **File blogPosts.ts bị duplicate content sau nhiều lần append:** Luôn kiểm tra `grep -n '^\];' app/blogPosts.ts` sau khi append. Nếu có 2 dòng `];` → dùng Python đọc file với `errors='replace'`, giữ lines đến trước `];` đầu tiên, ghi lại sạch.
10. **Lịch đăng bài:** Sáng **6h45** và tối **19h15** giờ Việt Nam (UTC+7). Format: `T06:45:00+07:00` và `T19:15:00+07:00`. Đổi hàng loạt bằng `sed -i 's/T07:00:00/T06:45:00/g; s/T18:00:00/T19:15:00/g'`.
11. **Schema `offers` cần 3 trường bổ sung** để tránh cảnh báo vàng trong Search Console: `validFrom`, `shippingDetails` (OfferShippingDetails với deliveryTime), `hasMerchantReturnPolicy` (MerchantReturnNotPermitted cho sản phẩm số).
12. **Google Search Console — đã setup:** Sitemap `/sitemap.xml` đã submit thành công ngày 15/7/2026, phát hiện 30 trang. Sau mỗi lần push bài mới, vào Search Console → Kiểm tra URL → Yêu cầu lập chỉ mục cho từng bài quan trọng.
13. **Khi append bằng heredoc (`cat >>`)** — luôn kiểm tra tail -10 sau đó. Heredoc đôi khi bị encoding issue với ký tự tiếng Việt trên một số môi trường → dùng Python script thay thế nếu file bị corrupt.
14. **PowerShell `&&` KHÔNG hoạt động** trên PowerShell 5 (mặc định Windows) — token `&&` không phải statement separator hợp lệ. **LUÔN hướng dẫn chạy từng lệnh riêng:**
    ```powershell
    git add .
    git commit -m "mô tả"
    git push
    ```
    Không bao giờ viết `git add . && git commit ... && git push` trong hướng dẫn cho user.

## AEO + GEO — Trạng thái đã làm (cập nhật 2026-07-19)

**Đã hoàn thành (Phase 1 — AEO/SEO):**
- `app/SchemaMarkup.tsx` — có đủ 5 schema: WebSite, Product + AggregateRating, FAQPage, ItemList (10 packs), Person (Hữu Hùng). **Không cần làm lại.**
- `app/bai-viet/[slug]/page.tsx` — có JSON-LD Article schema + canonical URL cho từng bài.
- `app/robots.ts` — đã nâng cấp: 8 AI bot directives (GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, Google-Extended, PerplexityBot, CCBot, meta-externalagent) + rules dạng array.
- `app/sitemap.ts` — sửa baseUrl thành `https://www.1000promptchuyengia.shop`.
- Meta description trong `layout.tsx` — đã viết lại dạng câu trả lời trực tiếp AI có thể trích.
- FAQ: 9 câu (5 vận hành + 4 AEO).
- 25 bài blog tổng cộng (bao gồm Pillar page).

**Đã hoàn thành (Phase 2 — GEO, thực hiện 19/7/2026):**
- `public/llms.txt` — **ĐÃ TẠO.** File hướng dẫn AI Language Models (ChatGPT, Claude, Gemini, Perplexity) nhận diện thương hiệu. Chứa: tên thương hiệu, important pages, factual claims, 10 lĩnh vực, social links. **Không tạo lại.**
- Pillar Page: `prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien` (3.500 chữ, 11 sections, publishedAt: 2026-07-19T09:00:00+07:00) — **đã thêm vào blogPosts.ts.**

**Còn thiếu (cần user cung cấp thông tin):**
- Trang "Về Hữu Hùng" chi tiết: số đơn đã bán, background, ảnh/video thật → E-E-A-T
- Review có nguồn xác minh: ảnh chụp màn hình, link Facebook thật
- SchemaMarkup: reviewCount hiện là 3, cần cập nhật khi có review thật
- **Bing Webmaster Tools** — CHƯA SETUP (xem hướng dẫn trong SEO workflow)
- **Twitter Card meta tags** — chưa thêm vào layout.tsx (twitter:card, twitter:title, twitter:description, twitter:image)

## Báo cáo Audit SEO (đã đọc 19/7/2026)
- **Location:** `D:\Dropbox\01. DỰ ÁN 2026\INDEX\Báo cáo 1000chuyengia`
- **Files chính:**
  - `01. CONSOLIDATED-AUDIT.md` — SEO Health Score: 12/100 (trước khi sửa), 7 categories
  - `6.3. CLUSTER-PLAN.md` — Hub-and-spoke: 1 Pillar + 5 Spokes, 42 keywords, ~17.000 lượt/tháng
  - `02. GEO-DEEP-ANALYSIS.md` — GEO Score: 4/100 (trước khi sửa), AI bot access analysis
- **Lưu ý:** Audit được viết cho Shopify — nhiều khuyến nghị không áp dụng cho Next.js (theme.liquid, Shopify Admin). Cross-check với codebase trước khi làm theo.

## Content Cluster — Spoke posts còn lại (viết tuần 20-24/7)
Thứ tự ưu tiên (theo commercial intent + search volume):

| # | Spoke | Chủ đề | publishedAt dự kiến | Ghi chú |
|---|-------|---------|---------------------|---------|
| 4 | Spoke 4 | ChatGPT vs Claude vs Gemini 2026 — Nên dùng AI nào? | 2026-07-23T06:45:00+07:00 | Commercial intent cao nhất |
| 2 | Spoke 2 | Prompt AI viết content marketing: Facebook → Email trong 30 phút | 2026-07-24T06:45:00+07:00 | Search volume cao nhất |
| 1 | Spoke 1 | 7 lỗi viết prompt ChatGPT mà 90% người mới mắc phải | 2026-07-25T06:45:00+07:00 | Dễ viral |
| 3 | Spoke 3 | Prompt AI cho chủ doanh nghiệp: Tự động hóa 80% công việc | 2026-07-26T06:45:00+07:00 | Buyer intent |
| 5 | Spoke 5 | 6 kỹ thuật prompt engineering nâng cao | 2026-07-27T06:45:00+07:00 | Retention cho người đã mua |

Tất cả Spoke phải có **internal link về Pillar page** (`/bai-viet/prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien`) và về **trang chủ**.

**Nguyên tắc viết bài AEO:**
- Đoạn `intro` phải tự chứa đủ nghĩa, AI có thể trích nguyên văn (định nghĩa hoặc tóm tắt trong 2-3 câu)
- Heading H2 chứa từ khóa + câu hỏi mà người dùng thực sự gõ
- Có ít nhất 1 section định nghĩa ("X là gì"), 1 section so sánh, 1 section "dành cho ai"
- Cuối bài có internal link về trang chủ hoặc bài liên quan
- Category "So sánh & Đánh giá" và "Kiến thức AI" là 2 category AEO cao nhất

## Lịch đăng bài — đầy đủ (25 bài tính đến 19/7/2026)
| # | Slug | publishedAt |
|---|------|-------------|
| Pack 1 | 100-prompt-kinh-doanh-startup | 2026-06-26T06:45:00+07:00 |
| Pack 2 | 100-prompt-tai-chinh-dau-tu | 2026-06-30T19:15:00+07:00 |
| KB 1 | cach-viet-prompt-ai-hieu-qua | 2026-06-04 |
| KB 2 | ung-dung-ai-trong-kinh-doanh-nho | 2026-06-04 |
| KB 3 | checklist-chon-cong-cu-ai-phu-hop | 2026-06-04 |
| Pack 3 | 100-prompt-marketing-thuong-hieu | 2026-07-01T06:45:00+07:00 |
| Pack 4 | 100-prompt-ban-hang-dam-phan | 2026-07-01T19:15:00+07:00 |
| Pack 5 | 100-prompt-phat-trien-ban-than-nang-suat | 2026-07-02T06:45:00+07:00 |
| Pack 6 | 100-prompt-lanh-dao-quan-ly-doi-nhom | 2026-07-02T19:15:00+07:00 |
| Pack 7 | 100-prompt-kiem-tien-online-thu-nhap-thu-dong | 2026-07-03T06:45:00+07:00 |
| Pack 8 | 100-prompt-ai-cong-nghe-kinh-doanh | 2026-07-03T19:15:00+07:00 |
| Pack 9 | 100-prompt-cuoc-song-hanh-phuc | 2026-07-04T06:45:00+07:00 |
| Pack 10 | 100-prompt-fusion-da-linh-vuc | 2026-07-04T19:15:00+07:00 |
| AEO 1 | prompt-ai-la-gi-tai-sao-nen-dung-prompt-viet-san | 2026-07-14T06:45:00+07:00 |
| AEO 2 | so-sanh-1000-prompt-chuyen-gia-vs-tu-tim-prompt | 2026-07-14T13:00:00+07:00 |
| AEO 3 | chatgpt-danh-cho-nguoi-moi-bat-dau | 2026-07-15T06:45:00+07:00 |
| AEO 4 | 10-prompt-ai-hay-nhat-cho-nguoi-kinh-doanh-nho | 2026-07-15T19:15:00+07:00 |
| AEO 5 | ai-co-the-lam-gi-cho-nhan-vien-van-phong | 2026-07-16T06:45:00+07:00 |
| AEO 6 | gemini-vs-chatgpt-cong-cu-ai-nao-tot-hon-cho-nguoi-viet | 2026-07-20T06:45:00+07:00 |
| AEO 7 | prompt-engineering-la-gi-huong-dan-tu-a-den-z | 2026-07-17T06:45:00+07:00 |
| AEO 8 | tai-sao-ai-tra-loi-khong-dung-y-cach-khac-phuc | 2026-07-21T06:45:00+07:00 |
| AEO 9 | ai-danh-cho-hoc-sinh-sinh-vien-cach-dung-chatgpt-hoc-tap | 2026-07-18T06:45:00+07:00 |
| AEO 10 | chatgpt-co-the-thay-nhan-vien-marketing-khong | 2026-07-22T06:45:00+07:00 |
| AEO 11 | cach-viet-prompt-ai-de-tao-content-ban-hang-hieu-qua | 2026-07-19T06:45:00+07:00 |
| Pillar | prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien | 2026-07-19T09:00:00+07:00 |

## SEO workflow — sau mỗi lần push bài mới

**Google (mỗi bài mới):**
1. Vào https://search.google.com/search-console → Kiểm tra URL
2. Nhập URL bài mới (vd: `/bai-viet/prompt-ai-la-gi-...`) → Enter
3. Nhấn "Yêu cầu lập chỉ mục" → Google crawl trong 1–3 ngày

**Bing — CHƯA SETUP (cần làm):**
1. Vào https://www.bing.com/webmasters → đăng nhập Microsoft
2. Thêm site `https://www.1000promptchuyengia.shop`
3. Xác minh quyền sở hữu → thêm meta tag vào `layout.tsx`
4. Submit sitemap `https://www.1000promptchuyengia.shop/sitemap.xml`
> Bing quan trọng vì ChatGPT Search và Copilot dùng Bing index — muốn AI trích dẫn thì phải có trên Bing.

**Từ khóa AEO người dùng hay gõ vào AI (test thử định kỳ):**
- "prompt AI là gì" / "prompt engineering là gì"
- "ChatGPT vs Gemini cái nào tốt hơn"
- "bộ prompt AI tiếng Việt" / "1000 prompt AI mua ở đâu"
- "ChatGPT làm gì được cho người kinh doanh"
- "AI cho nhân viên văn phòng" / "dùng AI để viết content bán hàng"

## Cấu trúc thư mục chính
```
app/
  blogPosts.ts          ← nguồn dữ liệu tất cả bài viết (25 bài tính đến 19/7/2026)
  robots.ts             ← robots.txt tự động + 8 AI bot directives (đã cập nhật 19/7)
  sitemap.ts            ← sitemap động, tự thêm bài mới
  SchemaMarkup.tsx      ← JSON-LD: WebSite, Product, FAQPage, ItemList, Person
  bai-viet/
    page.tsx            ← danh sách bài (force-dynamic + datetime filter)
    [slug]/page.tsx     ← chi tiết bài (JSON-LD Article + gift link + related posts)
  layout.tsx            ← Analytics (GA4 + FB Pixel) + meta AEO
components/
  Analytics.tsx         ← GA4 + FB Pixel (đã tích hợp)
public/
  llms.txt              ← GEO: hướng dẫn AI bots nhận diện thương hiệu (tạo 19/7)
  images/
    logo.png
```
