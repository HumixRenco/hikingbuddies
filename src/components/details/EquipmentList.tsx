interface EquipmentListProps {
  items: string[];
}

const EquipmentList = ({ items }: EquipmentListProps) => {
  if (items.length === 0) return null;

  // Split items into two columns
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Equipment</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground">
        <div className="space-y-2">
          {leftColumn.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="space-y-2">
          {rightColumn.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentList;
