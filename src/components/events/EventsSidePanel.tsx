import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StackedAvatars } from "@/components/ui/stacked-avatars";
import { Bike, Mountain, MoveHorizontal, ArrowUpRight } from "lucide-react";
import eventSummit from "@/assets/event-summit.jpg";
import eventTrailRun from "@/assets/event-trail-run.jpg";
import eventSunrise from "@/assets/event-sunrise.jpg";

const upcomingEvents = [
  {
    id: 1,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departurePlace: "Munich",
    transport: "Train",
    activity: "Cycling",
    difficulty: "Medium",
    distance: "18km",
    elevation: "560m",
    organizer: { name: "Jean-Christian", avatar: "" },
    participantsExtra: 14,
    participantAvatars: ["", ""],
    isFull: true,
  },
  {
    id: 2,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departurePlace: "Munich",
    transport: "Train",
    activity: "Cycling",
    difficulty: "Medium",
    distance: "18km",
    elevation: "560m",
    organizer: { name: "Jean-Christian", avatar: "" },
    participantsExtra: 14,
    participantAvatars: ["", ""],
    isFull: true,
  },
];

const pastEvents = [
  {
    id: 1,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departurePlace: "Munich",
    transport: "Train",
    activity: "Cycling",
    difficulty: "Medium",
    distance: "18km",
    elevation: "560m",
    organizer: { name: "Jean-Christian", avatar: "" },
    participantsExtra: 14,
    participantAvatars: ["", ""],
    images: [eventSummit, eventTrailRun, eventSunrise],
  },
];

const EventsSidePanel = () => {
  return (
    <div className="space-y-6">
      {/* Your upcoming events */}
      <div className="bg-muted/30 rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Your upcoming events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex gap-3">
              <div className="text-center shrink-0 w-12">
                <p className="text-sm font-medium text-foreground">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.day}</p>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground leading-tight">
                  {event.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  at {event.time} · from {event.departurePlace} · by {event.transport}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5">
                    {event.difficulty}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Bike className="h-3 w-3" />
                    {event.activity}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MoveHorizontal className="h-3 w-3" />
                    {event.distance}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ArrowUpRight className="h-3 w-3" />
                    {event.elevation}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <StackedAvatars avatars={event.participantAvatars} maxDisplay={2} size="sm" />
                    <span className="text-xs text-muted-foreground">
                      +{event.participantsExtra}, by {event.organizer.name}
                    </span>
                  </div>
                  {event.isFull && (
                    <span className="text-xs text-muted-foreground">full</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your past events */}
      <div className="bg-muted/30 rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Your past events</h3>
        <div className="space-y-4">
          {pastEvents.map((event) => (
            <div key={event.id}>
              <div className="flex gap-3">
                <div className="text-center shrink-0 w-12">
                  <p className="text-sm font-medium text-foreground">{event.date}</p>
                  <p className="text-xs text-muted-foreground">{event.day}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-foreground leading-tight">
                    {event.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    at {event.time} · from {event.departurePlace} · by {event.transport}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5">
                      {event.difficulty}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Bike className="h-3 w-3" />
                      {event.activity}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MoveHorizontal className="h-3 w-3" />
                      {event.distance}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ArrowUpRight className="h-3 w-3" />
                      {event.elevation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <StackedAvatars avatars={event.participantAvatars} maxDisplay={2} size="sm" />
                      <span className="text-xs text-muted-foreground">
                        +{event.participantsExtra}, by {event.organizer.name}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="h-6 text-xs">
                      Write reviews
                    </Button>
                  </div>
                </div>
              </div>
              {/* Event photos */}
              <div className="flex gap-2 mt-3 ml-14">
                {event.images.map((img, i) => (
                  <div key={i} className="w-16 h-12 rounded-lg overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSidePanel;
