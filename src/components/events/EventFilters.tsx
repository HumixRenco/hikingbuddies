import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/i18n/LanguageContext";

interface EventFiltersProps {
  locationFilter: string;
  setLocationFilter: (value: string) => void;
  activityFilter: string;
  setActivityFilter: (value: string) => void;
}

const EventFilters = ({
  locationFilter,
  setLocationFilter,
  activityFilter,
  setActivityFilter,
}: EventFiltersProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-1 bg-muted/30 rounded-lg w-fit">
      <span className="px-3 py-2 text-sm font-medium text-foreground">
        {t("events.upcomingEvents")}
      </span>
      
      <div className="h-4 w-px bg-border" />
      
      <Select value={locationFilter} onValueChange={setLocationFilter}>
        <SelectTrigger className="w-[140px] border-0 bg-transparent shadow-none focus:ring-0">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="munich">{t("events.fromMunich")}</SelectItem>
          <SelectItem value="zurich">{t("events.fromZurich")}</SelectItem>
          <SelectItem value="geneva">{t("events.fromGeneva")}</SelectItem>
          <SelectItem value="vienna">{t("events.fromVienna")}</SelectItem>
          <SelectItem value="all-locations">{t("events.allLocations")}</SelectItem>
        </SelectContent>
      </Select>
      
      <div className="h-4 w-px bg-border" />
      
      <Select value={activityFilter} onValueChange={setActivityFilter}>
        <SelectTrigger className="w-[140px] border-0 bg-transparent shadow-none focus:ring-0">
          <SelectValue placeholder="Activity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("events.allActivities")}</SelectItem>
          <SelectItem value="hiking">{t("activity.hiking")}</SelectItem>
          <SelectItem value="cycling">{t("activity.cycling")}</SelectItem>
          <SelectItem value="ski-touring">{t("activity.skiTouring")}</SelectItem>
          <SelectItem value="bouldering">{t("activity.bouldering")}</SelectItem>
          <SelectItem value="social">{t("activity.social")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventFilters;