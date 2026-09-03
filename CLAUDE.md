# Project Memory — 1000 Prompt Website

## Báo cáo "Kiểm toán GEO" từ "Hệ thống Hữu Hùng AI" (02/9/2026)

User gửi thêm 1 báo cáo tự động khác (khác "OpenSEO", khác "Giám đốc Marketing" —
nguồn thứ 3 cùng dạng). Nội dung: chấm "AI Citability Score 25.5/100", liệt kê các
khối nội dung ngắn (mô tả pack, FAQ, "Giá trị cốt lõi") và gợi ý 3 TIP để tối ưu GEO.

**Đã xác minh:** phần chẩn đoán VỊ TRÍ là đúng thật — đối chiếu code xác nhận mô tả
10 pack trong `products.ts` chỉ ~30-35 từ/pack, FAQ "1000 Prompt Chuyên Gia là gì?"
trong cả `page.tsx` và `SchemaMarkup.tsx` (2 nơi tách biệt: 1 hiển thị người dùng, 1
là JSON-LD cho AI/Google) trước đó chỉ ~50 từ.

**Đã LOẠI BỎ, không áp dụng:** 2 ví dụ số liệu báo cáo gợi ý chèn vào — "tăng 300%
hiệu suất làm việc" và "huấn luyện hơn 5.000 cá nhân... tiết kiệm 30% chi phí" — đây
là số liệu BỊA, không có nguồn, không được đưa vào bất kỳ đâu trên site (rủi ro uy
tín nếu bị phát hiện lớn hơn nhiều lợi ích SEO ngắn hạn). Thang điểm "AI Citability
Score" cũng không phải chỉ số ngành chính thức nào — chỉ xem là ước lượng tham khảo.

**Đã sửa (dùng dữ kiện thật, không bịa số liệu):** Mở rộng câu trả lời FAQ "1000
Prompt Chuyên Gia là gì?" từ ~50 từ lên ~150 từ ở CẢ 2 nơi (`page.tsx` phần `faqs`
VÀ `SchemaMarkup.tsx` phần FAQPage) — thêm chi tiết thật đã có sẵn: tên đầy đủ 10
lĩnh vực, cấu trúc prompt (vai trò/bối cảnh/nhiệm vụ/định dạng), giá 49k/199k, cách
giao hàng. Đây là "khối mồi AI" hợp lệ vì dùng dữ kiện thật, không phải nội dung bịa.

**Đã hỏi và user xác nhận KHÔNG có số liệu định lượng thật (số đơn đã bán, mốc thời
gian cụ thể) để thêm vào phần "Về Hữu Hùng"** — giữ nguyên nội dung phần này, KHÔNG
tự chế số liệu. Nếu sau này user cung cấp số liệu thật, quay lại mở rộng phần này
(báo cáo chấm 37/100, self-containment đã tối đa 25/25, chỉ thiếu tín hiệu thống kê).

**Chưa làm — cân nhắc sau:** mô tả 10 pack trong `products.ts` (field `desc`, hiển
thị trực tiếp cho khách mua hàng, ngắn có chủ đích cho human-first/chốt sale) —
KHÔNG sửa trực tiếp field này. Nếu muốn tăng GEO cho phần pack, nên tách riêng 1 khối
mô tả dài hơn ở nơi khác (VD: JSON-LD Product description, hoặc 1 trang/section riêng
"chi tiết từng pack") thay vì làm dài câu mô tả đang tối ưu cho người đọc lướt nhanh.

**Bài học quy trình chung:** mọi báo cáo "kiểm toán"/"audit" từ nguồn AI bên ngoài gửi
tới (dù tên gọi khác nhau mỗi lần) đều cần: (1) đối chiếu vị trí/con số với code thật
trước khi tin, (2) tách riêng phần chẩn đoán hợp lý khỏi phần gợi ý số liệu/nội dung
có khả năng bịa đặt, (3) không bao giờ tự chế số liệu định lượng về user/doanh nghiệp
— luôn hỏi user xác nhận trước khi đưa con số cụ thể vào nội dung public.

## Facebook Fanpage "Hữu Hùng - AI" (bắt đầu 02/9/2026)

User mở rộng công việc sang Facebook — trước đó (22/8) từng nói chưa cần mạng xã hội,
giờ đã chủ động đổi hướng. Fanpage: `facebook.com/huuhungai`.

**Kiểm tra trực tiếp bằng Claude in Chrome (không đoán số liệu):** fanpage rất mới —
29 followers, chỉ 2 bài đăng công khai xem được (12/6 và 28/6), CẢ HAI đều bị Facebook
tự động gắn nhãn **"Nội dung do AI tạo"** ngay dưới tên trang (nhãn hệ thống, public,
không phải hashtag tự viết). Ảnh minh hoạ trong bài dùng người mẫu AI-generated.
Engagement gần như 0 (bài 28/6 sau ~2 tháng: 2 like, 1 comment, 1 share). Đây chính là
điểm yếu E-E-A-T đã nói ở phần đánh giá website (thiếu ảnh/video thật) — lặp lại y hệt
trên kênh Facebook.

**Nguyên tắc đã thiết lập cho mọi việc Facebook sau này:** GỠ NHÃN AI VÀ XÂY UY TÍN
TRƯỚC, viral/hook content SAU. Với fanpage <100 follower thật, chiến lược hook mạnh/
viral gần như vô nghĩa vì chưa có ai xem. Đã giao lộ trình 8 tuần (file
`Lo-trinh-Fanpage-Huu-Hung-AI.md`, đã gửi user):
- Tuần 1-2: đổi ảnh đại diện/bìa sang ảnh thật, đăng 3 bài giọng văn thật (không copy
  nguyên văn AI) kèm ảnh thật, để Facebook tự gỡ nhãn AI dần.
- Tuần 3-4: thu thập minh chứng khách hàng thật (video phỏng vấn ngắn hoặc chat feedback
  có xin phép) — nội dung này DÙNG LẠI ĐƯỢC cho trang "Về Hữu Hùng" trên website (đúng
  phần E-E-A-T còn thiếu đã ghi ở dưới).
- Tuần 5-6: tăng follower qua chia sẻ vào nhóm Facebook liên quan bằng tài khoản cá
  nhân + mời người quen, KHÔNG chạy quảng cáo/viral lúc follower còn quá thấp.
- Tuần 7-8: mới bắt đầu áp dụng các ý tưởng hook/nghịch lý bán hàng, 4 định dạng
  (text dài/ảnh/Reels/bài dễ chia sẻ nhóm) đã thiết kế trong phiên 02/9.

**Bộ nội dung Facebook đã thiết kế sẵn (phiên 02/9/2026), dùng dần theo lộ trình trên:**
10 ý tưởng nội dung phá khuôn mẫu (ý tưởng #10 "Tôi sẽ không bán prompt này" là mạnh
nhất — nghịch lý từ chối bán hàng), 15 hook chia 5 nhóm tâm lý (hook #7 xếp mạnh nhất:
"Nếu bạn đang định mua... dừng lại, đọc bài này trước"), 4 định dạng đăng bài
(text dài/ảnh/Reels/dễ chia sẻ trong nhóm), 1 bản viết lại tối ưu retention di động,
3 phiên bản định vị thương hiệu (tối giản/kể chuyện/chuyên nghiệp — bản kể chuyện hợp
nhất với đối tượng SME/freelancer hiện tại), 3 câu hỏi kết bài kích thích thảo luận.
Tất cả đều xoay quanh câu chuyện "khách hỏi mua để viết code, bị từ chối" — **đây là
tình huống ví dụ, chưa xác nhận có thật hay không** — nếu dùng nguyên văn cần thay
bằng tình huống thật đã xảy ra, tránh mất uy tín nếu bị hỏi lại chi tiết trong comment.

**Cần xác nhận thêm:** chưa rõ user tự đăng bài thủ công hay dùng công cụ tự động —
nếu dùng công cụ tự động đăng bài AI, đó nhiều khả năng là nguyên nhân trực tiếp gây
nhãn "Nội dung do AI tạo", cần điều chỉnh cách đăng trước khi bắt đầu Tuần 1.

## Bài 36 — chatgpt-prompt-tong-hop-tu-a-den-z (2026-09-06)

Cùng nguồn "Giám đốc Marketing" bot gửi lại **gần như nguyên plan cũ** (đã xử lý ngày
2026-08-31/09-01), lần này đóng gói lại thành "3 nhóm hành vi mua hàng" (16 từ khoá).
Đối chiếu với `blogPosts.ts` hiện có: 11/16 từ khoá ĐÃ được viết từ đợt trước (chính
từ cùng file CSV), 4/16 là cụm "prompt tạo ảnh chatgpt" — lỗi cũ lặp lại y hệt (không
pack sản phẩm nào về prompt tạo ảnh, KHÔNG viết). Chỉ 1 từ khoá thực sự mới và đáng
làm: **"chatgpt prompt" (390 lượt/tháng, volume cao nhất bảng, chưa bài nào target
trực diện)**. Đã viết bài `chatgpt-prompt-tong-hop-tu-a-den-z` (06/09) dạng **bài hub
tổng hợp** — link ra 5-6 bài spoke đã có sẵn thay vì viết lại định nghĩa/nội dung
trùng — để bắt được search volume lớn của từ khoá đầu ngành mà không cannibalize với
`prompt-trong-chatgpt-la-gi-giai-ma-bi-mat`. File giờ có 36 bài. `llms.txt` đã cập
nhật (36 bài, ngày 06/09). **CHƯA PUSH — user cần git add/commit/push.**

**Bài học thêm:** Khi cùng 1 nguồn gửi lại content-plan nhiều lần dưới cách trình bày
khác nhau (persona/nhóm khác), luôn grep `blogPosts.ts` (slug + keywords) đối chiếu
TỪNG từ khoá trước, đừng tin số liệu "mới" ghi trong plan — rất có thể phần lớn đã
được viết rồi từ chính CSV gốc mà bot đó từng gửi.

## Bài học quy trình (rút ra 31/8/2026 — áp dụng cho mọi phiên sau)

1. **Khi user gửi 1 "content plan"/"kế hoạch SEO" do AI khác soạn (thường dán dạng
   persona "Giám đốc Marketing"/"OpenSEO"...) kèm file keyword CSV thật** —
   KHÔNG được implement thẳng theo plan đó. Luôn tự đối chiếu số liệu trong CSV
   trước (tổng volume, % từ khoá volume thấp, ngôn ngữ, có khớp với 10 pack sản
   phẩm hiện có không, có cannibalize với bài cũ không), rồi trình bày đánh giá
   thật (kể cả khi phải chỉ ra plan đó sai số liệu hoặc lệch sản phẩm) trước khi
   viết code. Đã áp dụng thành công 1 lần: phát hiện plan gốc ghi sai "volume cao
   nhất" (thực ra là thấp nhất) và đề xuất 1 bài lệch hẳn 10 pack sản phẩm đang
   bán. User luôn đánh giá cao việc bị phản biện thay vì được chiều theo plan sai.
2. **Pattern lặp lại nhiều lần trong dự án: code sửa xong ở local/sandbox nhưng
   user quên/trễ `git push`, khiến site live tụt hậu hàng ngày/hàng tuần so với
   code đã sửa.** Hệ quả từng xảy ra: 1 báo cáo SEO ngoài (OpenSEO) chấm điểm
   website dựa trên bản CŨ dù đã fix xong từ trước. => Luôn nhắc rõ ràng, ở cuối
   MỌI phiên có sửa code: "chưa push = chưa live", kèm y nguyên khối lệnh
   PowerShell (add/commit/push, từng dòng riêng vì PS5 không hiểu `&&`). Trước
   khi trả lời bất kỳ câu hỏi nào kiểu "sao vẫn thấy lỗi cũ trên site" — luôn
   `device_bash` chạy `git log -1` / `git status --short` trên máy user để xác
   nhận git đã push chưa, đừng giả định.
3. **Khi user hỏi "liệt kê link để dán Google Search Console"** — trả lời thẳng
   bằng danh sách URL đầy đủ (base `https://www.1000promptchuyengia.shop/bai-viet/
   {slug}`), kèm cảnh báo nếu đợt thay đổi đó chưa được push (tránh user dán link
   404 vào GSC rồi phải request lại).
4. **Khi được hỏi "đánh giá chất lượng website"** — dùng lại khung 6 hạng mục đã
   có sẵn trong CLAUDE.md (Kỹ thuật / Nội dung / GEO-AEO / Chuyển đổi / E-E-A-T /
   Link building) làm baseline, nhưng chấm lại theo tình trạng MỚI NHẤT thay vì
   lặp lại điểm số cũ nguyên văn — nhiều hạng mục đã cải thiện qua các đợt fix
   (ảnh WebP, seoText.ts, 35 bài). E-E-A-T và link building luôn là 2 điểm yếu
   nhất và không thể code hộ (cần ảnh/video thật, review có nguồn, Bing Webmaster
   Tools verify) — nhắc lại 2 điểm này mỗi lần đánh giá.

## Content Plan 5 bài mới (2026-09-01 → 2026-09-05) — dựa trên keyword research CSV user gửi

User gửi file `keywordresearch.csv` (95 từ khoá) kèm 1 bản kế hoạch phễu 3 tầng do
một "Giám đốc Marketing" AI khác soạn (Bài 1-6). Đã đối chiếu số liệu thật trong CSV
và phát hiện: tổng volume cộng dồn cả 95 từ khoá chỉ ~2.110/tháng, 69/95 từ khoá có
volume ≤10, ~75/95 từ khoá là tiếng Anh/không dấu (nghi công cụ lấy data global, không
riêng Việt Nam). Bài 4 gốc (prompt tạo ảnh) lệch hẳn 10 pack sản phẩm hiện có — không
pack nào về prompt tạo ảnh. Bài 6 gốc bị ghi sai số liệu (nói Vol 10 là "cao nhất"
trong khi đó là mức thấp nhất bảng). Bài 1, 2 gốc có nguy cơ cannibalize với bài đã có
sẵn (`cach-viet-prompt-ai-hieu-qua`, `prompt-engineering-la-gi-huong-dan-tu-a-den-z`,
Pillar). User đã duyệt phương án điều chỉnh — đã viết xong 5 bài mới + merge 1 phần
vào bài cũ, **CHƯA PUSH lên GitHub, đang chờ user chạy git**:

1. `prompt-trong-chatgpt-la-gi-giai-ma-bi-mat` (09/01) — gộp 3 biến thể "prompt trong
   chatgpt là gì/la gì" + "prompt chatgpt là gì" (~170 lượt/tháng cộng dồn) vào 1 bài
   duy nhất, tránh tách nhỏ gây cannibalize.
2. `cac-prompt-chatgpt-hieu-qua-nhat-da-kiem-chung` (09/02) — 15 prompt miễn phí +
   chốt sale mua trọn bộ, đúng tinh thần "nhá hàng rồi bán" của bản gốc.
3. `tao-prompt-cho-chatgpt-toi-uu-cong-viec-kinh-doanh` (09/03) — gộp "tạo prompt cho
   chatgpt" (110, cao nhất bảng) + "cách tạo prompt cho chatgpt" (50).
4. `prompt-chatgpt-cho-marketing-ban-hang-tang-doanh-so` (09/04) — **thay cho Bài 4
   gốc**, target cụm tiếng Việt "prompt chatgpt marketing" (không phải bản tiếng Anh),
   gắn với Pack 3.
5. `ung-dung-prompt-engineering-vao-cong-viec-hang-ngay` (09/05) — **thay cho Bài 6
   gốc**, góc độ ứng dụng thực tế (khác góc độ lý thuyết của Pillar/spoke đã có) để
   giảm cannibalize, vẫn bắt được từ khoá "prompt engineering for chatgpt"/"chatgpt
   prompt engineering" (30-40 lượt).
6. Bài 2 gốc ("cấu trúc prompt chatgpt") **không tạo bài mới** — đã thêm hẳn 1 section
   "Cấu trúc prompt ChatGPT chuẩn chuyên gia: công thức 4 bước" vào đầu bài
   `cach-viet-prompt-ai-hieu-qua` (bài cũ, đã có sẵn traffic/backlink).

Mỗi bài mới đều có: intro tự chứa nghĩa, ít nhất 1 internal link về Pillar hoặc bài
liên quan, 1 CTA link về trang chủ/thư viện Prompt — đúng "Nguyên tắc viết bài AEO" đã
ghi trong CLAUDE.md. Word count mỗi bài ~450-610 từ (đã kiểm tra, không phải thin
content). File `blogPosts.ts` giờ có 35 bài. Đã cập nhật `llms.txt` (danh sách 35 bài
+ ngày 2026-09-05).

**Việc còn lại:** user cần `git add . / commit / push` để 5 bài này thật sự lên
production (tương tự lần trước, đừng giả định code local = code live).

## Thông tin cơ bản
- **Owner:** Nguyen Huu Hung — hungniwaco@gmail.com
- **Domain:** www.1000promptchuyengia.shop
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Hosting:** Vercel (deploy bằng git push)
- **Repo local:** `D:\Hungniwaco\CODEX\1000-Prompt-Website`
- **Shell path (sandbox):** `/sessions/sharp-focused-franklin/mnt/1000-Prompt-Website/`

## Cấu trúc dữ liệu bài viết
File nguồn: `app/blogPosts.ts`

```ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO datetime "2026-07-01T07:00:00+07:00" hoặc "YYYY-MM-DD"
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
  giftLink?: string;       // Google Drive link 30 prompt miễn phí
  giftLinkLabel?: string;  // Tên bộ prompt tặng
};
```

**Filter bài đã xuất bản (`app/bai-viet/page.tsx`):**
```ts
const now = new Date();
const publishedPosts = blogPosts.filter((p) => new Date(p.publishedAt) <= now);
```
> Dùng `force-dynamic` để lọc theo giờ thực, không dùng string comparison.

## Lịch đăng bài (1 bài/ngày lúc 6h45 sáng giờ VN — từ 16/7/2026)
| Pack | Slug | publishedAt | giftLink (doc ID) |
|------|------|------------|-------------------|
| 1 | 100-prompt-kinh-doanh-startup | 2026-06-26T07:00:00+07:00 | 1ScW0ar_Gb-2qTd1KhLh6w6zjxzzHSjzY |
| 2 | 100-prompt-tai-chinh-dau-tu | 2026-06-30T18:00:00+07:00 | 1gd-hvgWFOWD7Obi4isCrlIYFXWezk3m8 |
| 3 | 100-prompt-marketing-thuong-hieu | 2026-07-01T07:00:00+07:00 | 1cVgpFRzcWFXvbiwFX2-Vt9c4B3d-2KcW |
| 4 | 100-prompt-ban-hang-dam-phan | 2026-07-01T18:00:00+07:00 | 1DBLB6r7TJA-1QDeSBRfEu2wqrD_Q71pT |
| 5 | 100-prompt-phat-trien-ban-than-nang-suat | 2026-07-02T07:00:00+07:00 | 1J2xWAS1rs9g0ELYC_Z_1hiIb7XASW0z9 |
| 6 | 100-prompt-lanh-dao-quan-ly-doi-nhom | 2026-07-02T18:00:00+07:00 | 1kCaVlHETVDwVBg78ZdjnXuDCQP02XY7q |
| 7 | 100-prompt-kiem-tien-online-thu-nhap-thu-dong | 2026-07-03T07:00:00+07:00 | 1-78QCHc8ruBvqSD_DuXlkDOYgyo41zbp |
| 8 | 100-prompt-ai-cong-nghe-kinh-doanh | 2026-07-03T18:00:00+07:00 | 1o7mM8OtAX7XYmCU4n7vbedmbJtZlGQ9L |
| 9 | 100-prompt-cuoc-song-hanh-phuc | 2026-07-04T07:00:00+07:00 | 1sgMKw6SqYKsBTELCl0vhgPIDaFMZigZR |
| 10 | 100-prompt-fusion-da-linh-vuc | 2026-07-04T18:00:00+07:00 | 1P0lBIapfakEqb_xGzWvJd1syqqyOgOzY |
| - | cach-viet-prompt-ai-hieu-qua | 2026-06-04 | (không có gift) |
| - | ung-dung-ai-trong-kinh-doanh-nho | 2026-06-04 | (không có gift) |
| - | checklist-chon-cong-cu-ai-phu-hop | 2026-06-04 | (không có gift) |

**Format giftLink đầy đủ:**
`https://docs.google.com/document/d/{ID}/edit?usp=sharing&ouid=105115702251895356807&rtpof=true&sd=true`

## Nguồn nội dung bài viết (docx)
Thư mục thứ hai được mount:
- Windows: `D:\Hungniwaco\1000 CÂU PROMPT SIÊU CẤP VIP PRO\Nội dung Đăng từ ngày (26.6.2026)\Bài viết Website`
- Sandbox: `/sessions/sharp-focused-franklin/mnt/Bài viết Website/`

Các file: `Bai 1 - Pack 1.docx` → `Bai 10 - Pack 10.docx`

## Git workflow — CONFIRMED WORKING

**Sandbox KHÔNG thể tự push** — không có TTY để nhập credentials. Mọi push phải chạy từ PowerShell của user.

**Workflow chuẩn sau mỗi lần tôi sửa xong:**
```powershell
cd D:\Hungniwaco\CODEX\1000-Prompt-Website
git add .
git commit -m "mô tả thay đổi"
git push
```
Windows Credential Manager nhớ token sau lần đăng nhập đầu tiên → những lần sau không cần nhập lại.

**Vấn đề thường gặp:**
- `.git/index.lock` hoặc `.git/HEAD.lock` → chạy `del .git\index.lock` từ PowerShell
- `git add` không có dấu chấm → phải là `git add .` (có dấu chấm)
- `.git` là thư mục ẩn trên Windows → mở bằng `notepad .git\config` trong PowerShell

**KHÔNG làm:**
- Đừng nhúng GitHub token vào URL git config — sandbox không push được dù có token trong URL
- Đừng chụp màn hình terminal khi token đang hiển thị — token bị lộ phải revoke ngay
- Đừng dùng `Read-Host "TOKEN"` — đặt token làm prompt text thay vì input
- Sandbox không thể edit `.git/config` qua Edit tool (protected location) — dùng bash hoặc notepad

**Remote URL sạch (không nhúng token):**
`https://github.com/hungniwaco-stack/1000promptchuyengia.git`

## Bài học kỹ thuật quan trọng
1. **Không dùng Python script để replace nội dung lớn trong file TypeScript** — dễ bị truncate. Dùng Write tool (ghi toàn bộ file) hoặc Edit tool (thay đoạn nhỏ).
2. **`force-dynamic` bắt buộc** cho các page lọc theo thời gian — không có nó Next.js cache kết quả build.
3. **So sánh datetime:** dùng `new Date(p.publishedAt) <= new Date()`, không dùng string comparison `p.publishedAt <= today`.
4. **Hiển thị ngày:** dùng `.slice(0, 10)` để cắt bỏ phần giờ trong ISO string khi render.
5. **Gift link block** nằm trong `app/bai-viet/[slug]/page.tsx`, hiển thị có điều kiện `{post.giftLink && ...}`.
6. **PowerShell `@` splatting:** URL chứa `@github.com` bị PowerShell hiểu là splat operator → bọc toàn bộ URL trong dấu ngoặc kép `"..."`.
7. **`git remote set-url` với token trong URL vẫn fail từ sandbox** — git tách username/token và hỏi password riêng qua TTY → không dùng cách này.
8. **Vercel MCP** trả về 403 cho project này — không dùng được `deploy_to_vercel`. Deploy tự động qua GitHub khi push.
9. **File blogPosts.ts bị duplicate content sau nhiều lần append:** Luôn kiểm tra `grep -n '^\];' app/blogPosts.ts` sau khi append. Nếu có 2 dòng `];` → dùng Python đọc file với `errors='replace'`, giữ lines đến trước `];` đầu tiên, ghi lại sạch.
10. **Lịch đăng bài:** Sáng **6h45** và tối **19h15** giờ Việt Nam (UTC+7). Format: `T06:45:00+07:00` và `T19:15:00+07:00`. Đổi hàng loạt bằng `sed -i 's/T07:00:00/T06:45:00/g; s/T18:00:00/T19:15:00/g'`.
11. **Schema `offers` cần 3 trường bổ sung** để tránh cảnh báo vàng trong Search Console: `validFrom`, `shippingDetails` (OfferShippingDetails với deliveryTime), `hasMerchantReturnPolicy` (MerchantReturnNotPermitted cho sản phẩm số).
12. **Google Search Console — đã setup:** Sitemap `/sitemap.xml` đã submit thành công ngày 15/7/2026, phát hiện 30 trang. Sau mỗi lần push bài mới, vào Search Console → Kiểm tra URL → Yêu cầu lập chỉ mục cho từng bài quan trọng.
13. **Khi append bằng heredoc (`cat >>`)** — luôn kiểm tra tail -10 sau đó. Heredoc đôi khi bị encoding issue với ký tự tiếng Việt trên một số môi trường → dùng Python script thay thế nếu file bị corrupt.
14. **PowerShell `&&` KHÔNG hoạt động** trên PowerShell 5 (mặc định Windows) — token `&&` không phải statement separator hợp lệ. **LUÔN hướng dẫn chạy từng lệnh riêng:**
    ```powershell
    git add .
    git commit -m "mô tả"
    git push
    ```
    Không bao giờ viết `git add . && git commit ... && git push` trong hướng dẫn cho user.
15. **Khi viết Spoke posts** — mỗi bài phải có: (1) đoạn `intro` tự chứa đủ nghĩa AI có thể trích, (2) heading H2 chứa từ khóa dạng câu hỏi, (3) internal link về Pillar page `/bai-viet/prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien`, (4) internal link về trang chủ.
16. **Cập nhật `llms.txt` khi có bài mới:** thêm entry vào section "Nội dung blog nổi bật", cập nhật ngày ở dòng 3. Format: `- [Tiêu đề bài](https://www.1000promptchuyengia.shop/bai-viet/[slug])`. Ưu tiên Pillar ở đầu danh sách.
17. **Sau 27/7/2026 không còn bài nào được schedule** — cần lên kế hoạch Phase 2 nội dung (AEO mới, Spoke mới, hoặc update bài cũ) trước ngày 27/7.

## AEO + GEO — Trạng thái đã làm (cập nhật 2026-07-20)

**Đã hoàn thành (Phase 1 — AEO/SEO):**
- `app/SchemaMarkup.tsx` — có đủ 5 schema: WebSite, Product + AggregateRating, FAQPage, ItemList (10 packs), Person (Hữu Hùng). **Không cần làm lại.**
- `app/bai-viet/[slug]/page.tsx` — có JSON-LD Article schema + canonical URL cho từng bài.
- `app/robots.ts` — đã nâng cấp: 8 AI bot directives (GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, Google-Extended, PerplexityBot, CCBot, meta-externalagent) + rules dạng array.
- `app/sitemap.ts` — sửa baseUrl thành `https://www.1000promptchuyengia.shop`.
- Meta description trong `layout.tsx` — đã viết lại dạng câu trả lời trực tiếp AI có thể trích.
- FAQ: 9 câu (5 vận hành + 4 AEO).
- 30 bài blog tổng cộng (tính đến 20/7/2026).

**Đã hoàn thành (Phase 2 — GEO, thực hiện 19–20/7/2026):**
- `public/llms.txt` — **ĐÃ TẠO VÀ CẬP NHẬT.** Ngày 20/7 đã thêm 5 bài mới + đưa Pillar lên đầu danh sách. Mỗi khi có bài mới publish, thêm entry vào phần "Nội dung blog nổi bật". **Không tạo lại.**
- Pillar Page: `prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien` (3.500 chữ, 11 sections) — **đã thêm vào blogPosts.ts.**
- Content Cluster (Hub-and-Spoke): **100% HOÀN THÀNH ngày 20/7/2026** — 1 Pillar + 5 Spokes đều đã viết và schedule. Spoke 4 & 2 viết trước (19/7), Spoke 1, 3, 5 viết sau (20/7). blogPosts.ts hiện có 30 bài, 1631 dòng.

**Còn thiếu (cần user cung cấp thông tin):**
- Trang "Về Hữu Hùng" chi tiết: số đơn đã bán, background, ảnh/video thật → E-E-A-T
- Review có nguồn xác minh: ảnh chụp màn hình, link Facebook thật
- SchemaMarkup: reviewCount hiện là 3, cần cập nhật khi có review thật
- **Bing Webmaster Tools** — CHƯA SETUP (xem hướng dẫn trong SEO workflow)
- OG Image (1200×630px) — để Facebook/Zalo preview đẹp khi chia sẻ link

**Đã có sẵn, KHÔNG làm lại:**
- Twitter Card meta tags — **đã có trong `layout.tsx`** (twitter:card, title, description, images). Kiểm tra ngày 20/7/2026, xác nhận đầy đủ.

## Đánh giá chất lượng website (20/7/2026) — Tổng: 6.2/10

| Hạng mục | Điểm | Ghi chú |
|----------|------|---------|
| Kỹ thuật | 8/10 | Next.js, schema, sitemap, robots — tốt |
| Nội dung | 7/10 | 30 bài AEO, content cluster hoàn chỉnh |
| GEO/AEO | 6/10 | llms.txt có, nhưng Bing chưa setup |
| Chuyển đổi | 5/10 | OG Image sai tỷ lệ, chưa A/B test giá |
| E-E-A-T | 4/10 | Thiếu ảnh/video thật, review chưa xác minh |
| Link building | 2/10 | Chưa có backlink, chưa được trích dẫn ngoài |

**Điểm kéo xuống chủ yếu:** E-E-A-T và link building — cần anh cung cấp nội dung thật, không làm thay được.

**3 ưu tiên tiếp theo:**
1. Bing Webmaster Tools (30 phút, 1 lần)
2. Ảnh/video thật của Hữu Hùng → trang Về tôi
3. OG Image đúng kích thước 1200×630px

## Báo cáo Audit SEO (đã đọc 19/7/2026)
- **Location:** `D:\Dropbox\01. DỰ ÁN 2026\INDEX\Báo cáo 1000chuyengia`
- **Files chính:**
  - `01. CONSOLIDATED-AUDIT.md` — SEO Health Score: 12/100 (trước khi sửa), 7 categories
  - `6.3. CLUSTER-PLAN.md` — Hub-and-spoke: 1 Pillar + 5 Spokes, 42 keywords, ~17.000 lượt/tháng
  - `02. GEO-DEEP-ANALYSIS.md` — GEO Score: 4/100 (trước khi sửa), AI bot access analysis
- **Lưu ý:** Audit được viết cho Shopify — nhiều khuyến nghị không áp dụng cho Next.js (theme.liquid, Shopify Admin). Cross-check với codebase trước khi làm theo.

## Content Cluster — Spoke posts (cập nhật 20/7/2026)
Thứ tự ưu tiên (theo commercial intent + search volume):

| # | Spoke | Slug | publishedAt | Trạng thái |
|---|-------|------|-------------|------------|
| 4 | Spoke 4 | chatgpt-vs-claude-vs-gemini-2026-nen-dung-ai-nao | 2026-07-23T06:45:00+07:00 | ✅ ĐÃ VIẾT |
| 2 | Spoke 2 | prompt-ai-viet-content-marketing-hieu-qua | 2026-07-24T06:45:00+07:00 | ✅ ĐÃ VIẾT |
| 1 | Spoke 1 | 7-loi-viet-prompt-chatgpt-nguoi-moi-mac-phai | 2026-07-25T06:45:00+07:00 | ✅ ĐÃ VIẾT |
| 3 | Spoke 3 | prompt-ai-cho-chu-doanh-nghiep-tu-dong-hoa-cong-viec | 2026-07-26T06:45:00+07:00 | ✅ ĐÃ VIẾT |
| 5 | Spoke 5 | 6-ky-thuat-prompt-engineering-nang-cao | 2026-07-27T06:45:00+07:00 | ✅ ĐÃ VIẾT |

Tất cả Spoke phải có **internal link về Pillar page** (`/bai-viet/prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien`) và về **trang chủ**.

**Nguyên tắc viết bài AEO:**
- Đoạn `intro` phải tự chứa đủ nghĩa, AI có thể trích nguyên văn (định nghĩa hoặc tóm tắt trong 2-3 câu)
- Heading H2 chứa từ khóa + câu hỏi mà người dùng thực sự gõ
- Có ít nhất 1 section định nghĩa ("X là gì"), 1 section so sánh, 1 section "dành cho ai"
- Cuối bài có internal link về trang chủ hoặc bài liên quan
- Category "So sánh & Đánh giá" và "Kiến thức AI" là 2 category AEO cao nhất

## Lịch đăng bài — đầy đủ (27 bài tính đến 20/7/2026)
| # | Slug | publishedAt |
|---|------|-------------|
| Pack 1 | 100-prompt-kinh-doanh-startup | 2026-06-26T06:45:00+07:00 |
| Pack 2 | 100-prompt-tai-chinh-dau-tu | 2026-06-30T19:15:00+07:00 |
| KB 1 | cach-viet-prompt-ai-hieu-qua | 2026-06-04 |
| KB 2 | ung-dung-ai-trong-kinh-doanh-nho | 2026-06-04 |
| KB 3 | checklist-chon-cong-cu-ai-phu-hop | 2026-06-04 |
| Pack 3 | 100-prompt-marketing-thuong-hieu | 2026-07-01T06:45:00+07:00 |
| Pack 4 | 100-prompt-ban-hang-dam-phan | 2026-07-01T19:15:00+07:00 |
| Pack 5 | 100-prompt-phat-trien-ban-than-nang-suat | 2026-07-02T06:45:00+07:00 |
| Pack 6 | 100-prompt-lanh-dao-quan-ly-doi-nhom | 2026-07-02T19:15:00+07:00 |
| Pack 7 | 100-prompt-kiem-tien-online-thu-nhap-thu-dong | 2026-07-03T06:45:00+07:00 |
| Pack 8 | 100-prompt-ai-cong-nghe-kinh-doanh | 2026-07-03T19:15:00+07:00 |
| Pack 9 | 100-prompt-cuoc-song-hanh-phuc | 2026-07-04T06:45:00+07:00 |
| Pack 10 | 100-prompt-fusion-da-linh-vuc | 2026-07-04T19:15:00+07:00 |
| AEO 1 | prompt-ai-la-gi-tai-sao-nen-dung-prompt-viet-san | 2026-07-14T06:45:00+07:00 |
| AEO 2 | so-sanh-1000-prompt-chuyen-gia-vs-tu-tim-prompt | 2026-07-14T13:00:00+07:00 |
| AEO 3 | chatgpt-danh-cho-nguoi-moi-bat-dau | 2026-07-15T06:45:00+07:00 |
| AEO 4 | 10-prompt-ai-hay-nhat-cho-nguoi-kinh-doanh-nho | 2026-07-15T19:15:00+07:00 |
| AEO 5 | ai-co-the-lam-gi-cho-nhan-vien-van-phong | 2026-07-16T06:45:00+07:00 |
| AEO 7 | prompt-engineering-la-gi-huong-dan-tu-a-den-z | 2026-07-17T06:45:00+07:00 |
| AEO 9 | ai-danh-cho-hoc-sinh-sinh-vien-cach-dung-chatgpt-hoc-tap | 2026-07-18T06:45:00+07:00 |
| AEO 11 | cach-viet-prompt-ai-de-tao-content-ban-hang-hieu-qua | 2026-07-19T06:45:00+07:00 |
| Pillar | prompt-engineering-cho-nguoi-viet-huong-dan-toan-dien | 2026-07-19T09:00:00+07:00 |
| AEO 6 | gemini-vs-chatgpt-cong-cu-ai-nao-tot-hon-cho-nguoi-viet | 2026-07-20T06:45:00+07:00 |
| AEO 8 | tai-sao-ai-tra-loi-khong-dung-y-cach-khac-phuc | 2026-07-21T06:45:00+07:00 |
| AEO 10 | chatgpt-co-the-thay-nhan-vien-marketing-khong | 2026-07-22T06:45:00+07:00 |
| Spoke 4 | chatgpt-vs-claude-vs-gemini-2026-nen-dung-ai-nao | 2026-07-23T06:45:00+07:00 |
| Spoke 2 | prompt-ai-viet-content-marketing-hieu-qua | 2026-07-24T06:45:00+07:00 |
| Spoke 1 | 7-loi-viet-prompt-chatgpt-nguoi-moi-mac-phai | 2026-07-25T06:45:00+07:00 |
| Spoke 3 | prompt-ai-cho-chu-doanh-nghiep-tu-dong-hoa-cong-viec | 2026-07-26T06:45:00+07:00 |
| Spoke 5 | 6-ky-thuat-prompt-engineering-nang-cao | 2026-07-27T06:45:00+07:00 |

## SEO workflow — sau mỗi lần push bài mới

**Google (mỗi bài mới):**
1. Vào https://search.google.com/search-console → Kiểm tra URL
2. Nhập URL bài mới (vd: `/bai-viet/prompt-ai-la-gi-...`) → Enter
3. Nhấn "Yêu cầu lập chỉ mục" → Google crawl trong 1–3 ngày

**Bing — CHƯA SETUP (cần làm):**
1. Vào https://www.bing.com/webmasters → đăng nhập Microsoft
2. Thêm site `https://www.1000promptchuyengia.shop`
3. Xác minh quyền sở hữu → thêm meta tag vào `layout.tsx`
4. Submit sitemap `https://www.1000promptchuyengia.shop/sitemap.xml`
> Bing quan trọng vì ChatGPT Search và Copilot dùng Bing index — muốn AI trích dẫn thì phải có trên Bing.

**Từ khóa AEO người dùng hay gõ vào AI (test thử định kỳ):**
- "prompt AI là gì" / "prompt engineering là gì"
- "ChatGPT vs Gemini cái nào tốt hơn"
- "bộ prompt AI tiếng Việt" / "1000 prompt AI mua ở đâu"
- "ChatGPT làm gì được cho người kinh doanh"
- "AI cho nhân viên văn phòng" / "dùng AI để viết content bán hàng"

## Cấu trúc thư mục chính
```
app/
  blogPosts.ts          ← nguồn dữ liệu tất cả bài viết (30 bài tính đến 20/7/2026)
  robots.ts             ← robots.txt tự động + 8 AI bot directives (đã cập nhật 19/7)
  sitemap.ts            ← sitemap động, tự thêm bài mới
  SchemaMarkup.tsx      ← JSON-LD: Organization, WebSite, Product, FAQPage, ItemList, Person
  icon.png              ← favicon (convention Next.js App Router, thêm 22/8/2026)
  bai-viet/
    page.tsx            ← danh sách bài (force-dynamic + datetime filter)
    [slug]/page.tsx     ← chi tiết bài (JSON-LD Article + Breadcrumb + gift link + related posts)
  layout.tsx            ← Analytics (GA4 + FB Pixel) + meta AEO + Bing verification hook
components/
  Analytics.tsx         ← GA4 + FB Pixel (đã tích hợp)
public/
  llms.txt              ← GEO: hướng dẫn AI bots nhận diện thương hiệu (sửa chính xác 22/8/2026)
  images/
    logo.png / logo.webp        ← webp là bản tối ưu dùng trong code, png là gốc giữ nguyên
    banner.png / banner.webp    ← webp là bản tối ưu dùng trong code, png là gốc giữ nguyên
    og-image.jpg                 ← ảnh chia sẻ social chuẩn 1200×630
    packs/pack-XX.png / pack-XX.webp  ← webp là bản tối ưu dùng trong code
```

## SEO kỹ thuật — Audit & fix (2026-08-22)

**Phát hiện quan trọng nhất:** ảnh trong `public/images/` chưa từng được nén cho web
— banner.png 1.77MB, logo.png 847KB, 10 pack-XX.png ~1.8MB/ảnh (~18MB tổng). Đây là
nguyên nhân chính khiến Core Web Vitals (LCP) kém, nặng hơn mọi vấn đề SEO khác từng
ghi nhận trước đó.

**Đã sửa (đã push lên `main`, xem commit ngày 22/8/2026):**
- Tạo bản `.webp`/`.jpg` tối ưu bên cạnh mọi ảnh gốc (không xoá/ghi đè bản gốc, đúng
  quy tắc "không đụng public/images/ gốc"): `banner.webp` (87KB), `logo.webp` (8.5KB),
  10× `pack-XX.webp` (~45KB/ảnh), `og-image.jpg` mới 1200×630. Tổng ảnh trang chủ giảm
  từ ~20.6MB xuống ~0.55MB (~97%). Code (`page.tsx`, `bai-viet/page.tsx`,
  `bai-viet/[slug]/page.tsx`, `products.ts`, `layout.tsx`) đã trỏ sang bản webp/jpg mới.
- Thêm `app/icon.png` (512×512, favicon) — trước đây site không có favicon.
- `layout.tsx`: OG/Twitter image đổi sang `og-image.jpg` (1200×630) thay vì banner sai
  tỷ lệ. Thêm hook đọc `process.env.BING_VERIFICATION_CODE` để tự sinh thẻ
  `msvalidate.01` khi có giá trị — **chưa set trên Vercel, cần làm sau khi có mã từ
  Bing Webmaster Tools** (xem mục Bing bên dưới).
- `SchemaMarkup.tsx`: thêm `organizationSchema` (sameAs Facebook `facebook.com/huuhungai`,
  contactPoint hotline/email), thêm `sameAs` vào Person schema, sửa `image` của
  Product schema sang `og-image.jpg`.
- `bai-viet/[slug]/page.tsx`: thêm BreadcrumbList schema, thêm `image`/`dateModified`/
  `mainEntityOfPage` vào Article schema, thêm OG/Twitter image riêng cho từng bài
  (trước đây không có).
- `public/llms.txt`: sửa 2 lỗi thông tin sai — (1) ghi nhầm giao hàng qua Google Drive,
  thực tế giao qua **email tự động** (Google Drive chỉ dùng cho quà tặng blog); (2) ghi
  nhầm hỗ trợ qua Facebook Messenger, thực tế là **hotline/Zalo 0944 851719 + email
  hatmuadem@gmail.com**. Đã cập nhật đủ danh sách 30 bài (trước chỉ có 11) và ngày cập
  nhật 22/8/2026.

**⚠️ Rủi ro cần quyết định — CHƯA TỰ SỬA:** `aggregateRating` (5 sao, reviewCount 3) và
3 review mẫu trong `comboProductSchema` chưa rõ có phải review thật/xác minh được
không. Google chỉ cho phép review trong structured data nếu là thật. Đã ghi cảnh báo
ngay trong code. Cần hỏi user: giữ (nếu có ảnh chụp màn hình/link Facebook xác minh)
hay gỡ `aggregateRating`/`review` khỏi schema.

**Nội dung ngừng cập nhật:** bài blog gần nhất đăng 27/7/2026, commit gần nhất trước
phiên 22/8 là 20/7/2026 → tính đến 22/8/2026 đã 26 ngày không có bài mới/commit. Ưu
tiên quan trọng hơn kỹ thuật cho giai đoạn tiếp theo — cần lên kế hoạch Phase 3 nội
dung (chủ đề mới, lịch đăng, từ khoá AEO) khi user sẵn sàng.

**Việc user cần tự làm (đã hướng dẫn chi tiết trong
`BAO_CAO_TOI_UU_SEO_2026-08-22.md` ở root repo):**
- Setup Bing Webmaster Tools (bing.com/webmasters) → verify bằng HTML meta tag → set
  `BING_VERIFICATION_CODE` trên Vercel env → submit sitemap.xml cho Bing. Quan trọng vì
  ChatGPT Search và Copilot dùng chỉ mục Bing.
- Google Search Console: yêu cầu lập chỉ mục URL mới sau mỗi lần deploy, theo dõi Core
  Web Vitals cải thiện sau khi ảnh được nén.
- Scrape lại link trên Facebook Debugger sau khi deploy để lấy ảnh OG mới.
- Quyết định về aggregateRating/review (xem mục rủi ro ở trên).

## ⚠️ QUAN TRỌNG: fix ngày 22/8/2026 CHƯA TỪNG ĐƯỢC PUSH (phát hiện 31/8/2026)

Kiểm tra lại ngày 31/8/2026 cho thấy local vẫn đứng ở commit `9229cfa` (20/7/2026) —
toàn bộ phần "Đã sửa" ở mục audit 22/8/2026 phía trên (ảnh webp, favicon, schema,
llms.txt) **vẫn chỉ nằm trên máy user, chưa từng `git push`**. Một công cụ scan SEO
ngoài ("OpenSEO") chạy vào site live ngày 31/8 vẫn báo LCP trang chủ 14.9s và ảnh
hero nặng — đúng như dự đoán, vì bản live chưa nhận fix. **Luôn hỏi/nhắc user chạy
git add/commit/push sau mỗi lần sửa code ở đây — đừng giả định code đã lên production
chỉ vì đã ghi xong file vào máy.**

## Audit SEO lần 2 — OpenSEO scan (2026-08-31)

Công cụ ngoài scan site, điểm SEO chuẩn 97/100, TTFB 13ms, content 600-2400 từ/bài —
nhưng báo 3 điểm nghẽn. Đã điều tra & sửa cả 3 (chờ user push):

1. **Thin content — đúng 4 trang phụ** (`chinh-sach-giao-file`, `dieu-khoan-su-dung`,
   `ho-tro`, `tra-cuu-don-hang`) chỉ có 51-128 từ. Đã viết thêm nội dung thực chất
   (không nhồi từ khoá) lên 300+ từ mỗi trang, thêm heading H2, internal link chéo
   giữa các trang chính sách. KHÔNG gắn `noindex` vì đây là trang chính sách thật, có
   giá trị E-E-A-T, không phải trang giỏ hàng/đăng nhập.
2. **`tra-cuu-don-hang` trước đây là Client Component (`"use client"`) nên KHÔNG THỂ
   export `metadata`** — bị thiếu hẳn title/description riêng, kế thừa mặc định của
   layout. Đã tách thành `page.tsx` (Server Component, có metadata riêng + nội dung
   SEO tĩnh) + `OrderLookupForm.tsx` (Client Component chứa state/form). Nếu sau này
   cần thêm trang có form tương tự, dùng đúng pattern tách này để không mất metadata.
   Nhân tiện cũng sửa nốt `logo.png` → `logo.webp` còn sót lại ở trang này (bị bỏ sót
   trong đợt sửa ảnh 22/8 vì không nằm trong danh sách file lúc đó tìm kiếm).
3. **Title/meta quá dài:** 29/30 bài blog có `<title>` > 60 ký tự (do
   `${post.title} | Hữu Hùng AI` cộng thêm hậu tố), 24/30 có mô tả > 150 ký tự; trang
   chủ (`layout.tsx`) description dài 258 ký tự. Tạo `app/seoText.ts`
   (`truncateTitle`, `truncateDescription` — cắt tại ranh giới từ, không cắt giữa
   chữ) và áp dụng **chỉ cho thẻ `<title>`/`<meta description>`/Twitter** trong
   `bai-viet/[slug]/page.tsx`; H1, mô tả đầy đủ trên trang, và OG title/description
   (Facebook không cắt cứng 60 ký tự như Google) vẫn giữ nguyên bản đầy đủ
   `post.title`/`post.description`. Trang chủ: viết lại description ngắn 132 ký tự,
   có CTA "Tải ngay". **Không sửa từng bài trong `blogPosts.ts`** — giữ nguyên tiêu đề
   gốc cho H1/OG, chỉ cắt bản dùng riêng cho thẻ `<title>`.
