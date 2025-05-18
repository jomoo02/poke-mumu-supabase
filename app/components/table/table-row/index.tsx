interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export default function TableRow({ className, children }: TableRowProps) {
  return (
    <tr
      className={`${className} hover:bg-neutral-100/70 border-b last:border-b-0 border-b-slate-300`}
    >
      {children}
    </tr>
  );
}
