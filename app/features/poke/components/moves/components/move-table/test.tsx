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

interface EggProps {
  moves: PokeMove[];
}

interface FirstHeaderCellProps {
  method: string;
}

function FirstHeaderCell({ method }: FirstHeaderCellProps) {
  if (method === 'level_up') {
    return (
      <TableHeaderCell headerKey="level" className="min-w-[3.85rem]" sortAble>
        Lv.
      </TableHeaderCell>
    );
  }
}

export default function Egg({ moves }: EggProps) {
  return (
    <Table tableData={moves} initialHeaderKey="name" sortFn={sortMoveTable}>
      <TableHeader>
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
