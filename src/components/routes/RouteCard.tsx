import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { 
  Route, 
  Highlight, 
  RouteFeature, 
  Facility 
} from "@/data/routesData";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface RouteCardProps {
  route: Route;
  onSelect: (routeId: string) => void;
}

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-yellow-100 text-yellow-800",
  hard: "bg-red-100 text-red-800",
};

export const RouteCard = memo(function RouteCard({ route, onSelect }: RouteCardProps) {
  const { t } = useLanguage();

  // Get translated labels for chips
  const getChipLabels = () => {
    const labels: string[] = [];
    
    route.highlights.slice(0, 2).forEach((h: Highlight) => {
      labels.push(t(`highlight.${h}` as any));
    });
    route.features.slice(0, 1).forEach((f: RouteFeature) => {
      labels.push(t(`feature.${f}` as any));
    });
    route.facilities.slice(0, 1).forEach((f: Facility) => {
      labels.push(t(`facility.${f}` as any));
    });
    
    return labels.slice(0, 4);
  };

  const allChips = getChipLabels();

  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={route.image}
          alt={route.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={cn("font-medium", difficultyColors[route.difficulty])}>
            {t(`difficulty.${route.difficulty}` as any)}
          </Badge>
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {route.technicalGrade}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Title & Region */}
        <div>
          <h3 className="font-semibold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {route.name}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <MapPin className="h-3.5 w-3.5" />
            <span className="line-clamp-1">{route.region}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="font-medium text-foreground">{route.distance}</span>
            <span>km</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground">{route.duration}</span>
            <span>h</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground">{route.elevationGain}</span>
            <span>m</span>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5">
          {allChips.map((chip, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs font-normal px-2 py-0.5"
            >
              {chip}
            </Badge>
          ))}
        </div>

        {/* Rating & Select Button */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold">{route.rating.toFixed(1)}</span>
            <span className="text-muted-foreground text-sm">
              ({route.reviewCount})
            </span>
          </div>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-primary hover:text-primary hover:bg-primary/10 gap-1"
            onClick={() => onSelect(route.id)}
            aria-label={`Select ${route.name}`}
          >
            {t("routeCard.select")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});