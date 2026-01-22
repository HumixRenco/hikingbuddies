import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";

type Props = {
  value: CreateEventDraft;
};

export default function StepReview({ value }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">Review</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Double-check the details before publishing.
      </p>

      <div className="mt-6 rounded-lg border border-border bg-card p-5">
        <dl className="grid gap-4">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Title</dt>
            <dd className="mt-1 text-base font-semibold text-foreground">{value.title || "—"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Description</dt>
            <dd className="mt-1 text-sm text-foreground whitespace-pre-wrap">{value.description || "—"}</dd>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Activity</dt>
              <dd className="mt-1 text-sm text-foreground">{value.activityType || "—"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Location</dt>
              <dd className="mt-1 text-sm text-foreground">{value.locationKey || "—"}</dd>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">When</dt>
              <dd className="mt-1 text-sm text-foreground">
                {value.dateLabel ? value.dateLabel : "—"}{value.time ? ` · ${value.time}` : ""}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Duration</dt>
              <dd className="mt-1 text-sm text-foreground">{value.duration || "—"}</dd>
            </div>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Meeting place</dt>
            <dd className="mt-1 text-sm text-foreground">{value.departurePlace || "—"}</dd>
          </div>
        </dl>

        <p className="mt-5 text-xs text-muted-foreground">
          Publishing is disabled for now (UI only).
        </p>
      </div>
    </section>
  );
}
