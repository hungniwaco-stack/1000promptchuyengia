import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI — ChatGPT training + Browse plugin
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Anthropic — Claude training + web search
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Google — AI Overviews + Gemini training
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Common Crawl — training data for most AI models
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Meta — Llama training
      {
        userAgent: "meta-externalagent",
        allow: "/",
      },
    ],
    sitemap: "https://www.1000promptchuyengia.shop/sitemap.xml",
  };
}
