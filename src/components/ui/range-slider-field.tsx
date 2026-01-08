import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface RangeSliderFieldProps {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

function RangeSliderField({
  label,
  unit,
  min,
  max,
  step,
  value,
  onChange,
}: RangeSliderFieldProps) {
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

export { RangeSliderField };
