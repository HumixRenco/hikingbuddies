import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X, RotateCcw, Star } from "lucide-react";
import { MultiSelectChips } from "@/components/ui/multi-select-chips";
import { RangeSliderField } from "@/components/ui/range-slider-field";
import { 
  Difficulty, 
  TechnicalGrade, 
  Highlight, 
  RouteFeature, 
  Facility, 
  RouteType, 
  SurfaceType,
} from "@/data/routesData";
import { RouteFilters } from "@/hooks/useRouteFilters";
import { useLanguage } from "@/i18n/LanguageContext";
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

export const RouteFiltersPanel = memo(function RouteFiltersPanel({
  filters,
  updateFilter,
  resetFilters,
  activeFilterCount,
  onClose,
}: RouteFiltersPanelProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <h2 className="font-semibold text-lg">{t("filters.title")}</h2>
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
              {t("filters.reset")}
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
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-6 min-w-0">
          {/* Difficulty */}
          <MultiSelectChips
            label={t("filters.difficulty")}
            options={difficulties}
            selected={filters.difficulty}
            onChange={(value) => updateFilter("difficulty", value)}
            getLabel={(d) => t(`difficulty.${d}` as any)}
          />

          <Separator />

          {/* Distance Slider */}
          <RangeSliderField
            label={t("filters.distance")}
            unit="km"
            min={0}
            max={30}
            step={1}
            value={filters.distanceRange}
            onChange={(value) => updateFilter("distanceRange", value)}
          />

          {/* Duration Slider */}
          <RangeSliderField
            label={t("filters.duration")}
            unit="h"
            min={0}
            max={12}
            step={0.5}
            value={filters.durationRange}
            onChange={(value) => updateFilter("durationRange", value)}
          />

          {/* Elevation Slider */}
          <RangeSliderField
            label={t("filters.elevationGain")}
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
            label={t("filters.technicalGrade")}
            options={technicalGrades}
            selected={filters.technicalGrades}
            onChange={(value) => updateFilter("technicalGrades", value)}
            getLabel={(g) => g}
          />

          <Separator />

          {/* Highlights */}
          <MultiSelectChips
            label={t("filters.highlights")}
            options={highlights}
            selected={filters.highlights}
            onChange={(value) => updateFilter("highlights", value)}
            getLabel={(h) => t(`highlight.${h}` as any)}
          />

          <Separator />

          {/* Route Features */}
          <MultiSelectChips
            label={t("filters.routeFeatures")}
            options={features}
            selected={filters.features}
            onChange={(value) => updateFilter("features", value)}
            getLabel={(f) => t(`feature.${f}` as any)}
          />

          <Separator />

          {/* Facilities */}
          <MultiSelectChips
            label={t("filters.facilities")}
            options={facilities}
            selected={filters.facilities}
            onChange={(value) => updateFilter("facilities", value)}
            getLabel={(f) => t(`facility.${f}` as any)}
          />

          <Separator />

          {/* Route Type */}
          <MultiSelectChips
            label={t("filters.routeType")}
            options={routeTypes}
            selected={filters.routeTypes}
            onChange={(value) => updateFilter("routeTypes", value)}
            getLabel={(rt) => t(`routeType.${rt}` as any)}
          />

          <Separator />

          {/* Surface */}
          <MultiSelectChips
            label={t("filters.surface")}
            options={surfaces}
            selected={filters.surfaces}
            onChange={(value) => updateFilter("surfaces", value)}
            getLabel={(s) => t(`surface.${s}` as any)}
          />

          <Separator />

          {/* Toggles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dog-friendly" className="text-sm font-medium cursor-pointer">
                {t("filters.dogFriendly")}
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
                {t("filters.kidFriendly")}
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
            <Label className="text-sm font-medium">{t("filters.minRating")}</Label>
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
                    t("filters.any")
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
      </div>
    </div>
  );
});