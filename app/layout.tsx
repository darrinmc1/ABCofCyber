import type { Metadata } from "next"
import { headers } from "next/headers"
import Link from "next/link"
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"
import { SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Cybersecurity training for teams allergic to nonsense. Practical lessons, plain-English walkthroughs, and very little panic.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
}

const clerkConfigured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Show calls auth(). That throws on renders clerkMiddleware did not cover,
  // which is how missing static files surface as /_not-found errors.
  const clerkActive = clerkConfigured
    ? Boolean((await headers()).get("x-clerk-auth-status"))
    : false

  const chrome = (
    <>
      {clerkActive && (
        <header className="flex justify-end items-center gap-3 px-4 py-2 border-b bg-slate-50 text-sm">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </header>
      )}
      <Navbar />
      {children}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/terms" className="text-gray-600 hover:text-blue-700">Terms</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-700">Privacy</Link>
            <Link href="/cookies" className="text-gray-600 hover:text-blue-700">Cookies</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-700">About</Link>
            <Link href="/whats-the-play" className="text-gray-600 hover:text-blue-700">What&apos;s the play</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-700">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700">Contact</Link>
            <Link href="/llm.txt" className="text-gray-600 hover:text-blue-700">llm.txt</Link>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-5 text-slate-500">
            Operated by TTPN Pty Ltd.
          </p>
          <p className="text-center text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} ABC of Cyber — An Empire-HQ Portfolio Project.
          </p>
        </div>
      </footer>
      <Toaster />
      <FeedbackWidget />
      <WaitlistPopup />
    </>
  )

  return (
    <html lang="en">
      <body className="antialiased">
        {clerkConfigured ? <ClerkProvider>{chrome}</ClerkProvider> : chrome}
      </body>
    </html>
  )
}
