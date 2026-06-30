# Analytics — GA4 & Facebook Pixel

## Google Analytics 4
- **Measurement ID:** `G-3PP4YXMFZR`
- **Tài khoản GA4:** analytics.google.com — account `lamyoutubetudong.com` (ID: 399513115)
- **Property:** `1000 Prompt Chuyên Gia` (tạo ngày 2026-06-29)
- **Trạng thái:** ✅ Live, đã xác nhận chạy trên production

## Facebook Pixel
- **Pixel ID:** `1653031182438602`
- **Tên Pixel:** `1000 Prompt Website`
- **Tài khoản Meta Business:** Hữu Hùng – AI (business.facebook.com)
- **Tạo ngày:** 2026-06-29
- **Trạng thái:** ✅ Live, fbq() function active trên production

## Cách cài (đã làm, ghi lại để tham khảo)
- Code: `app/Analytics.tsx` — dùng `next/script` với `strategy="afterInteractive"`
- Đọc từ env: `process.env.NEXT_PUBLIC_GA_ID` và `process.env.NEXT_PUBLIC_FB_PIXEL_ID`
- Import vào `app/layout.tsx` với tên `AnalyticsTracking`
- Biến đã set cả trong `.env.local` (development) và Vercel Dashboard (production)

## Tài khoản GA4 khác của user
- `lamyoutubetudong.com` — property ID 543593055 (website khác)
- `Tralaoi` — account ID 396291976 (website khác)
