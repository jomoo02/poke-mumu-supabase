import Image from 'next/image';
import Link from 'next/link';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import useLocalStoragePoke from '../hooks/useLocalStoragePoke';
import type { SearchPoke } from '../types';

interface SearchResultPokeProps {
  poke: SearchPoke;
}

export default function SearchResultPoke({ poke }: SearchResultPokeProps) {
  const { addPokeToLocalPokeList } = useLocalStoragePoke();
  const {
    no,
    sprite,
    form,
    name_ko: nameKo,
    name_en: nameEn,
    type_1: type1,
    type_2: type2,
    poke_key: pokeKey,
  } = poke;

  const src = getHomePokeSprtieSrc(sprite);

  const handleLinkOnClick = () => addPokeToLocalPokeList(poke);

  return (
    <Link
      href={`/pokedex/${no}/${pokeKey}`}
      onClick={handleLinkOnClick}
      className="outline-none block w-full h-full focus-visible:inset-ring ring-gray-600"
    >
      <div className="flex w-full h-full items-center overflow-hidden gap-x-2 sm:gap-x-4 px-2.5 lg:px-4.5 active:bg-neutral-100 hover:bg-neutral-100 transition-colors duration-100">
        <div className="text-slate-800 w-9 text-[15px]">
          {formatPokedexNumber(no)}
        </div>
        <div className="relative w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] mx-1 lg:mx-2 flex-shrink-0">
          <Image
            src={src}
            alt={nameEn}
            fill
            sizes="40px"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <p className="flex flex-1 flex-col overflow-hidden justify-center leading-tight">
          <span className="text-slate-800 truncate">{nameKo}</span>
          {form && (
            <span className="text-sm text-slate-700 truncate">{form}</span>
          )}
        </p>
        <div className="flex flex-col gap-y-1 items-center">
          <PokeTypeBadge type={type1} />
          {type2 && <PokeTypeBadge type={type2} />}
        </div>
      </div>
    </Link>
  );
}
