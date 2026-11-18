// scripts/submit-indexnow.mjs
//
// Gửi (submit) toàn bộ URL hiện có trong sitemap.xml của site lên IndexNow
// (Bing + các search engine khác dùng chung giao thức IndexNow) để được
// crawl/index nhanh hơn thay vì chờ crawler tự ghé thăm.
//
// Cách chạy (không cần cài thêm gì, chỉ cần Node.js 18+):
//   node scripts/submit-indexnow.mjs
//
// Nên chạy lại mỗi khi đăng bài mới hoặc sửa nội dung quan trọng trên site.
//
// Yêu cầu: file key "8d344dab18784178a1811fc50c45a76e.txt" đã được deploy lên
// public/ (tức truy cập được tại https://www.1000promptchuyengia.shop/8d344dab18784178a1811fc50c45a76e.txt)
// — nếu chưa deploy, IndexNow sẽ từ chối submit (lỗi 403).

const BASE_URL = "https://www.1000promptchuyengia.shop";
const INDEXNOW_KEY = "8d344dab18784178a1811fc50c45a76e";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

async function getUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Không tải được sitemap.xml (HTTP ${res.status})`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

async function submit(urlList) {
  const body = {
    host: "www.1000promptchuyengia.shop",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`Đang submit ${urlList.length} URL lên IndexNow...`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    console.log(`✅ Thành công (HTTP ${res.status}). IndexNow đã nhận ${urlList.length} URL.`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`❌ Lỗi HTTP ${res.status}: ${text}`);
    if (res.status === 403) {
      console.error(
        "→ Nguyên nhân thường gặp: file key chưa được deploy lên public/, hoặc deploy chưa xong. Kiểm tra lại: " +
          KEY_LOCATION
      );
    }
    process.exitCode = 1;
  }
}

async function main() {
  const urlList = await getUrlsFromSitemap();
  if (urlList.length === 0) {
    console.error("Không tìm thấy URL nào trong sitemap.xml, dừng lại.");
    process.exitCode = 1;
    return;
  }
  await submit(urlList);
}

main().catch((err) => {
  console.error("Lỗi khi submit IndexNow:", err);
  process.exitCode = 1;
});
