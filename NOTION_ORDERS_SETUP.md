# Notion Orders Database Setup

Tài liệu này chuẩn hóa cấu trúc database Notion để API `POST /api/order` ghi đơn ổn định.

## 1) Biến môi trường

Thiết lập trên Vercel (Project Settings -> Environment Variables):

- `NOTION_API_KEY`: Internal Integration Token của Notion.
- `NOTION_ORDERS_DB_ID`: ID database nhận đơn.

Lưu ý:
- Sau khi thêm/sửa env, cần redeploy để nhận biến mới.

## 2) Quyền truy cập Notion

Trong Notion:
- Mở database đơn hàng.
- Bấm `...` -> `Connections`.
- Kết nối integration đang dùng cho `NOTION_API_KEY`.

Nếu thiếu bước này, API sẽ trả lỗi 403 khi ghi đơn.

## 3) Schema database bắt buộc

Tên cột phải đúng chính tả như dưới đây:

1. `Order ID` (type: `Title`)
2. `Name` (type: `Rich text`)
3. `Phone` (type: `Phone`)
4. `Email` (type: `Email`)
5. `Package` (type: `Rich text`)
6. `Amount` (type: `Number`)
7. `Payment Status` (type: `Select`)
: giá trị dùng trong code: `Pending`
8. `Delivery Status` (type: `Select`)
: giá trị dùng trong code: `Not Sent`, `Sent`

## 4) Test nhanh sau cấu hình

Chạy form đặt hàng trên website và gửi 1 đơn test.

Kỳ vọng:
- API trả `ok: true` và có `orderId`.
- Database Notion có bản ghi mới với:
  - `Payment Status = Pending`
  - `Delivery Status = Not Sent`

## 5) Lỗi thường gặp

- `Thiếu biến môi trường Notion.`
: chưa set `NOTION_API_KEY` hoặc `NOTION_ORDERS_DB_ID`.

- `Không thể ghi đơn vào Notion.`
: sai tên cột, sai kiểu cột, hoặc integration chưa được share quyền vào database.
