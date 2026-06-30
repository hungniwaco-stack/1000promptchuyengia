# Git Workflow — Lỗi thường gặp & Cách xử lý

## Cấu hình
- Remote: https://github.com/hungniwaco-stack/1000promptchuyengia
- Branch: `main`
- Vercel tự deploy khi có push lên `main`
- Git user: Hữu Hùng <hungniwaco@gmail.com>

## Quy trình chuẩn
```bash
cd D:\Hungniwaco\CODEX\1000-Prompt-Website
git add <files>
git commit -m "message"
git push origin main
```

## Lỗi hay gặp & cách xử lý

### 1. index.lock còn tồn tại
```
fatal: Unable to create '.git/index.lock': File exists
```
→ Xóa thủ công: `del .git\index.lock`

### 2. Push bị reject (remote ahead)
```
error: failed to push — Updates were rejected
```
→ Pull trước: `git pull origin main --rebase`
→ Nếu có unstaged: `git stash` → pull → `git stash pop` → push

### 3. Merge conflict
→ Nếu conflict phức tạp và local là đúng: `git merge --abort` rồi `git push origin main --force`
⚠️ Force push xóa commit remote — chỉ dùng khi chắc chắn local là version đúng

### 4. Untracked files chặn pull
```
error: cannot pull with rebase: You have unstaged changes
```
→ `git add -A && git stash` → pull → `git stash pop`

## Lưu ý quan trọng
- Sandbox Linux của Claude KHÔNG thể xóa `.git/index.lock` (permission denied)
  → User phải tự chạy `del .git\index.lock` trong PowerShell Windows
- Sandbox không thể push git (permission) → User phải tự chạy lệnh git trong terminal
- File tạo bởi Claude trong sandbox tự động sync sang `D:\Hungniwaco\CODEX\1000-Prompt-Website`

## Files cần commit sau khi Claude tạo mới
Khi Claude tạo file mới, nhớ git add file đó trước khi commit:
- `app/Analytics.tsx` — đã commit ✅
- `app/SchemaMarkup.tsx` — đã commit ✅
- `app/PromoPopup.tsx` — đã commit ✅ (2026-06-29, commit b2d7e2c)
