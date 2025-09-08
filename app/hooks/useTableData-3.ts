import { useCallback, useMemo, useState } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export type ColumnSort = {
  id: string;
  sortDirection: SortDirection;
};

export type SortState = Record<string, SortDirection>;
export type FilterState = Record<string, string>;
export type VisibilityState = Record<string, boolean>;

export type Column = {
  id: string;
  sortDirection?: SortDirection;
  toggleSorting?: () => void;
  filterValue?: string;
  setFilterValue?: (val: string) => void;
  getFilterValue: () => string;
  getIsSorted: () => boolean;
  getIsVisible?: () => boolean;
  toggleVisibility?: () => void;
};

export type ColumnDef<T> = {
  id: string;
  header: (opts: { column: Column }) => React.ReactNode;
  cell: (ctx: { row: Row<T> }) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  sortFn?: (a: T, b: T) => number;
};

export type Row<T> = T & {
  id: string;
  isSelected: boolean;
  toggleSelect: () => void;
};

type Options<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  sorting?: ColumnSort;
  setSorting?: (sorting: ColumnSort) => void;
  getRowId?: (row: T) => string;
};

function useTableDataColumns<T>({
  columns,
  sortingState,
  setSortingState,
  filterState,
  setFilterState,
  visibilityState,
  setVisibilityState,
}: {
  columns: ColumnDef<T>[];
  sortingState: SortState;
  setSortingState: React.Dispatch<React.SetStateAction<SortState>>;
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  visibilityState: VisibilityState;
  setVisibilityState: React.Dispatch<React.SetStateAction<VisibilityState>>;
}) {
  const columnsState = useMemo(() => {
    return columns.map((colDef) => {
      const id = colDef.id;
      const sortDirection = sortingState[id];
      const getIsSorted = () => !!sortDirection;

      const toggleSorting = () => {
        if (!colDef.sortable) return;
        const nextOrder = sortDirection
          ? sortDirection === 'asc'
            ? 'desc'
            : 'asc'
          : 'asc';

        setSortingState((prev) => {
          const cleared = Object.keys(prev).reduce((acc, k) => {
            acc[k] = null;
            return acc;
          }, {} as SortState);
          cleared[id] = nextOrder;
          return cleared;
        });
      };

      const getFilterValue = () => {
        return filterState[id];
      };

      const setFilterValue = (val: string) =>
        setFilterState((prev) => ({ ...prev, [id]: val }));

      const getIsVisible = () => visibilityState[id];

      const toggleVisibility = () =>
        setVisibilityState((prev) => ({ ...prev, [id]: !prev[id] }));

      const column = {
        id,
        sortDirection,
        getFilterValue,
        toggleSorting,
        setFilterValue,
        getIsSorted,
        getIsVisible,
        toggleVisibility,
      };

      return {
        ...column,
        getContext: () => colDef.header({ column }),
        cell: colDef.cell,
        sortable: colDef.sortable,
        filterable: colDef.filterable,
        sortFn: colDef.sortFn,
      };
    });
  }, [
    columns,
    sortingState,
    setSortingState,
    filterState,
    setFilterState,
    visibilityState,
    setVisibilityState,
  ]);

  const visibieColumns = useMemo(
    () => columnsState.filter((column) => visibilityState[column.id]),
    [columnsState, visibilityState],
  );

  const getColumn = useCallback(
    (columnId: string) => columnsState.find(({ id }) => id === columnId),
    [columnsState],
  );

  return {
    columnsState: visibieColumns,
    getColumn,
  };
}

function useTableDataRows<T>({
  data,
  columns,
  sortingState,
  filterState,
  getRowId,
  selectionState,
  setSelectionState,
}: {
  data: Array<T & { id: string }>;
  columns: ColumnDef<T>[];
  sortingState: SortState;
  filterState: FilterState;
  getRowId?: (row: T) => string;
  selectionState: Record<string, boolean>;
  setSelectionState: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}) {
  const rowsState: Row<T>[] = useMemo(() => {
    const activeSortId = Object.keys(sortingState).find(
      (k) => sortingState[k] !== null,
    );
    const activeSortDir = activeSortId ? sortingState[activeSortId] : null;

    // 1. 필터 적용
    let filtered = data.filter((row) => {
      return columns.every((column) => {
        if (!column.filterable) return true;
        const filterValue = filterState[column.id];

        if (!filterValue) return true;
        const cell = row[column.id as keyof (T & { id: string })];

        return String(cell).toLowerCase().includes(filterValue.toLowerCase());
      });
    });

    // 2. 정렬 적용
    if (activeSortId && activeSortDir) {
      const colDef = columns.find((c) => c.id === activeSortId);
      if (colDef) {
        filtered = [...filtered].sort((a, b) => {
          let result = 0;
          if (colDef.sortFn) result = colDef.sortFn(a, b);
          else {
            const aVal = a[activeSortId as keyof T];
            const bVal = b[activeSortId as keyof T];
            result =
              typeof aVal === 'number' && typeof bVal === 'number'
                ? aVal - bVal
                : String(aVal).localeCompare(String(bVal));
          }
          return activeSortDir === 'asc' ? result : -result;
        });
      }
    }

    // 3. row 객체화
    return filtered.map((row) => {
      return {
        ...row,
        isSelected: selectionState[row.id] ?? false,
        toggleSelect: () => {
          setSelectionState((prev) => ({
            ...prev,
            [row.id]: !prev[row.id],
          }));
        },
      };
    });
  }, [
    sortingState,
    data,
    columns,
    filterState,
    selectionState,
    setSelectionState,
  ]);

  return {
    rowsState,
  };
}

export default function useTableData<T>({
  data,
  columns,
  sorting,
  getRowId,
}: Options<T>) {
  const initialSortState: SortState = columns.reduce((acc, col) => {
    if (col.id === sorting?.id) {
      acc[col.id] = sorting.sortDirection;
    } else {
      acc[col.id] = null;
    }
    return acc;
  }, {} as SortState);

  const initialFilterState: FilterState = columns.reduce((acc, col) => {
    acc[col.id] = '';
    return acc;
  }, {} as FilterState);

  const initialVisibilityState: VisibilityState = columns.reduce((acc, col) => {
    acc[col.id] = true;
    return acc;
  }, {} as VisibilityState);

  const [sortingState, setSortingState] = useState<SortState>(initialSortState);
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);
  const [visibilityState, setVisibilityState] = useState<VisibilityState>(
    initialVisibilityState,
  );

  const [selectionState, setSelectionState] = useState<Record<string, boolean>>(
    {},
  );
  const dataWithId = useMemo(() => {
    return data.map((row, i) => ({
      ...row,
      id: getRowId ? getRowId(row) : String(i),
    }));
  }, [data, getRowId]);

  const { columnsState, getColumn } = useTableDataColumns({
    columns,
    sortingState,
    setSortingState,
    filterState,
    setFilterState,
    visibilityState,
    setVisibilityState,
  });

  const { rowsState } = useTableDataRows({
    data: dataWithId,
    columns,
    sortingState,
    filterState,
    getRowId,
    selectionState,
    setSelectionState,
  });

  return {
    columns: columnsState,
    rows: rowsState,
    getColumn,
  };
}
