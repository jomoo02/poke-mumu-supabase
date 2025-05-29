interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export default function TableRow({ className, children }: TableRowProps) {
  return (
    <tr
      className={`${className} hover:bg-neutral-50 border-b last:border-b-0 border-b-gray-200 transition duration-100`}
    >
      {children}
    </tr>
  );
}
