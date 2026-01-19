import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

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
          className="fixed inset-0 z-50 bg-background overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          {/* Close button - fixed position */}
          <DialogPrimitive.Close className="fixed right-6 top-6 z-[60] rounded-full p-2 bg-background/90 backdrop-blur-sm border border-border shadow-md transition-all hover:bg-background hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* 3-column layout with page scrolling - responsive order */}
          <div className="min-h-full w-full grid grid-cols-1 lg:grid-cols-[280px_1fr_320px]">
            {/* Middle column - Main Content (1st on mobile, 2nd on desktop) */}
            <main className="p-6 lg:p-8 lg:border-x border-border order-1 lg:order-2">
              {mainContent}
            </main>

            {/* Left column - Photo Gallery (2nd on mobile, 1st on desktop) */}
            <aside className="bg-muted p-6 order-2 lg:order-1">
              {photoGallery}
            </aside>

            {/* Right column - Side Panel (3rd on mobile, 3rd on desktop) */}
            <aside className="p-6 bg-card order-3 lg:order-3">
              {sidePanel}
            </aside>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default DetailViewLayout;
