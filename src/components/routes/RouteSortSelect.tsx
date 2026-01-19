import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/hooks/useRouteFilters";
import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

interface RouteSortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; labelKey: TranslationKey }[] = [
  { value: "relevance", labelKey: "sort.relevance" },
  { value: "highest-rated", labelKey: "sort.highest-rated" },
  { value: "shortest", labelKey: "sort.shortest" },
  { value: "least-elevation", labelKey: "sort.least-elevation" },
  { value: "duration-asc", labelKey: "sort.duration-asc" },
  { value: "duration-desc", labelKey: "sort.duration-desc" },
];

export const RouteSortSelect = memo(function RouteSortSelect({ 
  value, 
  onChange 
}: RouteSortSelectProps) {
  const { t } = useLanguage();

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger 
        className="w-[200px]" 
        aria-label="Sort routes by"
      >
        <SelectValue placeholder={t("sort.placeholder")} />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {t(option.labelKey)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});