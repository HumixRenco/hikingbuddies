-- Allow authenticated users to insert events (creation)
-- Existing policies deny INSERT/UPDATE/DELETE; we keep UPDATE/DELETE denied for now.

DROP POLICY IF EXISTS "No one can insert events" ON public.events;

CREATE POLICY "Authenticated users can create events"
ON public.events
FOR INSERT
TO authenticated
WITH CHECK (true);
