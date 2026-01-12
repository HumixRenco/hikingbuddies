import { EventItem } from "./EventItem";

interface Event {
  date: string;
  day: string;
  title: string;
  time: string;
  location: string;
  transport: string;
  level: string;
  activityType: string;
  distance: string;
  elevation: string;
  participantCount: string;
  organizerName: string;
  status?: string;
  showReviewButton?: boolean;
  photos?: string[];
  isPastEvent?: boolean;
}

interface SidePanelEventsListProps {
  events: Event[];
}

export function SidePanelEventsList({ events }: SidePanelEventsListProps) {
  return (
    <div className="mt-8 w-full">
      {events.map((event, index) => (
        <div key={index} className={index > 0 ? "mt-4" : ""}>
          <EventItem {...event} />
        </div>
      ))}
    </div>
  );
}
