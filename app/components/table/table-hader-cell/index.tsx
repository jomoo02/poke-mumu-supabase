import SortIcon from '@/app/components/icon/sort-icon';
import useTableHeaderCell from './useTableHeaderCell';

interface TableHeaderCellProps {
  headerKey: string;
  sortAble?: boolean;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
}

export default function TableHeaderCell({
  headerKey,
  children,
  className,
  align,
  sortAble = false,
}: TableHeaderCellProps) {
  const { isSorted, direction, ariaSort, handleOnClick } = useTableHeaderCell(
    headerKey,
    sortAble,
  );

  return (
    <th
      className={`select-none ${className}`}
      aria-sort={ariaSort}
      align={align}
    >
      {sortAble ? (
        <button
          onClick={handleOnClick}
          className={`flex w-full h-full rounded-sm px-1.5 items-center justify-between cursor-pointer focus:outline-none focus-visible:inset-ring ring-gray-600`}
        >
          {children}
          <SortIcon isSelect={isSorted} direction={direction} color="#1d293d" />
        </button>
      ) : (
        <>{children}</>
        // <div className="flex items-center h-full">{children}</div>
      )}
    </th>
  );
}
