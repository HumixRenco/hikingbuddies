import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { X, RotateCcw, Star } from "lucide-react";
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

interface MultiSelectChipsProps<T extends string> {
  label: string;
  options: T[];
  selected: T[];
  onChange: (value: T[]) => void;
  getLabel: (value: T) => string;
}

function MultiSelectChips<T extends string>({ 
  label, 
  options, 
  selected, 
  onChange, 
  getLabel 
}: MultiSelectChipsProps<T>) {
  const toggleOption = useCallback((option: T) => {
    if (selected.includes(option)) {
      onChange(selected.filter(s => s !== option));
    } else {
      onChange([...selected, option]);
    }
  }, [selected, onChange]);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map(option => (
          <Badge
            key={option}
            variant={selected.includes(option) ? "default" : "outline"}
            className={cn(
              "cursor-pointer transition-colors px-3 py-1",
              selected.includes(option) 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "hover:bg-accent"
            )}
            onClick={() => toggleOption(option)}
            tabIndex={0}
            role="checkbox"
            aria-checked={selected.includes(option)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleOption(option);
              }
            }}
          >
            {getLabel(option)}
          </Badge>
        ))}
      </div>
    </div>
  );
}

interface RangeSliderProps {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

function RangeSlider({ label, unit, min, max, step, value, onChange }: RangeSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-sm text-muted-foreground">
          {value[0]} – {value[1]} {unit}
        </span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(v) => onChange(v as [number, number])}
        className="w-full"
        aria-label={`${label} range`}
      />
    </div>
  );
}

export const RouteFiltersPanel = memo(function RouteFiltersPanel({
  filters,
  updateFilter,
  resetFilters,
  activeFilterCount,
  onClose,
}: RouteFiltersPanelProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">Filters</h2>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="rounded-full">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
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

      {/* Filter Content */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Difficulty */}
          <MultiSelectChips
            label="Difficulty"
            options={difficulties}
            selected={filters.difficulty}
            onChange={(value) => updateFilter("difficulty", value)}
            getLabel={(d) => difficultyLabels[d]}
          />

          <Separator />

          {/* Distance Slider */}
          <RangeSlider
            label="Distance"
            unit="km"
            min={0}
            max={30}
            step={1}
            value={filters.distanceRange}
            onChange={(value) => updateFilter("distanceRange", value)}
          />

          {/* Duration Slider */}
          <RangeSlider
            label="Duration"
            unit="h"
            min={0}
            max={12}
            step={0.5}
            value={filters.durationRange}
            onChange={(value) => updateFilter("durationRange", value)}
          />

          {/* Elevation Slider */}
          <RangeSlider
            label="Elevation Gain"
            unit="m"
            min={0}
            max={2500}
            step={50}
            value={filters.elevationRange}
            onChange={(value) => updateFilter("elevationRange", value)}
          />

          <Separator />

          {/* Technical Grade */}
          <MultiSelectChips
            label="Technical Grade"
            options={technicalGrades}
            selected={filters.technicalGrades}
            onChange={(value) => updateFilter("technicalGrades", value)}
            getLabel={(g) => g}
          />

          <Separator />

          {/* Highlights */}
          <MultiSelectChips
            label="Highlights"
            options={highlights}
            selected={filters.highlights}
            onChange={(value) => updateFilter("highlights", value)}
            getLabel={(h) => highlightLabels[h]}
          />

          <Separator />

          {/* Route Features */}
          <MultiSelectChips
            label="Route Features"
            options={features}
            selected={filters.features}
            onChange={(value) => updateFilter("features", value)}
            getLabel={(f) => featureLabels[f]}
          />

          <Separator />

          {/* Facilities */}
          <MultiSelectChips
            label="Facilities"
            options={facilities}
            selected={filters.facilities}
            onChange={(value) => updateFilter("facilities", value)}
            getLabel={(f) => facilityLabels[f]}
          />

          <Separator />

          {/* Route Type */}
          <MultiSelectChips
            label="Route Type"
            options={routeTypes}
            selected={filters.routeTypes}
            onChange={(value) => updateFilter("routeTypes", value)}
            getLabel={(t) => routeTypeLabels[t]}
          />

          <Separator />

          {/* Surface */}
          <MultiSelectChips
            label="Surface / Terrain"
            options={surfaces}
            selected={filters.surfaces}
            onChange={(value) => updateFilter("surfaces", value)}
            getLabel={(s) => surfaceLabels[s]}
          />

          <Separator />

          {/* Toggles */}
          <div className="space-y-4">
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
          </div>

          <Separator />

          {/* Min Rating */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Minimum Rating</Label>
            <div className="flex gap-2" role="group" aria-label="Minimum rating">
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
          </div>
        </div>
      </ScrollArea>
    </div>
  );
});
