import EventCard from "./EventCard";
import { eventsData } from "@/data/eventsData";

interface EventsListProps {
  locationFilter: string;
  activityFilter: string;
}

const EventsList = ({ locationFilter, activityFilter }: EventsListProps) => {
  // Group events by date
  const groupedEvents = eventsData.reduce((acc, event) => {
    const dateKey = event.dateLabel;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, typeof eventsData>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedEvents).map(([dateLabel, events]) => (
        <div key={dateLabel}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-lg font-semibold text-foreground">{dateLabel}</h2>
            {events === groupedEvents[Object.keys(groupedEvents)[0]] && (
              <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground ml-auto">
                <span className="w-32">Departing from</span>
                <span className="w-40">Activity</span>
                <span className="w-36 text-right">Participants</span>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
