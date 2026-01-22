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

type ActivityType = "hiking" | "cycling" | "climbing" | "skiing" | "bouldering" | "social";
const routeRequired: ActivityType[] = ["hiking", "cycling", "climbing"];

export type CreateEventDraft = {
  activityType: ActivityType | null;
  routeId: string | null;
  dateISO: string | null;
  time: string;
};

const initialDraft: CreateEventDraft = {
  activityType: null,
  routeId: null,
  dateISO: null,
  time: "",
};

export default function CreateEventDialog({ open, onOpenChange }: Props) {
  const [step, setStep] = React.useState(0);
  const [draft, setDraft] = React.useState<CreateEventDraft>(initialDraft);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const isDirty = React.useMemo(() => {
    return JSON.stringify(draft) !== JSON.stringify(initialDraft);
  }, [draft]);

  const persist = React.useCallback((next: { step: number; draft: CreateEventDraft }) => {
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
      const parsed = JSON.parse(raw) as { step?: number; draft?: CreateEventDraft };
      if (parsed?.draft) setDraft({ ...initialDraft, ...parsed.draft });
      if (typeof parsed?.step === "number") setStep(Math.min(steps.length - 1, Math.max(0, parsed.step)));
    } catch {
      // ignore
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    persist({ step, draft });
  }, [draft, open, persist, step]);

  const progress = ((step + 1) / steps.length) * 100;

  const goBack = React.useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const goNext = React.useCallback(() => {
    setStep((s) => {
      if (s === 0) {
        const activity = draft.activityType;
        if (!activity) return s;
        return routeRequired.includes(activity) ? 1 : 2;
      }
      return Math.min(steps.length - 1, s + 1);
    });
  }, [draft.activityType]);

  const canGoNext = React.useMemo(() => {
    if (step === 0) return !!draft.activityType;
    return step < steps.length - 1;
  }, [draft.activityType, step]);

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
                  Step {step + 1}/{steps.length} — let’s get your crew outside.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  {steps.map((s, idx) => (
                    <div
                      key={s.key}
                      className={cn(
                        "text-sm font-medium",
                        idx === step ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.label}
                    </div>
                  ))}
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
                  {steps.map((_, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "h-2 w-2 rounded-full",
                        idx <= step ? "bg-primary" : "bg-muted",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 min-h-0 overflow-y-auto">
            <div className="container py-8">
              {step === 0 && <StepActivityType value={draft} onChange={setDraft} />}
              {step === 1 && <StepRouteSelection />}
              {step === 2 && <StepDateTime value={draft} onChange={setDraft} />}
            </div>
          </main>

          <footer className="border-t border-border bg-background">
            <div className="container py-4 flex items-center justify-between gap-3">
              <div>
                {step > 0 && (
                  <Button variant="outline" onClick={goBack}>
                    Back
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {canGoNext ? (
                  <Button variant="cta" onClick={goNext} disabled={!canGoNext}>
                    Next
                  </Button>
                ) : (
                  <Button variant="cta" disabled>
                    Publish
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
                  setStep(0);
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
