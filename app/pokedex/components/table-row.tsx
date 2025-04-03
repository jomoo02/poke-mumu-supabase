import Link from 'next/link';
import PokeImage from './poke-image';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import type { PokedexPoke } from '../utils/set-pokedex-poke-list';

interface TableRowProps {
  poke: PokedexPoke;
}

export default function TableRow({ poke }: TableRowProps) {
  const {
    sprite,
    pokeKey,
    no,
    name,
    total,
    form,
    type1,
    type2,
    species,
    ...stats
  } = poke;

  const src = getHomePokeSprtieSrc(sprite);

  const statList = [
    { stat: 'hp', value: stats.hp },
    { stat: 'attack', value: stats.attack },
    { stat: 'defense', value: stats.defense },
    { stat: 'special_attack', value: stats.special_attack },
    { stat: 'special_defense', value: stats.special_defense },
    { stat: 'speed', value: stats.speed },
  ];

  const href =
    species === pokeKey
      ? `/pokedex/${species}`
      : `/pokedex/${species}/${pokeKey}`;

  return (
    <tr className="h-[4.25rem] hover:bg-slate-200/40 border-b border-slate-300 transition-colors duration-100">
      <td className="pr-2.5 text-sm text-slate-600 font-semibold text-right">
        {formatPokedexNumber(no)}
      </td>
      <td>
        <div className="flex">
          <div className="px-2 sm:px-3.5">
            <PokeImage src={src} alt={name} />
          </div>
          <div className="flex flex-col justify-center px-1.5 sm:px-3 xl:px-3.5">
            <Link href={href}>
              <div className="font-bold text-blue-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-full ">
                {name}
              </div>
            </Link>
            {form && (
              <div className="text-sm font-semibold text-slate-600">{form}</div>
            )}
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-1 items-center justify-center">
          <PokeTypeBadge type={type1} />
          {type2 && <PokeTypeBadge type={type2} />}
        </div>
      </td>
      <td className="px-3 font-semibold text-slate-700 text-right text-sm hidden md:table-cell">
        {total}
      </td>
      {statList.map(({ stat, value }) => (
        <td
          key={stat}
          className="px-3 font-semibold text-slate-700 text-right text-sm hidden lg:table-cell"
        >
          {value}
        </td>
      ))}
    </tr>
  );
}
