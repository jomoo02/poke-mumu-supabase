'use client';

import { moveColumns } from './table-test.data';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
} from '@/app/components/ui/table';
import type { Move } from './type';
import Input from '../components/input';
// import useTableData3 from '../hooks/useTableData-3';
import useTable from '../hooks/useTable';

export default function TableTest({ moves }: { moves: Move[] }) {
  const initialSort: { id: string; isDesc: boolean } = {
    id: 'level',
    isDesc: false,
  };
  const table = useTable({
    data: moves,
    columns: moveColumns,
    sorting: initialSort,
    getRowId: (row) => `${row.id}-${row.level}`,
  });
  return (
    <div>
      <div className="flex justify-between">
        <Input
          value={table.getColumn('name')?.getFilterValue() ?? ''}
          onChange={(e) =>
            table.getColumn('name')?.setFilterValue(e.target.value)
          }
        />
        <div>
          <button
            onClick={table.getColumn('name')?.toggleVisibility}
            className={
              table.getColumn('name')?.getIsVisible()
                ? 'bg-amber-50'
                : 'bg-blue-100'
            }
          >
            toggle name hide
          </button>
          <button
            onClick={table.getColumn('power')?.toggleVisibility}
            className={
              table.getColumn('power')?.getIsVisible()
                ? 'bg-amber-50'
                : 'bg-blue-100'
            }
          >
            toggle power hide
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-border">
            {table.columns.map((head) => (
              <TableHead key={head.id}>{head.render()}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((r) => (
            <TableRow key={r.id} data-state={r.isSelected && 'selected'}>
              {table.columns.map((head) => (
                <TableCell key={head.id}>{head.cell({ row: r })}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  // return (
  //   <div>
  //     <div className="flex justify-between">
  //       <Input
  //         value={table.getColumn('name')?.filterValue}
  //         onChange={(e) =>
  //           table.getColumn('name')?.setFilterValue(e.target.value)
  //         }
  //       />
  //       <div>
  //         <button
  //           onClick={table.getColumn('name')?.toggleVisibility}
  //           className={
  //             table.getColumn('name')?.getIsVisibility()
  //               ? 'bg-amber-50'
  //               : 'bg-blue-100'
  //           }
  //         >
  //           toggle name hide
  //         </button>
  //       </div>
  //     </div>

  //     <Table>
  //       <TableHeader>
  //         <TableRow className="border-border">
  //           {table.getHeaders().map((head) => (
  //             <TableHead key={head.id}>{head.getContext()}</TableHead>
  //           ))}
  //         </TableRow>
  //       </TableHeader>
  //       <TableBody>
  //         {table.getRows().map((r) => (
  //           <TableRow key={r.row.id}>
  //             {r.getVisibleCells().map((cell) => (
  //               <TableCell key={cell.id}>{cell.getContext()}</TableCell>
  //             ))}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </div>
  // );
}
