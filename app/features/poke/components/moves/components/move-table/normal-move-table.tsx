import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import type { PokeMove } from '../../types';
import { sortMoveTable } from './move-table.utils';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';

interface FirstHeaderCellProps {
  method: string;
}

interface FirstRowCellProps extends FirstHeaderCellProps {
  row: Record<string, string | number | boolean | null | undefined>;
}

interface NormalMoveTableProps extends FirstHeaderCellProps {
  moves: PokeMove[];
}

const setInitHeaderKey = (method: string) =>
  method === 'level_up' ? 'level' : 'name';

function FirstHeaderCell({ method }: FirstHeaderCellProps) {
  if (method === 'level_up') {
    return (
      <TableHeaderCell headerKey="level" className="min-w-[3.85rem]" sortAble>
        Lv.
      </TableHeaderCell>
    );
  }
  return null;
}

function FirstRowCell({ method, row }: FirstRowCellProps) {
  if (method === 'level_up') {
    return (
      <TableCell className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700">
        {row.level}
      </TableCell>
    );
  }
  return null;
}

export default function NormalMoveTable({
  method,
  moves,
}: NormalMoveTableProps) {
  const initialHeaderKey = setInitHeaderKey(method);
  return (
    <Table
      tableData={moves}
      initialHeaderKey={initialHeaderKey}
      sortFn={sortMoveTable}
    >
      <TableHeader>
        <FirstHeaderCell method={method} />
        <TableHeaderCell headerKey="name" className="min-w-[10rem]" sortAble>
          기술
        </TableHeaderCell>
        <TableHeaderCell headerKey="type" className="min-w-[5.25rem]" sortAble>
          타입
        </TableHeaderCell>
        <TableHeaderCell
          headerKey="damageClass"
          className="min-w-[5.25rem]"
          sortAble
        >
          분류
        </TableHeaderCell>
        <TableHeaderCell headerKey="power" className="min-w-[5.25rem]" sortAble>
          위력
        </TableHeaderCell>
        <TableHeaderCell
          headerKey="accuracy"
          className="min-w-[5.25rem]"
          sortAble
        >
          명중률
        </TableHeaderCell>
      </TableHeader>
      <TableBody className="">
        {(rows) =>
          rows.map((row, index) => (
            <TableRow key={index} className="h-9">
              <FirstRowCell method={method} row={row} />
              <TableCell className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700">
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700"
              >
                <PokeTypeBadge type={row.type} />
              </TableCell>
              <TableCell
                align="center"
                className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700"
              >
                <DamageClassBadge damageClass={row.damage_class} />
              </TableCell>
              <TableCell
                align="right"
                className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700"
              >
                {row.power || '—'}
              </TableCell>
              <TableCell
                align="right"
                className="border px-2 border-slate-300 text-nowrap text-sm font-semibold text-slate-700"
              >
                {row.accuracy || '—'}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}
