-- Signed-in page views for the operator usage view.
-- user_id is the Clerk user id (text). Auth stays on Clerk.
-- Additive. Does not alter existing tables.
-- Apply this to the Neon database in USAGE_DATABASE_URL.
-- Do not apply it to the empire-hq Supabase project.

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
