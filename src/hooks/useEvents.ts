import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Event, ActivityType, TransportMode } from "@/types/events";
import { getEventCoverImage } from "@/lib/eventCoverImages";

type DbEventRow = {
  id: string;
  date_label: string;
  time: string;
  duration: string;
  title: string;
  description: string | null;
  cover_image_key: string;
  organizer_name: string;
  organizer_avatar_url: string | null;
  location_key: string;
  departure_place: string;
  transport_mode: string;
  activity_type: string;
  difficulty: string | null;
  distance: string;
  elevation: string;
  total_height: string;
  participants_count: number;
  available_spots: number;
  waitlist_count: number;
  participant_avatars: string[];
};

function toEvent(row: DbEventRow): Event {
  return {
    id: row.id,
    dateLabel: row.date_label,
    time: row.time,
    duration: row.duration,
    title: row.title,
    coverImage: getEventCoverImage(row.cover_image_key),
    organizer: {
      name: row.organizer_name,
      avatar: row.organizer_avatar_url ?? "",
    },
    locationKey: row.location_key,
    departurePlace: row.departure_place,
    transportMode: (row.transport_mode as TransportMode) ?? "none",
    activityType: (row.activity_type as ActivityType) ?? "hiking",
    difficulty: row.difficulty ?? undefined,
    distance: row.distance,
    elevation: row.elevation,
    totalHeight: row.total_height,
    participantsCount: row.participants_count,
    availableSpots: row.available_spots,
    waitlistCount: row.waitlist_count,
    participantAvatars: row.participant_avatars ?? [],
  };
}

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async (): Promise<Event[]> => {
      const { data, error } = await supabase
        .from("events")
        .select(
          "id,date_label,time,duration,title,description,cover_image_key,organizer_name,organizer_avatar_url,location_key,departure_place,transport_mode,activity_type,difficulty,distance,elevation,total_height,participants_count,available_spots,waitlist_count,participant_avatars"
        )
        .order("created_at", { ascending: true });

      if (error) throw error;
      return (data ?? []).map((row) => toEvent(row as DbEventRow));
    },
  });
}
