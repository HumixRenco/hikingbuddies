import * as React from "react";
import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";
import { routesData } from "@/data/routesData";
import { RouteCard } from "@/components/routes/RouteCard";

type Props = {
  value: CreateEventDraft;
  onChange: React.Dispatch<React.SetStateAction<CreateEventDraft>>;
};

export default function StepRouteSelection({ value, onChange }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">Pick a route for your group</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Quick win: pick something fun, not something painful. (We’ll add real route search here soon.)
      </p>

      {value.routeId && (
        <p className="mt-4 text-sm text-muted-foreground">
          Selected: <span className="font-semibold text-foreground">{value.routeId}</span>
        </p>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {routesData.slice(0, 6).map((route) => (
          <RouteCard
            key={route.id}
            route={route}
            onSelect={(routeId) => onChange((d) => ({ ...d, routeId }))}
          />
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        For now this is a small sample list — we’ll plug in the full route browser next.
      </p>
    </section>
  );
}
