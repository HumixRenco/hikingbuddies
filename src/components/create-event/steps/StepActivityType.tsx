import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faMountain,
  faPersonHiking,
  faPersonSkiing,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

type Props = {
  value: CreateEventDraft;
  onChange: React.Dispatch<React.SetStateAction<CreateEventDraft>>;
};

const activities = [
  { value: "hiking", label: "Hiking", icon: faPersonHiking },
  { value: "cycling", label: "Cycling", icon: faBicycle },
  { value: "climbing", label: "Climbing", icon: faMountain },
  { value: "skiing", label: "Skiing", icon: faPersonSkiing },
  { value: "bouldering", label: "Bouldering", icon: faMountain },
  { value: "social", label: "Social", icon: faUsers },
] as const;

export default function StepActivityType({ value, onChange }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">Choose an activity</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Pick the vibe first — we’ll guide the rest. What are you feeling?
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {activities.map((a) => {
          const selected = value.activityType === a.value;
          return (
            <button
              key={a.value}
              type="button"
              onClick={() =>
                onChange((d) => ({
                  ...d,
                  activityType: a.value,
                  // If the user switches activity, drop route selection to avoid mismatches.
                  routeId: null,
                }))
              }
              className={cn(
                "group rounded-xl border bg-card p-4 text-left transition-all",
                "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                selected ? "border-primary shadow-sm" : "border-border",
              )}
              aria-pressed={selected}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-lg border",
                    selected ? "border-primary bg-primary/10" : "border-border bg-muted",
                  )}
                >
                  <FontAwesomeIcon icon={a.icon} className={cn("h-5 w-5", selected ? "text-primary" : "text-muted-foreground")} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground">{a.label}</div>
                  <div className="text-xs text-muted-foreground">Tap to select</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Tip: Hiking, Cycling, and Climbing will ask you to pick a route. The rest jump straight to date & time.
      </p>
    </section>
  );
}
