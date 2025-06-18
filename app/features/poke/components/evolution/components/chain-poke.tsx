import Image from 'next/image';
import Link from 'next/link';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';

interface ChainPokeProps {
  poke: {
    id: number;
    no: number;
    name: string;
    form: string | null;
    sprite: string;
    pokeKey: string;
  };
}

export default function ChainPoke({ poke }: ChainPokeProps) {
  const { no, name, form, sprite, pokeKey } = poke;

  const src = getHomePokeSprtieSrc(sprite);
  // const src = '/pokeball.svg';
  const href = `/pokedex/${no}/${pokeKey}`;

  return (
    <div className="flex flex-col items-center w-[130px] pt-2">
      <Link href={href}>
        <div className="w-[4.5rem] h-[4.5rem] relative my-1">
          <Image
            src={src}
            alt={name}
            fill
            sizes="72px"
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Link>
      <div className="text-sm text-slate-800">No.{formatPokedexNumber(no)}</div>
      <Link
        href={href}
        className="text-slate-800 font-medium hover:underline underline-offset-2 decoration-slate-800"
      >
        {name}
      </Link>
      <div className="text-sm text-slate-700 h-5">{form}</div>
    </div>
  );
}
