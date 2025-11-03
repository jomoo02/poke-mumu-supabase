import Link from 'next/link';

import { PokeSprite } from '@/app/entities/poke/ui';
import { TypeBadge } from '@/app/entities/type/ui';
import { formatNumber } from '@/app/shared/lib';

import useLocalStoragePoke from '../model/useLocalStoragePoke';
import type { SearchPoke } from '../model';

interface SearchResultPokeProps {
  poke: SearchPoke;
}

export default function SearchResultPoke({ poke }: SearchResultPokeProps) {
  const { addPokeToLocalPokeList } = useLocalStoragePoke();
  const { dexNumber, form, name, typeDto1, typeDto2, pokeKey } = poke;

  const formattedDexNumber = formatNumber(dexNumber);

  const handleLinkOnClick = () => addPokeToLocalPokeList(poke);

  return (
    <Link
      href={`/pokedex/${dexNumber}/${pokeKey}`}
      onClick={handleLinkOnClick}
      className="outline-none block w-full h-full focus-visible:inset-ring ring-gray-600"
    >
      <div className="flex w-full h-full items-center overflow-hidden px-2.5 lg:px-4.5 active:bg-neutral-100 hover:bg-neutral-100 transition-colors duration-100">
        <div className="text-foreground text-sm w-14">
          #{formattedDexNumber}
        </div>
        <div className="mr-4">
          <PokeSprite poke={poke} />
        </div>

        {/* <div className="relative w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] mx-1 lg:mx-2 flex-shrink-0">
          <Image
            src={src}
            alt={nameEn}
            fill
            sizes="40px"
            style={{
              objectFit: 'contain',
            }}
          />
        </div> */}
        <p className="flex flex-1 flex-col overflow-hidden justify-center leading-tight">
          <span className="text-slate-800 truncate">{name}</span>
          {form && (
            <span className="text-sm text-slate-700 truncate">{form}</span>
          )}
        </p>
        <div className="flex flex-col gap-y-1 items-center">
          <TypeBadge type={typeDto1} />
          {typeDto2 && <TypeBadge type={typeDto2} />}
        </div>
      </div>
    </Link>
  );
}
