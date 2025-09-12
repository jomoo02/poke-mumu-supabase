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
// import Input from '@/app/components/ui/input';
import Checkbox from '@/app/components/ui/checkbox';
import FloatingLabelInput from '@/app/components/ui/floating-label-input';

import { Menu, MenuItem } from '@/app/components/ui/dropdown-menu';
import { Fragment } from 'react';

export default function NatureTable2({}) {
  const rows = getNatureTableRows();
  const cols = getNatureTableColumns();
  const table = useTable({ data: rows, columns: cols });

  console.log(table.columns);

  return (
    <div className="w-full p-4 max-w-3xl mx-auto">
      <Checkbox defaultChecked="indeterminate" />
      <div className="flex justify-between my-4">
        <FloatingLabelInput
          id="nature-input"
          placeholder="성격"
          className="max-w-[200px]"
          value={table.getColumn('ko')?.getFilterValue() ?? ''}
          onChange={(e) => {
            table.getColumn('ko')?.setFilterValue(e.target.value);
            table.getColumn('en')?.setFilterValue(e.target.value);
          }}
        />
        <Menu label="columns">
          {table.columns
            .filter((column) => column.getCanHide())
            .map((column) => (
              <MenuItem
                key={column.id}
                label={column.id}
                onClick={() => column.toggleVisibility()}
              >
                {column.render()}
              </MenuItem>
            ))}
          {/* <MenuItem label="d">1</MenuItem> */}
        </Menu>
      </div>
      <div className="border border-border rounded-md shadow-xs ">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              {table.getVisibleColumns().map((header) => (
                <TableHead key={header.id}>{header.render()}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-border h-10"
                data-state={row.isSelected && 'selected'}
              >
                {table.getVisibleColumns().map((col) => (
                  <TableCell key={col.id}>{col.cell({ row })}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

          {/* <TableBody>
            {table.rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-border h-10"
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
                    {table
                      .getVisibleColumns()
                      .map((header) =>
                        header ? (
                          <TableCell key={header.id}>
                            {header.cell({ row })}
                          </TableCell>
                        ) : null,
                      )}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </div>
    </div>
  );
}
