import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
  onLike?: () => void;
  onReply?: () => void;
}

interface DiscussionChatProps {
  comments: Comment[];
  totalComments?: number;
  onSendMessage?: (message: string) => void;
  onShowMore?: () => void;
}

const DiscussionChat = ({
  comments,
  totalComments,
  onSendMessage,
  onShowMore,
}: DiscussionChatProps) => {
  const [message, setMessage] = useState("");
  const displayedComments = comments.slice(0, 3);
  const remainingCount = (totalComments || comments.length) - displayedComments.length;

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Discussion</h2>
      
      <div className="space-y-4">
        {displayedComments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarImage src={comment.authorAvatar} alt={comment.author} />
              <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-semibold text-primary">{comment.author}</span>{" "}
                <span className="text-foreground">{comment.content}</span>
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <button className="text-primary hover:underline">Like</button>
                <span>·</span>
                <button className="text-primary hover:underline">Reply</button>
                <span>·</span>
                <span>{comment.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {remainingCount > 0 && (
        <button
          onClick={onShowMore}
          className="text-sm text-primary hover:underline"
        >
          + {remainingCount} comments
        </button>
      )}

      {/* Message input */}
      <div className="flex items-center gap-2 pt-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DiscussionChat;
