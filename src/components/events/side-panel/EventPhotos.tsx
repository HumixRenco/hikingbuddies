interface EventPhotosProps {
  photos: string[];
}

export function EventPhotos({ photos }: EventPhotosProps) {
  return (
    <div className="flex overflow-hidden gap-2 items-center self-start mt-3">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          className={`object-contain shrink-0 self-stretch my-auto rounded-md ${
            index === 0 ? 'aspect-[1.04] w-[70px]' :
            index === 1 ? 'aspect-[1.48] w-[99px]' :
            index === 2 ? 'aspect-[0.78] w-[52px]' :
            'aspect-[1.04] w-[70px]'
          }`}
          alt={`Event photo ${index + 1}`}
        />
      ))}
    </div>
  );
}
