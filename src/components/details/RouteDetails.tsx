import DetailViewLayout from "./DetailViewLayout";
import PhotoGallery from "./PhotoGallery";
import DetailHeader from "./DetailHeader";
import DetailDescription from "./DetailDescription";
import MeetingTransport from "./MeetingTransport";
import EquipmentList from "./EquipmentList";
import RouteStats from "./RouteStats";
import OrganizerCard from "./OrganizerCard";
import PastEventsList from "./PastEventsList";
import DiscussionChat from "./DiscussionChat";

interface RouteDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  route: {
    id: string;
    title: string;
    activity: string;
    difficulty: string;
    region: string;
    transport: string;
    description: string;
    mainImage: string;
    thumbnails: string[];
    suggestedMeetingLocation?: string;
    suggestedTransport?: string;
    equipment: string[];
    distance: string;
    ascent: string;
    descent: string;
    highestPoint: string;
    duration: string;
    rating?: string;
    creator: {
      name: string;
      badge?: string;
      avatarUrl?: string;
    };
    pastEvents: Array<{
      id: string;
      title: string;
      date: string;
      participantCount: number;
      organizerName: string;
      organizerAvatar?: string;
    }>;
    comments: Array<{
      id: string;
      author: string;
      authorAvatar?: string;
      content: string;
      timestamp: string;
    }>;
    totalComments?: number;
  };
  onCreateEvent?: () => void;
  onViewPastEvent?: (eventId: string) => void;
  onSendMessage?: (message: string) => void;
}

const RouteDetails = ({
  open,
  onOpenChange,
  route,
  onCreateEvent,
  onViewPastEvent,
  onSendMessage,
}: RouteDetailsProps) => {
  return (
    <DetailViewLayout
      open={open}
      onOpenChange={onOpenChange}
      photoGallery={
        <PhotoGallery
          mainImage={route.mainImage}
          thumbnails={route.thumbnails}
          addPhotoLabel="Add route photos"
        />
      }
      mainContent={
        <div className="space-y-8">
          <DetailHeader
            date=""
            timeRange=""
            title={route.title}
            activity={route.activity}
            difficulty={route.difficulty}
            departsFrom={route.region}
            transport={route.transport}
            actionLabel="Create event"
            onAction={onCreateEvent}
          />

          <hr className="border-border" />

          <DetailDescription description={route.description} />

          {(route.suggestedMeetingLocation || route.suggestedTransport) && (
            <>
              <hr className="border-border" />
              <MeetingTransport
                description="Suggested meeting point and transport options"
                meetingLocation={route.suggestedMeetingLocation || "Not specified"}
                meetingTime="Varies by event"
                transport={route.suggestedTransport || "Not specified"}
              />
            </>
          )}

          <hr className="border-border" />

          <EquipmentList items={route.equipment} />

          <hr className="border-border" />

          <RouteStats
            distance={route.distance}
            ascent={route.ascent}
            descent={route.descent}
            highestPoint={route.highestPoint}
            duration={route.duration}
            rating={route.rating}
          />
        </div>
      }
      sidePanel={
        <div className="space-y-8">
          <OrganizerCard
            name={route.creator.name}
            badge={route.creator.badge}
            avatarUrl={route.creator.avatarUrl}
            label="Route Creator"
          />

          <hr className="border-border" />

          <PastEventsList
            events={route.pastEvents}
            onViewEvent={onViewPastEvent}
          />

          <hr className="border-border" />

          <DiscussionChat
            comments={route.comments}
            totalComments={route.totalComments}
            onSendMessage={onSendMessage}
          />
        </div>
      }
    />
  );
};

export default RouteDetails;
