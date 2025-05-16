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
    <th
      className={`h-[2.4rem] border p-0 border-slate-300 select-none ${className}`}
      aria-sort={ariaSort}
    >
      {sortAble ? (
        <button
          onClick={handleOnClick}
          className={`flex w-full h-full px-1.5 items-center text-[15px] font-medium text-slate-900 justify-between cursor-pointer ${
            isSorted ? 'bg-blue-100' : 'bg-slate-100 '
          }`}
        >
          {children}
          <SortIcon isSelect={isSorted} direction={direction} />
        </button>
      ) : (
        <div className="flex items-center px-1.5 text-[15px] font-medium text-slate-900 bg-slate-100 h-full w-full">
          {children}
        </div>
      )}
    </th>
  );
}
