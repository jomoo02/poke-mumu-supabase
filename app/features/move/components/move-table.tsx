'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import { Fragment } from 'react';

// type Move = {
//   id: number;
//   name: string;
//   type: string;
//   damageClass: string;
//   power: number | null;
//   accuracy: number | null;
//   pp: number | null;
// };

type Move = {
  id: number;
  move_id: number;
  name_ko: string;
  name_en: string;
  name_ja: string;
  type: string;
  power: number | null;
  accuracy: number | null;
  damage_class: string;
  pp: number | null;
  move_number: number;
  identifier: string;
  description: string;
};

interface MoveTableProps {
  moves: Move[];
}

export default function MoveTable({ moves }: MoveTableProps) {
  return (
    <div>
      <Table tableData={moves} initialHeaderKey="id">
        <TableHeader>
          <TableHeaderCell
            headerKey="id"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            번호
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="name"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            이름
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="type"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            타입
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="damgeClass"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            분류
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="power"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            위력
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="accurcay"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            명중률
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="pp"
            className="min-w-24 w-24 px-1 h-9 text-slate-800 font-medium"
          >
            PP
          </TableHeaderCell>
        </TableHeader>
        <TableBody>
          {(rows) =>
            rows.map((row) => (
              <Fragment key={row.id as number}>
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name_ko}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.damage_class}</TableCell>
                  <TableCell>{row.power}</TableCell>
                  <TableCell>{row.accuracy}</TableCell>
                  <TableCell>{row.pp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={7}>{row.description}</TableCell>
                </TableRow>
              </Fragment>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
