import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface OrganizerCardProps {
  name: string;
  badge?: string;
  avatarUrl?: string;
  label?: string;
  onSendMessage?: () => void;
}

const OrganizerCard = ({
  name,
  badge,
  avatarUrl,
  label = "Organizer",
  onSendMessage,
}: OrganizerCardProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">{label}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{name}</p>
            {badge && (
              <p className="text-sm text-muted-foreground">{badge}</p>
            )}
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={onSendMessage}>
          Send a message
        </Button>
      </div>
    </div>
  );
};

export default OrganizerCard;
