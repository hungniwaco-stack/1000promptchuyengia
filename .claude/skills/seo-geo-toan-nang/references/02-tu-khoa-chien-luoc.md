# 02. Từ khóa, chiến lược và roadmap

## Nghiên cứu từ khóa
1. **Hạt giống:** từ sản phẩm/dịch vụ, tài liệu nội bộ, câu hỏi khách hàng, truy vấn đang có impression trong GSC (nguồn tốt nhất: nó là nhu cầu đã xuất hiện).
2. **Mở rộng:** OpenSEO `get_keyword_metrics`, gợi ý theo domain (`get_domain_keyword_suggestions`), từ khóa đối thủ đang xếp hạng (`get_ranked_keywords`, `find_serp_competitors`), People Also Ask, gợi ý tìm kiếm.
3. **Số liệu cho mỗi từ khóa:** lượng tìm kiếm, độ khó, xu hướng, CPC (làm tín hiệu giá trị thương mại), vị trí hiện tại, tính năng SERP (snippet, PAA, AI Overviews, video, bản đồ).
4. **Phân loại ý định:** thông tin / thương mại (so sánh, đánh giá) / điều hướng / giao dịch. Đối chiếu bằng cách xem SERP thật rằng Google đang thưởng loại trang nào (bài viết, trang danh mục, trang sản phẩm, công cụ, video). Lệch loại trang là nguyên nhân phổ biến khiến trang đã tối ưu vẫn không lên: dùng `/seo sxo`.
5. **Ưu tiên:** điểm = (giá trị chuyển đổi × khả năng thắng) ÷ công sức. Khả năng thắng dựa vào vị trí hiện tại (11–30 là "quả chín"), độ khó, sức mạnh domain, chất lượng đối thủ top 5.
6. **Kênh khác:** từ khóa cho YouTube (tìm kiếm trên YouTube, video ngắn), Google Discover (chủ đề, hình lớn, tiêu đề không giật gân), local (cụm + địa danh), AI search (câu hỏi dài, ngôn ngữ tự nhiên).

Lưu ý thị trường tiếng Việt: lượng tìm kiếm từ công cụ quốc tế có thể sai lệch; kiểm bằng GSC; chú ý từ khóa không dấu và biến thể gõ sai.

## Keyword map theo URL
Bảng bắt buộc (mẫu ở `10`): URL | từ khóa chính | từ khóa phụ | ý định | khối lượng | độ khó | vị trí hiện tại | hành động (tạo mới / tối ưu / gộp / chặn) | ưu tiên | ghi chú cannibalization. Mỗi từ khóa chính chỉ xuất hiện một lần.

## Topical map và cụm nội dung
- Dùng `/seo cluster <từ khóa hạt giống>`: gom từ khóa theo **độ trùng lặp SERP thực** (không theo giống từ), thiết kế hub-and-spoke, ma trận liên kết nội bộ.
- Cấu trúc: 1 trang trụ cột (hub) bao quát + các bài vệ tinh (spoke) trả lời câu hỏi cụ thể; vệ tinh liên kết lên trụ cột, trụ cột liên kết xuống mọi vệ tinh, vệ tinh cùng cụm liên kết chéo khi hợp ngữ cảnh.
- Silo chỉ khi site lớn và chủ đề tách rõ; site nhỏ ưu tiên cụm mềm với liên kết chéo.
- Khoảng trống nội dung: chủ đề đối thủ có mà mình không; chủ đề mình có nhưng không có bài trụ cột; truy vấn có impression nhưng chưa có URL phù hợp.

## Chiến lược 3-6-12 tháng
| Mốc | Trọng tâm | Ví dụ đầu ra |
|---|---|---|
| 0–3 tháng | Nền móng và quả chín: sửa kỹ thuật chặn index, trang tin cậy (giới thiệu, liên hệ, chính sách), tối ưu title/meta cho trang có impression nhưng CTR thấp, sửa cannibalization, schema cơ bản | danh sách việc theo tuần, 4–8 bài ưu tiên |
| 3–6 tháng | Mở rộng chủ đề: hoàn thiện 1–2 cụm trụ cột, làm mới bài cũ, liên kết nội bộ, bắt đầu hiện diện bên ngoài (PR, bài khách, nhắc thương hiệu thật) | topical map đã thực thi ≥ 50% |
| 6–12 tháng | Uy tín và quy mô: nội dung chuyên sâu/dữ liệu gốc, mở cụm mới, so sánh/đối thủ, đa kênh (video, email), đo ROI | báo cáo ROI, kế hoạch năm sau |

Với mỗi mốc: mục tiêu đo được (nhấp/ hiển thị/ sự kiện chuyển đổi/ doanh thu), nguồn lực (giờ làm, ngân sách), rủi ro, điều kiện dừng/mở rộng.

## Theo tình huống
- **Website mới:** nền tảng kỹ thuật + 1 cụm nhỏ nhưng sâu + từ khóa đuôi dài ít cạnh tranh + xác minh GSC/Bing + nộp sitemap; kỳ vọng 3–6 tháng mới có tín hiệu.
- **Website cũ:** audit nội dung (giữ / cập nhật / gộp / xóa), dọn trùng, ưu tiên bài có impression.
- **Website tụt hạng:** `references/08`, không sửa hàng loạt trước khi biết nguyên nhân.
- **Ngân sách thấp:** dồn vào quả chín + một cụm trụ cột; bỏ công cụ trả phí, dùng GSC/GA4 miễn phí.
- **Theo mục tiêu doanh thu:** ngược từ doanh thu mục tiêu → số khách → tỷ lệ chuyển đổi trang đích → lượt truy cập cần → nhấp cần → hạng/hiển thị cần; ghi giả định rõ.

## Kết hợp kênh
SEO + quảng cáo: dùng truy vấn quảng cáo hiệu quả để chọn bài; dùng SEO cho truy vấn thông tin, quảng cáo cho truy vấn giao dịch cạnh tranh. SEO + social: chia sẻ bài có UTM (`utm_source`, `utm_medium`, `utm_campaign`) để GA4 đo được. SEO + email: tái sử dụng bài thành chuỗi email. SEO + video: đặt video khớp chủ đề vào bài và dùng `VideoObject` đúng mô tả. Mọi chi tiêu quảng cáo chỉ do người dùng quyết.

## Khung FLOW (khi người dùng cần quy trình có bằng chứng)
`/seo flow` — Find (tìm cơ hội từ dữ liệu) → Leverage (tận dụng tài sản có sẵn) → Optimize (tối ưu) → Win (thắng đối thủ) → Local. Mỗi bước phải nêu bằng chứng.
