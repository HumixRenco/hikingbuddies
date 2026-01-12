import { ActivityInfo } from "./ActivityInfo";
import { ParticipantInfo } from "./ParticipantInfo";
import { EventPhotos } from "./EventPhotos";

interface EventContentProps {
  title: string;
  time: string;
  location: string;
  transport: string;
  level: string;
  activityType: string;
  distance: string;
  elevation: string;
  participantCount: string;
  organizerName: string;
  status?: string;
  showReviewButton?: boolean;
  photos?: string[];
}

export function EventContent({
  title,
  time,
  location,
  transport,
  level,
  activityType,
  distance,
  elevation,
  participantCount,
  organizerName,
  status,
  showReviewButton,
  photos
}: EventContentProps) {
  return (
    <div className={`flex ${showReviewButton ? 'overflow-hidden' : ''} flex-col flex-1 shrink pb-4 border-b border-solid basis-0 border-border min-w-60`}>
      <h3 className="text-base font-bold text-foreground">
        {title}
      </h3>
      <div className="flex gap-3 items-end self-start mt-3 text-xs text-muted-foreground">
        <time className="text-xs font-bold text-foreground">
          {time}
        </time>
        <div>
          <span className="text-muted-foreground">from </span>
          <span className="font-bold text-muted-foreground">{location}</span>
        </div>
        <div className={showReviewButton ? '' : 'font-light'}>
          <span className="text-muted-foreground">by </span>
          <span className="font-bold text-muted-foreground">{transport}</span>
        </div>
      </div>
      <ActivityInfo
        level={level}
        activityType={activityType}
        distance={distance}
        elevation={elevation}
      />
      <ParticipantInfo
        participantCount={participantCount}
        organizerName={organizerName}
        status={status}
        showReviewButton={showReviewButton}
      />
      {photos && <EventPhotos photos={photos} />}
    </div>
  );
}
