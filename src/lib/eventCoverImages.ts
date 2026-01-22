import eventSummit from "@/assets/event-summit.jpg";
import eventTrailRun from "@/assets/event-trail-run.jpg";
import eventSunrise from "@/assets/event-sunrise.jpg";
import eventKayak from "@/assets/event-kayak.jpg";

const coverImages: Record<string, string> = {
  "event-summit": eventSummit,
  "event-trail-run": eventTrailRun,
  "event-sunrise": eventSunrise,
  "event-kayak": eventKayak,
};

export function getEventCoverImage(key: string): string {
  return coverImages[key] ?? eventSummit;
}
