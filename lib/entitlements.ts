import { scopeToSite, siteProductIdPattern, toStoredProductId } from "./entitlement-keys"
import { getUsageSql, sqlErrorCode } from "./usage-db"

/** Prefix for this site's rows in the shared entitlements table. */
const SITE_KEY = "abcofcyber"

export interface Entitlement {
  id: string
  user_id: string
  product_id: string
  granted_at: string
  expires_at: string | null
}

type EntitlementRow = {
  id: string
  user_id: string
  product_id: string
  granted_at: Date | string
  expires_at: Date | string | null
}

function asIso(value: Date | string): string {
  if (value instanceof Date) return value.toISOString()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toISOString()
}

function asIsoOrNull(value: Date | string | null): string | null {
  if (value == null) return null
  return asIso(value)
}

export async function getUserEntitlements(userId: string): Promise<Entitlement[]> {
  const sql = getUsageSql()
  if (!sql) return []
  try {
    const pattern = siteProductIdPattern(SITE_KEY)
    const rows = await sql<EntitlementRow[]>`
      select id::text as id, user_id, product_id, granted_at, expires_at
      from public.entitlements
      where user_id = ${userId}
        and product_id like ${pattern}
    `
    const now = Date.now()
    return scopeToSite(
      rows.map((row) => ({
        id: String(row.id),
        user_id: String(row.user_id),
        product_id: String(row.product_id),
        granted_at: asIso(row.granted_at),
        expires_at: asIsoOrNull(row.expires_at),
      })),
      SITE_KEY,
    ).filter((row) => {
      if (!row.expires_at) return true
      return new Date(row.expires_at).getTime() > now
    })
  } catch (error) {
    console.error("[entitlements] fetch failed", sqlErrorCode(error))
    return []
  }
}

export async function revokeEntitlement(userId: string, productId: string): Promise<boolean> {
  const sql = getUsageSql()
  if (!sql) return false
  try {
    const stored = toStoredProductId(productId, SITE_KEY)
    await sql`
      delete from public.entitlements
      where user_id = ${userId}
        and product_id = ${stored}
    `
    return true
  } catch (error) {
    console.error("[entitlements] revoke failed", sqlErrorCode(error))
    return false
  }
}

export async function grantEntitlement(userId: string, productId: string): Promise<boolean> {
  const sql = getUsageSql()
  if (!sql) return false
  try {
    const stored = toStoredProductId(productId, SITE_KEY)
    await sql`
      insert into public.entitlements (user_id, product_id, granted_at)
      values (${userId}, ${stored}, now())
      on conflict (user_id, product_id)
      do update set granted_at = excluded.granted_at
    `
    return true
  } catch (error) {
    console.error("[entitlements] grant failed", sqlErrorCode(error))
    return false
  }
}
