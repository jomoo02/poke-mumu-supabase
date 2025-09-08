'use client';

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';

import { getNatureTableColumns, getNatureTableRows } from './utils';
import useTable from '@/app/hooks/useTable';
import Input from '@/app/components/input';

export default function NatureTable2({}) {
  const rows = getNatureTableRows();
  const cols = getNatureTableColumns();
  const table = useTable({ data: rows, columns: cols });

  return (
    <div className="w-full  p-4  max-w-3xl mx-auto ">
      <div className="max-w-[300px] my-4">
        <Input
          id="nature-input"
          placeholder="성격 입력"
          value={table.getColumn('ko')?.getFilterValue() ?? ''}
          onChange={(e) => {
            table.getColumn('ko')?.setFilterValue(e.target.value);
            table.getColumn('en')?.setFilterValue(e.target.value);
          }}
        />
      </div>
      <div className="border border-border rounded-md shadow-xs min-h-[400px]">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              {table.columns.map((header) => (
                <TableHead key={header.id}>{header.render()}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-border"
                data-state={row.isSelected && 'selected'}
              >
                {!row.like && !row.dislike ? (
                  <>
                    <TableCell>
                      {table.getColumn('selection')?.cell({ row })}
                    </TableCell>
                    <TableCell>
                      {table.getColumn('ko')?.cell({ row })}
                    </TableCell>
                    <TableCell>
                      {table.getColumn('en')?.cell({ row })}
                    </TableCell>
                    <TableCell>
                      {table.getColumn('increase')?.cell({ row })}
                    </TableCell>
                    <TableCell>
                      {table.getColumn('decrease')?.cell({ row })}
                    </TableCell>
                    <TableCell colSpan={2}>
                      {table.getColumn('like')?.cell({ row })}
                    </TableCell>
                  </>
                ) : (
                  <>
                    {table.columns.map((header) => (
                      <TableCell key={header.id}>
                        {header.cell({ row })}
                      </TableCell>
                    ))}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
