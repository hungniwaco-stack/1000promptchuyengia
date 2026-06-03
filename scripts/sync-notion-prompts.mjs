import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

await loadDotEnvLocal();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DB_ID = process.env.NOTION_PROMPT_PACKS_DB_ID;
const GITHUB_REPO = process.env.GITHUB_REPO || "hungniwaco-stack/1000promptchuyengia";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const DEFAULT_PROMPT_DIR = "1000 Prompt/FORMAT_FINAL_CLEAN";
const FALLBACK_PROMPT_DIR = "1000 Prompt";

let titleProp = process.env.NOTION_PROMPT_TITLE_PROP || "Pack Code";
const FILE_PROP = process.env.NOTION_PROMPT_FILE_PROP || "File";
const PACK_NO_PROP = process.env.NOTION_PROMPT_PACK_NO_PROP || "Pack No";
const DRY_RUN = process.argv.includes("--dry-run");

if (!NOTION_API_KEY || !NOTION_DB_ID) {
  console.error("Missing required env: NOTION_API_KEY or NOTION_PROMPT_PACKS_DB_ID");
  process.exit(1);
}

const notionHeaders = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

async function loadDotEnvLocal() {
  if (process.env.NOTION_API_KEY && process.env.NOTION_PROMPT_PACKS_DB_ID) return;

  try {
    const content = await readFile(".env.local", "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;

      const [name, ...valueParts] = trimmed.split("=");
      if (!process.env[name]) {
        process.env[name] = valueParts.join("=");
      }
    }
  } catch {
    // The explicit missing-env check below will report the actionable problem.
  }
}

function toRawGithubUrl(relativePath) {
  const encodedPath = relativePath.split(/[\\/]/).map(encodeURIComponent).join("/");
  return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${encodedPath}`;
}

function parsePackNumber(fileName) {
  const match = fileName.match(/^PACK\s+(\d+)\s*[-–—]/i);
  return match ? Number(match[1]) : null;
}

function toTitleFromFileName(fileName) {
  return fileName.replace(/\.docx$/i, "");
}

async function notionReadDatabase() {
  const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}`, {
    method: "GET",
    headers: notionHeaders,
  });
  if (!res.ok) {
    throw new Error(`Notion database read failed: ${await res.text()}`);
  }
  return res.json();
}

async function notionDetectTitleProperty() {
  const database = await notionReadDatabase();
  if (database.properties?.[titleProp]?.type === "title") return;

  const detected = Object.entries(database.properties || {}).find(([, prop]) => prop.type === "title");
  if (!detected) {
    throw new Error("No title property found in Notion database.");
  }
  titleProp = detected[0];
}

async function notionQueryAllPages() {
  const pages = [];
  let cursor = undefined;
  while (true) {
    const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
      method: "POST",
      headers: notionHeaders,
      body: JSON.stringify({
        page_size: 100,
        start_cursor: cursor,
      }),
    });
    if (!res.ok) {
      throw new Error(`Notion query failed: ${await res.text()}`);
    }
    const data = await res.json();
    pages.push(...data.results);
    if (!data.has_more) break;
    cursor = data.next_cursor;
  }
  return pages;
}

function getTitleValue(page) {
  const prop = page.properties?.[titleProp];
  if (!prop || prop.type !== "title") return "";
  return (prop.title || []).map((x) => x.plain_text || "").join("").trim();
}

function getPackNoValue(page) {
  const prop = page.properties?.[PACK_NO_PROP];
  if (!prop || prop.type !== "number") return null;
  return typeof prop.number === "number" ? prop.number : null;
}

function buildProperties({ title, packNo, fileUrl, fileName }) {
  const properties = {
    [titleProp]: {
      title: [{ text: { content: title } }],
    },
    [FILE_PROP]: {
      files: [
        {
          name: fileName,
          type: "external",
          external: { url: fileUrl },
        },
      ],
    },
  };

  if (packNo !== null) {
    properties[PACK_NO_PROP] = { number: packNo };
  }
  return properties;
}

async function notionCreatePage(payload) {
  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: notionHeaders,
    body: JSON.stringify({
      parent: { database_id: NOTION_DB_ID },
      properties: payload,
    }),
  });
  if (!res.ok) {
    throw new Error(`Notion create failed: ${await res.text()}`);
  }
}

async function notionUpdatePage(pageId, payload) {
  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "PATCH",
    headers: notionHeaders,
    body: JSON.stringify({ properties: payload }),
  });
  if (!res.ok) {
    throw new Error(`Notion update failed: ${await res.text()}`);
  }
}

async function resolvePromptDir() {
  const requested = process.env.NOTION_PROMPT_DIR || DEFAULT_PROMPT_DIR;
  try {
    await access(requested);
    return requested;
  } catch {
    if (process.env.NOTION_PROMPT_DIR) {
      throw new Error(`Missing prompt directory: ${requested}`);
    }
  }

  await access(FALLBACK_PROMPT_DIR);
  return FALLBACK_PROMPT_DIR;
}

async function main() {
  const promptDir = await resolvePromptDir();
  const files = (await readdir(promptDir, { withFileTypes: true }))
    .filter((d) => d.isFile() && /\.docx$/i.test(d.name))
    .map((d) => d.name)
    .sort((a, b) => (parsePackNumber(a) ?? 999) - (parsePackNumber(b) ?? 999));

  if (files.length === 0) {
    console.log("No .docx files found.");
    return;
  }

  await notionDetectTitleProperty();
  const existingPages = await notionQueryAllPages();
  const pageByTitle = new Map(existingPages.map((p) => [getTitleValue(p), p]));
  const pageByPackNo = new Map(
    existingPages
      .map((p) => [getPackNoValue(p), p])
      .filter(([packNo]) => typeof packNo === "number"),
  );

  let created = 0;
  let updated = 0;

  for (const fileName of files) {
    const title = toTitleFromFileName(fileName);
    const packNo = parsePackNumber(fileName);
    const relativePath = path.relative(process.cwd(), path.join(promptDir, fileName)).split(path.sep).join("/");
    const fileUrl = toRawGithubUrl(relativePath);
    const props = buildProperties({ title, packNo, fileUrl, fileName });
    const found = pageByPackNo.get(packNo) || pageByTitle.get(title);

    if (DRY_RUN) {
      console.log(`[DRY] ${found ? "UPDATE" : "CREATE"}: pack=${packNo ?? "unknown"}`);
      continue;
    }

    if (found) {
      await notionUpdatePage(found.id, props);
      updated += 1;
      console.log(`Updated: pack=${packNo ?? "unknown"}`);
    } else {
      await notionCreatePage(props);
      created += 1;
      console.log(`Created: pack=${packNo ?? "unknown"}`);
    }
  }

  if (!DRY_RUN) {
    console.log(`Done. Created=${created}, Updated=${updated}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
