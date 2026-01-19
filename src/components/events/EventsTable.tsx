import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StackedAvatars } from "@/components/ui/stacked-avatars";
import { Mountain, Bike, PersonStanding, Users } from "lucide-react";
import { Event } from "@/data/eventsData";

interface EventsTableProps {
  dateLabel: string;
  events: Event[];
  showHeader?: boolean;
  onEventClick?: (eventId: number) => void;
}

const activityIcons: Record<string, React.ElementType> = {
  hiking: Mountain,
  cycling: Bike,
  bouldering: PersonStanding,
  social: Users,
  "ski-touring": Mountain,
};

const EventsTable = ({ dateLabel, events, showHeader = true, onEventClick }: EventsTableProps) => {
  return (
    <div className="mb-8">
      {/* Date Header with Column Labels */}
      <div className="flex items-baseline gap-4 mb-2">
        <h2 className="text-lg font-semibold text-foreground">{dateLabel}</h2>
        {showHeader && (
          <div className="hidden lg:flex items-center text-sm text-muted-foreground ml-auto gap-0">
            <span className="w-[140px]">Departing from</span>
            <span className="w-[200px]">Activity</span>
            <span className="w-[180px] text-right">Participants</span>
          </div>
        )}
      </div>

      {/* Events Table */}
      <div className="border-t border-border">
        {events.map((event) => {
          const ActivityIcon = activityIcons[event.activityType] || Mountain;
          
          return (
            <div
              key={event.id}
              className="flex flex-col lg:flex-row items-start lg:items-center py-4 border-b border-border hover:bg-muted/30 transition-colors cursor-pointer gap-4"
              onClick={() => onEventClick?.(event.id)}
            >
              {/* Time & Duration */}
              <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0 w-16 shrink-0">
                <span className="font-semibold text-foreground">{event.time}</span>
                <span className="text-sm text-muted-foreground">{event.duration}</span>
              </div>

              {/* Cover Image */}
              <div className="w-full lg:w-20 h-40 lg:h-14 rounded-lg overflow-hidden shrink-0">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Organizer */}
              <div className="flex-1 min-w-0 lg:max-w-[200px]">
                <h3 className="font-semibold text-foreground leading-tight">{event.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={event.organizer.avatar} alt={event.organizer.name} />
                    <AvatarFallback className="text-xs">{event.organizer.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">by {event.organizer.name}</span>
                </div>
              </div>

              {/* Departure Info */}
              <div className="lg:w-[140px] shrink-0">
                <p className="text-sm font-medium text-foreground">{event.departurePlace}</p>
                <div className="text-sm text-muted-foreground">
                  {event.transportMode === "none" ? "No transport" : `by ${event.transportMode.charAt(0).toUpperCase() + event.transportMode.slice(1)}`}
                </div>
              </div>

              {/* Activity & Stats */}
              <div className="lg:w-[200px] shrink-0 lg:border-l lg:border-border lg:pl-4">
                <div className="flex items-center gap-2">
                  <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium capitalize">{event.activityType.replace("-", " ")}</span>
                  {event.difficulty && (
                    <Badge className="text-xs px-1.5 py-0 h-5 bg-primary text-primary-foreground">
                      {event.difficulty}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{event.distance}</span>
                  <span>•</span>
                  <span>{event.elevation} elevation</span>
                  <span>•</span>
                  <span>{event.totalHeight} {event.activityType === "hiking" ? "total height" : "descent"}</span>
                </div>
              </div>

              {/* Participants */}
              <div className="lg:w-[180px] shrink-0 lg:text-right">
                <div className="flex items-center lg:justify-end gap-1 text-sm">
                  <span className="text-foreground font-medium">{event.participantsCount} coming</span>
                  <span className="text-muted-foreground">/</span>
                  {event.waitlistCount > 0 ? (
                    <span className="text-muted-foreground italic">{event.waitlistCount} in waitlist</span>
                  ) : (
                    <span className="text-primary font-medium">{event.availableSpots} available</span>
                  )}
                </div>
                <div className="flex items-center lg:justify-end mt-1">
                  <StackedAvatars avatars={event.participantAvatars} maxDisplay={5} size="md" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsTable;
