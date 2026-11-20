// lib/supabase.ts — legacy Supabase server client.
// New feedback and subscriber rows are written to Neon (lib/intake.ts).
// Do not use this client to read, copy, or delete existing Supabase rows.

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Guard against invalid values too, not just missing ones — a malformed
// NEXT_PUBLIC_SUPABASE_URL (e.g. a placeholder without https://) makes
// createClient() throw at import time and breaks `next build` during
// page-data collection. Never throw at import — routes no-op gracefully.
const urlOk = !!url && /^https?:\/\//i.test(url);

if (!urlOk || !serviceKey) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL invalid/missing or SUPABASE_SERVICE_ROLE_KEY not set — DB writes disabled."
  );
}

export const supabaseAdmin =
  urlOk && serviceKey && url
    ? createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export const hasSupabase = () => supabaseAdmin !== null;
