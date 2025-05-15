import useTableBody from './useTableBody';
import type { TableRow } from '../table.context';

interface TableBodyProps<T> {
  children: (sorted: T[]) => React.ReactNode;
  className?: string;
}

export default function TableBody<T extends TableRow>({
  children,
  className,
}: TableBodyProps<T>) {
  const { sorted } = useTableBody<T>();

  return <tbody className={className}>{children(sorted)}</tbody>;
}
