import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Known AI crawlers and scrapers that ignore robots.txt
const BLOCKED_BOTS = [
  "GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web",
  "Diffbot", "Bytespider", "cohere-ai", "PerplexityBot", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "Applebot-Extended", "Google-Extended", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx", "curl", "wget",
  "Go-http-client", "Java/", "okhttp",
]

// Paths that are safe from rate limiting (static assets)
const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

// Clerk: routes that do NOT require authentication
const isPublicRoute = createRouteMatcher([
  "/", "/sign-in(.*)", "/sign-up(.*)", "/login(.*)", "/signup(.*)",
  "/sitemap.xml", "/robots.txt",
  "/llm.txt", "/llms.txt", "/pricing.json",
  "/api/webhooks(.*)", "/api/send-email", "/api/subscribe", "/api/walkthrough",
  "/pricing", "/learn(.*)", "/frameworks(.*)",
  "/blog(.*)", "/about", "/contact",
  "/get-started", "/downloads", "/tools(.*)", "/whats-the-play",
  "/terms", "/privacy", "/cookies",
])

// Graceful fallback: allow all requests if Clerk isn't configured
const hasClerkKeys =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "string" &&
  typeof process.env.CLERK_SECRET_KEY === "string" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 0 &&
  process.env.CLERK_SECRET_KEY.length > 0

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 60

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"
  const response = NextResponse.next()

  // === Clerk Auth Protection (skip if not configured — graceful fallback) ===
  if (hasClerkKeys && !isPublicRoute(request)) {
    await auth.protect()
  }

  // === 1. Security Headers ===
  const aeoPath =
    url === "/llm.txt" ||
    url === "/llms.txt" ||
    url === "/pricing.json" ||
    url === "/whats-the-play" ||
    url === "/pricing" ||
    url.startsWith("/learn") ||
    url.startsWith("/frameworks")

  if (!aeoPath) {
    response.headers.set("X-Robots-Tag", "noai, noimageai")
  }
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // === 2. Block known AI crawlers / scrapers ===
  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_BOTS) {
    if (uaLower.includes(bot.toLowerCase())) {
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
    }
  }

  // === 3. Rate limiting (skip static assets) ===
  if (!SAFE_PATHS.some((p) => url.startsWith(p))) {
    const now = Date.now()
    const entry = rateLimit.get(ip)
    if (!entry || now > entry.resetAt) {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      entry.count++
      if (entry.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        })
      }
    }
    if (rateLimit.size > 10000) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const [key, val] of rateLimit) {
        if (val.resetAt < cutoff) rateLimit.delete(key)
      }
    }
  }

  return response
})

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico).*)",
  ],
}
