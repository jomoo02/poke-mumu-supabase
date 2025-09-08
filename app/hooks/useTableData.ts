import { useMemo, useState } from 'react';

export type Column<T> = {
  id: keyof T | string;
  header: (head: {
    id?: string;
    sortOrder?: 'asc' | 'desc';
    toggleSort?: () => void;
  }) => React.ReactNode;
  cell: (row: { row: T }) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  sortFn?: (a: T, b: T) => number;
};

type Options<T> = {
  data: T[];
  columns: Column<T>[];
};

export function useTableData<T>({ data, columns }: Options<T>) {
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<keyof T | string>();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filterKeys = columns
    .filter((c) => c.filterable)
    .map((c) => c.id as keyof T);

  const filteredData = useMemo(() => {
    if (!filter || filterKeys.length === 0) return data;
    const lower = filter.toLowerCase();
    return data.filter((row) =>
      filterKeys.some((key) => String(row[key]).toLowerCase().includes(lower)),
    );
  }, [data, filter, filterKeys]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    const column = columns.find((c) => c.id === sortKey);

    return [...filteredData].sort((a, b) => {
      let result = 0;
      if (column?.sortFn) result = column.sortFn(a, b);
      else {
        const aVal = a[sortKey as keyof T];
        const bVal = b[sortKey as keyof T];
        if (typeof aVal === 'number' && typeof bVal === 'number')
          result = aVal - bVal;
        else result = String(aVal).localeCompare(String(bVal));
      }
      return sortOrder === 'asc' ? result : -result;
    });
  }, [filteredData, sortKey, sortOrder, columns]);

  const renderedColumns = useMemo(
    () =>
      columns.map((col) => ({
        ...col,
        header: () =>
          col.header({
            id: col.id as string,
            sortOrder: sortKey === col.id ? sortOrder : undefined,
            toggleSort: () => {
              if (sortKey === col.id)
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              else {
                setSortKey(col.id);
                setSortOrder('asc');
              }
            },
          }),
      })),
    [columns, sortKey, sortOrder],
  );

  return {
    columns: renderedColumns, // state 반영된 columns 반환
    data: sortedData,
    setFilter,
    setSortKey,
    setSortOrder,
    sortKey,
    sortOrder,
  };
}
