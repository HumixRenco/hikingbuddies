import { useState } from "react";

interface DetailDescriptionProps {
  description: string;
  maxLength?: number;
}

const DetailDescription = ({
  description,
  maxLength = 300,
}: DetailDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > maxLength;
  const displayText = isExpanded || !shouldTruncate
    ? description
    : `${description.slice(0, maxLength)}...`;

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold text-foreground">Description</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {displayText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-primary hover:underline"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default DetailDescription;
