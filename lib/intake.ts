import { getUsageSql, sqlErrorCode } from "./usage-db"

/** Shown when USAGE_DATABASE_URL is missing, blocked, or the write fails. */
export const FEEDBACK_SAVE_ERROR =
  "We couldn't save your feedback just now. Please try again."

export const SUBSCRIBE_SAVE_ERROR =
  "We couldn't save your email just now. Please try again."

export type IntakeWriteResult =
  | { ok: true }
  | { ok: false; reason: "no-database" | "query-failed" }

export type FeedbackDraft = {
  site: string
  category: string
  rating: number
  message: string
  page: string | null
  pageUrl: string | null
  email: string | null
  ipAddress: string
  feedbackType: string
}

export type SubscriberDraft = {
  site: string
  email: string
  name: string | null
  source: string | null
}

export async function saveFeedback(row: FeedbackDraft): Promise<IntakeWriteResult> {
  const sql = getUsageSql()
  if (!sql) return { ok: false, reason: "no-database" }
  try {
    await sql`
      insert into public.feedback (
        site, category, rating, message, page, page_url, email, ip_address, feedback_type, status
      ) values (
        ${row.site},
        ${row.category},
        ${row.rating},
        ${row.message},
        ${row.page},
        ${row.pageUrl},
        ${row.email},
        ${row.ipAddress},
        ${row.feedbackType},
        'new'
      )
    `
    return { ok: true }
  } catch (error) {
    console.error("[feedback] save failed", sqlErrorCode(error))
    return { ok: false, reason: "query-failed" }
  }
}

export async function saveSubscriber(row: SubscriberDraft): Promise<IntakeWriteResult> {
  const sql = getUsageSql()
  if (!sql) return { ok: false, reason: "no-database" }
  try {
    await sql`
      insert into public.subscribers (site, email, name, source)
      values (${row.site}, ${row.email}, ${row.name}, ${row.source})
      on conflict (site, email)
      do update set
        name = excluded.name,
        source = excluded.source
    `
    return { ok: true }
  } catch (error) {
    console.error("[subscribe] save failed", sqlErrorCode(error))
    return { ok: false, reason: "query-failed" }
  }
}
