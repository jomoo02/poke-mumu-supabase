interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-nowrap border-b border-slate-300 hover:bg-neutral-100/70">
        {children}
      </tr>
    </thead>
  );
}
