interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export default function TableRow({ className, children }: TableRowProps) {
  return <tr className={`${className} hover:bg-slate-50/80`}>{children}</tr>;
}
