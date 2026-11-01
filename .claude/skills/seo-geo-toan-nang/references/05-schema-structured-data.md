# 05. Dữ liệu có cấu trúc (schema JSON-LD)

Nguyên tắc: chỉ dùng JSON-LD, đặt trong HTML gốc; nội dung trong schema **phải khớp** nội dung hiển thị; không đánh dấu thứ không có; không bịa `aggregateRating`, `review`, giải thưởng, chứng nhận. Kiểm tra bằng Rich Results Test / Schema.org Validator khi có thể (không có thì ghi "kiểm tay").

## Chọn loại theo trang
| Trang | Loại | Thuộc tính tối thiểu đáng có |
|---|---|---|
| Toàn site | `Organization` (+ `@id`) | name, url, logo (ImageObject), description, sameAs (chỉ hồ sơ có thật), contactPoint (nên dùng thay cho email cá nhân) |
| Toàn site | `WebSite` | name, url; `SearchAction` chỉ khi site có tìm kiếm nội bộ |
| Tác giả | `Person` (+ `@id`) | name, url trang tác giả, jobTitle (đúng thực tế), worksFor, sameAs hồ sơ công khai |
| Bài viết | `Article`/`BlogPosting` | headline, description, **image**, datePublished/dateModified (ISO 8601 có múi giờ), author (`@id`), publisher (`@id`), mainEntityOfPage, inLanguage; `speakable` tùy chọn |
| Trang phần mềm/SaaS | `SoftwareApplication`/`WebApplication` | name, applicationCategory, operatingSystem, `offers` có **price**, priceCurrency, availability; mô tả; không có rating nếu không có đánh giá thật |
| Giá | `Offer` (+ `priceSpecification` nếu theo kỳ) | miễn phí dùng thử viết thành offer riêng giá 0 để kiểm chứng được |
| Sản phẩm | `Product` + `Offer` (+ `AggregateRating` chỉ khi có đánh giá thật hiển thị) | name, image, description, sku/gtin, brand, offers (price, availability, url), review thật |
| Đường dẫn | `BreadcrumbList` | khớp breadcrumb hiển thị |
| Video | `VideoObject` | name và description **của chính video**, thumbnailUrl, uploadDate (đúng múi giờ), duration, embedUrl/contentUrl |
| Địa phương | `LocalBusiness` (loại con phù hợp) | name, address, telephone, openingHours, geo, url, sameAs; khớp NAP với hồ sơ Google |
| Danh sách | `ItemList`/`CollectionPage`/`Blog` cho trang chỉ mục | |
| Hỏi-đáp | `FAQPage` | chỉ khi khối FAQ hiển thị thật; Google đã thu hẹp/bỏ rich result FAQ (kiểm lại thời điểm làm), vẫn hữu ích ngữ nghĩa; đừng coi là cách vào SERP |
| Việc làm, sự kiện, công thức, khóa học… | loại tương ứng theo tài liệu Google | |
| Không dùng | `HowTo` (đã bỏ 2023) | |

## Liên kết thực thể
Dùng `@id` ổn định (ví dụ `https://site/#organization`, `https://site/#founder`) và tham chiếu chéo (`publisher: {"@id": …}`, `author: {"@id": …}`) thay vì lặp khối. Subdomain là origin riêng: nhúng Organization tối thiểu hoặc dùng URL đầy đủ, vì `@id` của site chính không tự áp dụng.

## Lỗi thường gặp
Offer thiếu `price`/`availability` · Article thiếu `image` · publisher/author chỉ có tên (không `@id`, không `logo`/`url`) · ngày không có múi giờ · VideoObject chép mô tả của bài · uploadDate lệch múi giờ · email/điện thoại cá nhân đưa vào schema không cần thiết (dễ bị thu thập spam) · `sameAs` trỏ tới hồ sơ không tồn tại · schema trên trang nhưng nội dung không hiển thị · thiếu schema trên subdomain/trang công cụ client-render.

## Quy trình
1. Lấy HTML gốc (curl) của trang mẫu mỗi loại, tách `<script type="application/ld+json">`, parse JSON.
2. So thuộc tính với bảng trên; đối chiếu nội dung hiển thị.
3. Đề xuất bản sửa **dưới dạng văn bản** (đánh dấu `[CẦN XÁC NHẬN]` cho giá trị chưa biết, không điền bừa); chỉ sửa code khi được yêu cầu.
4. Chấm schema 0–100: tổ chức 20, bài viết 15, tác giả 15, sameAs 15, speakable 10, breadcrumb 5, WebSite 5, không dùng loại lỗi thời 5, hợp lệ 5 (thang của công cụ).
