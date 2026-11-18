import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Dashboard",
  description: "The signed-in ABC of Cyber account page.",
  path: "/dashboard",
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
