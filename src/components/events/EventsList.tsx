import EventsTable from "./EventsTable";
import type { Event } from "@/types/events";

interface EventsListProps {
  locationFilter: string;
  activityFilter: string;
  events: Event[];
  onEventClick?: (eventId: string) => void;
}

const EventsList = ({ locationFilter, activityFilter, events, onEventClick }: EventsListProps) => {
  const filteredEvents = events.filter((event) => {
    const matchesLocation = locationFilter === "all" || event.locationKey === locationFilter;
    const matchesActivity = activityFilter === "all" || event.activityType === activityFilter;
    return matchesLocation && matchesActivity;
  });

  // Group events by date
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const dateKey = event.dateLabel;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const dateKeys = Object.keys(groupedEvents);

  return (
    <div>
      {dateKeys.map((dateLabel, index) => (
        <EventsTable
          key={dateLabel}
          dateLabel={dateLabel}
          events={groupedEvents[dateLabel]}
          showHeader={index === 0}
          onEventClick={onEventClick}
        />
      ))}
    </div>
  );
};

export default EventsList;
