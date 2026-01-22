-- Replace overly permissive public INSERT policy with basic data-integrity checks

DROP POLICY IF EXISTS "Anyone can create events" ON public.events;

CREATE POLICY "Anyone can create events"
ON public.events
FOR INSERT
TO anon, authenticated
WITH CHECK (
  title IS NOT NULL AND length(trim(title)) > 0
  AND date_label IS NOT NULL AND length(trim(date_label)) > 0
  AND time IS NOT NULL AND length(trim(time)) > 0
  AND duration IS NOT NULL AND length(trim(duration)) > 0
  AND cover_image_key IS NOT NULL AND length(trim(cover_image_key)) > 0
  AND organizer_name IS NOT NULL AND length(trim(organizer_name)) > 0
  AND location_key IS NOT NULL AND length(trim(location_key)) > 0
  AND departure_place IS NOT NULL AND length(trim(departure_place)) > 0
  AND transport_mode IS NOT NULL AND length(trim(transport_mode)) > 0
  AND activity_type IS NOT NULL AND length(trim(activity_type)) > 0
  AND distance IS NOT NULL AND length(trim(distance)) > 0
  AND elevation IS NOT NULL AND length(trim(elevation)) > 0
  AND total_height IS NOT NULL AND length(trim(total_height)) > 0
  AND participants_count >= 0
  AND available_spots >= 0
  AND waitlist_count >= 0
);
