import { getUsageSql, sqlErrorCode } from "./usage-db"

export const PAGE_VIEW_SITE = "abcofcyber"

export type RecentPage = {
  path: string
  viewedAt: string
  userId: string
}

export type UsageSnapshot =
  | { ok: true; userCount: number; recent: RecentPage[] }
  | { ok: false; reason: "no-database" | "missing-table" | "query-failed"; detail?: string }

type PageViewRow = {
  user_id: string
  path: string
  viewed_at: Date | string
}

type CountRow = {
  count: number | string
}

function isMissingTable(error: unknown): boolean {
  if (sqlErrorCode(error) === "42P01") return true
  const message = error instanceof Error ? error.message : ""
  return /page_views|does not exist/i.test(message)
}

function asIso(value: Date | string): string {
  if (value instanceof Date) return value.toISOString()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toISOString()
}

/** Signed-in page view. No-ops when the usage database is not connected. */
export async function recordPageView(userId: string, path: string): Promise<void> {
  const sql = getUsageSql()
  if (!sql) return
  try {
    await sql`
      insert into public.page_views (site, user_id, path)
      values (${PAGE_VIEW_SITE}, ${userId}, ${path})
    `
  } catch (error) {
    console.warn("[page-views] insert skipped", sqlErrorCode(error))
  }
}

/** Distinct signed-in people and the latest pages. This is the /admin count. */
export async function readUsage(): Promise<UsageSnapshot> {
  const sql = getUsageSql()
  if (!sql) return { ok: false, reason: "no-database" }

  try {
    const recent = await sql<PageViewRow[]>`
      select user_id, path, viewed_at
      from public.page_views
      where site = ${PAGE_VIEW_SITE}
      order by viewed_at desc
      limit 40
    `
    const counts = await sql<CountRow[]>`
      select count(distinct user_id)::int as count
      from public.page_views
      where site = ${PAGE_VIEW_SITE}
    `
    const userCount = Number(counts[0]?.count ?? 0)
    return {
      ok: true,
      userCount: Number.isFinite(userCount) ? userCount : 0,
      recent: recent.map((row) => ({
        path: String(row.path),
        viewedAt: asIso(row.viewed_at),
        userId: String(row.user_id),
      })),
    }
  } catch (error) {
    if (isMissingTable(error)) return { ok: false, reason: "missing-table" }
    return { ok: false, reason: "query-failed", detail: sqlErrorCode(error) }
  }
}
