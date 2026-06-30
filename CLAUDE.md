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

## Lịch đăng bài (2 bài/ngày, 7h và 18h giờ VN)
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

## Git workflow
**Vấn đề thường gặp:** `.git/index.lock` và `.git/HEAD.lock` — sandbox không xóa được, phải chạy từ PowerShell của user:
```powershell
del .git\index.lock
del .git\HEAD.lock
git add .
git commit -m "..."
git push
```

## Bài học kỹ thuật quan trọng
1. **Không dùng Python script để replace nội dung lớn trong file TypeScript** — dễ bị truncate. Dùng Write tool (ghi toàn bộ file) hoặc Edit tool (thay đoạn nhỏ).
2. **`force-dynamic` bắt buộc** cho các page lọc theo thời gian — không có nó Next.js cache kết quả build.
3. **So sánh datetime:** dùng `new Date(p.publishedAt) <= new Date()`, không dùng string comparison `p.publishedAt <= today`.
4. **Hiển thị ngày:** dùng `.slice(0, 10)` để cắt bỏ phần giờ trong ISO string khi render.
5. **Gift link block** nằm trong `app/bai-viet/[slug]/page.tsx`, hiển thị có điều kiện `{post.giftLink && ...}`.

## Cấu trúc thư mục chính
```
app/
  blogPosts.ts          ← nguồn dữ liệu tất cả bài viết
  bai-viet/
    page.tsx            ← danh sách bài (có force-dynamic + datetime filter)
    [slug]/page.tsx     ← chi tiết bài (có gift link block)
  layout.tsx            ← có Analytics (GA4 + Facebook Pixel)
components/
  Analytics.tsx         ← GA4 + FB Pixel (đã tích hợp)
public/images/
  logo.png
```
