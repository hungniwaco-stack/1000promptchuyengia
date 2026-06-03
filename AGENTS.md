# Project Memory

## User & Communication
- Communicate with the user in Vietnamese by default.
- Keep updates concise, warm, and action-oriented.
- The user prefers proactive execution when the next step is clear.

## Project Overview
- This is the Next.js website for selling “1000 Prompt” packs.
- Production domain: `https://1000promptchuyengia.shop`.
- Vercel project: `1000promptchuyengia-next`.
- GitHub remote: `https://github.com/hungniwaco-stack/1000promptchuyengia.git`.
- Main branch: `main`.

## Current Product Rules
- Product catalog lives in `app/products.ts`.
- There are 10 individual prompt packs, each priced at `99,000 VNĐ`.
- The combo product is sold from the main CTA.
- Product cards should show the pack price and a checkout action.
- The pricing table must not appear by default on page load.
- The pricing table should only appear when the user selects the “Bảng giá” navigation item, which uses `#bang-gia`.

## Checkout & Orders
- Checkout UI is handled by `app/BuyButton.tsx` and `app/CheckoutModal.tsx`.
- Order API is `app/api/order/route.ts`.
- The order API must calculate price server-side from `app/products.ts`; do not trust client-submitted amounts.
- Orders are written to Notion through Vercel environment variables.
- Order IDs now use the compact SePay-compatible format `ORDYYYYMMDDHHMMSS` only, for example `ORD20260603125554`. Do not reintroduce the older dashed format `ORD-YYYYMMDDHHMMSS`.
- SePay QR payment content should be exactly the compact `ORD...` order ID.
- The SePay webhook endpoint is `https://www.1000promptchuyengia.shop/api/sepay/webhook`; use the `www` URL to avoid the apex-domain 308 redirect.
- SePay webhook event is `Money in`, security is `HMAC-SHA256`, and payment-code prefix/filter is `ORD`.
- Required SePay env vars are `SEPAY_WEBHOOK_SECRET`, `SEPAY_BANK_CODE`, and `SEPAY_ACCOUNT_NUMBER`.
- Current receiving bank config used by the website: `SEPAY_BANK_CODE=ACB`, `SEPAY_ACCOUNT_NUMBER=201482319`.
- SePay automation was tested successfully on 2026-06-03: a `+99,000đ` transaction for order `ORD20260603125554` triggered webhook `Webhook1`, updated Notion `Payment Status` to `Paid`, and left `Delivery Status` as `Not Sent` before email delivery setup.
- Webhook code lives in `app/api/sepay/webhook/route.ts`. It now accepts only compact order codes matching `ORD\d{14}`.
- Recent SePay commits on `main`: `8b9e610` added webhook, `1897224` normalized SePay order codes, `2e8d9ae` switched order creation to compact codes, `970ac00` removed dashed-code support.

## Email Delivery
- After a matching SePay payment, the webhook attempts automatic delivery if email env vars are configured.
- Delivery reads the order's `Name`, `Email`, and `Package` properties from Notion Orders.
- Delivery looks up Prompt Pack file links from Notion Prompt Packs using `NOTION_PROMPT_PACKS_DB_ID`; individual packs are matched from the `PACK N` number in the package title, and combo orders send all 10 pack links.
- Prompt Packs database must have `Pack Code`, `Pack No`, and `File` properties populated.
- Email delivery uses Resend via direct API fetch, not an npm package.
- Required email env vars to actually send: `RESEND_API_KEY` and `DELIVERY_FROM_EMAIL`; optional `DELIVERY_REPLY_TO_EMAIL`.
- If email env vars are missing, webhook still marks the order `Paid` but leaves `Delivery Status = Not Sent`.
- If email sends successfully, webhook updates Notion `Delivery Status = Sent`.
- Recent delivery commit on `main`: `e1aff52` added prompt-link email delivery after payment.

## Notion Integration
- Never print or commit the raw `NOTION_API_KEY` / Internal Integration Secret.
- Required env vars include `NOTION_API_KEY`, `NOTION_ORDERS_DB_ID`, and `NOTION_PROMPT_PACKS_DB_ID`.
- The Prompt Packs Notion database title property is `Pack Code`.
- Prompt Packs database currently has all 10 packs synced and complete.
- The sync added/uses `File` and `Pack No` properties.
- There is one old unexpected Notion page named `PACK01` with no `Pack No`; do not delete/archive it without explicit user approval.
- If syncing prompt packs again, prefer setting `NOTION_PROMPT_TITLE_PROP=Pack Code` or make the sync script auto-detect the title property.
- Current prompt-pack sync script is `scripts/sync-notion-prompts.mjs`; it now defaults to `1000 Prompt/FORMAT_FINAL_CLEAN`, uses `Pack Code` by default, auto-detects the Notion title property, and generates raw GitHub URLs from the selected prompt directory.
- As of commit `0fbe15a`, `scripts/sync-notion-prompts.mjs` finds existing Prompt Pack pages by `Pack No` first, then falls back to title. This avoids empty `File` links or duplicate pages when titles differ.
- Prompt Packs sync should update the `File` property with raw GitHub URLs pointing at `1000 Prompt/FORMAT_FINAL_CLEAN`.
- As of 2026-06-03, local `.env.local` does not contain `NOTION_API_KEY`. Pulling Vercel production/preview env returned empty quoted Notion values (`""`), so Notion sync cannot run until a valid `NOTION_API_KEY` is added locally or in Vercel.
- On 2026-06-03, another Vercel production env pull for prompt sync returned `NOTION_API_KEY`, `NOTION_PROMPT_PACKS_DB_ID`, and `NOTION_ORDERS_DB_ID` with length `0`. Do not assume Vercel has valid Notion values; verify by length only.
- When checking env files, only print variable names or value lengths; never print raw Notion/Vercel secrets. Delete temporary env pulls from `C:\tmp` after use.

## Word Prompt Pack Formatting
- Formatted prompt-pack Word files live in `1000 Prompt/FORMAT_FINAL_CLEAN`.
- Commit `31d28dc` on `main` added the formatted 10-pack Word output and the formatting script.
- `scripts/format_word_packs.py` formats the 10 `PACK *.docx` files from `1000 Prompt`, auto-detects `Mau/Mẫu chuẩn PACK 9.docx`, and writes clean output to `1000 Prompt/FORMAT_FINAL_CLEAN`.
- Verified format target: each formatted DOCX has 122 non-empty paragraphs, 10 sections, and 100 prompts.
- On 2026-06-03, `python scripts\format_word_packs.py` was rerun and validation confirmed all 10 formatted DOCX files still have 122 non-empty paragraphs, 10 sections, and 100 prompts.
- Commit `902e22b` refreshed the formatted prompt pack files on `main`; use these GitHub raw files for Notion Prompt Packs `File` links.
- The sample file `1000 Prompt/Mẫu chuẩn PACK 9.docx` may remain untracked locally; do not remove it without explicit user approval.

## Deployment Notes
- `npm run build` has been used successfully for validation.
- Vercel production deploys from GitHub `main`.
- Direct Vercel deploy command used when needed: `npx vercel --prod --yes`.
- If using temporary API endpoints for Notion/Vercel runtime checks, delete them afterward and redeploy clean.

## Current Known State
- GitHub `main` contains the working Next.js source after replacing an older static-only remote.
- Tailwind requires `@tailwindcss/postcss` and `postcss.config.mjs`.
- `.vercelignore` exists to avoid deploying unwanted files.
- Untracked local image files may exist, such as `Banner.png` and `Logo.png`; do not remove them unless the user asks.

## Visual Assets
- `Logo.png` is the current project logo asset.
- `Banner.png` is the current project banner/hero visual asset.
- Treat these two files as intended assets for the website, not disposable scratch files.
- If adding them to the live site, place them under `public/` or another Next.js-served asset path and update components accordingly.
- Do not rename, overwrite, compress, or delete these assets without explicit user approval.

## Useful Verification
- Check git state with `git status --short`.
- Check production deployments with `npx vercel ls 1000promptchuyengia-next`.
- Verify default page does not include the pricing table unless `#bang-gia` is active.
