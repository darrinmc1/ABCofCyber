"use client"

import { useAuth } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function PageViewRecorder() {
  const { isSignedIn, userId } = useAuth()
  const pathname = usePathname()

  useEffect(() => {
    if (!isSignedIn || !userId || !pathname) return
    if (!pathname.startsWith("/") || pathname.startsWith("//")) return
    if (pathname.startsWith("/api") || pathname.startsWith("/admin")) return

    const key = `abcofcyber-pv:${userId}:${pathname}`
    try {
      if (window.sessionStorage.getItem(key)) return
      window.sessionStorage.setItem(key, "1")
    } catch {
      // Storage can be blocked. Still record the view.
    }

    void fetch("/api/page-views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    })
  }, [isSignedIn, pathname, userId])

  return null
}
