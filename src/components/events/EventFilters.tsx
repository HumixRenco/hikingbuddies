import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-1 bg-muted/30 rounded-lg w-fit">
      <span className="px-3 py-2 text-sm font-medium text-foreground">
        Upcoming events
      </span>
      
      <div className="h-4 w-px bg-border" />
      
      <Select value={locationFilter} onValueChange={setLocationFilter}>
        <SelectTrigger className="w-[140px] border-0 bg-transparent shadow-none focus:ring-0">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="munich">From Munich</SelectItem>
          <SelectItem value="zurich">From Zurich</SelectItem>
          <SelectItem value="geneva">From Geneva</SelectItem>
          <SelectItem value="vienna">From Vienna</SelectItem>
          <SelectItem value="all-locations">All locations</SelectItem>
        </SelectContent>
      </Select>
      
      <div className="h-4 w-px bg-border" />
      
      <Select value={activityFilter} onValueChange={setActivityFilter}>
        <SelectTrigger className="w-[140px] border-0 bg-transparent shadow-none focus:ring-0">
          <SelectValue placeholder="Activity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All activities</SelectItem>
          <SelectItem value="hiking">Hiking</SelectItem>
          <SelectItem value="cycling">Cycling</SelectItem>
          <SelectItem value="ski-touring">Ski Touring</SelectItem>
          <SelectItem value="bouldering">Bouldering</SelectItem>
          <SelectItem value="social">Social</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventFilters;
