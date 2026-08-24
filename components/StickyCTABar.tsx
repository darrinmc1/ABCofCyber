"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

export default function StickyCTABar() {
  const { isSignedIn, isLoaded } = useUser()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    const wasDismissed = sessionStorage.getItem("sticky-cta-dismissed")
    if (wasDismissed) {
      setDismissed(true)
      return
    }

    const handleScroll = () => {
      // Show after scrolling 400px
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("sticky-cta-dismissed", "true")
  }

  // Don't render if: not loaded, user is signed in, dismissed, or not yet visible
  if (!isLoaded || isSignedIn || dismissed || !visible) {
    return null
  }

  return (
    <div
      role="complementary"
      aria-label="Sign up call to action"
      className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 shadow-lg border-t border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Message */}
            <div className="flex items-center gap-3 min-w-0">
              <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/20 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              <p className="text-white text-sm font-medium truncate">
                <span className="font-semibold">Free access</span>
                <span className="hidden sm:inline text-blue-100"> — Join thousands securing their teams with ABC of Cyber</span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href="/sign-up"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors duration-150"
              >
                Sign Up Free
              </Link>
              <Link
                href="/sign-in"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors duration-150"
              >
                Sign In
              </Link>
              <button
                onClick={handleDismiss}
                aria-label="Dismiss sign up bar"
                className="ml-1 p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors duration-150"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
