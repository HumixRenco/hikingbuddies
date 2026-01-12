interface SidePanelHeaderProps {
  title: string;
}

export function SidePanelHeader({ title }: SidePanelHeaderProps) {
  return (
    <header className="flex gap-2.5 items-center pb-4 w-full text-lg font-bold border-b border-solid border-border text-foreground">
      <h2 className="self-stretch my-auto">{title}</h2>
    </header>
  );
}
