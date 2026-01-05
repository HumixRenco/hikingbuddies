import eventSummit from "@/assets/event-summit.jpg";
import eventTrailRun from "@/assets/event-trail-run.jpg";
import eventSunrise from "@/assets/event-sunrise.jpg";
import eventKayak from "@/assets/event-kayak.jpg";

export interface Event {
  id: number;
  dateLabel: string;
  time: string;
  duration: string;
  title: string;
  coverImage: string;
  organizer: {
    name: string;
    avatar: string;
  };
  departurePlace: string;
  transportMode: "train" | "bus" | "carpool" | "none";
  activityType: "hiking" | "cycling" | "bouldering" | "social" | "ski-touring";
  difficulty?: string;
  distance: string;
  elevation: string;
  totalHeight: string;
  participantsCount: number;
  availableSpots: number;
  waitlistCount: number;
  participantAvatars: string[];
}

export const eventsData: Event[] = [
  {
    id: 1,
    dateLabel: "Tomorrow, Saturday",
    time: "6:45",
    duration: "3 days",
    title: "A very long event name with second line",
    coverImage: eventSummit,
    organizer: { name: "Jessica", avatar: "" },
    departurePlace: "Munich Hbf, pl 29",
    transportMode: "train",
    activityType: "hiking",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "1800",
    participantsCount: 12,
    availableSpots: 4,
    waitlistCount: 0,
    participantAvatars: ["", "", "", ""],
  },
  {
    id: 2,
    dateLabel: "Tomorrow, Saturday",
    time: "6:45",
    duration: "12 hours",
    title: "Rofanspitze",
    coverImage: eventTrailRun,
    organizer: { name: "Helena", avatar: "" },
    departurePlace: "Munich",
    transportMode: "carpool",
    activityType: "cycling",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "1800",
    participantsCount: 20,
    availableSpots: 0,
    waitlistCount: 20,
    participantAvatars: ["", "", "", ""],
  },
  {
    id: 3,
    dateLabel: "Tomorrow, Saturday",
    time: "6:45",
    duration: "1 day",
    title: "Tannheimer Berge",
    coverImage: eventSunrise,
    organizer: { name: "John Doe", avatar: "" },
    departurePlace: "Munich",
    transportMode: "bus",
    activityType: "hiking",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "2234",
    participantsCount: 12,
    availableSpots: 4,
    waitlistCount: 0,
    participantAvatars: ["", "", "", ""],
  },
  {
    id: 4,
    dateLabel: "Tomorrow, Saturday",
    time: "8:00",
    duration: "12 days",
    title: "Event name with second line",
    coverImage: eventKayak,
    organizer: { name: "Freddy", avatar: "" },
    departurePlace: "Munich Hbf",
    transportMode: "none",
    activityType: "hiking",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "1800",
    participantsCount: 20,
    availableSpots: 0,
    waitlistCount: 20,
    participantAvatars: ["", "", "", ""],
  },
  {
    id: 5,
    dateLabel: "Jun 23, Sunday",
    time: "6:45",
    duration: "12 hours",
    title: "Event name with second line",
    coverImage: eventSummit,
    organizer: { name: "Larissa", avatar: "" },
    departurePlace: "Zurich Hbf",
    transportMode: "bus",
    activityType: "hiking",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "2234",
    participantsCount: 12,
    availableSpots: 4,
    waitlistCount: 0,
    participantAvatars: ["", "", "", ""],
  },
  {
    id: 6,
    dateLabel: "Jun 23, Sunday",
    time: "6:45",
    duration: "1 day",
    title: "Hiking the highest peak",
    coverImage: eventTrailRun,
    organizer: { name: "Laurence", avatar: "" },
    departurePlace: "Munich deutsches...",
    transportMode: "none",
    activityType: "hiking",
    difficulty: "T3",
    distance: "18km",
    elevation: "1982",
    totalHeight: "1800",
    participantsCount: 20,
    availableSpots: 0,
    waitlistCount: 20,
    participantAvatars: ["", "", "", ""],
  },
];
