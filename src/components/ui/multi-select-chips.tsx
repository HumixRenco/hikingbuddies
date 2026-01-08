import { useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
  getLabel,
}: MultiSelectChipsProps<T>) {
  const toggleOption = useCallback(
    (option: T) => {
      if (selected.includes(option)) {
        onChange(selected.filter((s) => s !== option));
      } else {
        onChange([...selected, option]);
      }
    },
    [selected, onChange]
  );

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => (
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

export { MultiSelectChips };
