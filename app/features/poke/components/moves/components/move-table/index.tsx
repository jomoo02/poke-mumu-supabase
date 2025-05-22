import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import type { MachineType, PokeMove } from '../../types';
import { sortMoveTable } from './move-table.utils';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import { FirstHeaderCell, FirstRowCell } from './first-cell';
import Title from './title';

interface MoveTableProps {
  method: string;
  moves: PokeMove[];
  machineType?: MachineType;
}

const setInitHeaderKey = (method: string) => {
  if (method === 'level_up') {
    return 'level';
  }
  if (method === 'machine') {
    return 'machine';
  }
  return 'name';
};

export default function MoveTable({
  method,
  moves,
  machineType,
}: MoveTableProps) {
  const initialHeaderKey = setInitHeaderKey(method);
  return (
    <div className="overflow-hidden">
      <Title method={method} machineType={machineType} />
      <div className="overflow-x-auto">
        <Table
          tableData={moves}
          initialHeaderKey={initialHeaderKey}
          sortFn={sortMoveTable}
        >
          <TableHeader>
            <FirstHeaderCell method={method} machineType={machineType} />
            <TableHeaderCell
              headerKey="name"
              className="min-w-40 w-44 max-w-44 h-9.5"
              sortAble
            >
              기술
            </TableHeaderCell>
            <TableHeaderCell
              headerKey="type"
              className="min-w-20 w-24 h-9.5"
              sortAble
            >
              타입
            </TableHeaderCell>
            <TableHeaderCell
              headerKey="damageClass"
              className="min-w-20 w-24 h-9.5"
              sortAble
            >
              분류
            </TableHeaderCell>
            <TableHeaderCell
              headerKey="power"
              className="min-w-20 w-24 h-9.5"
              sortAble
            >
              위력
            </TableHeaderCell>
            <TableHeaderCell
              headerKey="accuracy"
              className="min-w-20 w-24 h-9.5"
              sortAble
            >
              명중률
            </TableHeaderCell>
          </TableHeader>
          <TableBody className="">
            {(rows) =>
              rows.map((row, index) => (
                <TableRow key={index} className="h-9">
                  <FirstRowCell method={method} move={row} />
                  <TableCell className="px-3 text-nowrap text-[15px] font-medium text-zinc-950">
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="px-3 text-nowrap text-[15px] text-zinc-950"
                  >
                    {typeof row.type === 'string' && (
                      <PokeTypeBadge type={row.type} />
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="px-3 text-nowrap text-[15px] text-zinc-950"
                  >
                    {typeof row.damage_class === 'string' && (
                      <DamageClassBadge damageClass={row.damage_class} />
                    )}
                  </TableCell>
                  <TableCell
                    align="right"
                    className="px-3 text-nowrap text-[15px] text-zinc-950"
                  >
                    {row.power || '—'}
                  </TableCell>
                  <TableCell
                    align="right"
                    className="px-3 text-nowrap text-[15px] text-zinc-950"
                  >
                    {row.accuracy || '—'}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
