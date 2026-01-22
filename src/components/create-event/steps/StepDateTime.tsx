import * as React from "react";
import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

type Props = {
  value: CreateEventDraft;
  onChange: React.Dispatch<React.SetStateAction<CreateEventDraft>>;
};

export default function StepDateTime({ value, onChange }: Props) {
  const selected = React.useMemo(() => {
    if (!value.dateISO) return undefined;
    const d = new Date(value.dateISO);
    return Number.isNaN(d.getTime()) ? undefined : d;
  }, [value.dateISO]);

  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">When are you heading out?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Pick a day, choose a time, and you’re basically doing future-you a favor.
      </p>

      <div className="mt-6 grid gap-6">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-foreground">Date</div>
              <div className="text-sm text-muted-foreground">
                {selected ? format(selected, "PPP") : "Pick a date on the calendar"}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Calendar
              mode="single"
              selected={selected}
              onSelect={(d) => onChange((prev) => ({ ...prev, dateISO: d ? d.toISOString() : null }))}
              className={cn("p-3 pointer-events-auto")}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="create-event-time">Start time</Label>
          <Input
            id="create-event-time"
            type="time"
            value={value.time}
            onChange={(e) => onChange((d) => ({ ...d, time: e.target.value }))}
          />
          <p className="text-xs text-muted-foreground">Don’t stress it — you can tweak it later.</p>
        </div>
      </div>
    </section>
  );
}
