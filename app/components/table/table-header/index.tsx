interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export default function TableHeader({
  children,
  className,
  color,
}: TableHeaderProps) {
  const bgColor = color ? color : 'bg-neutral-50';

  return (
    <thead className={className}>
      <tr className={`text-nowrap border-b border-gray-200 ${bgColor}`}>
        {children}
      </tr>
    </thead>
  );
}
