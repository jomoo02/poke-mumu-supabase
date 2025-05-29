interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-nowrap border-b border-gray-200 bg-neutral-50">
        {children}
      </tr>
    </thead>
  );
}
