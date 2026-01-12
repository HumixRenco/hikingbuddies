interface ActivityInfoProps {
  level: string;
  activityType: string;
  distance: string;
  elevation: string;
}

export function ActivityInfo({ level, activityType, distance, elevation }: ActivityInfoProps) {
  return (
    <div className="flex gap-4 justify-between items-center mt-3 w-full whitespace-nowrap">
      <div className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch px-1 py-px my-auto text-xs font-bold text-white rounded bg-primary">
        <div className="self-stretch my-auto">{level}</div>
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto text-muted-foreground">
        <div className="self-stretch my-auto text-sm font-black">🚴</div>
        <div className="self-stretch my-auto text-xs font-bold">{activityType}</div>
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto text-muted-foreground">
        <div className="self-stretch my-auto text-sm font-black">📏</div>
        <div className="self-stretch my-auto text-xs font-bold">{distance}</div>
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto">
        <div className="self-stretch my-auto text-sm font-black text-muted-foreground">⛰️</div>
        <div className="self-stretch my-auto text-xs font-bold text-muted-foreground">{elevation}</div>
      </div>
    </div>
  );
}
