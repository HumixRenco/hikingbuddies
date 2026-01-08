import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface StackedAvatarsProps {
  avatars: string[];
  maxDisplay?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-9 w-9",
};

const textSizeClasses = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm",
};

function StackedAvatars({
  avatars,
  maxDisplay = 5,
  size = "md",
  className,
}: StackedAvatarsProps) {
  const displayAvatars = avatars.slice(0, maxDisplay);
  const overflow = avatars.length - maxDisplay;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayAvatars.map((avatar, i) => (
        <Avatar
          key={i}
          className={cn(
            sizeClasses[size],
            "border-2 border-background"
          )}
        >
          <AvatarImage src={avatar} />
          <AvatarFallback className={textSizeClasses[size]}>U</AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            sizeClasses[size],
            textSizeClasses[size],
            "rounded-full bg-muted border-2 border-background flex items-center justify-center font-medium text-muted-foreground"
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}

export { StackedAvatars };
