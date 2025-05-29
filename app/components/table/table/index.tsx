import useTable from './useTable';
import { TableProvider, type TableRow } from '../table.context';

interface TableProps<T> {
  tableData: T[];
  sortFn?: (a: T, b: T, headerKey: string) => number;
  children: React.ReactNode;
  initialHeaderKey?: string;
  resetTrigger?: string;
}

export default function Table<T extends TableRow>({
  tableData,
  sortFn,
  children,
  initialHeaderKey,
  resetTrigger,
}: TableProps<T>) {
  const { sortState, setSortState, targetHeaderKey, setTargetHeaderKey } =
    useTable(initialHeaderKey, resetTrigger);

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
        <div className="border border-gray-200 rounded-md overflow-auto">
          <table className="table-fixed">{children}</table>
        </div>
      </div>
    </TableProvider>
  );
}
