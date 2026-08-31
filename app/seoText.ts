/**
 * seoText.ts
 * Helper functions to keep <title> and meta description tags within
 * search-engine-safe lengths, without rewriting the on-page H1 / body copy.
 * Google typically truncates titles ~60 characters and descriptions ~155-160
 * characters when rendering search results — going over just wastes the
 * keyword-rich part of the text behind a "...".
 */

/** Cut a string at the last whitespace before `max`, so we never chop mid-word. */
function cutAtWordBoundary(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > max * 0.5 ? slice.slice(0, lastSpace) : slice).trim();
}

/** Title tag: no trailing "...", search engines already show their own ellipsis. */
export function truncateTitle(title: string, max = 60): string {
  return cutAtWordBoundary(title, max);
}

/** Meta description: adds a clean "…" only when actually cut, so it reads intentionally. */
export function truncateDescription(description: string, max = 155): string {
  if (description.length <= max) return description;
  return `${cutAtWordBoundary(description, max - 1)}…`;
}
