import assert from "node:assert/strict"
import { createServer } from "node:net"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { after, before, test } from "node:test"
import { fileURLToPath } from "node:url"
import { PGlite } from "@electric-sql/pglite"
import { PGLiteSocketServer } from "@electric-sql/pglite-socket"
import { getUserEntitlements, grantEntitlement, revokeEntitlement } from "../lib/entitlements"
import {
  FEEDBACK_SAVE_ERROR,
  SUBSCRIBE_SAVE_ERROR,
  saveFeedback,
  saveSubscriber,
} from "../lib/intake"
import { recordPageView, readUsage } from "../lib/page-views"
import { closeUsageDatabase, getUsageSql, usageDatabaseUrl } from "../lib/usage-db"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const BLOCKED_REF = "radlwbqfzrzmgdldyifi"

let db: PGlite
let server: PGLiteSocketServer
let databaseUrl = ""

function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const probe = createServer()
    probe.once("error", reject)
    probe.listen(0, "127.0.0.1", () => {
      const address = probe.address()
      if (!address || typeof address === "string") {
        probe.close()
        reject(new Error("Could not bind a local port"))
        return
      }
      const { port } = address
      probe.close((error) => (error ? reject(error) : resolve(port)))
    })
  })
}

before(async () => {
  db = await PGlite.create()
  const port = await freePort()
  server = new PGLiteSocketServer({
    db,
    port,
    host: "127.0.0.1",
    maxConnections: 5,
  })
  await server.start()
  databaseUrl = `postgres://postgres:postgres@127.0.0.1:${port}/postgres`
  const migration = ["0001_entitlements.sql", "0002_page_views.sql", "0003_feedback_subscribers.sql"]
    .map((name) => readFileSync(join(root, "supabase/migrations", name), "utf8"))
    .join("\n")
  await db.exec(migration)
  process.env.USAGE_DATABASE_URL = databaseUrl
}, { timeout: 120_000 })

after(async () => {
  await closeUsageDatabase()
  if (server) await server.stop()
  if (db) await db.close()
  delete process.env.USAGE_DATABASE_URL
})

test("page-view write and admin count use the local database", { timeout: 60_000 }, async () => {
  const empty = await readUsage()
  assert.equal(empty.ok, true)
  if (!empty.ok) return
  assert.equal(empty.userCount, 0)
  assert.equal(empty.recent.length, 0)

  await recordPageView("user_a", "/learn")
  await recordPageView("user_a", "/pricing")
  await recordPageView("user_b", "/learn")
  const quotedPath = "/learn'; delete from public.page_views; --"
  await recordPageView("user_quote", quotedPath)

  const usage = await readUsage()
  assert.equal(usage.ok, true)
  if (!usage.ok) return
  assert.equal(usage.userCount, 3)
  assert.equal(usage.recent.length, 4)
  assert.ok(usage.recent.some((row) => row.userId === "user_a" && row.path === "/learn"))
  assert.ok(usage.recent.some((row) => row.userId === "user_a" && row.path === "/pricing"))
  assert.ok(usage.recent.some((row) => row.userId === "user_b" && row.path === "/learn"))
  assert.ok(usage.recent.some((row) => row.userId === "user_quote" && row.path === quotedPath))

  const blockedUrl = `${databaseUrl}?application_name=${BLOCKED_REF}`
  process.env.USAGE_DATABASE_URL = blockedUrl
  assert.equal(usageDatabaseUrl(), null)
  await recordPageView("user_blocked", "/should-not-record")
  const blockedRead = await readUsage()
  assert.deepEqual(blockedRead, { ok: false, reason: "no-database" })

  delete process.env.USAGE_DATABASE_URL
  assert.equal(usageDatabaseUrl(), null)
  await recordPageView("user_unset", "/should-not-record")
  const unsetRead = await readUsage()
  assert.deepEqual(unsetRead, { ok: false, reason: "no-database" })

  process.env.USAGE_DATABASE_URL = `https://${BLOCKED_REF}.supabase.co`
  assert.equal(usageDatabaseUrl(), null)
  await recordPageView("user_https", "/should-not-record")

  process.env.USAGE_DATABASE_URL = databaseUrl
  const afterRejects = await readUsage()
  assert.equal(afterRejects.ok, true)
  if (!afterRejects.ok) return
  assert.equal(afterRejects.userCount, 3)
  assert.equal(
    afterRejects.recent.some((row) => row.path === "/should-not-record"),
    false,
  )

  process.env.USAGE_DATABASE_URL = blockedUrl
  assert.equal(await grantEntitlement("user_a", "leaked"), false)
  assert.deepEqual(await getUserEntitlements("user_a"), [])

  process.env.USAGE_DATABASE_URL = databaseUrl
  assert.equal(await grantEntitlement("user_a", "pro"), true)
  const granted = await getUserEntitlements("user_a")
  assert.deepEqual(
    granted.map((row) => row.product_id),
    ["pro"],
  )
  assert.equal(await getUserEntitlements("user_b").then((rows) => rows.length), 0)
  assert.equal(await revokeEntitlement("user_a", "pro"), true)
  assert.deepEqual(await getUserEntitlements("user_a"), [])
})

test("feedback and subscriber writes use Neon and fail closed", { timeout: 60_000 }, async () => {
  assert.equal(FEEDBACK_SAVE_ERROR.includes(BLOCKED_REF), false)
  assert.equal(SUBSCRIBE_SAVE_ERROR.includes(BLOCKED_REF), false)
  assert.match(FEEDBACK_SAVE_ERROR, /try again/i)
  assert.match(SUBSCRIBE_SAVE_ERROR, /try again/i)

  process.env.USAGE_DATABASE_URL = databaseUrl
  const sql = getUsageSql()
  assert.ok(sql)

  const attack = "'); delete from public.feedback; --"
  const saved = await saveFeedback({
    site: "abcofcyber",
    category: "Bug",
    rating: 2,
    message: attack,
    page: "/learn",
    pageUrl: "https://abcofcyber.com/learn",
    email: null,
    ipAddress: "203.0.113.5",
    feedbackType: "bug",
  })
  assert.deepEqual(saved, { ok: true })

  const feedback = await sql<
    {
      site: string
      category: string
      rating: number
      message: string
      page: string | null
      page_url: string | null
      email: string | null
      ip_address: string | null
      feedback_type: string
      status: string
    }[]
  >`
    select site, category, rating, message, page, page_url, email, ip_address, feedback_type, status
    from public.feedback
    where message = ${attack}
  `
  assert.equal(feedback.length, 1)
  assert.equal(feedback[0]?.site, "abcofcyber")
  assert.equal(feedback[0]?.category, "Bug")
  assert.equal(Number(feedback[0]?.rating), 2)
  assert.equal(feedback[0]?.message, attack)
  assert.equal(feedback[0]?.page, "/learn")
  assert.equal(feedback[0]?.page_url, "https://abcofcyber.com/learn")
  assert.equal(feedback[0]?.email, null)
  assert.equal(feedback[0]?.ip_address, "203.0.113.5")
  assert.equal(feedback[0]?.feedback_type, "bug")
  assert.equal(feedback[0]?.status, "new")

  const first = await saveSubscriber({
    site: "abcofcyber",
    email: "ada@example.com",
    name: "Ada",
    source: "footer",
  })
  const second = await saveSubscriber({
    site: "abcofcyber",
    email: "ada@example.com",
    name: "Ada Lovelace",
    source: "hero",
  })
  const quotedEmail = `ada@example.com${attack}`
  const quoted = await saveSubscriber({
    site: "abcofcyber",
    email: quotedEmail,
    name: null,
    source: "website",
  })
  assert.deepEqual(first, { ok: true })
  assert.deepEqual(second, { ok: true })
  assert.deepEqual(quoted, { ok: true })

  const subscribers = await sql<{ email: string; name: string | null; source: string | null }[]>`
    select email, name, source
    from public.subscribers
    where site = ${"abcofcyber"}
    order by email
  `
  assert.equal(subscribers.length, 2)
  const ada = subscribers.find((row) => row.email === "ada@example.com")
  assert.equal(ada?.name, "Ada Lovelace")
  assert.equal(ada?.source, "hero")
  assert.ok(subscribers.some((row) => row.email === quotedEmail))

  const counts = await sql<{ feedback_count: number; subscriber_count: number }[]>`
    select
      (select count(*)::int from public.feedback) as feedback_count,
      (select count(*)::int from public.subscribers) as subscriber_count
  `
  assert.equal(Number(counts[0]?.feedback_count), 1)
  assert.equal(Number(counts[0]?.subscriber_count), 2)

  const blockedUrl = `${databaseUrl}?application_name=${BLOCKED_REF}`
  process.env.USAGE_DATABASE_URL = blockedUrl
  assert.equal(usageDatabaseUrl(), null)
  assert.deepEqual(
    await saveFeedback({
      site: "abcofcyber",
      category: "Other",
      rating: 1,
      message: "should-not-store",
      page: null,
      pageUrl: null,
      email: null,
      ipAddress: "198.51.100.8",
      feedbackType: "general",
    }),
    { ok: false, reason: "no-database" },
  )
  assert.deepEqual(
    await saveSubscriber({
      site: "abcofcyber",
      email: "blocked@example.com",
      name: "Blocked",
      source: "website",
    }),
    { ok: false, reason: "no-database" },
  )

  delete process.env.USAGE_DATABASE_URL
  assert.equal(usageDatabaseUrl(), null)
  assert.deepEqual(
    await saveSubscriber({
      site: "abcofcyber",
      email: "unset@example.com",
      name: null,
      source: null,
    }),
    { ok: false, reason: "no-database" },
  )

  process.env.USAGE_DATABASE_URL = `https://${BLOCKED_REF}.supabase.co`
  assert.equal(usageDatabaseUrl(), null)
  assert.deepEqual(
    await saveFeedback({
      site: "abcofcyber",
      category: "Suggestion",
      rating: 5,
      message: "https-should-not-store",
      page: null,
      pageUrl: null,
      email: "person@example.com",
      ipAddress: "192.0.2.9",
      feedbackType: "suggestion",
    }),
    { ok: false, reason: "no-database" },
  )

  process.env.USAGE_DATABASE_URL = databaseUrl
  const afterRejects = await sql<{ feedback_count: number; subscriber_count: number }[]>`
    select
      (select count(*)::int from public.feedback) as feedback_count,
      (select count(*)::int from public.subscribers) as subscriber_count
  `
  assert.equal(Number(afterRejects[0]?.feedback_count), 1)
  assert.equal(Number(afterRejects[0]?.subscriber_count), 2)
  const leaked = await sql<{ message: string }[]>`
    select message from public.feedback where message = ${"should-not-store"}
  `
  assert.equal(leaked.length, 0)
})
