import { EventDate } from "./EventDate";
import { EventContent } from "./EventContent";

interface EventItemProps {
  date: string;
  day: string;
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
  isPastEvent?: boolean;
}

export function EventItem({
  date,
  day,
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
  photos,
  isPastEvent
}: EventItemProps) {
  return (
    <article className="flex gap-3.5 items-start w-full">
      {isPastEvent ? (
        <div className="flex flex-col items-start pb-7 text-sm font-bold leading-5 text-muted-foreground rounded-none w-[45px]">
          <div>
            <span className="text-muted-foreground">{date}</span>
            <br />
            <span className="font-normal text-muted-foreground">{day}</span>
          </div>
        </div>
      ) : (
        <EventDate date={date} day={day} />
      )}
      <EventContent
        title={title}
        time={time}
        location={location}
        transport={transport}
        level={level}
        activityType={activityType}
        distance={distance}
        elevation={elevation}
        participantCount={participantCount}
        organizerName={organizerName}
        status={status}
        showReviewButton={showReviewButton}
        photos={photos}
      />
    </article>
  );
}
