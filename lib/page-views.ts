import { supabaseAdmin } from "@/lib/supabase"

export const PAGE_VIEW_SITE = "abcofcyber"

export const PAGE_VIEWS_SQL = `create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  site text not null default 'abcofcyber',
  user_id text not null,
  path text not null,
  viewed_at timestamptz not null default now()
);

create index if not exists page_views_site_viewed_at_idx
  on public.page_views (site, viewed_at desc);

alter table public.page_views enable row level security;
-- No public policies. The service role bypasses RLS.`

export type RecentPage = {
  path: string
  viewedAt: string
  userId: string
}

export type UsageSnapshot =
  | { ok: true; userCount: number; recent: RecentPage[] }
  | { ok: false; reason: "no-database" | "missing-table" | "query-failed"; detail?: string }

function isMissingTable(message: string) {
  return /page_views|schema cache|does not exist|42P01/i.test(message)
}

export async function recordPageView(userId: string, path: string): Promise<void> {
  if (!supabaseAdmin) return
  const { error } = await supabaseAdmin.from("page_views").insert({
    site: PAGE_VIEW_SITE,
    user_id: userId,
    path,
  })
  if (error) {
    console.warn("[page-views] insert skipped", error.code ?? error.message)
  }
}

export async function readUsage(): Promise<UsageSnapshot> {
  if (!supabaseAdmin) return { ok: false, reason: "no-database" }

  const { data, error } = await supabaseAdmin
    .from("page_views")
    .select("user_id, path, viewed_at")
    .eq("site", PAGE_VIEW_SITE)
    .order("viewed_at", { ascending: false })
    .limit(40)

  if (error) {
    if (isMissingTable(error.message)) return { ok: false, reason: "missing-table" }
    return { ok: false, reason: "query-failed", detail: error.message }
  }

  const rows = data ?? []
  const userCount = new Set(rows.map((row) => row.user_id as string)).size
  const { data: ids, error: idError } = await supabaseAdmin
    .from("page_views")
    .select("user_id")
    .eq("site", PAGE_VIEW_SITE)
    .limit(5000)

  const people = idError
    ? userCount
    : new Set((ids ?? []).map((row) => row.user_id as string)).size

  return {
    ok: true,
    userCount: people,
    recent: rows.map((row) => ({
      path: String(row.path),
      viewedAt: String(row.viewed_at),
      userId: String(row.user_id),
    })),
  }
}
