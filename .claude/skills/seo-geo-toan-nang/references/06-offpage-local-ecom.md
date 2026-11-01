# 06. Off-page, local SEO, thương mại điện tử, đa ngôn ngữ

## Backlink và digital PR (chỉ phương pháp tự nhiên)
- **Phân tích:** hồ sơ liên kết của mình và 3–5 đối thủ: số tên miền giới thiệu, tốc độ tăng, phân bố neo, trang được liên kết nhiều, khoảng trống liên kết (nơi đối thủ có mà mình không). Nguồn: OpenSEO (`get_backlinks_overview`, `get_backlinks_profile`), Moz/Bing Webmaster/Common Crawl (miễn phí), DataForSEO/Ahrefs (trả phí), `/seo backlinks`.
- **Cơ hội phù hợp:** tài liệu đáng dẫn (dữ liệu gốc, công cụ miễn phí, hướng dẫn chuẩn, mẫu), bài khách trên blog ngành thật, liên kết nguồn tài nguyên, danh bạ ngành uy tín, báo chí/ngành khi có tin thật, hợp tác với tổ chức liên quan, sửa liên kết hỏng (broken-link) có ích cho chủ site kia, nhắc thương hiệu không liên kết (chuyển thành liên kết bằng email lịch sự).
- **Kế hoạch outreach:** danh sách mục tiêu theo mức liên quan, góc tiếp cận có giá trị cho họ, mẫu email ngắn, theo dõi phản hồi, giới hạn tần suất; không gửi hàng loạt giống nhau.
- **Entity & thương hiệu:** hồ sơ nhất quán, trang giới thiệu, tác giả có thật, nhắc thương hiệu ở nơi uy tín (xem `04`).
- **Tránh:** mua bán liên kết, PBN, trao đổi liên kết tràn lan, neo từ khóa chính xác lặp, bình luận spam, hồ sơ giả. Nếu thấy hồ sơ đã bị spam: xem `01` (backlink độc hại) và `08`.

## SEO địa phương (khi có địa điểm/khu vực phục vụ)
- **Google Business Profile:** thông tin đầy đủ và đúng (tên, danh mục chính/phụ, địa chỉ hoặc khu vực phục vụ, giờ, điện thoại, website, mô tả, dịch vụ/sản phẩm, ảnh thật, bài đăng định kỳ, hỏi-đáp). Không nhồi từ khóa vào tên.
- **NAP nhất quán** (tên, địa chỉ, điện thoại) giữa website, GBP, danh bạ, mạng xã hội; kiểm citation hiện có, sửa sai lệch.
- **Đánh giá:** kế hoạch xin đánh giá thật sau khi phục vụ, trả lời mọi đánh giá, không đổi đánh giá lấy quà, không tự đăng.
- **Trang địa phương:** mỗi trang có nội dung riêng thật (dịch vụ tại đó, nhân sự, ảnh, câu hỏi khu vực, bản đồ); cảnh báo từ 30 trang, dừng ở 50 nếu không có lý do (nguy cơ trang cửa ngõ).
- **Schema** `LocalBusiness` đúng loại con; bản đồ nhúng; từ khóa "gần tôi"/tên khu vực.
- **Bản đồ & lưới hạng:** `/seo maps` (geo-grid, kiểm GBP, đánh giá, đối thủ trong bán kính); OpenSEO có `get_local_rank_grid`, `search_local_businesses`, `get_business_profile`.
- Ngành thường gặp: nhà hàng, phòng khám, spa, showroom, bất động sản, dịch vụ tại nhà: điều chỉnh nội dung (thực đơn/dịch vụ, bác sĩ có chứng chỉ thật, giấy phép, dự án) và rủi ro pháp lý quảng cáo y tế.

## Thương mại điện tử
- **Trang sản phẩm:** tiêu đề riêng, mô tả không sao chép của nhà sản xuất, ảnh nhiều góc có alt, giá/tồn kho/vận chuyển/đổi trả rõ, `Product`+`Offer` (+ review thật), câu hỏi thường gặp, liên kết tới danh mục.
- **Danh mục:** trang giá trị cao nhất; nội dung hướng dẫn chọn mua (không nhồi chữ), breadcrumb, phân trang chuẩn (liên kết thật `<a>`, canonical mỗi trang tự tham chiếu), sắp xếp/lọc.
- **Faceted navigation / URL động:** chỉ cho lập chỉ mục các kết hợp có nhu cầu tìm kiếm; còn lại `noindex`/canonical/chặn tham số; tránh bẫy crawl vô hạn.
- **Hết hàng:** tạm hết → giữ trang, báo ngày có hàng, gợi ý thay thế; ngừng bán vĩnh viễn → 301 tới sản phẩm/danh mục thay thế gần nhất, hoặc 410 nếu không có.
- **Trùng lặp:** biến thể (màu/cỡ) gộp một URL hoặc canonical về bản chính; sản phẩm trùng nhà cung cấp → viết lại hoặc gộp.
- **Merchant Center & Shopping:** feed đúng và khớp trang (giá, tồn kho), GTIN, miễn phí listing; kết hợp SEO + Shopping Ads do người dùng quyết chi tiêu.
- **Nền tảng:** Shopify (theme Liquid, `collections/products` trùng URL, canonical tự có), WooCommerce (plugin SEO, tham số), Magento (layered navigation). `/seo ecommerce` và dữ liệu marketplace (DataForSEO).

## Đa ngôn ngữ / đa khu vực
`hreflang` hai chiều (mỗi bản liệt kê tất cả bản khác + chính nó + `x-default`), mã đúng (`vi`, `en`, `vi-VN`), canonical tự tham chiếu theo từng ngôn ngữ, không tự chuyển hướng theo IP khiến bot không vào được, nội dung dịch thật chứ không dịch máy chưa rà. Cấu trúc: thư mục (`/en/`), subdomain, hoặc ccTLD; chọn theo nguồn lực. `/seo hreflang`.

## Chuyển đổi/di chuyển
Xem `08` (đổi domain/URL).
