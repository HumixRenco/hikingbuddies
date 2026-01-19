import { memo, useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X, RotateCcw, Star, ChevronsUpDown } from "lucide-react";
import { MultiSelectChips } from "@/components/ui/multi-select-chips";
import { RangeSliderField } from "@/components/ui/range-slider-field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Difficulty, 
  TechnicalGrade, 
  Highlight, 
  RouteFeature, 
  Facility, 
  RouteType, 
  SurfaceType,
  difficultyLabels,
  highlightLabels,
  featureLabels,
  facilityLabels,
  routeTypeLabels,
  surfaceLabels,
} from "@/data/routesData";
import { RouteFilters } from "@/hooks/useRouteFilters";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface RouteFiltersPanelProps {
  filters: RouteFilters;
  updateFilter: <K extends keyof RouteFilters>(key: K, value: RouteFilters[K]) => void;
  resetFilters: () => void;
  activeFilterCount: number;
  onClose?: () => void;
}

const technicalGrades: TechnicalGrade[] = ["T1", "T2", "T3", "T4", "T5", "T6"];
const difficulties: Difficulty[] = ["easy", "moderate", "hard"];
const highlights: Highlight[] = ["lakes", "rivers", "waterfalls", "coastline", "historical-sites", "viewpoints", "forest", "meadow"];
const features: RouteFeature[] = ["via-ferrata", "scrambling", "canyoning", "ridge-walk", "mountain-pass", "avoid-main-roads"];
const facilities: Facility[] = ["restaurants", "cafes", "mountain-huts", "potable-water", "toilets", "parking", "public-transport"];
const routeTypes: RouteType[] = ["loop", "out-and-back", "point-to-point"];
const surfaces: SurfaceType[] = ["dirt", "rocky", "gravel", "paved", "mixed"];

const ALL_SECTIONS = [
  "difficulty",
  "metrics",
  "grade",
  "highlights",
  "features",
  "facilities",
  "route-type",
  "surface",
  "preferences",
  "rating",
];

export const RouteFiltersPanel = memo(function RouteFiltersPanel({
  filters,
  updateFilter,
  resetFilters,
  activeFilterCount,
  onClose,
}: RouteFiltersPanelProps) {
  const isMobile = useIsMobile();
  
  // On mobile: only first section open by default; on desktop: all open
  const defaultOpenSections = useMemo(() => {
    return isMobile ? ["difficulty"] : ALL_SECTIONS;
  }, [isMobile]);
  
  const [openSections, setOpenSections] = useState<string[]>(defaultOpenSections);
  
  const allExpanded = openSections.length === ALL_SECTIONS.length;
  
  const handleToggleAll = useCallback(() => {
    if (allExpanded) {
      setOpenSections([]);
    } else {
      setOpenSections([...ALL_SECTIONS]);
    }
  }, [allExpanded]);

  return (
    <div className="flex flex-col h-full w-full min-h-0">
      {/* Header - sticky within the panel */}
      <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-2 min-w-0">
          <h2 className="font-semibold text-lg">Filters</h2>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="rounded-full">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-muted-foreground hover:text-foreground gap-1"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          )}
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close filters">
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Expand/Collapse All Control */}
      <div className="flex-shrink-0 flex items-center justify-end px-4 py-2 border-b border-border bg-muted/30">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggleAll}
          className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
        >
          <ChevronsUpDown className="h-3.5 w-3.5" />
          {allExpanded ? "Collapse all" : "Expand all"}
        </Button>
      </div>

      {/* Filter Content - scrollable area */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="w-full"
        >
          {/* Difficulty */}
          <AccordionItem value="difficulty" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Difficulty
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={difficulties}
                selected={filters.difficulty}
                onChange={(value) => updateFilter("difficulty", value)}
                getLabel={(d) => difficultyLabels[d]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Metrics (Distance, Duration, Elevation) */}
          <AccordionItem value="metrics" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Distance, Duration & Elevation
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-4">
              <RangeSliderField
                label="Distance"
                unit="km"
                min={0}
                max={30}
                step={1}
                value={filters.distanceRange}
                onChange={(value) => updateFilter("distanceRange", value)}
              />
              <RangeSliderField
                label="Duration"
                unit="h"
                min={0}
                max={12}
                step={0.5}
                value={filters.durationRange}
                onChange={(value) => updateFilter("durationRange", value)}
              />
              <RangeSliderField
                label="Elevation Gain"
                unit="m"
                min={0}
                max={2500}
                step={50}
                value={filters.elevationRange}
                onChange={(value) => updateFilter("elevationRange", value)}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Technical Grade */}
          <AccordionItem value="grade" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Technical Grade
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={technicalGrades}
                selected={filters.technicalGrades}
                onChange={(value) => updateFilter("technicalGrades", value)}
                getLabel={(g) => g}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Highlights */}
          <AccordionItem value="highlights" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Highlights
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={highlights}
                selected={filters.highlights}
                onChange={(value) => updateFilter("highlights", value)}
                getLabel={(h) => highlightLabels[h]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Route Features */}
          <AccordionItem value="features" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Route Features
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={features}
                selected={filters.features}
                onChange={(value) => updateFilter("features", value)}
                getLabel={(f) => featureLabels[f]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Facilities */}
          <AccordionItem value="facilities" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Facilities
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={facilities}
                selected={filters.facilities}
                onChange={(value) => updateFilter("facilities", value)}
                getLabel={(f) => facilityLabels[f]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Route Type */}
          <AccordionItem value="route-type" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Route Type
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={routeTypes}
                selected={filters.routeTypes}
                onChange={(value) => updateFilter("routeTypes", value)}
                getLabel={(t) => routeTypeLabels[t]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Surface */}
          <AccordionItem value="surface" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Surface / Terrain
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <MultiSelectChips
                label=""
                options={surfaces}
                selected={filters.surfaces}
                onChange={(value) => updateFilter("surfaces", value)}
                getLabel={(s) => surfaceLabels[s]}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Preferences (Dog/Kid friendly toggles) */}
          <AccordionItem value="preferences" className="border-b border-border px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Preferences
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dog-friendly" className="text-sm font-medium cursor-pointer">
                  Dog-friendly
                </Label>
                <Switch
                  id="dog-friendly"
                  checked={filters.dogFriendly === true}
                  onCheckedChange={(checked) => 
                    updateFilter("dogFriendly", checked ? true : null)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="kid-friendly" className="text-sm font-medium cursor-pointer">
                  Kid-friendly
                </Label>
                <Switch
                  id="kid-friendly"
                  checked={filters.kidFriendly === true}
                  onCheckedChange={(checked) => 
                    updateFilter("kidFriendly", checked ? true : null)
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Min Rating */}
          <AccordionItem value="rating" className="border-b-0 px-4">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Minimum Rating
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Minimum rating">
                {[0, 3, 3.5, 4, 4.5].map((rating) => (
                  <Badge
                    key={rating}
                    variant={filters.minRating === rating ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-colors px-3 py-1 gap-1",
                      filters.minRating === rating 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "hover:bg-accent"
                    )}
                    onClick={() => updateFilter("minRating", rating)}
                    tabIndex={0}
                    role="radio"
                    aria-checked={filters.minRating === rating}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        updateFilter("minRating", rating);
                      }
                    }}
                  >
                    {rating === 0 ? (
                      "Any"
                    ) : (
                      <>
                        <Star className="h-3 w-3 fill-current" />
                        {rating}+
                      </>
                    )}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
});
