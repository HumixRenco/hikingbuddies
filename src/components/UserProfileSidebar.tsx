import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Settings, MessageSquare, Mountain, Bike, Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

interface UserProfileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UserProfileSidebar = ({ open, onOpenChange }: UserProfileSidebarProps) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "recent" | "past" | "organised">("upcoming");

  const stats = {
    lastMonth: 9,
    allTime: 49,
    lastYear: 43,
  };

  const activities = [
    { icon: Mountain, label: "Hiking", count: 43 },
    { icon: Bike, label: "Cycling", count: 4 },
    { icon: Mountain, label: "Via Ferrata", count: 1 },
    { icon: Settings, label: "Other", count: 1 },
  ];

  const difficultyLevels = [
    { level: "T1", count: 0, color: "bg-emerald-400" },
    { level: "T2", count: 34, color: "bg-emerald-500" },
    { level: "T3", count: 23, color: "bg-yellow-400" },
    { level: "T4", count: 3, color: "bg-orange-400" },
    { level: "T5", count: 15, color: "bg-red-400" },
    { level: "T6", count: 4, color: "bg-red-600" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      organizer: "Vera",
      participants: 14,
      status: "Closed",
      title: "Jochberg hike and swim",
      userStatus: "You are going",
      time: "6:45",
      from: "Munich",
      transport: "Train",
      type: "Hiking",
      distance: "18km",
      elevation: "1982",
      duration: "4h 30min",
      canUnjoin: true,
    },
    {
      id: 2,
      organizer: "Anna",
      participants: 14,
      status: "1 spot available",
      title: "Jochberg hike and swim",
      userStatus: "You're the organiser",
      time: "6:45",
      from: "Munich",
      transport: "Train",
      type: "Hiking",
      distance: "18km",
      elevation: "1982",
      duration: "4h 30min",
      canEdit: true,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-hidden">
        <SheetTitle className="sr-only">User Profile</SheetTitle>
        <ScrollArea className="h-full">
          <div className="p-6">
            {/* Header with settings */}
            <div className="flex justify-end mb-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Settings className="h-5 w-5" />
              </Button>
            </div>

            {/* Profile Avatar */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-3">
                <Avatar className="h-24 w-24 rounded-full border-4 border-background shadow-lg">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" 
                    alt="Anna" 
                  />
                  <AvatarFallback className="text-2xl">A</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <Mountain className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-foreground">Anna</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-medium flex items-center gap-1">
                  <Mountain className="h-3 w-3" /> Trail Rookie
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> 34 reviews
                </span>
              </div>
            </div>

            {/* User Info Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="rounded-full">32 y.o.</Badge>
              <Badge variant="secondary" className="rounded-full">🌱 Sustainer</Badge>
              <Badge variant="secondary" className="rounded-full">🇩🇪 Based in Germany</Badge>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="outline" className="rounded-full">5 years hiking</Badge>
              <Badge variant="outline" className="rounded-full">⛰️ 43 events organised</Badge>
              <Badge variant="outline" className="rounded-full flex items-center gap-1">
                <span className="flex -space-x-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 text-[8px] text-white flex items-center justify-center">T3</span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 text-[8px] text-white flex items-center justify-center">T4</span>
                  <span className="w-3 h-3 rounded-full bg-red-400 text-[8px] text-white flex items-center justify-center">T6</span>
                </span>
                61 hikes completed
              </Badge>
              <Badge variant="outline" className="rounded-full">🚴 4 Cycling activities</Badge>
              <Badge variant="outline" className="rounded-full">🗺️ 52 routes created</Badge>
              <Badge variant="outline" className="rounded-full">🧗 8 Via Ferrata activities</Badge>
            </div>

            {/* Time Period Stats */}
            <div className="flex justify-center gap-6 mb-4 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                LAST MONTH | {stats.lastMonth}
              </button>
              <button className="font-bold text-foreground border-b-2 border-foreground pb-1">
                ALL TIME | {stats.allTime}
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                LAST YEAR | {stats.lastYear}
              </button>
            </div>

            {/* Activity Icons */}
            <div className="flex justify-center gap-4 mb-4">
              {activities.map((activity) => (
                <div key={activity.label} className="flex items-center gap-1 text-sm text-muted-foreground">
                  <activity.icon className="h-4 w-4" />
                  <span>{activity.count}</span>
                </div>
              ))}
            </div>

            {/* Distance and Elevation */}
            <div className="flex justify-center gap-8 mb-6 text-sm">
              <div>
                <span className="text-muted-foreground">Distance: </span>
                <span className="font-bold">34km</span>
              </div>
              <div>
                <span className="text-muted-foreground">Elevation: </span>
                <span className="font-bold">3.982m</span>
              </div>
            </div>

            {/* Difficulty Levels */}
            <div className="flex justify-center gap-2 mb-8">
              {difficultyLevels.map((level) => (
                <div key={level.level} className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-12 ${level.color} rounded-full`} style={{ 
                    height: `${Math.max(20, level.count * 2)}px`,
                    minHeight: '20px',
                    maxHeight: '48px'
                  }} />
                  <span className="text-xs font-medium">{level.level}</span>
                  <span className="text-xs text-muted-foreground">{level.count}</span>
                </div>
              ))}
            </div>

            {/* Reviews Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm">ANNA'S REVIEWS (34)</h3>
                <Button variant="link" className="text-primary text-sm p-0 h-auto">
                  Show all →
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-foreground mb-3">
                  Anna, thank you for organising an excellent "tramping trip". Certainly a fit and furious hike. See you on the next one
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                  <div className="text-xs">
                    <span className="font-medium">Karina</span>
                    <br />
                    <span className="text-muted-foreground">Hochstaufen (1771m), June 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div>
              <h3 className="font-bold text-sm mb-3">ANNA'S ACTIVITIES</h3>
              
              {/* Activity Tabs */}
              <div className="flex gap-4 mb-4 border-b border-border">
                {[
                  { key: "upcoming", label: "Upcoming", count: 2 },
                  { key: "recent", label: "Recent", count: 1 },
                  { key: "past", label: "Past", count: 60 },
                  { key: "organised", label: "Organised", count: 43 },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`pb-2 text-sm transition-colors ${
                      activeTab === tab.key
                        ? "font-bold text-foreground border-b-2 border-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label} | {tab.count}
                  </button>
                ))}
              </div>

              {/* Event Cards */}
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-border rounded-lg p-4">
                    {/* Event Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face" />
                        <AvatarFallback>{event.organizer[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{event.organizer}, +{event.participants}</span>
                      <Badge 
                        variant={event.status === "Closed" ? "secondary" : "default"}
                        className={`text-xs ${event.status !== "Closed" ? "bg-primary text-primary-foreground" : ""}`}
                      >
                        {event.status}
                      </Badge>
                    </div>

                    {/* Event Title */}
                    <h4 className="font-bold text-foreground mb-1">{event.title}</h4>
                    
                    {/* User Status */}
                    <div className="mb-2">
                      <Badge 
                        className={`text-xs ${
                          event.userStatus === "You are going" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {event.userStatus}
                      </Badge>
                      <span className="text-sm text-muted-foreground ml-2">
                        at {event.time} · from {event.from} · by {event.transport}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Badge variant="outline" className="h-5 px-1 text-[10px]">T3</Badge>
                        <Mountain className="h-3 w-3" /> {event.type}
                      </span>
                      <span>↔ {event.distance}</span>
                      <span>↑ {event.elevation} elevation</span>
                      <span>⏱ {event.duration}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-xs h-8">
                          <Share2 className="h-3 w-3 mr-1" /> Share
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs h-8">
                          <MessageCircle className="h-3 w-3 mr-1" /> Comment
                        </Button>
                      </div>
                      {event.canUnjoin && (
                        <Button variant="outline" size="sm" className="text-primary border-primary text-xs h-8">
                          Unjoin
                        </Button>
                      )}
                      {event.canEdit && (
                        <Button variant="outline" size="sm" className="text-primary border-primary text-xs h-8">
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default UserProfileSidebar;
