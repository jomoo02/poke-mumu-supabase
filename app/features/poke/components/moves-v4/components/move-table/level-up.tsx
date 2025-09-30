import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';
import { ColumnDef } from '@/app/hooks/useTable/type';
import Button from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';
import useTable from '@/app/hooks/useTable';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import { Move } from '../../types/move';
import { basicColumns } from './basic-columns';

export const levelUpTableColumns: ColumnDef<Move>[] = [
  {
    id: 'level',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>Lv.</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="px-2">{row.level}</div>,
    sortable: true,
    sortFn: (a, b) => (a.level ?? -1) - (b.level ?? -1),
  },
  ...basicColumns,
];

interface LevelUpTableProps {
  moves: Move[];
}

export default function LevelUpTable({ moves }: LevelUpTableProps) {
  const table = useTable({
    data: moves,
    columns: levelUpTableColumns,
    sorting: { id: 'level', isDesc: false },
  });

  return (
    <div>
      <h3 className="my-9">레벨업으로 배우는 기술</h3>
      <div className="max-w-2xl mx-auto w-full">
        <div className="border border-border rounded-lg overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent h-10 border-border">
                {table.getVisibleColumns().map((header) => (
                  <TableHead key={header.id} className="py-1">
                    {header.render()}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow
                    key={row.id}
                    className={cn(
                      'data-[state=selected]:hover:bg-accent',
                      'border-border h-10 last:border-0',
                    )}
                    data-state={row.isSelected ? 'selected' : 'unselected'}
                    onClick={row.toggleSelect}
                  >
                    {table.getVisibleColumns().map((col) => (
                      <TableCell key={col.id} className="">
                        {col.cell({ row })}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.isSelected && (
                    <TableRow
                      data-state="selected"
                      className={cn('border-border hover:bg-transparent')}
                    >
                      <TableCell colSpan={7} className=" pt-1">
                        {row.description}
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
