'use client';

import React, { memo } from 'react';
import Link from 'next/link';

import { cn } from '@/app/lib/utils';
import { TypeIcon } from '@/app/entities/type/ui';
import { PokeSprite } from '@/app/entities/poke/ui';
import { formatNumber } from '@/app/shared/lib';

import { NationalPoke, usePokedexContext } from '../model';

interface StatProps {
  content: string;
  value: number;
  className?: string;
  isSelect?: boolean;
}

interface PokeCardProps {
  poke: NationalPoke;
}

function Stat({ content, value, className, isSelect = false }: StatProps) {
  return (
    <div className={cn('grid grid-cols-2', className)}>
      <div className="text-sm text-muted-foreground text-right">{content}</div>
      <div
        className={cn(
          'text-sm text-center',
          isSelect && 'font-semibold text-primary',
        )}
      >
        {value}
      </div>
    </div>
  );
}

const PokeCard = memo(
  function PokeCard({ poke }: PokeCardProps) {
    const {
      name,
      form,
      typeDto1,
      typeDto2,
      total,
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
    } = poke;
    const dexNumber = formatNumber(poke.dexNumber);

    const { sortingState } = usePokedexContext();

    const href = `/pokedex/${poke.dexNumber}/${poke.pokeKey}`;

    return (
      <Link
        href={href}
        className={cn(
          'outline-none focus-visible:border-ring border border-border rounded-xl focus-visible:ring-ring/50 focus-visible:ring-[3px] transition hover:-translate-y-0.5 shadow-sm hover:shadow-md p-4',
          'active:bg-accent/50',
        )}
        aria-label={`${name} 상세 페이지로 이동`}
      >
        <div className="flex w-full  z-0">
          <div className="flex justify-center min-w-26 w-26">
            <PokeSprite poke={poke} className="w-15 h-15" />
          </div>
          <div className="flex flex-1 h-full">
            <div className="overflow-hidden min-w-0 truncate flex-1 h-full flex flex-col pt-1">
              <div className="text-muted-foreground text-sm">
                No.{dexNumber}
              </div>
              <div className="text-foreground min-w-0 truncate">{name}</div>
              <div className="text-muted-foreground text-sm truncate min-w-0 min-h-5">
                {form}
              </div>
            </div>
          </div>
          <div className="flex gap-2 min-w-16 w-16 items-center">
            <TypeIcon type={typeDto1} className="size-6.25" />
            {typeDto2 && <TypeIcon type={typeDto2} className="size-6.25" />}
          </div>
        </div>
        <div className="grid grid-cols-3 items-center">
          <Stat
            content="총합"
            value={total}
            className="col-start-3"
            isSelect={sortingState.id === 'total'}
          />
        </div>

        <div className="grid grid-cols-3 pt-1.5 relative z-0">
          <Stat content="HP" value={hp} isSelect={sortingState.id === 'hp'} />
          <Stat
            content="공격"
            value={attack}
            isSelect={sortingState.id === 'attack'}
          />
          <Stat
            content="방어"
            value={defense}
            isSelect={sortingState.id === 'defense'}
          />
          <Stat
            content="특수공격"
            value={specialAttack}
            isSelect={sortingState.id === 'specialAttack'}
          />
          <Stat
            content="특수방어"
            value={specialDefense}
            isSelect={sortingState.id === 'specialDefense'}
          />
          <Stat
            content="스피드"
            value={speed}
            isSelect={sortingState.id === 'speed'}
          />
        </div>
      </Link>
    );
  },
  // (prev, next) => prev.poke.pokeKey === next.poke.pokeKey,
);

export default function NationalDex() {
  const { pokes, isPending } = usePokedexContext();

  return (
    <div
      className={cn(
        'grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 transition-opacity',
        isPending ? 'opacity-40 pointer-events-none' : 'pointer-events-auto',
      )}
    >
      {pokes.map((poke) => (
        <PokeCard key={poke.id} poke={poke} />
      ))}
    </div>
  );
}
