-- Clerk user id → paid product. Service-role writes from the Stripe webhook.
-- user_id is the Clerk user id (text), not the Supabase auth uuid.
-- Additive. Does not alter existing tables.

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  product_id text not null,
  granted_at timestamptz not null default now(),
  expires_at timestamptz,
  unique (user_id, product_id)
);

alter table public.entitlements enable row level security;
-- No public policies. The service role bypasses RLS.
