-- Tighten event creation security by binding created events to the authenticated user

ALTER TABLE public.events
ADD COLUMN IF NOT EXISTS created_by UUID;

CREATE INDEX IF NOT EXISTS idx_events_created_by ON public.events(created_by);

DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;

CREATE POLICY "Users can create events"
ON public.events
FOR INSERT
TO authenticated
WITH CHECK (created_by = auth.uid());
