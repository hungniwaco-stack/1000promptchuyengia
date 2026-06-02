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

## Notion Integration
- Never print or commit the raw `NOTION_API_KEY` / Internal Integration Secret.
- Required env vars include `NOTION_API_KEY`, `NOTION_ORDERS_DB_ID`, and `NOTION_PROMPT_PACKS_DB_ID`.
- The Prompt Packs Notion database title property is `Pack Code`.
- Prompt Packs database currently has all 10 packs synced and complete.
- The sync added/uses `File` and `Pack No` properties.
- There is one old unexpected Notion page named `PACK01` with no `Pack No`; do not delete/archive it without explicit user approval.
- If syncing prompt packs again, prefer setting `NOTION_PROMPT_TITLE_PROP=Pack Code` or make the sync script auto-detect the title property.

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
