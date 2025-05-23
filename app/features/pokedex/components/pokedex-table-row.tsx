import Link from 'next/link';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import PokeImage from './poke-image';
import type { PokedexPoke } from '../types';

interface PokedexTableRowProps {
  poke: PokedexPoke;
}

export default function PokedexTableRow({ poke }: PokedexTableRowProps) {
  const { sprite, pokeKey, no, name, total, form, type1, type2, ...stats } =
    poke;

  const src = getHomePokeSprtieSrc(sprite);

  const statList = [
    { stat: 'hp', value: stats.hp },
    { stat: 'attack', value: stats.attack },
    { stat: 'defense', value: stats.defense },
    { stat: 'special_attack', value: stats.special_attack },
    { stat: 'special_defense', value: stats.special_defense },
    { stat: 'speed', value: stats.speed },
  ];

  const href = `/pokedex/${no}/${pokeKey}`;

  return (
    <tr className="h-[4.25rem] hover:bg-blue-50/80 border-b border-slate-300 transition-colors duration-200">
      <td className="pr-2.5 c-td-text text-right">{formatPokedexNumber(no)}</td>
      <td>
        <div className="flex">
          <div className="px-2 sm:px-3.5">
            <PokeImage src={src} alt={name} />
          </div>
          <div className="flex flex-col justify-center px-1.5 sm:px-3 xl:px-3.5">
            <Link href={href}>
              <div className="font-bold text-blue-800 truncate">{name}</div>
            </Link>
            {form && <div className="c-td-text text-slate-500">{form}</div>}
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-1 items-center justify-center">
          <PokeTypeBadge type={type1} />
          {type2 && <PokeTypeBadge type={type2} />}
        </div>
      </td>
      <td className="c-td-text px-3 text-right hidden md:table-cell">
        {total}
      </td>
      {statList.map(({ stat, value }) => (
        <td
          key={stat}
          className="c-td-text px-3 text-right hidden lg:table-cell"
        >
          {value}
        </td>
      ))}
    </tr>
  );
}
