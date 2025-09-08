'use client';

import DamageClassBadge from '@/app/components/badge/damage-class';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import { Fragment, useEffect, useState } from 'react';
import data from './bul.json';
import compareMove from './compare';

type Move = {
  // move_id: number;
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

function parsePercent(value: undefined | null | string) {
  if (value === null || value === undefined) return null;

  if (typeof value === 'string') {
    const cleaned = value.trim().replace('%', '');
    if (cleaned === '' || cleaned === '—') return null;
    const num = parseInt(cleaned, 10);
    return isNaN(num) ? null : num;
  }

  if (typeof value === 'number') {
    return value;
  }

  return null;
}

const joinType = (typeId: number) => {
  const typeIdMap: Record<number, string> = {
    1: 'normal',
    2: 'fighting',
    3: 'flying',
    4: 'poison',
    5: 'ground',
    6: 'rock',
    7: 'bug',
    8: 'ghost',
    9: 'steel',
    10: 'fire',
    11: 'water',
    12: 'grass',
    13: 'electric',
    14: 'psychic',
    15: 'ice',
    16: 'dragon',
    17: 'dark',
    18: 'fairy',
  };

  return typeIdMap[typeId];
};

const joinDamageClass = (id: number) => {
  const idMap: Record<number, string> = {
    1: 'status',
    2: 'physical',
    3: 'special',
    5: '???',
  };
  return idMap[id];
};

export default function MoveTable({ moves }: MoveTableProps) {
  // const { movesData } = data;
  const [formattedMoves, setFormattedMoves] = useState([]);

  console.log(moves.length);

  useEffect(() => {
    const fetchs = async () => {
      const d = await compareMove();

      const formatted = moves.map((move) => {
        const target = d.find(({ id }) => id === move.move_id);

        if (target) {
          const nameCheck =
            target.name_ko === move.name_ko && target.name_en === move.name_en;
          const typeCheck = joinType(target.type_id) === move.type;
          const damageClassCheck =
            joinDamageClass(target.damage_class_id) === move.damage_class;
          const powerCheck = target.power === move.power;
          const accuracyCheck = target.accuracy === move.accuracy;
          const ppCheck = target.pp === move.pp;

          return {
            nameCheck,
            typeCheck,
            damageClassCheck,
            powerCheck,
            accuracyCheck,
            ppCheck,
            ...move,
          };
        }
        return { ...move };
      });
      setFormattedMoves(formatted);
    };
    fetchs();
  }, []);

  // const formattedMoves = moves.map(
  //   ({
  //     move_id,
  //     name_en,
  //     type,
  //     damage_class,
  //     pp,
  //     power,
  //     accuracy,
  //     ...rest
  //   }) => {
  //     const target = movesData.find((d) => d[0] === move_id);
  //     if (target) {
  //       const acc = parsePercent(target[6]);
  //       return {
  //         ...rest,
  //         name_en,
  //         move_id,
  //         damage_class,
  //         pp,
  //         power,
  //         type,
  //         accuracy,
  //         nameCheck: target[1] === name_en,
  //         typeCheck: target[2].toLowerCase() === type.toLowerCase(),
  //         damageClassCheck:
  //           target[3].toLowerCase() === damage_class.toLowerCase(),
  //         ppCheck: target[4] === pp,
  //         powerCheck: target[5] === power,
  //         accuracyCheck: acc === accuracy,
  //       };
  //     }
  //     return {
  //       move_id,
  //       name_en,
  //       type,
  //       damage_class,
  //       pp,
  //       power,
  //       accuracy,
  //       ...rest,
  //     };
  //   },
  // );

  return (
    <div>
      <Table tableData={formattedMoves} initialHeaderKey="move_id">
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
              <Fragment key={row.move_id as number}>
                <TableRow>
                  <TableCell>{row.move_id}</TableCell>
                  <TableCell
                    className={row.nameCheck ? 'bg-blue-50' : 'bg-red-100'}
                  >
                    {row.name_ko}, {row.name_en}
                  </TableCell>
                  <TableCell
                    className={row.typeCheck ? 'bg-blue-50' : 'bg-red-100'}
                  >
                    {/* {row.type} */}
                    {typeof row.type === 'string' && (
                      <PokeTypeBadge type={row.type} />
                    )}
                  </TableCell>
                  <TableCell
                    className={
                      row.damageClassCheck ? 'bg-blue-50' : 'bg-red-100'
                    }
                  >
                    {typeof row.damage_class === 'string' ? (
                      <DamageClassBadge damageClass={row.damage_class} />
                    ) : (
                      <>{row.damage_class}</>
                    )}
                  </TableCell>
                  <TableCell
                    className={row.powerCheck ? 'bg-blue-50' : 'bg-red-100'}
                  >
                    {row.power || '-'}
                  </TableCell>
                  <TableCell
                    className={row.accuracyCheck ? 'bg-blue-50' : 'bg-red-100'}
                  >
                    {row.accuracy || '-'}
                  </TableCell>
                  <TableCell
                    className={row.ppCheck ? 'bg-blue-50' : 'bg-red-100'}
                  >
                    {row.pp}
                  </TableCell>
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
