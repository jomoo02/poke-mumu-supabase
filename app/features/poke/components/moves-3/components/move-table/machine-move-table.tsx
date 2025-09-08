import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import { Fragment } from 'react';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import { sortMoveTable } from './move-table.utils';
import Title from './title';
import type { Move, MachineType } from '../../types/move';

interface MachineMoveTableProps {
  moves: Move[];
  versionGroup: string;
  machineType: MachineType;
}

export default function MachineMoveTable({
  moves,
  versionGroup,
  machineType,
}: MachineMoveTableProps) {
  const INITIAL_HEADER_KEY = 'machine';
  const METHOD = machineType;

  return (
    <div className="overflow-hidden">
      <Title method={METHOD} />
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-md overflow-auto">
            <Table
              tableData={moves}
              initialHeaderKey={INITIAL_HEADER_KEY}
              sortFn={sortMoveTable}
              resetTrigger={versionGroup}
              className="table-fixed"
            >
              <TableHeader>
                <TableHeaderCell
                  headerKey="machine"
                  className="min-w-[4.5rem] w-[4.5rem] px-1 h-9.5 text-slate-700 font-medium text-[15px] rounded-tl-md"
                  sortAble
                >
                  {machineType}
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="name"
                  className="min-w-40 w-40 max-w-40 px-1 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  기술
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="type"
                  className="min-w-[6.5rem] w-[6.5rem] h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  타입
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="damageClass"
                  className="min-w-[6.5rem] w-[6.5rem] h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  분류
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="power"
                  className="min-w-24 w-24 max-w-24 h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  위력
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="accuracy"
                  className="min-w-24 w-24 max-w-24 h-9.5 px-1 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  명중률
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="pp"
                  className="min-w-20 w-20 max-w-20 h-9.5 px-1 text-slate-700 font-medium text-[15px] rounded-tr-md"
                  sortAble
                >
                  PP
                </TableHeaderCell>
              </TableHeader>
              <TableBody className="">
                {(rows) =>
                  rows.map((row, index) => (
                    <Fragment key={index}>
                      <TableRow className="h-9 hover:bg-neutral-50 transition duration-100">
                        <TableCell className="px-2.5 text-nowrap text-[15px] text-slate-800">
                          {row.machineNumber}
                        </TableCell>
                        <TableCell className="px-2.5 text-nowrap text-[15px] text-slate-800 font-medium">
                          {row.name} - {row.moveId}
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
                          {row.accuracy ? `${row.accuracy}%` : '—'}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-3 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.pp || '—'}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          className="px-2 py-0.5 min-w-[600px] max-w-[600px]"
                        >
                          <p className="truncate text-[15px] text-slate-800">
                            {row.description}
                          </p>
                        </TableCell>
                      </TableRow>
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
