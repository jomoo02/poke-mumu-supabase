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

import Checkbox from '@/app/components/ui/checkbox';
import FloatingLabelInput from '@/app/components/ui/floating-label-input';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { CheckIcon } from 'lucide-react';

export default function NatureTable2({}) {
  const rows = getNatureTableRows();
  const cols = getNatureTableColumns();
  const table = useTable({ data: rows, columns: cols });

  return (
    <div className="w-full p-4 max-w-3xl mx-auto">
      <Checkbox defaultChecked="indeterminate" />
      <div className="flex justify-between my-4 h-9">
        <FloatingLabelInput
          id="nature-input"
          placeholder="성격"
          className="max-w-[300px]"
          value={table.getColumn('ko')?.getFilterValue() ?? ''}
          onChange={(e) => {
            table.getColumn('ko')?.setFilterValue(e.target.value);
            table.getColumn('en')?.setFilterValue(e.target.value);
          }}
        />
        <DropdownMenu>
          <DropdownMenuTrigger label="trigger">columns</DropdownMenuTrigger>
          <DropdownMenuContent>
            {table.columns
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuItem
                  key={column.id}
                  label={column.id}
                  className="w-full pl-8 pr-5"
                  onClick={() => column.toggleVisibility()}
                >
                  <span
                    className="size-4 absolute left-2 data-[slot=unselected]:hidden"
                    data-slot={
                      column.getIsVisible() ? 'selected' : 'unselected'
                    }
                  >
                    <CheckIcon className="size-4 text-foreground" />
                  </span>

                  {column.render()}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
        </Table>
      </div>
    </div>
  );
}
