"use client"

import { useState } from "react"

type ThemeColors = {
  primary: string
  primaryHover: string
  bg: string
  bgGradient: string
  border: string
  accent: string
  text: string
  textMuted: string
}

const themes: Record<string, ThemeColors> = {
  cyber: {
    primary: "bg-emerald-600",
    primaryHover: "hover:bg-emerald-700",
    bg: "bg-gradient-to-br from-gray-900 to-gray-950",
    bgGradient: "bg-gradient-to-br from-gray-900 to-emerald-950",
    border: "border-emerald-500/40",
    accent: "text-[#00FF41]",
    text: "text-emerald-50",
    textMuted: "text-emerald-300/70",
  },
  dark: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    bg: "bg-gradient-to-br from-slate-900 to-slate-950",
    bgGradient: "bg-gradient-to-br from-slate-900 to-blue-950",
    border: "border-blue-500/40",
    accent: "text-blue-400",
    text: "text-slate-50",
    textMuted: "text-slate-300/70",
  },
}

interface EmailCaptureProps {
  variant?: "inline" | "hero" | "modal"
  siteName?: string
  theme?: string
  heading?: string
  subheading?: string
  source?: string
  showName?: boolean
}

export function EmailCapture({
  variant = "inline",
  siteName = "CyberShield",
  theme = "cyber",
  heading,
  subheading,
  source = "website",
  showName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const colors = themes[theme] || themes.cyber

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, source }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage(data.message)
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div
        className={`${
          variant === "hero" ? "py-12 px-8" : "py-8 px-6"
        } ${colors.bg} rounded-2xl ${colors.border} border-2 text-center`}
      >
        <div className="text-5xl mb-4">&#x1F6E1;&#xFE0F;</div>
        <h3 className={`text-2xl font-extrabold ${colors.text} mb-2`}>
          You're In!
        </h3>
        <p className={`${colors.textMuted} text-lg`}>{message}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-900/50 rounded-full px-4 py-2 border border-emerald-500/30">
          <span className="text-sm font-semibold text-[#00FF41]">
            Defender Status: Confirmed
          </span>
          <span>&#x2705;</span>
        </div>
      </div>
    )
  }

  // Hero variant - large, prominent
  if (variant === "hero") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-8 md:p-12`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <svg className="h-5 w-5 text-[#00FF41]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-[#00FF41] tracking-wide uppercase">
              Join the Defense Force
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-extrabold ${colors.text} mb-4`}>
            {heading || "Get Threat Intel Updates"}
          </h2>
          <p className={`text-lg ${colors.textMuted} mb-8 max-w-xl mx-auto`}>
            {subheading ||
              "Stay ahead of the threats. Get security insights, framework updates, and early access to new modules."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {showName && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-5 py-3.5 rounded-xl border-2 border-emerald-500/30 bg-gray-800/80 backdrop-blur-sm text-emerald-50 placeholder:text-gray-500 focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all text-base"
              />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-xl border-2 border-emerald-500/30 bg-gray-800/80 backdrop-blur-sm text-emerald-50 placeholder:text-gray-500 focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all text-base"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enlisting...
                  </span>
                ) : (
                  "Join the Force"
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">{message}</p>
            )}
          </form>

          <p className="text-xs text-emerald-600/50 mt-4">
            No spam, ever. Unsubscribe anytime. Your data is encrypted at rest because we practice what we preach.
          </p>
        </div>
      </div>
    )
  }

  // Modal variant
  if (variant === "modal") {
    return (
      <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 shadow-2xl max-w-md w-full`}>
        <div className="text-center mb-6">
          <svg className="h-10 w-10 text-[#00FF41] mx-auto mb-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
          </svg>
          <h3 className={`text-xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Join the Defense Force"}
          </h3>
          <p className={`text-sm ${colors.textMuted}`}>
            {subheading || "Get threat intel and security updates."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {showName && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full px-4 py-3 rounded-xl border-2 border-emerald-500/30 bg-gray-800/80 text-emerald-50 placeholder:text-gray-500 focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all text-sm"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-emerald-500/30 bg-gray-800/80 text-emerald-50 placeholder:text-gray-500 focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full ${colors.primary} ${colors.primaryHover} text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {status === "loading" ? "Enlisting..." : "Claim Your Spot"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-xs font-medium text-center">{message}</p>
          )}
        </form>

        <p className="text-xs text-emerald-600/50 mt-3 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    )
  }

  // Inline variant (default)
  return (
    <div className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <svg className="h-6 w-6 text-[#00FF41]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold text-[#00FF41] bg-emerald-900/40 rounded-full px-3 py-1 uppercase tracking-wide">
              Threat Intel
            </span>
          </div>
          <h3 className={`text-xl md:text-2xl font-extrabold ${colors.text} mb-1`}>
            {heading || "Join the Defense Force"}
          </h3>
          <p className={`${colors.textMuted} text-sm md:text-base`}>
            {subheading || "Get notified when new modules drop. Early members get exclusive access to security resources."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[360px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="flex-1 min-w-0 px-4 py-3 rounded-xl border-2 border-emerald-500/30 bg-gray-800/80 backdrop-blur-sm text-emerald-50 placeholder:text-gray-500 focus:outline-none focus:border-[#00FF41] focus:ring-2 focus:ring-emerald-500/30 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm`}
          >
            {status === "loading" ? "Enlisting..." : "Join Free"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm font-medium mt-3">{message}</p>
      )}
    </div>
  )
}
