interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export default function TableRow({ className, children }: TableRowProps) {
  return <tr className={`${className} hover:bg-blue-100`}>{children}</tr>;
}
