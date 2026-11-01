# 01. Audit tổng thể và SEO kỹ thuật

## Quy trình audit toàn diện
1. **Khám phá:** tải trang chủ, `robots.txt`, `sitemap.xml`, `llms.txt`; nhận diện loại hình (SaaS, dịch vụ địa phương, thương mại điện tử, nhà xuất bản/blog, agency). Lấy danh sách URL từ sitemap (tối đa 50 trang mẫu; nếu có Firecrawl/OpenSEO audit thì dùng để quét rộng).
2. **Phân tích song song** (agent con, chỉ-đọc): kỹ thuật, nội dung/E-E-A-T, schema, sitemap, hiệu năng, GEO; thêm: local (nếu có địa chỉ), thương mại điện tử (nếu có giỏ hàng), backlink (nếu có API), dữ liệu Google (nếu có GSC/GA4), cụm nội dung (nếu có blog nhiều bài).
3. **Hợp nhất:** điểm SEO (thang `10`), xếp mức nghiêm trọng, kế hoạch hành động có thứ tự phụ thuộc.
4. Với mỗi đề xuất ghi: quan sát nền tảng, phụ thuộc vào việc nào, cách kiểm tra nó thất bại, chỉ số dẫn báo.

Giới hạn tải: tối đa 5 yêu cầu đồng thời, nghỉ 1 giây giữa các yêu cầu, timeout 30 giây, tôn trọng `robots.txt`. Bỏ qua trang trùng nội dung trên 80%.

## Danh mục kiểm tra kỹ thuật (9 nhóm)
| Nhóm | Kiểm tra | Cách kiểm |
|---|---|---|
| Crawl | robots.txt cú pháp/chặn nhầm, sitemap khai báo, `X-Robots-Tag`, trang mồ côi, chuỗi redirect, 4xx/5xx, soft 404 (404 thật có `noindex`) | curl, GSC "Trang" |
| Index | meta robots, canonical tự tham chiếu/nhất quán dấu `/`, trạng thái lập chỉ mục trong GSC, trang trùng, phân trang, tham số | `inspect_urls`, GSC |
| Bảo mật | HTTPS toàn site, HSTS, `X-Content-Type-Options`, `X-Frame-Options`/CSP `frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`, CSP (thử ở chế độ báo cáo trước) | curl -I |
| URL | chữ thường, gạch nối, ngắn, phẳng, không tham số thừa, www/non-www và http→https một bước | curl -IL |
| Mobile | viewport, kích thước chạm, chữ đọc được, không cuộn ngang | Lighthouse/Playwright |
| Hiệu năng | LCP, **INP**, CLS (ngưỡng tốt: LCP ≤ 2,5s, INP ≤ 200ms, CLS ≤ 0,1); TTFB, nén brotli, cache, ảnh/phông | PageSpeed/CrUX; nếu API hết hạn mức thì ghi "ước lượng" |
| Dữ liệu có cấu trúc | JSON-LD hợp lệ, thuộc tính bắt buộc, khớp nội dung hiển thị | `references/05` |
| JavaScript | nội dung/H1/liên kết có trong HTML gốc không (curl không chạy JS); nếu client-render thì đề xuất SSR/SSG/khối nội dung phía máy chủ | so sánh curl với trình duyệt |
| IndexNow / Bing | khóa IndexNow, Bing Webmaster đã xác minh, sitemap nộp | curl khóa, BWT |

## Kiểm tra theo nền tảng
- **Next.js/React:** đọc tài liệu đúng phiên bản trong `node_modules/next/dist/docs/` trước khi sửa; kiểm `generateMetadata`, `robots.ts`, `sitemap.ts` (đặt `lastmod` thật theo từng trang, không dùng một dấu thời gian build), `next/image` (width/height, lazy), phân biệt trang client-only.
- **WordPress:** plugin SEO trùng nhau, trang thẻ/tác giả mỏng, tham số `?s=`, `?replytocom=`, theme chặn crawl, plugin cache.
- **Shopify/WooCommerce/Magento:** xem `references/06` (faceted navigation, biến thể, sản phẩm hết hàng).
- **Đa subdomain:** mỗi subdomain là origin riêng: robots/sitemap/canonical/schema riêng; mục nhập sitemap khác host chỉ được Google chấp nhận khi cùng chủ sở hữu (khuyên dùng property loại Domain trong GSC).

## Nội dung trùng, mỏng, cannibalization
- **Trùng:** so sánh tiêu đề/H1/đoạn mở đầu; nhóm URL có chung từ khóa chính trong GSC (truy vấn xuất hiện ở ≥2 URL, vị trí dao động).
- **Mỏng:** ngưỡng tham khảo theo loại trang (bài hướng dẫn ≥ 800 từ nếu chủ đề cần; trang danh mục/địa phương phải có nội dung riêng ≥ 60% khác nhau; nhiều trang địa phương > 30 cần cảnh báo, > 50 cần lý do rõ).
- **Cannibalization:** chọn URL "thắng"; các URL còn lại → gộp + 301, hoặc đổi trọng tâm, hoặc liên kết chéo với đoạn "khác nhau thế nào".

## Backlink độc hại hoặc kém chất lượng
Lấy hồ sơ liên kết (OpenSEO `get_backlinks_*`, Moz/Bing/Common Crawl, DataForSEO). Gắn cờ: neo từ khóa chính xác lặp, tên miền spam/PBN/cờ bạc/người lớn, tăng đột biến, nội dung không liên quan, liên kết site-wide. Chỉ đề xuất tệp vô hiệu hóa (disavow) khi có hành động thủ công hoặc bằng chứng rõ; Google thường tự bỏ qua liên kết rác.

## Đánh giá tụt traffic/mất hạng/bị phạt
Chạy `references/08` (quy trình chẩn đoán) trước khi kết luận.

## Giám sát thay đổi (drift)
Trước khi triển khai lớn: chụp đường cơ sở (title, meta, canonical, H1, schema, robots, status) bằng `/seo drift baseline <url>`; sau triển khai chạy `compare` để phát hiện hồi quy.
