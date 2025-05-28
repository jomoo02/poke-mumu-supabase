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
      className="outline-zinc-600"
    >
      <div className="flex w-full h-full items-center overflow-hidden gap-x-2 sm:gap-x-4 px-2.5 lg:px-4.5 active:bg-zinc-100/80 hover:bg-zinc-100/80">
        <div className="text-zinc-900 w-9 text-[15px] font-medium">
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
        <p className="flex flex-1 flex-col overflow-hidden justify-center leading-tight font-medium">
          <span className="text-zinc-900 truncate text-[15px]">{nameKo}</span>
          {form && (
            <span className="text-sm text-zinc-600 truncate">{form}</span>
          )}

          {/* <span className="text-[14px] text-zinc-600 truncate ">{nameEn}</span> */}
        </p>
        <div className="flex flex-col gap-y-1 items-center lg:gap-y-1.5">
          <PokeTypeBadge type={type1} />
          {type2 && <PokeTypeBadge type={type2} />}
        </div>
      </div>
    </Link>
  );
}
