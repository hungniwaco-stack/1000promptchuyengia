# Project — 1000 Prompt Chuyên Gia

## Thông tin cơ bản
- **Domain:** https://www.1000promptchuyengia.shop
- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Deploy:** Vercel — project name `1000promptchuyengia-next`
- **Repo GitHub:** https://github.com/hungniwaco-stack/1000promptchuyengia
- **Branch chính:** `main` (Vercel auto-deploy khi push lên main)
- **Chủ:** Hữu Hùng — hungniwaco@gmail.com

## Cấu trúc thư mục quan trọng
```
app/
  page.tsx          — Trang chủ (toàn bộ nội dung landing page)
  layout.tsx        — Root layout (GA4, Pixel, Vercel Analytics)
  products.ts       — Data 10 pack + combo (giá, mô tả, ảnh)
  blogPosts.ts      — Data bài viết
  Analytics.tsx     — GA4 + Facebook Pixel component
  SchemaMarkup.tsx  — JSON-LD Schema (SEO)
  PromoPopup.tsx    — Popup khuyến mãi (hiện sau 8 giây)
  BuyButton.tsx     — Nút mua hàng (mở CheckoutModal)
  CheckoutModal.tsx — Modal thanh toán QR SePay
  PricingSection.tsx — Bảng giá
  api/
    order/route.ts        — Tạo đơn hàng
    sepay/webhook/route.ts — Webhook nhận thanh toán từ SePay
```

## Ảnh (quan trọng)
- File ảnh thực tế đều là **`.png`** (không phải `.webp`)
- Đường dẫn đúng: `/images/logo.png`, `/images/banner.png`, `/images/packs/pack-01.png` đến `pack-10.png`
- Nếu tạo/sửa code liên quan đến ảnh → dùng `.png`, không dùng `.webp`

## Sản phẩm
- **10 pack lẻ:** mỗi pack 49,000 VNĐ (PACK 1–10, 100 prompt/pack)
- **Combo trọn bộ:** 199,000 VNĐ (tiết kiệm 291,000đ so với mua lẻ)
- File giao: Word (.docx), gửi tự động qua email sau khi SePay xác nhận thanh toán

## Hệ thống thanh toán
- SePay VietQR — webhook tự động xác nhận
- Giao file qua Resend (email)
- Notion làm database lưu đơn hàng

## Biến môi trường quan trọng (đã set trên Vercel Production)
- `NOTION_API_KEY`, `NOTION_ORDERS_DB_ID`, `NOTION_PROMPT_PACKS_DB_ID`
- `SEPAY_WEBHOOK_SECRET`, `SEPAY_BANK_CODE`, `SEPAY_ACCOUNT_NUMBER`
- `RESEND_API_KEY`, `DELIVERY_FROM_EMAIL`, `DELIVERY_REPLY_TO_EMAIL`
- `NEXT_PUBLIC_GA_ID` = G-3PP4YXMFZR
- `NEXT_PUBLIC_FB_PIXEL_ID` = 1653031182438602
