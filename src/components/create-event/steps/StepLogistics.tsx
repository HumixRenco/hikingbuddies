import * as React from "react";
import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  value: CreateEventDraft;
  onChange: React.Dispatch<React.SetStateAction<CreateEventDraft>>;
};

export default function StepLogistics({ value, onChange }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">Logistics</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Set date/time and where people should meet.
      </p>

      <div className="mt-6 grid gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="create-event-date">Date label</Label>
            <Input
              id="create-event-date"
              value={value.dateLabel}
              onChange={(e) => onChange((d) => ({ ...d, dateLabel: e.target.value }))}
              placeholder="e.g. Sat, 10 Feb"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="create-event-time">Start time</Label>
            <Input
              id="create-event-time"
              value={value.time}
              onChange={(e) => onChange((d) => ({ ...d, time: e.target.value }))}
              placeholder="e.g. 06:30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="create-event-duration">Duration</Label>
            <Input
              id="create-event-duration"
              value={value.duration}
              onChange={(e) => onChange((d) => ({ ...d, duration: e.target.value }))}
              placeholder="e.g. 6h"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="create-event-meet">Departure / meeting place</Label>
            <Input
              id="create-event-meet"
              value={value.departurePlace}
              onChange={(e) => onChange((d) => ({ ...d, departurePlace: e.target.value }))}
              placeholder="e.g. München Hbf (main entrance)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
