-- Create events table
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- UI grouping / display
  date_label text not null,
  time text not null,
  duration text not null,
  title text not null,
  description text,

  -- Media (mapped in frontend)
  cover_image_key text not null,

  -- Organizer
  organizer_name text not null,
  organizer_avatar_url text,

  -- Logistics
  location_key text not null, -- e.g. 'munich', 'zurich'
  departure_place text not null,
  transport_mode text not null, -- 'train'|'bus'|'carpool'|'none'

  -- Activity
  activity_type text not null, -- 'hiking'|'cycling'|'bouldering'|'social'|'ski-touring'
  difficulty text,

  -- Stats
  distance text not null,
  elevation text not null,
  total_height text not null,

  -- Capacity
  participants_count integer not null default 0,
  available_spots integer not null default 0,
  waitlist_count integer not null default 0,

  -- Avatars (optional placeholders)
  participant_avatars text[] not null default '{}'::text[]
);

-- Enable RLS
alter table public.events enable row level security;

-- Public read (no sensitive data stored in this table)
create policy "Events are viewable by everyone"
on public.events
for select
using (true);

-- Lock down writes for now
create policy "No one can insert events"
on public.events
for insert
with check (false);

create policy "No one can update events"
on public.events
for update
using (false);

create policy "No one can delete events"
on public.events
for delete
using (false);

-- Helpful indexes
create index if not exists idx_events_date_label on public.events (date_label);
create index if not exists idx_events_location_key on public.events (location_key);
create index if not exists idx_events_activity_type on public.events (activity_type);
