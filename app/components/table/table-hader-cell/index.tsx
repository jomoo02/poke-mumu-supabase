import SortIcon from '@/app/components/icon/sort-icon';
import useTableHeaderCell from './useTableHeaderCell';

interface TableHeaderCellProps {
  headerKey: string;
  sortAble?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function TableHeaderCell({
  headerKey,
  children,
  className,
  sortAble = false,
}: TableHeaderCellProps) {
  const { isSorted, direction, ariaSort, handleOnClick } = useTableHeaderCell(
    headerKey,
    sortAble,
  );

  return (
    <th className={`select-none ${className}`} aria-sort={ariaSort}>
      {sortAble ? (
        <button
          onClick={handleOnClick}
          className={`flex w-full h-full rounded-sm px-1.5 items-center justify-between cursor-pointer focus:outline-none focus-visible:inset-ring ring-gray-600`}
        >
          {children}
          <SortIcon isSelect={isSorted} direction={direction} color="#1d293d" />
        </button>
      ) : (
        <div className="flex justify-center items-center text-[15px] h-full w-full">
          {children}
        </div>
      )}
    </th>
  );
}
