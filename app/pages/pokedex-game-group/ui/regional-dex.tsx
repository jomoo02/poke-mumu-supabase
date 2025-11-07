import React from 'react';
import Link from 'next/link';

import { formatNumber } from '@/app/shared/lib';
import { TypeBadge } from '@/app/entities/type/ui/type-badge';
import { PokeSpriteWithBlur } from '@/app/entities/poke/ui';

import { type RegionalPoke } from '../model';

interface PokeCardProps {
  poke: RegionalPoke;
  maxLength: number;
}

interface RegionalDexProps {
  pokes: RegionalPoke[];
}

function PokeCard({ poke, maxLength }: PokeCardProps) {
  const href = `/pokedex/${poke.dexNumber}/${poke.pokeKey}`;
  const dexNumber = formatNumber(poke.regionalDexNumber, maxLength);
  const { name, typeDto1, typeDto2 } = poke;

  return (
    <div className="flex flex-col items-center w-full bg-white p-4 rounded-lg">
      <Link href={href}>
        <PokeSpriteWithBlur poke={poke} />
      </Link>
      <div className="text-muted-foreground">{`No.${dexNumber}`}</div>
      <Link
        href={href}
        className="hover:underline hover:underline-offset-2 text-lg mb-1 text-foreground"
      >
        {name}
      </Link>
      <div className="grid grid-cols-2 gap-1">
        <TypeBadge type={typeDto1} className="h-6.5 w-15" />
        {typeDto2 && <TypeBadge type={typeDto2} className="h-6.5 w-15" />}
      </div>
    </div>
  );
}

export default function RegionalDex({ pokes }: RegionalDexProps) {
  const maxLength = `${Math.max(
    ...pokes.map(({ regionalDexNumber }) => regionalDexNumber),
  )}`.length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <div>{pokes.length}</div>
      {pokes.map((poke) => (
        <PokeCard key={poke.id} poke={poke} maxLength={maxLength} />
      ))}
    </div>
  );
}
