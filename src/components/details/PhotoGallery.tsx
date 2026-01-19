import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  mainImage: string;
  thumbnails: string[];
  onAddPhotos?: () => void;
  addPhotoLabel?: string;
}

const PhotoGallery = ({
  mainImage,
  thumbnails,
  onAddPhotos,
  addPhotoLabel = "Add route photos",
}: PhotoGalleryProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Main large image */}
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
        <img
          src={mainImage}
          alt="Main photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-3 gap-2">
        {thumbnails.slice(0, 6).map((thumb, index) => (
          <div
            key={index}
            className={cn(
              "overflow-hidden rounded-md",
              index < 2 ? "col-span-1 row-span-2 aspect-square" : "aspect-[4/3]"
            )}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Add photos button */}
      {onAddPhotos && (
        <button
          onClick={onAddPhotos}
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <Plus className="h-4 w-4" />
          {addPhotoLabel}
        </button>
      )}
    </div>
  );
};

export default PhotoGallery;
