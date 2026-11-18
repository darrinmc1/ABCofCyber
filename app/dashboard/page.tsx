import Link from "next/link"
import { auth, currentUser } from "@clerk/nextjs/server"

export const dynamic = "force-dynamic"

export default async function Dashboard() {
  const { userId } = await auth()
  const user = userId ? await currentUser() : null
  const name = user?.firstName || user?.username || "there"

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-2xl px-4 py-16 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Account</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Hello, {name}.</h1>
        <p className="mt-4 text-slate-600">
          You are signed in. The lessons, What&apos;s the play, and the framework notes are free.
          The plan is A$9/month inc GST after an A$5 first month. Nothing on this page is a score,
          a rating, or a bill.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/learn" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Browse free lessons
          </Link>
          <Link href="/pricing" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            See the price map
          </Link>
        </div>
      </section>
    </main>
  )
}
