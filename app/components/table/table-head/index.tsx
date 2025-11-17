import * as React from 'react';

import SortIcon from '@/app/components/icon/sort-icon';
import useTableHeaderCell from './useTableHeaderCell';

interface TableHeadProps extends React.ComponentProps<'th'> {
  headerKey: string;
  sortAble?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function TableHead({
  headerKey,
  children,
  className,
  align,
  sortAble = false,
  ...props
}: TableHeadProps) {
  const { isSorted, direction, ariaSort, handleOnClick } = useTableHeaderCell(
    headerKey,
    sortAble,
  );
  console.log(props.id);

  return (
    <th
      className={`select-none ${className} `}
      aria-sort={ariaSort}
      align={align}
      {...props}
    >
      {sortAble ? (
        <button
          onClick={handleOnClick}
          className={`flex w-full h-full rounded-sm px-1.5 justify-between items-center cursor-pointer focus:outline-none focus-visible:inset-ring ring-gray-600`}
        >
          {children}
          <SortIcon isSelect={isSorted} direction={direction} color="#1d293d" />
        </button>
      ) : (
        <>{children}</>
      )}
    </th>
  );
}
