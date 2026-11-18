import type { Metadata } from "next"
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { PAGE_VIEWS_SQL, readUsage } from "@/lib/page-views"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Usage",
  robots: { index: false, follow: false },
}

function operatorEmails() {
  return (process.env.USAGE_ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter((email) => email.includes("@"))
}

async function clerkAccountCount(): Promise<number | null> {
  try {
    const client = await clerkClient()
    return await client.users.getCount()
  } catch {
    return null
  }
}

function shortId(userId: string) {
  return userId.length > 8 ? `…${userId.slice(-8)}` : userId
}

export default async function AdminUsagePage() {
  const { userId } = await auth()
  const user = userId ? await currentUser() : null
  const emails = (user?.emailAddresses ?? []).map((entry) => entry.emailAddress.toLowerCase())
  const allowed = operatorEmails()
  const isOperator = emails.some((email) => allowed.includes(email))

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Operator</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Signed-in usage</h1>
        {!isOperator ? (
          <div className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
            <p>This view is for the site operator. It does not show other people&apos;s pages to a normal account.</p>
            <p>
              Set <code className="rounded bg-slate-100 px-1">USAGE_ADMIN_EMAILS</code> on the Vercel project
              (Production and Preview) to the operator email, comma-separated if there is more than one.
              Use the existing Clerk application. Do not create a new one. Then open this page while signed in
              with that email.
            </p>
          </div>
        ) : (
          <OperatorView />
        )}
      </section>
    </main>
  )
}

async function OperatorView() {
  const [accounts, usage] = await Promise.all([clerkAccountCount(), readUsage()])

  return (
    <div className="mt-6 space-y-8">
      <p className="text-sm text-slate-600">
        Account count comes from the Clerk application already configured for this site.
        Page history is people who opened a page while signed in. Preview writes to the same
        database as Production, so this is live data.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Clerk accounts</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{accounts === null ? "Unavailable" : accounts}</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">People with a recorded page</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{usage.ok ? usage.userCount : "—"}</p>
        </div>
      </div>

      {usage.ok ? (
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent pages</h2>
          {usage.recent.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">No signed-in page has been recorded yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-slate-100 text-sm">
              {usage.recent.map((row, index) => (
                <li key={`${row.viewedAt}-${row.path}-${index}`} className="flex flex-wrap justify-between gap-2 py-2">
                  <span className="font-medium text-slate-900">{row.path}</span>
                  <span className="text-slate-500">
                    {shortId(row.userId)} · {new Date(row.viewedAt).toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-800">
          {usage.reason === "no-database" && (
            <p>
              This deployment has no working Supabase client. The project already has{" "}
              <code className="rounded bg-white px-1">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
              <code className="rounded bg-white px-1">SUPABASE_SERVICE_ROLE_KEY</code> on Production and Preview.
              If this message shows in Production, those values are missing or not a URL.
            </p>
          )}
          {usage.reason === "missing-table" && (
            <div className="space-y-3">
              <p>
                The <code className="rounded bg-white px-1">page_views</code> table is not in the database yet.
                In the Supabase project this site already uses (the one in{" "}
                <code className="rounded bg-white px-1">NEXT_PUBLIC_SUPABASE_URL</code>), open the SQL editor and run:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-100">{PAGE_VIEWS_SQL}</pre>
              <p>That is the same statement as <code className="rounded bg-white px-1">supabase/migrations/0002_page_views.sql</code>. Do not create a new Supabase project.</p>
            </div>
          )}
          {usage.reason === "query-failed" && (
            <p>The usage read failed. {usage.detail ? "The database said the query could not run." : ""}</p>
          )}
        </div>
      )}
    </div>
  )
}
