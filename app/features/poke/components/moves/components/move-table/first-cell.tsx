import { TableHeaderCell, TableCell } from '@/app/components/table';

interface FirstHeaderCellProps {
  method: string;
  machineType?: string;
}

interface FirstRowCellProps {
  method: string;
  move: Record<string, string | number | boolean | null | undefined>;
}

export function FirstHeaderCell({ method, machineType }: FirstHeaderCellProps) {
  if (method === 'level_up') {
    return (
      <TableHeaderCell headerKey="level" className="min-w-[3.85rem]" sortAble>
        Lv.
      </TableHeaderCell>
    );
  }
  if (method === 'machine') {
    return (
      <TableHeaderCell headerKey="machine" className="min-w-[3.85rem]" sortAble>
        {machineType}
      </TableHeaderCell>
    );
  }
  return null;
}

export function FirstRowCell({ method, move }: FirstRowCellProps) {
  if (method === 'level_up') {
    return (
      <TableCell className="border px-2 border-slate-300 text-nowrap text-[15px] font-medium text-slate-800">
        {move.level}
      </TableCell>
    );
  }
  if (method === 'machine') {
    return (
      <TableCell className="border px-2 border-slate-300 text-nowrap text-[15px] font-medium text-slate-800">
        {move.machine_number}
      </TableCell>
    );
  }

  return null;
}
