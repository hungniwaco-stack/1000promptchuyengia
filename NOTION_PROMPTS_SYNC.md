# Sync Prompt Files to Notion

Script tự động tạo/cập nhật các Pack Prompt `.docx` vào Notion database.

## Chuẩn bị

Thiết lập biến môi trường:

- `NOTION_API_KEY`
- `NOTION_PROMPT_PACKS_DB_ID`

Tùy chọn:

- `GITHUB_REPO` mặc định `hungniwaco-stack/1000promptchuyengia`
- `GITHUB_BRANCH` mặc định `main`
- `NOTION_PROMPT_DIR` mặc định `1000 Prompt/FORMAT_FINAL_CLEAN`
- `NOTION_PROMPT_TITLE_PROP` mặc định `Pack Code`
- `NOTION_PROMPT_FILE_PROP` mặc định `File`
- `NOTION_PROMPT_PACK_NO_PROP` mặc định `Pack No`

## Schema Notion Prompt Packs

Các cột cần có:

1. `Pack Code` (Title)
2. `File` (Files & media)
3. `Pack No` (Number)

## Chạy script

Dry run:

```bash
npm run sync:notion-prompts -- --dry-run
```

Sync thật:

```bash
npm run sync:notion-prompts
```

## Script làm gì

- Đọc file `.docx` trong `1000 Prompt/FORMAT_FINAL_CLEAN`.
- Tạo raw GitHub URL cho từng file.
- Tìm page theo `Pack No` trước, fallback theo `Pack Code`.
- Cập nhật `Pack Code`, `File`, `Pack No`.
- Tạo page mới nếu chưa có page tương ứng.

## Lưu ý

- Repo phải public hoặc raw GitHub URL phải truy cập được từ Notion/email.
- Database phải share quyền cho integration Notion đang dùng token.
- Không xóa page cũ bất thường như `PACK01` nếu chưa có xác nhận riêng.
