import EventsTable from "./EventsTable";
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

  const dateKeys = Object.keys(groupedEvents);

  return (
    <div>
      {dateKeys.map((dateLabel, index) => (
        <EventsTable
          key={dateLabel}
          dateLabel={dateLabel}
          events={groupedEvents[dateLabel]}
          showHeader={index === 0}
        />
      ))}
    </div>
  );
};

export default EventsList;
