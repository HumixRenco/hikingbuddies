import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";

interface PastEvent {
  id: string;
  title: string;
  date: string;
  participantCount: number;
  organizerName: string;
  organizerAvatar?: string;
}

interface PastEventsListProps {
  events: PastEvent[];
  onViewEvent?: (eventId: string) => void;
}

const PastEventsList = ({ events, onViewEvent }: PastEventsListProps) => {
  if (events.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">Past events on this route</h2>
        <p className="text-sm text-muted-foreground">No past events yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Past events on this route</h2>
      <div className="space-y-3">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onViewEvent?.(event.id)}
            className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <p className="font-medium text-foreground text-sm line-clamp-2">
              {event.title}
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {event.date}
              </div>
              <div className="flex items-center gap-1">
                <Avatar className="h-4 w-4">
                  <AvatarImage src={event.organizerAvatar} />
                  <AvatarFallback className="text-[8px]">{event.organizerName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{event.participantCount} participants</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PastEventsList;
