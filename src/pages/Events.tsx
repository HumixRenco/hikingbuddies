import PageLayout from "@/components/layout/PageLayout";
import EventFilters from "@/components/events/EventFilters";
import EventsList, { eventsData, Event } from "@/components/events/EventsList";
import EventsSidePanel from "@/components/events/EventsSidePanel";
import { EventDetails } from "@/components/details";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState, useMemo, useCallback } from "react";

const Events = () => {
  const [locationFilter, setLocationFilter] = useState("munich");
  const [activityFilter, setActivityFilter] = useState("all");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const { t } = useLanguage();

  const selectedEvent = useMemo(() => {
    return eventsData.find((e) => e.id === selectedEventId) || null;
  }, [selectedEventId]);

  // Transform event data to EventDetails format
  const eventDetailsData = useMemo(() => {
    if (!selectedEvent) return null;

    const transportLabel = selectedEvent.transportMode === "none" 
      ? t("eventsTable.noTransport")
      : selectedEvent.transportMode.charAt(0).toUpperCase() + selectedEvent.transportMode.slice(1);

    return {
      id: selectedEvent.id.toString(),
      title: selectedEvent.title,
      date: selectedEvent.dateLabel,
      timeRange: `${selectedEvent.time} · ${selectedEvent.duration}`,
      activity: selectedEvent.activityType.charAt(0).toUpperCase() + selectedEvent.activityType.slice(1).replace("-", " "),
      difficulty: selectedEvent.difficulty || "",
      departsFrom: selectedEvent.departurePlace,
      transport: transportLabel,
      description: `Join us for an exciting ${selectedEvent.activityType.replace("-", " ")} adventure! This ${selectedEvent.duration} event covers ${selectedEvent.distance} with ${selectedEvent.elevation}m of elevation gain. We'll depart from ${selectedEvent.departurePlace} and enjoy a memorable outdoor experience together.`,
      mainImage: selectedEvent.coverImage,
      thumbnails: [selectedEvent.coverImage, selectedEvent.coverImage, selectedEvent.coverImage, selectedEvent.coverImage],
      meetingDescription: "We'll meet at the departure point and organize transport together.",
      meetingLocation: selectedEvent.departurePlace,
      meetingTime: selectedEvent.time,
      transportDetails: transportLabel,
      ticketPrice: selectedEvent.transportMode === "train" ? "~€25 return" : undefined,
      equipment: ["Hiking boots", "Water bottle", "Snacks", "Rain jacket", "Sun protection", "First aid kit"],
      distance: selectedEvent.distance,
      ascent: `${selectedEvent.elevation}m`,
      descent: `${selectedEvent.totalHeight}m`,
      highestPoint: `${parseInt(selectedEvent.elevation) + 800}m`,
      duration: selectedEvent.duration,
      rating: "4.8",
      organizer: {
        name: selectedEvent.organizer.name,
        badge: "Event Organizer",
        avatarUrl: selectedEvent.organizer.avatar,
      },
      participants: selectedEvent.participantAvatars.map((avatar, i) => ({
        id: `p-${i}`,
        name: `Participant ${i + 1}`,
        avatarUrl: avatar,
      })),
      totalSpots: selectedEvent.participantsCount + selectedEvent.availableSpots,
      spotsLeft: selectedEvent.availableSpots,
      comments: [
        {
          id: "c1",
          author: "Victor",
          content: "Looking forward to this! What's the weather forecast?",
          timestamp: "2h ago",
        },
        {
          id: "c2",
          author: "Sarah",
          content: "I'll bring extra snacks to share!",
          timestamp: "1d ago",
        },
      ],
      totalComments: 5,
    };
  }, [selectedEvent, t]);

  const handleEventClick = useCallback((eventId: number) => {
    setSelectedEventId(eventId);
  }, []);

  return (
    <PageLayout mainClassName="container py-8">
      <h1 className="text-4xl font-bold text-foreground mb-6">{t("events.pageTitle")}</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <EventFilters
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            activityFilter={activityFilter}
            setActivityFilter={setActivityFilter}
          />
          <EventsList 
            locationFilter={locationFilter}
            activityFilter={activityFilter}
            onEventClick={handleEventClick}
          />
        </div>
        
        {/* Side Panel */}
        <aside className="w-full lg:w-80 shrink-0">
          <EventsSidePanel />
        </aside>
      </div>

      {/* Event Details Modal */}
      {eventDetailsData && (
        <EventDetails
          open={!!selectedEventId}
          onOpenChange={(open) => !open && setSelectedEventId(null)}
          event={eventDetailsData}
          onJoinEvent={() => console.log("Join event:", selectedEventId)}
          onSendMessage={(msg) => console.log("Send message:", msg)}
        />
      )}
    </PageLayout>
  );
};

export default Events;