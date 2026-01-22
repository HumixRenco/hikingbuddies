import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Bike, 
  PersonStanding,
  Users,
  Train,
  Bus,
  Car,
  ArrowUpRight,
  MoveHorizontal
} from "lucide-react";
import type { Event } from "@/types/events";

interface EventCardProps {
  event: Event;
}

const activityIcons: Record<string, React.ElementType> = {
  hiking: Mountain,
  cycling: Bike,
  bouldering: PersonStanding,
  social: Users,
  "ski-touring": Mountain,
};

const transportIcons: Record<string, React.ElementType> = {
  train: Train,
  bus: Bus,
  carpool: Car,
  none: Car,
};

const EventCard = ({ event }: EventCardProps) => {
  const ActivityIcon = activityIcons[event.activityType] || Mountain;
  const TransportIcon = transportIcons[event.transportMode] || Train;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-background border border-border rounded-xl hover:shadow-md transition-shadow cursor-pointer">
      {/* Time & Duration */}
      <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 sm:w-16 shrink-0">
        <span className="font-semibold text-foreground">{event.time}</span>
        <span className="text-sm text-muted-foreground">{event.duration}</span>
      </div>

      {/* Cover Image */}
      <div className="w-full sm:w-20 h-32 sm:h-14 rounded-lg overflow-hidden shrink-0">
        <img
          src={event.coverImage}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Organizer */}
      <div className="flex-1 min-w-0 sm:max-w-[180px]">
        <h3 className="font-semibold text-foreground truncate">{event.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Avatar className="h-5 w-5">
            <AvatarImage src={event.organizer.avatar} alt={event.organizer.name} />
            <AvatarFallback className="text-xs">{event.organizer.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">by {event.organizer.name}</span>
        </div>
      </div>

      {/* Departure Info */}
      <div className="sm:w-32 shrink-0">
        <p className="text-sm font-medium text-foreground">{event.departurePlace}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>by</span>
          <span className="capitalize">{event.transportMode === "none" ? "No transport" : event.transportMode}</span>
        </div>
      </div>

      {/* Activity & Stats */}
      <div className="sm:w-40 shrink-0">
        <div className="flex items-center gap-2">
          <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium capitalize">{event.activityType.replace("-", " ")}</span>
          {event.difficulty && (
            <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5 bg-primary/10 text-primary">
              {event.difficulty}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MoveHorizontal className="h-3 w-3" />
            {event.distance}
          </span>
          <span>•</span>
          <span>{event.elevation} elevation</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3" />
            {event.totalHeight}
          </span>
        </div>
      </div>

      {/* Participants */}
      <div className="sm:w-36 shrink-0 sm:text-right">
        <div className="flex items-center sm:justify-end gap-1 text-sm">
          <span className="text-foreground font-medium">{event.participantsCount} coming</span>
          <span className="text-muted-foreground">/</span>
          {event.waitlistCount > 0 ? (
            <span className="text-muted-foreground">{event.waitlistCount} in waitlist</span>
          ) : (
            <span className="text-primary">{event.availableSpots} available</span>
          )}
        </div>
        <div className="flex items-center sm:justify-end mt-1">
          <div className="flex -space-x-2">
            {event.participantAvatars.slice(0, 4).map((avatar, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={avatar} />
                <AvatarFallback className="text-xs">U</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
