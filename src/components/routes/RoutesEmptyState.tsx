import { memo } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, RotateCcw } from "lucide-react";

interface RoutesEmptyStateProps {
  onReset: () => void;
}

export const RoutesEmptyState = memo(function RoutesEmptyState({ 
  onReset 
}: RoutesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <MapPin className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No routes match your filters</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        Try adjusting your filter criteria or reset all filters to see all available routes.
      </p>
      <Button onClick={onReset} variant="outline" className="gap-2">
        <RotateCcw className="h-4 w-4" />
        Reset Filters
      </Button>
    </div>
  );
});
