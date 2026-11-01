# 08. Trường hợp đặc biệt và phục hồi

Nguyên tắc chung: **chẩn đoán trước, sửa sau.** Ghi lại thời điểm bắt đầu vấn đề, đối chiếu với nhật ký triển khai và các đợt cập nhật thuật toán của Google, rồi mới hành động. Không sửa hàng loạt khi chưa biết nguyên nhân.

## A. Tụt hạng/traffic đột ngột
1. Xác định phạm vi: toàn site hay một nhóm trang/truy vấn; Google hay cả Bing; mobile hay desktop; quốc gia nào (GSC, so cùng kỳ).
2. Loại trừ nguyên nhân kỹ thuật: lỗi triển khai (noindex, robots, canonical, redirect, 5xx, đổi URL), bẫy theo dõi (mất tag GA4 → "traffic giảm" giả), hết hạn chứng chỉ, chặn bot.
3. Đối chiếu với cập nhật thuật toán (core, spam, helpful content); nếu trùng thời điểm, đánh giá chất lượng/E-E-A-T, nội dung mỏng/AI hàng loạt, liên kết.
4. Đối thủ vượt lên hay SERP thay đổi (AI Overviews chiếm chỗ, có thêm tính năng) → CTR giảm dù hạng không đổi.
5. Kế hoạch: sửa lỗi kỹ thuật (nếu có) → cải thiện trang bị ảnh hưởng nhiều nhất → theo dõi 4–8 tuần. Báo kết luận kèm mức tin cậy.

## B. Bị deindex / trang không lập chỉ mục
GSC → Trang: lý do ("Đã thu thập nhưng chưa lập chỉ mục", "Phát hiện nhưng chưa thu thập", "Trang trùng", "Bị loại bởi noindex", "Soft 404"). Xử lý: sửa noindex/robots nhầm; nội dung đủ giá trị và khác biệt; liên kết nội bộ tới trang; nộp sitemap sạch; "Yêu cầu lập chỉ mục" cho URL quan trọng (có hạn mức, đừng spam). Site mới có thể mất vài tuần.

## C. Hành động thủ công (Manual Action)
Đọc báo cáo Thao tác thủ công, xác định loại (liên kết tự nhiên/không tự nhiên, nội dung mỏng, spam do người dùng tạo, nội dung ẩn…), **khắc phục thật** toàn bộ vi phạm, ghi tài liệu bằng chứng, rồi gửi yêu cầu xem xét lại bằng ngôn ngữ trung thực. Việc gửi do chủ site thực hiện.

## D. Có traffic nhưng không có khách
Kiểm: ý định khớp trang (`/seo sxo`), CTA và vị trí, giá/điều kiện, tốc độ, độ tin cậy (trang pháp lý, đánh giá thật), lượng truy cập đúng đối tượng hay bot/ngoài thị trường, đo lường chuyển đổi đúng chưa, phễu bị đứt ở đâu. Đề xuất thử nghiệm A/B nhỏ, đo 2–4 tuần.

## E. Nhiều bài nhưng không bài nào lên top
Nguyên nhân thường gặp: trùng ý/cannibalization, bài mỏng/khuôn mẫu, từ khóa quá khó so với uy tín, lệch ý định, thiếu liên kết nội bộ và bên ngoài, thiếu E-E-A-T. Cách: giảm số bài, gộp bài yếu, dựng 1–2 trụ cột thật sâu, nhắm từ khóa đuôi dài thắng được, rồi mới mở rộng.

## F. Cạnh tranh với đối thủ lớn
Không đối đầu từ khóa đầu bảng. Chọn ngách/đuôi dài/địa phương/ý định chuyên biệt, dữ liệu gốc, trải nghiệm tốt hơn ở một điểm cụ thể, trang so sánh trung thực, thương hiệu + cộng đồng.

## G. Đổi domain / đổi cấu trúc URL / migration
Trước: kiểm kê URL cũ (sitemap + GSC + log), bản đồ 301 một-một (không về trang chủ hàng loạt), giữ nội dung/tiêu đề/schema tương đương, hạ TTL DNS, chuẩn bị property GSC mới. Khi chuyển: 301 server-side, cập nhật canonical/sitemap/liên kết nội bộ/hreflang/robots, dùng công cụ "Thay đổi địa chỉ" của GSC (đổi domain), giữ domain cũ ≥ 12 tháng. Sau: kiểm 4xx, theo dõi lập chỉ mục và hạng 4–8 tuần, so với đường cơ sở drift. Sai lầm hay gặp: chặn site mới bằng robots/noindex còn sót, chuỗi redirect, quên trang ảnh/PDF.

## H. Bị hack, chèn spam, hàng nghìn URL rác
Cô lập và vá lỗ hổng trước (thay mật khẩu/khóa, cập nhật plugin/core, quét mã độc, kiểm tệp lạ, `.htaccess`, cron, tài khoản quản trị lạ); sau đó dọn URL rác: trả 404/410 (không 301 về trang chủ), cập nhật sitemap sạch, dùng công cụ xóa URL tạm thời trong GSC cho trang nhạy cảm, yêu cầu xem xét nếu có cảnh báo bảo mật/hành động thủ công, theo dõi lập chỉ mục. Việc sửa máy chủ là của chủ site/bên hosting; skill chỉ hướng dẫn và kiểm tra.

## I. Đối tượng đặc thù
- **Thương hiệu cá nhân:** thực thể Person nhất quán, trang giới thiệu mạnh, nội dung thể hiện kinh nghiệm thật, hiện diện YouTube/LinkedIn, kết hợp tìm tên.
- **B2B/SaaS:** trang giải pháp theo ngành/vai trò, so sánh/thay thế, tích hợp, tài liệu, giá minh bạch, nội dung theo giai đoạn mua; đo lead chất lượng chứ không chỉ traffic.
- **Bất động sản, giáo dục, y tế, tài chính, pháp lý:** YMYL → tác giả có chuyên môn thật, nguồn chính thống, miễn trừ đúng chỗ, tuân thủ quy định quảng cáo ngành; dữ liệu tin tức/pháp luật cập nhật theo hiệu lực.
- **Nhà xuất bản/tin tức:** tốc độ, đánh dấu bài đúng, Google News/Discover (ảnh lớn, tiêu đề trung thực), chuyên mục rõ.
- **Chính quyền/tổ chức công:** ưu tiên độ tin cậy và khả năng tiếp cận; đối chiếu văn bản gốc, ghi rõ hiệu lực.
