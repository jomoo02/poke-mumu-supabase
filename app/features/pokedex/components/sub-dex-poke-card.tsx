import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import { cn } from '@/app/lib/utils';
import type { VersionGroupPoke } from '../api/pokdex-version-group';

interface SubDexPokeCardProps {
  poke: VersionGroupPoke;
}

export default function SubDexPokeCard({ poke }: SubDexPokeCardProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <Link href={`/pokedex/${poke.no}/${poke.pokeKey}`}>
        <div className="w-14 h-14 relative">
          <Image
            placeholder="blur"
            blurDataURL="/pokeball.svg"
            src={getHomePokeSprtieSrc(poke.sprite)}
            // src="/pokeball.svg"
            alt={poke.name}
            fill
            sizes="64px"
            style={{
              objectFit: 'contain',
            }}
            priority={false}
          />
        </div>
      </Link>

      <div className="text-muted-foreground">
        No.{formatPokedexNumber(poke.regionalDexNumber)}
      </div>
      <div className="mb-1">
        <Link
          href={`/pokedex/${poke.no}/${poke.pokeKey}`}
          className="hover:underline hover:underline-offset-2"
        >
          <span className="text-lg">{poke.name}</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <PokeTypeBadge type={poke.type1} className="h-6.5 w-15" />
        {poke.type2 && (
          <PokeTypeBadge type={poke.type2} className="h-6.5 w-15" />
        )}
      </div>
    </div>
  );
}
