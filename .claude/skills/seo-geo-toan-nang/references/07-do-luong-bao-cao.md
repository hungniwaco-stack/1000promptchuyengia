# 07. Đo lường, theo dõi và báo cáo

## Thiết lập
- **Google Search Console:** ưu tiên property loại **Domain** (gồm mọi subdomain, http/https); xác minh bằng DNS; nộp sitemap; theo dõi báo cáo Trang (lập chỉ mục), Trải nghiệm (CWV), Thao tác thủ công, Liên kết. Dữ liệu trễ 1–2 ngày.
- **Bing Webmaster Tools:** xác minh (thẻ `msvalidate.01`), nộp sitemap, IndexNow (khóa tệp `/<khóa>.txt` + gửi URL khi đăng/sửa).
- **GA4:** luồng dữ liệu web, **sự kiện quan trọng (key events)** theo mục tiêu thật (ví dụ: bấm CTA, tạo tài liệu, bắt đầu thanh toán, mua, gửi form, bấm gọi), thu thập UTM, loại trừ lưu lượng nội bộ, nhóm kênh tùy chỉnh cho "AI assistant". Luôn xác nhận **đúng tên property/tài khoản** trước khi báo số (tài khoản có thể có nhiều property giống nhau).
- **Liên kết GSC ↔ GA4**; tag (GTM) có kiểm tra bằng Tag Assistant; sự kiện chuyển đổi gọi điện/form/đơn hàng/doanh thu khi có.
- **Theo dõi hạng:** OpenSEO `create_rank_tracker` / `add_rank_tracking_keywords` / `run_rank_tracker` (báo giá `estimate_rank_tracker_cost` trước vì tốn credit) hoặc dùng GSC (vị trí trung bình theo truy vấn/URL).

## Chỉ số cốt lõi
| Lớp | Chỉ số | Nguồn |
|---|---|---|
| Nhìn thấy | hiển thị, số truy vấn, vị trí TB, tỷ lệ trang được lập chỉ mục | GSC |
| Hấp dẫn | nhấp, CTR theo truy vấn/trang, so với kỳ trước | GSC |
| Truy cập | phiên theo kênh (Organic Search, Direct, Social, Referral, AI assistant, Paid), tương tác | GA4 |
| Hành động | sự kiện quan trọng, tỷ lệ chuyển đổi theo trang đích | GA4 |
| Kinh doanh | lead, cuộc gọi, đơn hàng, doanh thu, CAC | GA4 + CRM/đơn hàng |
| AI | lượt giới thiệu từ domain AI, mức trích dẫn trong kiểm tra AI visibility | GA4, OpenSEO |
| Kỹ thuật | CWV (INP/LCP/CLS), lỗi 4xx/5xx, độ phủ chỉ mục | CrUX/GSC |

Lưu ý nhiễu: "Paid Search" có thể là bot duyệt trang đích quảng cáo (tương tác 0 giây); lưu lượng từ nước không phục vụ thường là bot; phiên "Direct" cao có thể là ứng dụng chat/đường link không UTM. Ghi chú trước khi rút kết luận.

## Đọc dữ liệu bằng OpenSEO (nếu có)
`get_search_console_performance` (chiều: query/page/date/country/device), `get_google_analytics_traffic_acquisition` / `key_events` / `audience_breakdown` / `organic_landing_pages` / `page_performance`, `inspect_urls` (trạng thái lập chỉ mục), `submit_indexnow_urls`. Dùng khoảng ngày cố định, so cùng độ dài kỳ trước.

## Dashboard
Một trang một-màn-hình: xu hướng nhấp/hiển thị 90 ngày, top trang và truy vấn, CTR cơ hội (hiển thị cao CTR thấp), phễu chuyển đổi, kênh, tình trạng chỉ mục, CWV. Có thể dựng bằng Sheet/Looker Studio/trang HTML; nguồn dữ liệu phải ghi rõ ngày làm mới.

## Báo cáo định kỳ (mẫu tuần/tháng)
1. Tóm tắt 3 dòng: tăng/giảm gì, vì sao, làm gì tiếp.
2. Bảng số liệu so kỳ trước (nhấp, hiển thị, CTR, vị trí, phiên, sự kiện, chuyển đổi).
3. Điểm sáng và điểm rơi (URL/truy vấn cụ thể, **nguyên nhân giả thuyết + cách kiểm chứng**).
4. Việc đã làm trong kỳ và tác động (đừng quy kết nhân quả sớm; đợi đủ 2–4 tuần).
5. Kế hoạch kỳ sau (3–5 việc có chủ sở hữu, hạn).
6. Việc cần người dùng quyết/duyệt.
7. Điều chưa kiểm chứng được.

## ROI của SEO
ROI = (doanh thu hoặc giá trị lead từ lưu lượng tự nhiên − chi phí SEO) ÷ chi phí SEO. Cách gán: sự kiện quan trọng × giá trị trung bình một sự kiện (hoặc doanh thu GA4 thương mại điện tử) cho kênh Organic Search; ghi giả định (tỷ lệ lead → khách, giá trị khách). Báo khoảng thay vì con số tuyệt đối khi mẫu nhỏ.

## Quy tắc mốc thời gian
SEO cần 4–12 tuần mới thấy xu hướng; không so sánh ngày với ngày; tách mùa vụ; đừng sửa nhiều thứ cùng lúc nếu muốn biết cái nào có tác dụng; ghi nhật ký thay đổi (ngày triển khai) để đối chiếu với đồ thị.

## Theo dõi đối thủ
Mỗi quý: vị trí cho 20–50 từ khóa mục tiêu, nội dung mới, thay đổi tiêu đề/giá, liên kết mới, tính năng SERP họ chiếm. OpenSEO `find_serp_competitors`, `get_domain_overview`; `/seo competitor-pages`.
