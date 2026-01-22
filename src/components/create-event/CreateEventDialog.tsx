import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import StepBasics from "@/components/create-event/steps/StepBasics";
import StepLogistics from "@/components/create-event/steps/StepLogistics";
import StepReview from "@/components/create-event/steps/StepReview";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const steps = [
  { key: "basics", label: "Basics" },
  { key: "logistics", label: "Logistics" },
  { key: "review", label: "Review" },
] as const;

export type CreateEventDraft = {
  title: string;
  description: string;
  activityType: string;
  locationKey: string;
  dateLabel: string;
  time: string;
  duration: string;
  departurePlace: string;
};

const initialDraft: CreateEventDraft = {
  title: "",
  description: "",
  activityType: "hiking",
  locationKey: "munich",
  dateLabel: "",
  time: "",
  duration: "",
  departurePlace: "",
};

export default function CreateEventDialog({ open, onOpenChange }: Props) {
  const [step, setStep] = React.useState(0);
  const [draft, setDraft] = React.useState<CreateEventDraft>(initialDraft);

  React.useEffect(() => {
    if (!open) {
      setStep(0);
      setDraft(initialDraft);
    }
  }, [open]);

  const progress = ((step + 1) / steps.length) * 100;
  const canGoBack = step > 0;
  const canGoNext = step < steps.length - 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "fixed inset-0 z-50 grid h-[100dvh] w-[100vw] max-w-none translate-x-0 translate-y-0 rounded-none border bg-background p-0",
        )}
      >
        <div className="flex h-full min-h-0 flex-col">
          <header className="border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="container flex items-center justify-between py-4">
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-foreground">Create event</h2>
                <p className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p>
              </div>
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
            </div>
            <div className="container pb-4">
              <Progress value={progress} className="h-2" />
            </div>
          </header>

          <main className="flex-1 min-h-0 overflow-y-auto">
            <div className="container py-8">
              {step === 0 && <StepBasics value={draft} onChange={setDraft} />}
              {step === 1 && <StepLogistics value={draft} onChange={setDraft} />}
              {step === 2 && <StepReview value={draft} />}
            </div>
          </main>

          <footer className="border-t border-border bg-background">
            <div className="container py-4 flex items-center justify-between gap-3">
              <Button
                variant="outline"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={!canGoBack}
              >
                Back
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                {canGoNext ? (
                  <Button variant="cta" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
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
      </DialogContent>
    </Dialog>
  );
}
