import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import { ColumnDef } from '@/app/hooks/useTable/type';
import Button from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';
import { Fragment } from 'react';
import { basicColumns } from './basic-columns';
import type { Move, MachineType } from '../../types/move';
import { ChevronDown } from 'lucide-react';
import useTable from '@/app/hooks/useTable';

const cols: ColumnDef<Move>[] = [
  {
    id: 'machine',
    header: ({ column, content }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>{content}</span>
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
    cell: ({ row }) => (
      <div className="px-2">
        {row.machineNumber !== null
          ? row.machineNumber > 0
            ? Math.abs(Math.trunc(row.machineNumber))
                .toString()
                .padStart(2, '0')
            : '00'
          : '-'}
      </div>
    ),
    sortable: true,
    sortFn: (a, b) => (a.machineNumber ?? -1) - (b.machineNumber ?? -1),
  },
  ...basicColumns,
];

interface MachineTableProps {
  machineType: MachineType;
  moves: Move[];
}

export default function MachineTable({
  machineType,
  moves,
}: MachineTableProps) {
  const table = useTable({
    data: moves,
    columns: cols,
    sorting: { id: 'machine', isDesc: false },
  });

  const titleMap: Record<MachineType, string> = {
    HM: '기술머신 HM으로 배우는 기술',
    TM: '기술머신 TM으로 배우는 기술',
    TR: '기술머신 TR로 배우는 기술',
  };

  return (
    <div>
      <h3 className="my-9">{titleMap[machineType]}</h3>
      <div className="max-w-2xl mx-auto w-full">
        <div className="border border-border rounded-lg overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent h-10 border-border">
                {table.getVisibleColumns().map((header) => (
                  <TableHead key={header.id} className="py-1">
                    {header.id === 'machine' ? (
                      <>{header.render(machineType)}</>
                    ) : (
                      <> {header.render()}</>
                    )}
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
