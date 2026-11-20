// Neon Postgres for public.page_views and public.entitlements.
// Callers must use the tagged-template form so values stay parameters.
// A missing URL, a non-Postgres URL, or the empire-hq Supabase project ref
// fail closed: no client is created and nothing is written.

import postgres, { type Sql } from "postgres"

/** Supabase project ref for empire-hq. Never use that project for these tables. */
const BLOCKED_PROJECT_REF = "radlwbqfzrzmgdldyifi"

let client: Sql | null = null
let clientUrl: string | null = null
let warnedRejected = false

export function usageDatabaseUrl(): string | null {
  const raw = process.env.USAGE_DATABASE_URL
  if (typeof raw !== "string") return null
  const url = raw.trim()
  if (!url) return null
  if (url.toLowerCase().includes(BLOCKED_PROJECT_REF)) return null
  if (!isPostgresUrl(url)) return null
  return url
}

function isPostgresUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "postgres:" || parsed.protocol === "postgresql:"
  } catch {
    return false
  }
}

function sslMode(url: string): false | "require" {
  try {
    const host = new URL(url).hostname.replace(/^\[|\]$/g, "")
    if (host === "localhost" || host === "127.0.0.1" || host === "::1") return false
  } catch {
    return "require"
  }
  return "require"
}

function warnIfRejected(): void {
  if (warnedRejected) return
  const raw = process.env.USAGE_DATABASE_URL
  if (typeof raw !== "string" || raw.trim() === "") return
  if (usageDatabaseUrl()) return
  warnedRejected = true
  console.warn("[usage-db] USAGE_DATABASE_URL cannot be used — usage writes disabled.")
}

export function getUsageSql(): Sql | null {
  const url = usageDatabaseUrl()
  if (!url) {
    warnIfRejected()
    return null
  }
  if (client && clientUrl === url) return client
  if (client) {
    const previous = client
    client = null
    clientUrl = null
    void previous.end({ timeout: 1 })
  }
  client = postgres(url, {
    ssl: sslMode(url),
    max: 1,
    prepare: false,
    fetch_types: false,
    idle_timeout: 20,
    connect_timeout: 15,
  })
  clientUrl = url
  return client
}

export async function closeUsageDatabase(): Promise<void> {
  if (!client) return
  const current = client
  client = null
  clientUrl = null
  await current.end({ timeout: 5 })
}

export function sqlErrorCode(error: unknown): string {
  if (error && typeof error === "object" && "code" in error && error.code) {
    return String(error.code)
  }
  return "error"
}
