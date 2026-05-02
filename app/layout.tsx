import type { Metadata } from "next"
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"

export const metadata: Metadata = {
  title: "ABC of Cyber | Security Without the Scare Tactics",
  description: "A cyber-security platform with serious controls, sensible dashboards, and copy that does not read like it was approved by a committee of fax machines.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header className="flex justify-end items-center gap-3 px-4 py-2 border-b bg-slate-50 text-sm">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <Navbar />
          {children}
          <Toaster />
          <FeedbackWidget />
          <WaitlistPopup />
        </ClerkProvider>
      </body>
    </html>
  )
}
