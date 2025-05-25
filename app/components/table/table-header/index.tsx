interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-nowrap border-b border-zinc-200">{children}</tr>
    </thead>
  );
}
