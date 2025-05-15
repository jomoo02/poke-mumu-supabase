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

  console.log(tableData);

  return (
    <TableProvider
      tableData={tableData}
      sortState={sortState}
      setSortState={setSortState}
      targetHeaderKey={targetHeaderKey}
      setTargetHeaderKey={setTargetHeaderKey}
      sortFn={sortFn}
    >
      <table className="border border-slate-300 table-fixed">{children}</table>
    </TableProvider>
  );
}
