import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABC of Cyber",
  description: "Practical cybersecurity for real teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          {/* Sticky mobile CTA bar */}
          <div
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 shadow-lg md:hidden"
            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
          >
            <p className="text-xs font-medium text-slate-700 leading-tight">
              Build your security program today
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/get-started"
                className="rounded-md bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800 active:bg-blue-900"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100"
              >
                See Plans
              </Link>
            </div>
          </div>
          {/* Spacer so content is not hidden behind sticky bar on mobile */}
          <div className="h-16 md:hidden" aria-hidden="true" />
        </body>
      </html>
    </ClerkProvider>
  );
}
