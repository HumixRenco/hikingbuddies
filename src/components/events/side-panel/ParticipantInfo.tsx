interface ParticipantInfoProps {
  participantCount: string;
  organizerName: string;
  status?: string;
  showReviewButton?: boolean;
}

export function ParticipantInfo({
  participantCount,
  organizerName,
  status,
  showReviewButton
}: ParticipantInfoProps) {
  return (
    <div className={`flex ${showReviewButton ? 'gap-3' : 'gap-10'} justify-between items-center mt-3 w-full text-xs whitespace-nowrap`}>
      <div className="flex gap-1 items-center self-stretch my-auto text-muted-foreground">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/efe71eba37923303ff56eaec10954acd3e13b954?placeholderIfAbsent=true&apiKey=e94f22c2b2ff4da7886091970c9846de"
          className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[1.73] w-[45px]"
          alt="Participants"
        />
        <div className="self-stretch my-auto font-bold text-center w-[27px]">
          {participantCount},
        </div>
        <span className="self-stretch my-auto">by</span>
        <span className="self-stretch my-auto">{organizerName}</span>
      </div>
      {showReviewButton ? (
        <button className="self-stretch my-auto text-xs font-bold text-center text-muted-foreground w-[78px]">
          <div className="flex flex-col justify-center px-2 py-1 rounded">
            <span>Write reviews</span>
          </div>
        </button>
      ) : (
        <div className="self-stretch my-auto text-right text-muted-foreground/70">
          {status}
        </div>
      )}
    </div>
  );
}
