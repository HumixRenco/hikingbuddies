export type TransportMode = "train" | "bus" | "carpool" | "none";
export type ActivityType = "hiking" | "cycling" | "bouldering" | "social" | "ski-touring";

export interface Event {
  id: string;
  dateLabel: string;
  time: string;
  duration: string;
  title: string;
  coverImage: string;
  organizer: {
    name: string;
    avatar: string;
  };
  locationKey: string;
  departurePlace: string;
  transportMode: TransportMode;
  activityType: ActivityType;
  difficulty?: string;
  distance: string;
  elevation: string;
  totalHeight: string;
  participantsCount: number;
  availableSpots: number;
  waitlistCount: number;
  participantAvatars: string[];
}
