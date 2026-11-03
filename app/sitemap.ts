import type { MetadataRoute } from "next";
import { blogPosts } from "./blogPosts";

const baseUrl = "https://www.1000promptchuyengia.shop";

// Mốc thời gian cố định cho các trang tĩnh (trang chủ, danh sách bài, chính
// sách...) — CHỈ sửa ngày này thủ công khi nội dung trang đó thực sự đổi.
// Trước đây dùng `new Date()` (ngày build) khiến lastModified đổi theo mỗi
// lần Vercel deploy dù nội dung không đổi, làm tín hiệu "mới" sai lệch.
const STATIC_PAGES_LAST_MODIFIED = new Date("2026-11-01T00:00:00+07:00");

// Tương tự trang chi tiết bài viết: sitemap phải tính lại danh sách
// "publishedPosts" ở MỖI lần được yêu cầu (Google/Bing gọi sitemap.xml định
// kỳ), không phải chỉ một lần lúc build — nếu không, bài mới tới giờ đăng
// sẽ không tự xuất hiện trong sitemap cho tới lần deploy kế tiếp.
export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Chỉ liệt kê bài đã tới giờ công bố — khớp với trang chi tiết bài viết
  // (app/bai-viet/[slug]/page.tsx, dynamic = "force-dynamic") đã chặn 404
  // cho bài chưa tới hạn. Trước đây sitemap liệt kê TẤT CẢ bài kể cả bài
  // chưa đăng, khiến crawler có thể phát hiện/index nội dung trước lịch.
  const publishedPosts = blogPosts.filter(
    (post) => new Date(post.publishedAt) <= now
  );

  return [
    {
      url: baseUrl,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bai-viet`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tra-cuu-don-hang`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/chinh-sach-giao-file`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ho-tro`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/dieu-khoan-su-dung`,
      lastModified: STATIC_PAGES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...publishedPosts.map((post) => ({
      url: `${baseUrl}/bai-viet/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
