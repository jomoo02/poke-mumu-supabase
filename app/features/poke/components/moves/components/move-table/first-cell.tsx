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
      <TableHeaderCell
        headerKey="level"
        className="min-w-[4.5rem] px-1 w-20 h-9.5 text-slate-700 font-medium text-[15px] rounded-tl-md"
        sortAble
      >
        Lv.
      </TableHeaderCell>
    );
  }
  if (method === 'machine') {
    return (
      <TableHeaderCell
        headerKey="machine"
        className="min-w-[4.5rem] px-1 w-20 h-9.5 text-slate-700 font-medium text-[15px] rounded-tl-md"
        sortAble
      >
        {machineType}
      </TableHeaderCell>
    );
  }
  return null;
}

export function FirstRowCell({ method, move }: FirstRowCellProps) {
  if (method === 'level_up') {
    return (
      <TableCell className="px-3 text-nowrap text-[15px] text-slate-800">
        {move.level}
      </TableCell>
    );
  }
  if (method === 'machine') {
    return (
      <TableCell className="px-3 text-nowrap text-[15px] text-slate-800">
        {move.machine_number}
      </TableCell>
    );
  }

  return null;
}
