# SEO / AEO / GEO — Trạng thái & Schema

## Đã làm (2026-06-29)

### Schema JSON-LD — file: `app/SchemaMarkup.tsx`
4 schemas đã live, xác nhận qua Chrome console:

1. **WebSite Schema** — tên site, URL, SearchAction
2. **Product Schema + AggregateRating** — Combo 199K, 3 reviews 5 sao
   - reviewCount: 3, ratingValue: 5/5
   - Reviewer: Lan N., Minh T., Hà P.
3. **FAQPage Schema** — 5 câu hỏi thường gặp
4. **ItemList Schema** — 10 pack, giá 49K/pack

`SchemaMarkup` được import vào `app/page.tsx` (cuối phần return, trước `</main>`)

### Kiểm tra
- Dùng `document.querySelectorAll('script[type="application/ld+json"]')` → 4 kết quả ✅
- Test thêm tại: https://search.google.com/test/rich-results

## Đánh giá tổng thể (2026-06-29)

### Nền tảng kỹ thuật — Tốt ✅
Stack Next.js + Vercel ổn định. Thanh toán SePay, giao file Resend, lưu đơn Notion hoạt động. Schema, GA4, Pixel đã xong.

### Conversion — Còn yếu ⚠️
- Thiếu urgency thật (countdown, số người đang xem)
- 3 testimonial ẩn danh (LN, MT, HP) — cần tên thật + ảnh + kết quả cụ thể
- Chưa có số lượng người đã mua ("347 người đã mua combo này")

### Traffic — Gần như chưa có ❌
- Chưa có Lead Magnet thu email
- Blog chưa đủ content SEO
- Chưa có backlinks

### Tracking — Thiếu sót ⚠️
- GA4 + Pixel đã cài nhưng chưa track event Purchase
- Không biết bao nhiêu người thực sự chuyển tiền

## Thứ tự ưu tiên làm tiếp (bắt đầu từ 2026-06-30)

1. **Event tracking Purchase** — thêm vào webhook SePay khi xác nhận thành công (1-2 giờ)
2. **Lead Magnet + form thu email** — PDF "50 Prompt miễn phí tốt nhất", vừa GEO vừa build list (3-4 giờ)
3. **Testimonial thật** — nhờ khách hàng cũ viết review có tên + ảnh
4. **Blog 3-5 bài SEO** — từ khóa "prompt AI", "prompt ChatGPT tiếng Việt"
5. **Countdown urgency** — thêm vào PromoPopup và hero section

## Còn thiếu (chưa làm)
- [ ] Lead Magnet — PDF miễn phí để thu email (GEO — giúp ChatGPT/Gemini trích dẫn)
- [ ] Urgency elements — countdown, số lượng giới hạn
- [ ] Testimonial có tên thật + ảnh (hiện đang ẩn danh: LN, MT, HP)
- [ ] Bảng HTML ẩn cho dữ liệu 10 pack (AEO — giúp Google AI Overview đọc)

## Điểm mạnh sẵn có
- Canonical đúng, OG tags đầy đủ, Twitter Card có
- Trang /chinh-sach-giao-file, /ho-tro, /dieu-khoan-su-dung, /tra-cuu-don-hang
- Sitemap.ts tự generate
- Vercel Analytics đã cài (@vercel/analytics)
