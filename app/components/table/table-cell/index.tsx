interface TableCellProps {
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
}
export default function TableCell({
  className,
  align,
  children,
}: TableCellProps) {
  return (
    <td align={align} className={`${className} px-1.5`}>
      {children}
    </td>
  );
}
