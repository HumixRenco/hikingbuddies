import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DetailHeaderProps {
  date: string;
  timeRange: string;
  title: string;
  activity: string;
  difficulty: string;
  departsFrom: string;
  transport: string;
  actionLabel?: string;
  onAction?: () => void;
}

const DetailHeader = ({
  date,
  timeRange,
  title,
  activity,
  difficulty,
  departsFrom,
  transport,
  actionLabel = "Join event",
  onAction,
}: DetailHeaderProps) => {
  return (
    <div className="space-y-6">
      {/* Date and time */}
      <div>
        <p className="text-lg font-semibold text-foreground">{date}</p>
        <p className="text-sm text-muted-foreground">{timeRange}</p>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground leading-tight">
        {title}
      </h1>

      {/* Meta info grid */}
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Activity</p>
          <p className="font-medium text-foreground">{activity}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Difficulty</p>
          <p className="font-medium text-foreground">{difficulty}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Departs from</p>
          <p className="font-medium text-foreground">{departsFrom}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Transport</p>
          <p className="font-medium text-foreground">{transport}</p>
        </div>
      </div>

      {/* Action button */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Badge variant="outline" className="rounded-full w-8 h-8" />
          <Badge variant="outline" className="rounded-full w-8 h-8" />
        </div>
        <Button onClick={onAction} className="ml-auto">
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

export default DetailHeader;
