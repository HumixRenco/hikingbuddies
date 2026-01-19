import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailViewLayoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photoGallery: React.ReactNode;
  mainContent: React.ReactNode;
  sidePanel: React.ReactNode;
}

const DetailViewLayout = ({
  open,
  onOpenChange,
  photoGallery,
  mainContent,
  sidePanel,
}: DetailViewLayoutProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 bg-background overflow-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          {/* Close button */}
          <DialogPrimitive.Close className="absolute right-6 top-6 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm border border-border opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* 3-column layout */}
          <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-0">
            {/* Left column - Photo Gallery */}
            <aside className="bg-muted p-6 overflow-y-auto">
              {photoGallery}
            </aside>

            {/* Middle column - Main Content */}
            <main className="p-8 border-x border-border overflow-y-auto">
              {mainContent}
            </main>

            {/* Right column - Side Panel */}
            <aside className="p-6 bg-card overflow-y-auto">
              {sidePanel}
            </aside>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default DetailViewLayout;
