import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  avatarUrl?: string;
}

interface ParticipantsListProps {
  participants: Participant[];
  totalSpots: number;
  spotsLeft: number;
  onViewAll?: () => void;
}

const ParticipantsList = ({
  participants,
  totalSpots,
  spotsLeft,
  onViewAll,
}: ParticipantsListProps) => {
  const displayedParticipants = participants.slice(0, 6);
  const remainingCount = participants.length - displayedParticipants.length;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Participants</h2>
      <p className="text-sm text-muted-foreground">
        {totalSpots - spotsLeft} out of {totalSpots} / <span className="font-semibold text-foreground">{spotsLeft} spots left</span>
      </p>
      <div className="flex items-center gap-1">
        {displayedParticipants.map((participant) => (
          <Avatar key={participant.id} className="h-10 w-10 border-2 border-background -ml-2 first:ml-0">
            <AvatarImage src={participant.avatarUrl} alt={participant.name} />
            <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ))}
        {remainingCount > 0 && (
          <button
            onClick={onViewAll}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground text-sm font-medium -ml-2"
          >
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ParticipantsList;
