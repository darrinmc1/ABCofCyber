-- New feedback and email-subscriber rows for this site.
-- Apply this to the Neon database in USAGE_DATABASE_URL.
-- Do not apply it to the empire-hq Supabase project.
-- Do not read, copy, or delete existing Supabase rows.
-- Columns are the ones the site writes, plus id and created_at.
-- Additive. Does not alter existing tables.

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  site text not null,
  category text not null,
  rating integer not null,
  message text not null,
  page text,
  page_url text,
  email text,
  ip_address text,
  feedback_type text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  site text not null,
  email text not null,
  name text,
  source text,
  created_at timestamptz not null default now(),
  unique (site, email)
);

alter table public.feedback enable row level security;
alter table public.subscribers enable row level security;
-- No public policies. The service role bypasses RLS.
