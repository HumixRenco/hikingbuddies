import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import StepActivityType from "@/components/create-event/steps/StepActivityType";
import StepRouteSelection from "@/components/create-event/steps/StepRouteSelection";
import StepDateTime from "@/components/create-event/steps/StepDateTime";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const steps = [
  { key: "activity", label: "Activity" },
  { key: "route", label: "Route" },
  { key: "datetime", label: "Date & time" },
] as const;

const STORAGE_KEY = "create-event-draft";

export type ActivityType =
  | "hiking"
  | "cycling"
  | "climbing"
  | "via-ferrata"
  | "bouldering"
  | "skiing"
  | "social";

const routeRequired: ActivityType[] = ["hiking", "cycling", "climbing", "via-ferrata"];

type Screen = "activity" | "route" | "datetime" | "details";

function requiresRoute(activityType: ActivityType | null) {
  return activityType ? routeRequired.includes(activityType) : true;
}

function getFlowScreens(activityType: ActivityType | null): Screen[] {
  return requiresRoute(activityType)
    ? ["activity", "route", "datetime", "details"]
    : ["activity", "datetime", "details"];
}

export type CreateEventDraft = {
  activityType: ActivityType | null;
  routeId: string | null;
  dateISO: string | null;
  time: string;
  title: string;
  participantsCount: number;
};

const initialDraft: CreateEventDraft = {
  activityType: null,
  routeId: null,
  dateISO: null,
  time: "",
  title: "",
  participantsCount: 8,
};

export default function CreateEventDialog({ open, onOpenChange }: Props) {
  const [screen, setScreen] = React.useState<Screen>("activity");
  const [draft, setDraft] = React.useState<CreateEventDraft>(initialDraft);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const queryClient = useQueryClient();

  const isDirty = React.useMemo(() => {
    return JSON.stringify(draft) !== JSON.stringify(initialDraft);
  }, [draft]);

  const persist = React.useCallback((next: { screen: Screen; draft: CreateEventDraft }) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const clearPersisted = React.useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const createEventMutation = useMutation({
    mutationFn: async () => {
      if (!draft.activityType) throw new Error("Please choose an activity.");
      if (requiresRoute(draft.activityType) && !draft.routeId) throw new Error("Please pick a route.");
      if (!draft.dateISO || !draft.time) throw new Error("Please pick a date and time.");
      if (!draft.title.trim()) throw new Error("Please give your event a name.");

      const date = new Date(draft.dateISO);
      const date_label = Number.isNaN(date.getTime()) ? "" : format(date, "EEE, d MMM");

      const cover_image_key =
        draft.activityType === "cycling"
          ? "event-trail-run"
          : draft.activityType === "social"
            ? "event-sunrise"
            : draft.activityType === "bouldering"
              ? "event-summit"
              : draft.activityType === "skiing"
                ? "event-summit"
                : "event-sunrise";

      // Map wizard activity types to the app's event activity types.
      const activity_type =
        draft.activityType === "skiing"
          ? "ski-touring"
          : draft.activityType === "via-ferrata" || draft.activityType === "climbing"
            ? "hiking"
            : draft.activityType;

      const payload = {
        created_by: null,
        title: draft.title.trim(),
        date_label,
        time: draft.time,
        duration: "TBD",
        description: null,
        cover_image_key,
        organizer_name: "Community member",
        organizer_avatar_url: null,
        location_key: "munich",
        departure_place: "TBD",
        transport_mode: "none",
        activity_type,
        difficulty: null,
        distance: "TBD",
        elevation: "0",
        total_height: "0",
        participants_count: 0,
        available_spots: draft.participantsCount,
        waitlist_count: 0,
        participant_avatars: [] as string[],
      };

      const { error } = await supabase.from("events").insert(payload);
      if (error) throw error;
    },
    onSuccess: async () => {
      toast({ title: "Event created", description: "Nice — it’s live in the events list." });
      await queryClient.invalidateQueries({ queryKey: ["events"] });
      clearPersisted();
      setDraft(initialDraft);
      setScreen("activity");
      onOpenChange(false);
    },
    onError: (err: any) => {
      toast({
        title: "Couldn’t create event",
        description: err?.message ?? "Something went wrong.",
        variant: "destructive",
      });
    },
  });

  const attemptClose = React.useCallback(() => {
    if (isDirty) {
      setConfirmOpen(true);
      return;
    }
    onOpenChange(false);
  }, [isDirty, onOpenChange]);

  React.useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { screen?: Screen; draft?: CreateEventDraft };
      if (parsed?.draft) setDraft({ ...initialDraft, ...parsed.draft });
      if (parsed?.screen) setScreen(parsed.screen);
    } catch {
      // ignore
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    persist({ screen, draft });
  }, [draft, open, persist, screen]);

  // Keep the current screen valid when activity type changes (e.g. route becomes irrelevant)
  React.useEffect(() => {
    if (!open) return;
    const flow = getFlowScreens(draft.activityType);
    if (!flow.includes(screen)) {
      setScreen(flow[flow.length - 1] ?? "activity");
    }
  }, [draft.activityType, open, screen]);

  const flowScreens = React.useMemo(() => getFlowScreens(draft.activityType), [draft.activityType]);
  const flowIndex = React.useMemo(() => Math.max(0, flowScreens.indexOf(screen)), [flowScreens, screen]);
  const progress = ((flowIndex + 1) / flowScreens.length) * 100;

  const canGoNext = React.useMemo(() => {
    if (screen === "activity") return !!draft.activityType;
    if (screen === "route") return !!draft.routeId;
    if (screen === "datetime") return !!draft.dateISO && !!draft.time;
    return false;
  }, [draft.activityType, draft.dateISO, draft.routeId, draft.time, screen]);

  const canCreate = React.useMemo(() => {
    return !!draft.title.trim() && draft.participantsCount >= 2;
  }, [draft.participantsCount, draft.title]);

  const canGoBack = flowIndex > 0;

  const goBack = React.useCallback(() => {
    const flow = getFlowScreens(draft.activityType);
    const idx = Math.max(0, flow.indexOf(screen));
    const prev = flow[idx - 1];
    if (prev) setScreen(prev);
  }, [draft.activityType, screen]);

  const goNext = React.useCallback(() => {
    if (screen === "activity") {
      setScreen(requiresRoute(draft.activityType) ? "route" : "datetime");
      return;
    }
    if (screen === "route") {
      setScreen("datetime");
      return;
    }
    if (screen === "datetime") {
      setScreen("details");
    }
  }, [draft.activityType, screen]);

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen) onOpenChange(true);
        else attemptClose();
      }}
    >
      <DialogContent
        className={cn(
          "fixed inset-0 z-50 grid h-[100dvh] w-[100vw] max-w-none translate-x-0 translate-y-0 rounded-none border bg-background p-0",
          "[&>.absolute.right-4.top-4]:hidden",
        )}
      >
        <div className="flex h-full min-h-0 flex-col">
          <header className="border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="container flex items-center justify-between py-4">
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-foreground">Create event</h2>
                <p className="text-sm text-muted-foreground">
                  Step {flowIndex + 1}/{flowScreens.length} — let’s get your crew outside.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  {flowScreens.map((key) => {
                    const label =
                      key === "activity"
                        ? "Activity"
                        : key === "route"
                          ? "Route"
                          : key === "datetime"
                            ? "Date & time"
                            : "Details";
                    const idx = flowScreens.indexOf(key);
                    return (
                    <div
                      key={key}
                      className={cn(
                        "text-sm font-medium",
                        idx === flowIndex ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {label}
                    </div>
                  );
                  })}
                </div>

                <Button variant="ghost" size="icon" onClick={attemptClose} aria-label="Close create event">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="container pb-4">
              <div className="flex items-center gap-4">
                <Progress value={progress} className="h-2 flex-1" />
                <div className="flex items-center gap-1" aria-label="Step progress">
                  {flowScreens.map((_, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "h-2 w-2 rounded-full",
                        idx <= flowIndex ? "bg-primary" : "bg-muted",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 min-h-0 overflow-y-auto">
            <div className="container py-8">
              {screen === "activity" && <StepActivityType value={draft} onChange={setDraft} />}
              {screen === "route" && <StepRouteSelection value={draft} onChange={setDraft} />}
              {screen === "datetime" && <StepDateTime value={draft} onChange={setDraft} />}
              {screen === "details" && (
                <div className="mx-auto w-full max-w-2xl">
                  <h3 className="text-lg font-semibold text-foreground">Event details</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Give it a name and set a comfy group size — nobody likes a surprise crowd.
                  </p>

                  <div className="mt-6 grid gap-5">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium text-foreground" htmlFor="create-event-title">
                        Event name
                      </label>
                      <input
                        id="create-event-title"
                        className={cn(
                          "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        )}
                        value={draft.title}
                        onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
                        placeholder="e.g. Sunday sunrise crew"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label className="text-sm font-medium text-foreground" htmlFor="create-event-participants">
                        Number of participants
                      </label>
                      <input
                        id="create-event-participants"
                        type="number"
                        min={2}
                        max={50}
                        className={cn(
                          "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        )}
                        value={draft.participantsCount}
                        onChange={(e) =>
                          setDraft((d) => ({ ...d, participantsCount: Math.max(2, Number(e.target.value || 0)) }))
                        }
                      />
                      <p className="text-xs text-muted-foreground">
                        Keep it realistic — you can always open more spots later.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>

          <footer className="border-t border-border bg-background">
            <div className="container py-4 flex items-center justify-between gap-3">
              <div>
                {canGoBack && (
                  <Button variant="outline" onClick={goBack}>
                    Back
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {screen !== "details" ? (
                  <Button variant="cta" onClick={goNext} disabled={!canGoNext}>
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="cta"
                    onClick={() => createEventMutation.mutate()}
                    disabled={!canCreate || createEventMutation.isPending}
                  >
                    {createEventMutation.isPending ? "Creating…" : "Create event"}
                  </Button>
                )}
              </div>
            </div>
          </footer>
        </div>

        <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>You have unsaved changes. What would you like to do?</AlertDialogTitle>
              <AlertDialogDescription>
                If you close now, you can either keep editing or discard this draft.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Continue editing</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  clearPersisted();
                  setDraft(initialDraft);
                  setScreen("activity");
                  setConfirmOpen(false);
                  onOpenChange(false);
                }}
              >
                Discard
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DialogContent>
    </Dialog>
  );
}
