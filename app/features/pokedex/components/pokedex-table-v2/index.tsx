'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import type { PokedexPoke } from '../../types';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import PokeImage from '../poke-image';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import Link from 'next/link';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';

interface PokedexTableProps {
  pokeList: PokedexPoke[];
}

export default function PokedexTableV2({ pokeList }: PokedexTableProps) {
  const sortFn = (a: PokedexPoke, b: PokedexPoke, sortKey: string) => {
    const compareFnList: Record<
      string,
      (a: PokedexPoke, b: PokedexPoke) => number
    > = {
      no: (a, b) => a.no - b.no,
      name: (a, b) => a.name.localeCompare(b.name),
      total: (a, b) => a.total - b.total,
      hp: (a, b) => a.hp - b.hp,
      attack: (a, b) => a.attack - b.attack,
      defense: (a, b) => a.defense - b.defense,
      specialAttack: (a, b) => a.special_attack - b.special_attack,
      specialDefense: (a, b) => a.special_defense - b.special_defense,
      speed: (a, b) => a.speed - b.speed,
    };

    const compare = compareFnList[sortKey];

    return compare ? compare(a, b) : 0;
  };

  return (
    <div>
      <Table
        tableData={pokeList}
        initialHeaderKey="no"
        sortFn={sortFn}
        className="w-full table-fixed border-separate border-spacing-0"
      >
        <TableHeader
          className="top-[55px] z-50 sticky bg-white shadow-[inset_-1px_0_0_0_rgba(229,231,235,1)]"
          color="bg-neutral-100"
        >
          <TableHeaderCell
            headerKey="no"
            sortAble
            className="h-10 px-0.5 text-[15px] text-slate-800 font-medium min-w-[4.15rem] w-[4.15rem] xl:min-w-[4.15rem] border-x border-white"
          >
            번호
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="name"
            sortAble
            className="px-0.5  text-slate-800 text-[15px] font-medium h-10 border-x border-white w-full"
          >
            이름
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="type"
            align="center"
            className="px-0.5 border-x border-white text-slate-800 text-[15px] font-medium h-10 min-w-20 w-20 max-w-20"
          >
            타입
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="total"
            sortAble
            className="px-0.5 hidden md:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            종족값
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="hp"
            sortAble
            className="px-0.5 hidden lg:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            체력
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="attack"
            sortAble
            className="px-0.5 hidden lg:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            공격
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="defense"
            sortAble
            className="px-0.5 hidden lg:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            방어
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="specialAttack"
            sortAble
            className="px-0.5 hidden lg:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            특수공격
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="specialDefense"
            sortAble
            className="px-0.5 hidden lg:table-cell border-x border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            특수방어
          </TableHeaderCell>
          <TableHeaderCell
            headerKey="speed"
            sortAble
            className="px-0.5 hidden lg:table-cell border-l border-white text-slate-800 text-[15px] font-medium h-10 'min-w-[5.5rem] w-[5.5rem] max-w-[5.5rem]"
          >
            스피드
          </TableHeaderCell>
        </TableHeader>

        <TableBody>
          {(pokeList) =>
            pokeList.map((poke, index) => (
              <TableRow key={index} className="h-[4.25rem]">
                <TableCell
                  align="right"
                  className="text-slate-800 text-[15px] px-2.5 font-normal border-b border-gray-200"
                >
                  {typeof poke.no === 'number' && formatPokedexNumber(poke.no)}
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  {typeof poke.sprite === 'string' && (
                    <div className="flex">
                      <div className="px-2 lg:px-3.5">
                        <PokeImage
                          src={getHomePokeSprtieSrc(poke.sprite)}
                          alt={poke.sprite}
                        />
                      </div>
                      <div className="flex flex-col justify-center px-1.5 lg:px-3">
                        <Link
                          href={`/pokedex/${poke.no}/${poke.pokeKey}`}
                          className="hover:underline underline-offset-2 decoration-slate-800"
                        >
                          <div className="truncate w-auto text-slate-800 font-medium">
                            {poke.name}
                          </div>
                        </Link>
                        {poke.form && (
                          <div className="text-slate-700 text-sm">
                            {poke.form}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </TableCell>
                <TableCell className="border-b border-gray-200">
                  <div className="flex flex-col justify-center items-center gap-1">
                    {typeof poke.type1 === 'string' && (
                      <PokeTypeBadge type={poke.type1} />
                    )}
                    {typeof poke.type2 === 'string' && (
                      <PokeTypeBadge type={poke.type2} />
                    )}
                  </div>
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden md:table-cell border-b border-gray-200"
                >
                  {poke.total}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.hp}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.attack}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.defense}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.special_attack}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.special_defense}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-[15px] font-normal text-slate-800 px-2 hidden lg:table-cell border-b border-gray-200"
                >
                  {poke.speed}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
