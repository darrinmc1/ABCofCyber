import type { Metadata } from "next"
import Link from "next/link"
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"

export const metadata: Metadata = {
  title: "ABC of Cyber | Security Without the Scare Tactics",
  description: "A cyber-security platform with serious controls, sensible dashboards, and copy that does not read like it was approved by a committee of fax machines.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
}

const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const chrome = (
    <>
      {clerkEnabled && (
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
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-xs text-slate-500">
            <span className="font-semibold text-slate-700 mr-1">Empire-HQ:</span>
            <a href="https://freelancepro.com" className="hover:text-blue-600">FreelancePro</a>
            <a href="https://moneymastery.com" className="hover:text-blue-600">Money Mastery</a>
            <a href="https://aiforsmb.com" className="hover:text-blue-600">AI for SMB</a>
            <a href="https://devops101.com" className="hover:text-blue-600">DevOps 101</a>
            <a href="https://landscapedesign.com" className="hover:text-blue-600">Landscape Design</a>
            <a href="https://pilatesflow.com" className="hover:text-blue-600">PilatesFlow</a>
            <a href="https://osint101.com" className="hover:text-blue-600">OSINT 101</a>
            <a href="https://peelboss.com" className="hover:text-blue-600">Peel Boss</a>
            <a href="https://ticu.tv" className="hover:text-blue-600">TICU.TV</a>
            <a href="https://theintelanalystacademy.com" className="hover:text-blue-600">Intel Academy</a>
          </div>
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
        {clerkEnabled ? <ClerkProvider>{chrome}</ClerkProvider> : chrome}
      </body>
    </html>
  )
}
