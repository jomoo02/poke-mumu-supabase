import Link from 'next/link';
import PokeImage from './poke-image';
import { getHomePokeSprtieSrc } from '@/app/utils/get-sprite';
import PokeTypeBadge from '@/app/components/badge/poke-type';

interface PokeCardProps {
  name: string;
  form: string | null;
  type1: string;
  type2: string | null;
  sprite: string;
  pokeKey: string;
  no: number;
  // pokeStat: {
  //   hp: number;
  //   attack: number;
  // };
}

export default function PokeCard({
  name,
  form,
  type1,
  type2,
  pokeKey,
  no,
  // pokeStat,
  sprite,
}: PokeCardProps) {
  const src = getHomePokeSprtieSrc(sprite);

  return (
    <div className="flex items-stretch h-16 hover:bg-blue-100">
      <div className="min-w-[4rem] w-[4rem] xl:min-w-[4.5rem] xl:w-[4.5rem]  px-2.5 flex items-center text-[13px] xl:text-sm text-slate-600 font-semibold">
        {`#${no}`}
      </div>
      <div className="flex grow px-2">
        <div className="flex items-center px-2">
          <PokeImage src={src} alt={name} />
        </div>
        <div className="grid grow items-center px-3 xl:px-3.5">
          <div>
            <Link
              href={`/pokedex/${pokeKey}`}
              className="font-bold text-blue-800 leading-4"
            >
              {name}
            </Link>
            {form && <div>{form}</div>}
          </div>
        </div>
      </div>
      <div className="min-w-24 w-24 px-2 flex flex-col gap-y-1 items-center justify-center">
        <PokeTypeBadge type={type1} />
        {type2 && <PokeTypeBadge type={type2} />}
      </div>
    </div>
  );
}
