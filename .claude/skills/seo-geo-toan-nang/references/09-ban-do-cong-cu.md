# 09. Bản đồ công cụ và phương án dự phòng

Kiểm công cụ nào đang có (xem danh sách công cụ/skill của phiên) rồi chọn theo bảng. Dữ liệu thật > ước lượng; nếu không có công cụ, nói rõ và dùng phương án dự phòng.

## 1. OpenSEO (MCP, dữ liệu thật qua tài khoản người dùng)
| Việc | Công cụ (tên có thể khác tùy máy chủ) |
|---|---|
| Hiệu suất tìm kiếm | `get_search_console_performance`, `list_search_console_sites`, `set_search_console_site`, `inspect_urls`, `submit_indexnow_urls` |
| GA4 | `list_google_analytics_properties`, `set_google_analytics_property`, `get_google_analytics_traffic_acquisition`, `_key_events`, `_audience_breakdown`, `_organic_overview`, `_organic_landing_pages`, `_page_performance`, `_site_search`, `_ecommerce_performance`, `_measurement_health` |
| Từ khóa | `get_keyword_metrics`, `research_keywords`, `get_domain_keyword_suggestions`, `get_ranked_keywords`, `get_search_opportunities`, `save_keywords`, `list_saved_keywords` |
| SERP/đối thủ | `get_serp_results`, `find_serp_competitors`, `get_domain_overview` |
| Backlink | `get_backlinks_overview`, `get_backlinks_profile` |
| Audit | `run_site_audit`, `get_audit_status`, `get_audit_issues`, `get_audit_pages`, `list_site_audits` |
| Theo dõi hạng | `create_rank_tracker`, `add_rank_tracking_keywords`, `run_rank_tracker`, `get_rank_tracker`, `estimate_rank_tracker_cost` |
| AI visibility | `generate_ai_visibility_prompts`, `run_ai_visibility_check`, `get_ai_visibility_results/_sources/_trend`, `estimate_ai_visibility_cost` |
| Local | `get_local_rank_grid`, `search_local_businesses`, `get_business_profile`, `get_business_reviews` |
| Dự án/báo cáo | `list_projects`, `get_project_context`, `update_project_context`, `save_report`, `get_report`, `list_reports` |
Lưu ý: nhiều tool trả phí theo credit; báo giá (`estimate_*`) và hỏi người dùng trước khi chạy. Sau khi người dùng kết nối lại tài khoản Google, danh sách property có thể rỗng cho đến khi chọn property.

## 2. claude-seo (`/seo ...`, skill `seo-*`)
`audit`, `page`, `sitemap`, `schema`, `images`, `technical`, `content`, `content-brief`, `geo`, `plan`, `programmatic`, `competitor-pages`, `local`, `maps`, `hreflang`, `google` (GSC, PageSpeed, CrUX, Indexing API, GA4; cần `~/.config/claude-seo/google-api.json`), `backlinks`, `cluster`, `sxo`, `drift`, `ecommerce`, `firecrawl`, `dataforseo`, `image-gen`, `flow`, `setup`, `doctor`. Chạy script đi kèm bằng launcher của skill, không dùng Python trần; `/seo setup` chỉ khi người dùng yêu cầu. Sub-agent: `seo-technical`, `seo-content`, `seo-schema`, `seo-sitemap`, `seo-performance`, `seo-visual`, `seo-geo`, `seo-local`, `seo-maps`, `seo-google`, `seo-backlinks`, `seo-cluster`, `seo-sxo`, `seo-drift`, `seo-ecommerce`, `seo-dataforseo`, `seo-image-gen`, `seo-flow`.

## 3. geo-seo-claude (`/geo ...`, skill `geo-*`)
`audit`, `page`, `quick`, `citability`, `crawlers`, `llmstxt`, `brands`, `platforms`, `schema`, `technical`, `content`, `report`, `report-pdf`, `compare`, `proposal`, `prospect`, `update`. Sub-agent: `geo-ai-visibility`, `geo-platform-analysis`, `geo-technical`, `geo-content`, `geo-schema`. Script Python (`fetch_page.py`, `citability_scorer.py`, `brand_scanner.py`, `llmstxt_generator.py`) cần `pip install -r requirements.txt`. Cài ở cấp dự án thì sửa đường dẫn `~/.claude/skills/geo/` thành đường dẫn tương đối.

## 4. Công cụ có sẵn trong Claude Code
WebFetch/WebSearch (lưu ý: tìm kiếm có thể chỉ phản ánh khu vực Mỹ, trả danh sách liên kết, không thấy AI Overviews), curl (kiểm tra HTTP, header, HTML gốc), trình duyệt tích hợp hoặc Chrome (đọc Search Console/Bing Webmaster/GA4 khi MCP không có), Playwright (ảnh chụp/mobile), `python -X utf8` để xử lý tiếng Việt trên Windows (chế độ `-I` bỏ qua biến môi trường).

## 5. Phương án dự phòng khi thiếu công cụ
| Thiếu | Làm thế này |
|---|---|
| GSC/GA4 | nhờ người dùng xuất CSV hoặc chụp màn hình; ghi rõ độ tin cậy |
| Dữ liệu từ khóa | dùng truy vấn GSC, gợi ý tìm kiếm, PAA, kiểm tay SERP; đánh dấu "ước lượng" |
| Audit quét rộng | lấy URL từ sitemap, curl 20–50 trang mẫu, thống kê status/title/H1/canonical/schema bằng script |
| PageSpeed (API 429) | chạy tay trên PageSpeed Insights hoặc dùng báo cáo CWV trong GSC; ghi "chưa đo" |
| Backlink | Bing Webmaster (miễn phí), Common Crawl, ghi giới hạn |
| Kiểm tra AI trích dẫn | hỏi trực tiếp các nền tảng bằng tay theo danh sách truy vấn; ghi lại; không suy diễn |

## 6. Ngoài tầm của skill (người dùng tự làm)
Nhập mật khẩu/thông tin thanh toán/danh tính, vượt CAPTCHA, đăng bài mạng xã hội, gửi email outreach, chi tiền quảng cáo, nộp yêu cầu xem xét lại cho Google, thay đổi DNS/hosting, deploy production (khi chưa được duyệt đúng việc).
