import * as React from "react";
import type { CreateEventDraft } from "@/components/create-event/CreateEventDialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: CreateEventDraft;
  onChange: React.Dispatch<React.SetStateAction<CreateEventDraft>>;
};

export default function StepBasics({ value, onChange }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-foreground">Basics</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Give your event a clear title and help people understand what to expect.
      </p>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="create-event-title">Title</Label>
          <Input
            id="create-event-title"
            value={value.title}
            onChange={(e) => onChange((d) => ({ ...d, title: e.target.value }))}
            placeholder="e.g. Sunrise hike to Tegernsee"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="create-event-description">Description</Label>
          <Textarea
            id="create-event-description"
            value={value.description}
            onChange={(e) => onChange((d) => ({ ...d, description: e.target.value }))}
            placeholder="Tell people what the plan is, what to bring, and who this is for…"
            className="min-h-32"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label>Activity</Label>
            <Select
              value={value.activityType}
              onValueChange={(v) => onChange((d) => ({ ...d, activityType: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hiking">Hiking</SelectItem>
                <SelectItem value="cycling">Cycling</SelectItem>
                <SelectItem value="bouldering">Bouldering</SelectItem>
                <SelectItem value="ski-touring">Ski touring</SelectItem>
                <SelectItem value="social">Social</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Location</Label>
            <Select
              value={value.locationKey}
              onValueChange={(v) => onChange((d) => ({ ...d, locationKey: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="munich">Munich</SelectItem>
                <SelectItem value="zurich">Zurich</SelectItem>
                <SelectItem value="geneva">Geneva</SelectItem>
                <SelectItem value="vienna">Vienna</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
