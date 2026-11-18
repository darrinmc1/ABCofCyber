-- Signed-in page views for the operator usage view.
-- user_id is the Clerk user id (text), not a Supabase auth uuid.
-- Additive. Does not alter existing tables.
-- Run this in the Supabase project that NEXT_PUBLIC_SUPABASE_URL points at.
-- Preview and Production use that same project. Do not create a second database.

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  site text not null default 'abcofcyber',
  user_id text not null,
  path text not null,
  viewed_at timestamptz not null default now()
);

create index if not exists page_views_site_viewed_at_idx
  on public.page_views (site, viewed_at desc);

alter table public.page_views enable row level security;
-- No public policies. The service role bypasses RLS.
