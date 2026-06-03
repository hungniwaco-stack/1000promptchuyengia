# SePay Payment Automation Setup

Website dùng SePay theo luồng VietQR + webhook:

1. Khách tạo đơn trên website.
2. API tạo mã đơn dạng `ORDYYYYMMDDHHMMSS`.
3. Modal hiển thị QR động từ `qr.sepay.vn` với đúng số tiền và nội dung chuyển khoản.
4. Khi ngân hàng nhận tiền, SePay gửi webhook về website.
5. Website kiểm tra HMAC, mã đơn, số tiền rồi cập nhật `Payment Status = Paid` trong Notion.

## 1) Biến môi trường

Thiết lập trên Vercel:

- `NOTION_API_KEY`: Internal Integration Token của Notion.
- `NOTION_ORDERS_DB_ID`: ID database nhận đơn.
- `SEPAY_WEBHOOK_SECRET`: Secret HMAC-SHA256 tạo trong SePay webhook.
- `SEPAY_BANK_CODE`: mã ngân hàng dùng tạo QR, ví dụ `ACB`.
- `SEPAY_ACCOUNT_NUMBER`: số tài khoản nhận tiền, ví dụ `201482319`.

Không commit secret thật vào repository.

## 2) Cấu hình webhook trong SePay

Trong SePay Dashboard:

1. Vào `Integrations` -> `Webhooks`.
2. Tạo webhook mới.
3. URL production:
   `https://www.1000promptchuyengia.shop/api/sepay/webhook`
4. Event type: `Money in`.
5. Content-Type: `application/json`.
6. Security: chọn `HMAC-SHA256`.
7. Copy secret vào Vercel env `SEPAY_WEBHOOK_SECRET`.
8. Bật filter theo payment-code prefix `ORD` nếu tài khoản SePay đã cấu hình cấu trúc mã thanh toán.
9. Bật auto retry.

## 3) Notion Orders schema

Webhook hiện cần các cột đã có:

- `Order ID`
- `Amount`
- `Payment Status`

Khi giao dịch khớp, webhook chỉ cập nhật:

- `Payment Status = Paid`

## 4) Kiểm thử

Sau khi deploy:

1. Tạo một đơn test trên website.
2. Kiểm tra Notion có đơn `Pending`.
3. Trong SePay webhook, dùng tính năng test send nếu có thể chỉnh payload, hoặc chuyển khoản thật số tiền nhỏ theo mã đơn test.
4. Kỳ vọng Notion chuyển sang `Paid`.
