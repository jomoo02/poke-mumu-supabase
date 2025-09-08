import { Fragment, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import { sortMoveTable } from './move-table.utils';
import Title from './title';
import type { Move } from '../../types/move';

interface LevelUpMoveTableProps {
  moves: Move[];
  versionGroup: string;
}

export default function FormMoveTable({
  moves,
  versionGroup,
}: LevelUpMoveTableProps) {
  const INITIAL_HEADER_KEY = 'name';
  const METHOD = 'levelUp';
  const [hoveredRowKey, setHoveredRowKey] = useState('');

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
                  headerKey="name"
                  className="min-w-36 w-36 max-w-36 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  기술
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="type"
                  className="min-w-20 w-20 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  타입
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="damageClass"
                  className="min-w-20 w-20 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  분류
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="power"
                  className="min-w-16 w-16 h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  위력
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="accuracy"
                  className="min-w-[4.5rem] w-[4.5rem] h-9.5 text-slate-700 font-medium text-[15px]"
                  sortAble
                >
                  명중
                </TableHeaderCell>
                <TableHeaderCell
                  headerKey="pp"
                  className="min-w-[4.5rem] w-[4.5rem] h-9.5 text-slate-700 font-medium text-[15px] rounded-tr-md"
                  sortAble
                >
                  PP
                </TableHeaderCell>
              </TableHeader>
              <TableBody className="">
                {(rows) =>
                  rows.map((row) => (
                    <Fragment key={row.form as string}>
                      <TableRow
                        onMouseEnter={() =>
                          setHoveredRowKey(row.form as string)
                        }
                        onMouseLeave={() => setHoveredRowKey('')}
                        className={`${hoveredRowKey === row.form ? 'bg-neutral-100' : ''} h-9 transition duration-100`}
                      >
                        <TableCell className="text-nowrap text-[15px] text-slate-800 font-medium px-2">
                          {row.name} - {row.moveId}
                        </TableCell>
                        <TableCell
                          align="left"
                          className="px-2 text-nowrap text-[15px] text-slate-800"
                        >
                          {typeof row.type === 'string' && (
                            <PokeTypeBadge type={row.type} />
                          )}
                        </TableCell>
                        <TableCell
                          align="left"
                          className="px-2 text-nowrap text-[15px] text-slate-800"
                        >
                          {typeof row.damageClass === 'string' && (
                            <DamageClassBadge damageClass={row.damageClass} />
                          )}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-2.5 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.power || '—'}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-2.5 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.accuracy || '—'}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="px-2.5 text-nowrap text-[15px] text-slate-800"
                        >
                          {row.pp || '—'}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        onMouseEnter={() =>
                          setHoveredRowKey(row.form as string)
                        }
                        onMouseLeave={() => setHoveredRowKey('')}
                        className={`${hoveredRowKey === row.form ? 'bg-neutral-100' : ''} transition duration-100`}
                      >
                        <TableCell
                          colSpan={7}
                          className="px-2 py-0.5 max-w-[550px]"
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
