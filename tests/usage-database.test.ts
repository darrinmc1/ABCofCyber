import assert from "node:assert/strict"
import { createServer } from "node:net"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { after, before, test } from "node:test"
import { fileURLToPath } from "node:url"
import { PGlite } from "@electric-sql/pglite"
import { PGLiteSocketServer } from "@electric-sql/pglite-socket"
import { getUserEntitlements, grantEntitlement, revokeEntitlement } from "../lib/entitlements"
import { recordPageView, readUsage } from "../lib/page-views"
import { closeUsageDatabase, usageDatabaseUrl } from "../lib/usage-db"

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
  const migration = ["0001_entitlements.sql", "0002_page_views.sql"]
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
