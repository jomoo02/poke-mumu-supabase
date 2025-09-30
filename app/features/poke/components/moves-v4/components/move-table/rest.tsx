import { Fragment } from 'react';
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

interface RestTableProps {
  moves: Move[];
  method: string;
}

export default function RestTable({ moves, method }: RestTableProps) {
  const table = useTable({
    data: moves,
    columns: basicColumns,
    sorting: { id: 'name', isDesc: false },
  });

  const titleMap: Record<string, string> = {
    evolution: '진화 시 배우는 기술',
    form: '폼체인지로 배우는 기술',
    egg: '유전으로 배우는 기술',
    tutor: 'NPC로부터 배울 수 있는 기술',
    reminder: '떠올리기로 배우는 기술',
    pre: '이전 진화에서 얻을 수 있는 기술',
    default: '기술',
  };

  return (
    <div>
      <h3 className="my-9">{titleMap[method]}</h3>
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
