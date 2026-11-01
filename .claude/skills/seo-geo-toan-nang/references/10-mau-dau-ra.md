# 10. Mẫu đầu ra, thang điểm và checklist

Lưu tệp vào `.agents/` của dự án (tên có ngày, ví dụ `seo-audit-2026-11-01.md`). Khi người dùng cần, xuất sang Google Docs/Sheets, DOCX hoặc PDF bằng skill/công cụ tương ứng.

## 1. Hồ sơ bối cảnh dự án (`.agents/seo-context.md`)
```
# Bối cảnh SEO: <tên dự án>
- Website / subdomain / công cụ liên quan:
- Loại hình: SaaS | địa phương | thương mại điện tử | nhà xuất bản | agency | khác
- Thị trường & ngôn ngữ:
- Đối tượng khách hàng:
- Mục tiêu 90 ngày (đo được) và sự kiện chuyển đổi chính:
- Công nghệ (CMS/khung), người được sửa code, quy trình triển khai & ai duyệt:
- Công cụ dữ liệu đã nối: GSC (property) | GA4 (property: tên + ID) | Bing | OpenSEO | khác
- Quy tắc nội dung bắt buộc (giọng, điều cấm, nguồn pháp lý, ngành nhạy cảm):
- Ràng buộc: ngân sách, thời gian, kênh bị cấm
- Đường cơ sở (ngày, nhấp, hiển thị, CTR, vị trí, phiên, chuyển đổi):
- Bảng theo dõi bài viết / báo cáo gần nhất (đường dẫn):
```

## 2. Điểm SEO tổng hợp (0–100, thang của skill)
| Nhóm | Trọng số |
|---|---|
| Kỹ thuật (crawl, index, bảo mật, URL, JS) | 22% |
| Nội dung & E-E-A-T | 23% |
| On-page (title/meta/heading/liên kết nội bộ/ảnh) | 15% |
| Hiệu năng & mobile (CWV) | 10% |
| Dữ liệu có cấu trúc | 10% |
| Thực thể & uy tín bên ngoài (backlink, nhắc thương hiệu) | 10% |
| Sẵn sàng AI search (GEO) | 10% |
Mỗi nhóm chấm 0–100 kèm bằng chứng; điểm tổng = tổng trọng số × điểm. Báo kèm khoảng sai số khi mẫu nhỏ. Điểm GEO riêng theo thang `04`. Ghi: "thang của công cụ, không phải chuẩn của Google".

## 3. Mẫu báo cáo audit
```
# Báo cáo audit SEO + GEO: <site> (<ngày>)
Tóm tắt (3 dòng): ...
Điểm: SEO xx/100 · GEO xx/100 (cách tính, mẫu đã đọc)
Điểm mạnh (giữ nguyên): ...
Phát hiện
 - NGHIÊM TRỌNG: <vấn đề> | bằng chứng (URL/số liệu) | tác động | cách sửa | công sức S/M/L | phụ thuộc | cách biết thất bại | chỉ số theo dõi
 - CAO / TRUNG BÌNH / THẤP: cùng khuôn
Kế hoạch hành động (thứ tự phụ thuộc): tuần 1 / tuần 2–4 / tháng 2–3
Cần người dùng quyết định: ...
Chưa kiểm chứng được: ...
```

## 4. Keyword map
`URL | Từ khóa chính | Từ khóa phụ | Ý định | Lượng tìm | Độ khó | Vị trí hiện tại | Hành động | Ưu tiên | Ghi chú cannibalization`

## 5. Content plan (bảng theo dõi)
`STT | Nội dung | Ngày giờ | Trạng thái (đã soạn / đã đăng / chưa đăng / chưa viết) | Từ khóa chính | URL | Việc sau đăng | Kế hoạch tiếp theo`

## 6. Roadmap 3-6-12 tháng
`Mốc | Mục tiêu đo được | Việc chính | Nguồn lực | Rủi ro | Điều kiện dừng/mở rộng | Chỉ số`

## 7. Brief bài viết
Xem `03` (mục "Brief bài viết") để biết đủ trường.

## 8. Kế hoạch liên kết nội bộ
`Từ URL | Đến URL | Neo gợi ý | Vị trí | Lý do (trụ cột↔vệ tinh / giải thích khác biệt / CTA)`; kèm danh sách trang mồ côi.

## 9. Checklist kỹ thuật (tóm tắt)
HTTPS toàn site; http/www → một bước 301; robots không chặn nhầm; sitemap sạch + `lastmod` thật; canonical tự tham chiếu; không `noindex` nhầm; 404 thật; nội dung có trong HTML gốc; một H1; schema hợp lệ; ảnh có kích thước + alt; CWV tốt (INP/LCP/CLS); header bảo mật; GSC/Bing xác minh; IndexNow; GA4 sự kiện chuyển đổi hoạt động.

## 10. Checklist trước khi đăng
Xem `03` cuối tệp.

## 11. Kế hoạch phục hồi tụt hạng
`Triệu chứng + thời điểm | Giả thuyết xếp hạng khả năng | Dữ liệu kiểm chứng từng giả thuyết | Hành động theo thứ tự | Chỉ số hồi phục | Mốc xem xét lại (2/4/8 tuần)`

## 12. Mẫu "việc cần người dùng duyệt"
`Việc | Vì sao | Tác động nếu làm/không làm | Câu duyệt cần gõ: "Đồng ý <việc cụ thể>"`

## 13. Chấm nhãn độ tin cậy
Mỗi nhận định: **[Đã đo]** có nguồn+ngày · **[Suy ra]** từ mẫu/quy tắc · **[Chưa kiểm chứng]** nêu lý do.
