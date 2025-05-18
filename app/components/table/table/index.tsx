import useTable from './useTable';
import { TableProvider, type TableRow } from '../table.context';

interface TableProps<T> {
  tableData: T[];
  sortFn?: (a: T, b: T, headerKey: string) => number;
  children: React.ReactNode;
  initialHeaderKey?: string;
}

export default function Table<T extends TableRow>({
  tableData,
  sortFn,
  children,
  initialHeaderKey,
}: TableProps<T>) {
  const { sortState, setSortState, targetHeaderKey, setTargetHeaderKey } =
    useTable(initialHeaderKey);

  return (
    <TableProvider
      tableData={tableData}
      sortState={sortState}
      setSortState={setSortState}
      targetHeaderKey={targetHeaderKey}
      setTargetHeaderKey={setTargetHeaderKey}
      sortFn={sortFn}
    >
      <div className="flex">
        <div className="border border-slate-300 rounded-md overflow-auto">
          <table className=" table-fixed">{children}</table>
        </div>
      </div>
    </TableProvider>
  );
}
