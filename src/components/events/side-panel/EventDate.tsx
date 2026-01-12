interface EventDateProps {
  date: string;
  day: string;
}

export function EventDate({ date, day }: EventDateProps) {
  return (
    <div className="flex gap-2.5 justify-center items-center text-sm font-bold leading-5 text-muted-foreground w-[45px]">
      <div className="self-stretch my-auto w-[45px]">
        <span className="text-muted-foreground">{date}</span>
        <br />
        <span className="font-normal text-muted-foreground">{day}</span>
      </div>
    </div>
  );
}
