# Sync Prompt Files to Notion

Script tự động tạo/cập nhật các Pack Prompt (.docx) vào Notion database.

## Chuẩn bị

Thiết lập biến môi trường:

- `NOTION_API_KEY`
- `NOTION_PROMPT_PACKS_DB_ID`

Tùy chọn:

- `GITHUB_REPO` (mặc định `hungniwaco-stack/1000promptchuyengia`)
- `GITHUB_BRANCH` (mặc định `main`)
- `NOTION_PROMPT_TITLE_PROP` (mặc định `Name`)
- `NOTION_PROMPT_FILE_PROP` (mặc định `File`)
- `NOTION_PROMPT_PACK_NO_PROP` (mặc định `Pack No`)

## Yêu cầu schema trong Notion Prompt DB

Các cột cần có:

1. `Name` (Title)
2. `File` (Files & media)
3. `Pack No` (Number) - khuyến nghị

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

- Đọc tất cả file `.docx` trong thư mục `1000 Prompt/`
- Tạo URL raw GitHub cho từng file
- Tìm page theo `Name` (trùng tên file bỏ `.docx`)
- Nếu có page: update `File` (+ `Pack No`)
- Nếu chưa có: create page mới

## Lưu ý

- Repo phải public hoặc file raw phải truy cập được từ Notion.
- Database phải share quyền cho integration Notion đang dùng token.
