import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/hooks/useRouteFilters";

interface RouteSortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevance" },
  { value: "highest-rated", label: "Highest Rated" },
  { value: "shortest", label: "Shortest Distance" },
  { value: "least-elevation", label: "Least Elevation" },
  { value: "duration-asc", label: "Duration (Low to High)" },
  { value: "duration-desc", label: "Duration (High to Low)" },
];

export const RouteSortSelect = memo(function RouteSortSelect({ 
  value, 
  onChange 
}: RouteSortSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger 
        className="w-[200px]" 
        aria-label="Sort routes by"
      >
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
