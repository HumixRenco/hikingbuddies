import DetailViewLayout from "./DetailViewLayout";
import PhotoGallery from "./PhotoGallery";
import DetailHeader from "./DetailHeader";
import DetailDescription from "./DetailDescription";
import MeetingTransport from "./MeetingTransport";
import EquipmentList from "./EquipmentList";
import RouteStats from "./RouteStats";
import OrganizerCard from "./OrganizerCard";
import ParticipantsList from "./ParticipantsList";
import DiscussionChat from "./DiscussionChat";

interface EventDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    id: string;
    title: string;
    date: string;
    timeRange: string;
    activity: string;
    difficulty: string;
    departsFrom: string;
    transport: string;
    description: string;
    mainImage: string;
    thumbnails: string[];
    meetingDescription?: string;
    meetingLocation: string;
    meetingTime: string;
    transportDetails: string;
    ticketPrice?: string;
    equipment: string[];
    distance: string;
    ascent: string;
    descent: string;
    highestPoint: string;
    duration: string;
    rating?: string;
    organizer: {
      name: string;
      badge?: string;
      avatarUrl?: string;
    };
    participants: Array<{
      id: string;
      name: string;
      avatarUrl?: string;
    }>;
    totalSpots: number;
    spotsLeft: number;
    comments: Array<{
      id: string;
      author: string;
      authorAvatar?: string;
      content: string;
      timestamp: string;
    }>;
    totalComments?: number;
  };
  onJoinEvent?: () => void;
  onSendMessage?: (message: string) => void;
}

const EventDetails = ({
  open,
  onOpenChange,
  event,
  onJoinEvent,
  onSendMessage,
}: EventDetailsProps) => {
  return (
    <DetailViewLayout
      open={open}
      onOpenChange={onOpenChange}
      photoGallery={
        <PhotoGallery
          mainImage={event.mainImage}
          thumbnails={event.thumbnails}
          addPhotoLabel="Add event photos"
        />
      }
      mainContent={
        <div className="space-y-8">
          <DetailHeader
            date={event.date}
            timeRange={event.timeRange}
            title={event.title}
            activity={event.activity}
            difficulty={event.difficulty}
            departsFrom={event.departsFrom}
            transport={event.transport}
            actionLabel="Join event"
            onAction={onJoinEvent}
          />

          <hr className="border-border" />

          <DetailDescription description={event.description} />

          <hr className="border-border" />

          <MeetingTransport
            description={event.meetingDescription}
            meetingLocation={event.meetingLocation}
            meetingTime={event.meetingTime}
            transport={event.transportDetails}
            ticketPrice={event.ticketPrice}
          />

          <hr className="border-border" />

          <EquipmentList items={event.equipment} />

          <hr className="border-border" />

          <RouteStats
            distance={event.distance}
            ascent={event.ascent}
            descent={event.descent}
            highestPoint={event.highestPoint}
            duration={event.duration}
            rating={event.rating}
          />
        </div>
      }
      sidePanel={
        <div className="space-y-8">
          <OrganizerCard
            name={event.organizer.name}
            badge={event.organizer.badge}
            avatarUrl={event.organizer.avatarUrl}
            label="Organizer"
          />

          <hr className="border-border" />

          <ParticipantsList
            participants={event.participants}
            totalSpots={event.totalSpots}
            spotsLeft={event.spotsLeft}
          />

          <hr className="border-border" />

          <DiscussionChat
            comments={event.comments}
            totalComments={event.totalComments}
            onSendMessage={onSendMessage}
          />
        </div>
      }
    />
  );
};

export default EventDetails;
