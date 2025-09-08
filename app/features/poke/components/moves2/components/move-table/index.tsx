import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import type { MachineType } from '../../types';
import { sortMoveTable } from './move-table.utils';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import { FirstHeaderCell, FirstRowCell } from './first-cell';
import Title from './title';
import { Fragment } from 'react';
import type { FormattedVersionMove } from '../../utils/format';

interface MoveTableProps {
  method: string;
  moves: (FormattedVersionMove & { level?: number })[];
  machineType?: MachineType;
  versionGroup: string;
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
  versionGroup,
}: MoveTableProps) {
  // console.log(method, moves, machineType, versionGroup);
  const initialHeaderKey = setInitHeaderKey(method);

  return (
    <div className="overflow-hidden">
      <Title method={method} machineType={machineType} />
      <div className="overflow-x-auto">
        <div className="flex">
          <div className="border border-gray-200 rounded-md overflow-auto">
            <Table
              tableData={moves}
              initialHeaderKey={initialHeaderKey}
              sortFn={sortMoveTable}
              resetTrigger={versionGroup}
              className="table-fixed"
            >
              <TableHeader>
                <FirstHeaderCell method={method} machineType={machineType} />
                <TableHeaderCell
                  headerKey="name"
                  className="min-w-40 w-44 px-1 max-w-44 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  기술
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="type"
                  className="min-w-20 w-24 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  타입
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="damageClass"
                  className="min-w-20 w-24 h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  분류
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="power"
                  className="min-w-20 w-24 h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  위력
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="accuracy"
                  className="min-w-20 w-24 h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  명중률
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="pp"
                  className="min-w-16 w-20 h-9.5 px-1 text-slate-700 font-medium text-[15px] rounded-tr-md"
                  sortAble
                >
                  PP
                </TableHeaderCell>
              </TableHeader>
              <TableBody className="">
                {(rows) =>
                  rows.map((row, index) => (
                    <Fragment key={index}>
                      <TableRow className="h-9">
                        <FirstRowCell method={method} move={row} />
                        <TableCell className="px-3 text-nowrap text-[15px] text-slate-800">
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="center"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {typeof row.type === 'string' && (
                            <PokeTypeBadge type={row.type} />
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {typeof row.damageClass === 'string' && (
                            <DamageClassBadge damageClass={row.damageClass} />
                          )}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.power || '—'}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.accuracy || '—'}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.pp || '—'}
                        </TableCell>
                      </TableRow>
                      {/* <TableRow>
                        <TableCell
                          colSpan={7}
                          className="px-2 py-0.5 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.description}
                        </TableCell>
                      </TableRow> */}
                    </Fragment>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
