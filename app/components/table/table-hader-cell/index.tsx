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
      className={`select-none ${className} first:rounded-tl-md last:rounded-tr-md`}
      aria-sort={ariaSort}
    >
      {sortAble ? (
        <button
          onClick={handleOnClick}
          className={`flex w-full h-full hover:bg-zinc-100 rounded-sm px-2 items-center justify-between cursor-pointer focus:outline-none focus-visible:inset-ring ring-slate-500`}
        >
          <span className="font-medium text-zinc-900 text-[15px]">
            {children}
          </span>
          <SortIcon isSelect={isSorted} direction={direction} color="#404b5d" />
        </button>
      ) : (
        <div className="flex justify-center items-center text-[15px] font-medium text-zinc-900 h-full w-full">
          {children}
        </div>
      )}
    </th>
  );
}
