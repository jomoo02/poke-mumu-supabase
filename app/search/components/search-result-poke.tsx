import Image from 'next/image';
import Link from 'next/link';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import useLocalStoragePoke from '../hooks/useLocalStoragePoke';
import type { SearchPoke } from '../lib/poke';

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
    <Link href={`/pokedex/${no}/${pokeKey}`} onClick={handleLinkOnClick}>
      <div className="flex w-full h-full items-center overflow-hidden gap-x-2 sm:gap-x-3 px-1.5 xs:px-2.5 lg:px-3 active:bg-blue-200/50 hover:bg-blue-200/50">
        <div className="text-slate-600 w-9">{formatPokedexNumber(no)}</div>
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
        <p className="overflow-hidden flex flex-1 flex-col justify-center">
          <span className="truncate text-sm/5 lg:text-[15px]">{nameKo}</span>
          <span className="truncate text-sm/4 lg:text-[15px]">{nameEn}</span>
          <span className="truncate text-xs lg:text-[13px] leading-5 text-slate-500">
            {form}
          </span>
        </p>
        <div className="flex flex-col gap-y-1 items-center lg:gap-y-1.5">
          <PokeTypeBadge type={type1} />
          {type2 && <PokeTypeBadge type={type2} />}
        </div>
      </div>
    </Link>
  );
}
