import {
  createContext,
  useContext,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from 'react';

export type SortDirection = 'asc' | 'desc';

export type SortState = { key: string; direction: SortDirection };

type Primitive = string | number | boolean | null | undefined;

export type TableRow = Record<string, Primitive>;

export interface TableContextValue<T extends TableRow> {
  targetHeaderKey: string;
  setTargetHeaderKey: Dispatch<SetStateAction<string>>;
  tableData: T[];
  sortState: SortState | null;
  setSortState: (sort: SortState) => void;
  sortFn?: (a: T, b: T, headerKey: string) => number;
}

const TableContext = createContext<TableContextValue<TableRow> | null>(null);

function useTableContext<T extends TableRow>() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('Table Context must be used within TableProvider');
  }

  return context as unknown as TableContextValue<T>;
}

export function useTargetHeaderKey<T extends TableRow>() {
  const { targetHeaderKey, setTargetHeaderKey } = useTableContext<T>();

  return {
    targetHeaderKey,
    setTargetHeaderKey,
  };
}

export function useTableData<T extends TableRow>() {
  const { tableData } = useTableContext<T>();

  return { tableData };
}

export function useSortState<T extends TableRow>() {
  const { sortState, setSortState } = useTableContext<T>();

  return {
    sortState,
    setSortState,
  };
}

export function useSortFn<T extends TableRow>() {
  const { sortFn } = useTableContext<T>();

  return {
    sortFn,
  };
}

export function TableProvider<T extends TableRow>({
  children,
  sortState,
  setSortState,
  tableData,
  targetHeaderKey,
  setTargetHeaderKey,
  sortFn,
}: TableContextValue<T> & { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      sortState,
      setSortState,
      tableData,
      targetHeaderKey,
      setTargetHeaderKey,
      sortFn,
    }),
    [
      sortState,
      setSortState,
      tableData,
      targetHeaderKey,
      setTargetHeaderKey,
      sortFn,
    ],
  );

  return (
    <TableContext.Provider
      value={value as unknown as TableContextValue<TableRow>}
    >
      {children}
    </TableContext.Provider>
  );
}
