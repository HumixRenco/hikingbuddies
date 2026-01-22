-- Public event creation (no login)
-- NOTE: This makes event creation open to anyone. Use cautiously.

DROP POLICY IF EXISTS "Users can create events" ON public.events;

CREATE POLICY "Anyone can create events"
ON public.events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
