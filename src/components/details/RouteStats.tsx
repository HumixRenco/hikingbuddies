import { ArrowLeftRight, TrendingUp, TrendingDown, Mountain, Clock, Star } from "lucide-react";

interface RouteStat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface RouteStatsProps {
  distance: string;
  ascent: string;
  descent: string;
  highestPoint: string;
  duration: string;
  rating?: string;
}

const RouteStats = ({
  distance,
  ascent,
  descent,
  highestPoint,
  duration,
  rating,
}: RouteStatsProps) => {
  const stats: RouteStat[] = [
    { label: "Distance", value: distance, icon: <ArrowLeftRight className="h-5 w-5" /> },
    { label: "Ascent", value: ascent, icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Descent", value: descent, icon: <TrendingDown className="h-5 w-5" /> },
    { label: "Highest point", value: highestPoint, icon: <Mountain className="h-5 w-5" /> },
    { label: "Duration", value: duration, icon: <Clock className="h-5 w-5" /> },
    ...(rating ? [{ label: "Rating", value: rating, icon: <Star className="h-5 w-5" /> }] : []),
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Route details</h2>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg border border-border bg-card text-center"
          >
            <div className="text-muted-foreground mb-2">{stat.icon}</div>
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-lg font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteStats;
