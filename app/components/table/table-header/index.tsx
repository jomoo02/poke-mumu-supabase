interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-nowrap">{children}</tr>
    </thead>
  );
}
