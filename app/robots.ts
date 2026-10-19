import type { MetadataRoute } from "next"

const AEO_ALLOW = ["/llm.txt", "/llms.txt", "/pricing.json", "/whats-the-play", "/pricing", "/learn", "/frameworks"]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: AEO_ALLOW,
        disallow: "/",
      },
      {
        userAgent: "Diffbot",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      {
        userAgent: "FacebookBot",
        disallow: "/",
      },
      {
        userAgent: "Imagesift",
        disallow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: AEO_ALLOW,
        disallow: "/",
      },
    ],
    sitemap: "https://abcofcyber.com/sitemap.xml",
  }
}
