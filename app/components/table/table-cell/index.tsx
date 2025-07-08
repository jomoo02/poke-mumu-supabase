interface TableCellProps {
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
  colSpan?: number;
}
export default function TableCell({
  className,
  align,
  colSpan,
  children,
}: TableCellProps) {
  return (
    <td align={align} className={`${className} px-1.5`} colSpan={colSpan}>
      {children}
    </td>
  );
}
