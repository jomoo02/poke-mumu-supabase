import { useEffect, useMemo, useState } from 'react';

export type Column = {
  id: string;
  sortOrder?: 'asc' | 'desc';
  toggleSorting: () => void;
  filterValue?: string;
  setFilterValue?: (val: string) => void;
  getIsSorted: () => boolean;
};

export type ColumnDef<T> = {
  id: string;
  header: (opts: { column: Column }) => React.ReactNode;
  cell: (ctx: { row: T }) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  sortFn?: (a: T, b: T) => number;
};

type Options<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  sorting?: {
    id: string;
    sortOrder: 'asc' | 'desc';
  };
  setSorting?: (d: { id: string; sortOrder: 'asc' | 'desc' }) => void;
};

export default function useTableData<T>({
  data,
  columns,
  sorting,
  setSorting,
}: Options<T>) {
  const [sortingState, setSortingState] = useState<
    | {
        id: string;
        sortOrder: 'asc' | 'desc';
      }
    | undefined
  >(sorting ?? undefined);

  const [filtersState, setFiltersState] = useState<Record<string, string>>({});
  const [columnsVisibility, setColumnsVisibility] = useState<
    Record<string, boolean> | undefined
  >(undefined);

  const getHeaders = () => {
    const visibilityColumns = columnsVisibility
      ? columns.filter(({ id }) => !columnsVisibility[id])
      : columns;

    return visibilityColumns.map(
      ({ id, header, cell, sortable, sortFn, filterable }) => {
        const getIsSorted = () => sortingState?.id === id;
        const sortOrder = sortable ? sortingState?.sortOrder : undefined;

        const toggleSorting = () => {
          if (!sortable) return;
          const toggleSortOrder = getIsSorted()
            ? sortingState?.sortOrder === 'asc'
              ? 'desc'
              : 'asc'
            : 'asc';
          setSortingState({ id, sortOrder: toggleSortOrder });
        };

        const setFilterValue = (val: string) => {
          setFiltersState((prev) => ({ ...prev, [id]: val }));
        };

        const getContext = () =>
          header({
            column: {
              id,
              getIsSorted,
              toggleSorting,
              sortOrder,
            },
          });

        return {
          getContext,
          id,
          column: {
            id,
            filterValue: filtersState[id] ?? '',
            setFilterValue,
          },
        };
      },
    );
  };

  const getColumn = (id: string) => {
    const colDef = columns.find((c) => c.id === id);
    if (!colDef) return null;

    const getIsSorted = () => sortingState?.id === id;
    const sortOrder = sortingState?.sortOrder;

    const toggleSorting = () => {
      if (!colDef.sortable) return;
      const nextOrder = sortingState?.sortOrder === 'asc' ? 'desc' : 'asc';
      setSortingState({ id, sortOrder: nextOrder });
    };

    const setFilterValue = (val: string) => {
      setFiltersState((prev) => ({ ...prev, [id]: val }));
    };
    const visibility = columnsVisibility ? columnsVisibility[id] : true;
    const getIsVisibility = () => {
      return !!visibility;
    };

    const toggleVisibility = () => {
      setColumnsVisibility((prev) => ({ ...prev, [id]: !visibility }));
    };

    return {
      id,
      getIsSorted,
      toggleSorting,
      sortOrder,
      filterValue: filtersState[id] ?? '',
      setFilterValue,
      getIsVisibility,
      toggleVisibility,
    };
  };

  const getRows = () => {
    const filteredData = data.filter((row) => {
      return columns.every((col) => {
        const filterVal = filtersState[col.id];
        if (!filterVal) return true; // 필터 없으면 통과
        const cellValue = row[col.id as keyof T];
        return String(cellValue)
          .toLowerCase()
          .includes(filterVal.toLowerCase());
      });
    });

    const column = columns.find((c) => c.id === sortingState?.id);

    const sortedData = column
      ? [...filteredData].sort((a, b) => {
          let result = 0;
          if (column?.sortFn) result = column.sortFn(a, b);
          else {
            const aVal = a[sortingState?.id as keyof T];
            const bVal = b[sortingState?.id as keyof T];
            if (typeof aVal === 'number' && typeof bVal === 'number')
              result = aVal - bVal;
            else result = String(aVal).localeCompare(String(bVal));
          }
          return sortingState?.sortOrder === 'asc' ? result : -result;
        })
      : filteredData;

    return sortedData.map((d) => {
      const row = d;

      const getVisibleCells = () => {
        const visibilityColumns = columnsVisibility
          ? columns.filter(({ id }) => !columnsVisibility[id])
          : columns;

        return visibilityColumns.map(({ cell }, index) => {
          const getContext = () => cell({ row: d });
          const id = index;
          return { getContext, id };
        });
      };
      return {
        row,
        getVisibleCells,
      };
    });
  };

  useEffect(() => {
    if (sortingState && setSorting) {
      setSorting(sortingState);
    }
  }, [sortingState, setSorting]);

  const table = {
    getHeaders,
    getRows,
    getColumn,
  };

  return table;
}
