import Link from 'next/link';
import PokeImage from './poke-card/poke-image';
import { getHomePokeSprtieSrc } from '@/app/utils/get-sprite';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';

interface PokedexTableRowProps {
  name: string;
  form: string | null;
  type1: string;
  type2: string | null;
  sprite: string;
  pokeKey: string;
  no: number;
  pokeStat: {
    attack: number;
    defense: number;
    hp: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  } | null;
}

export default function PokedexTableRow({
  name,
  form,
  type1,
  type2,
  pokeKey,
  no,
  pokeStat,
  sprite,
}: PokedexTableRowProps) {
  const src = getHomePokeSprtieSrc(sprite);

  const stats = pokeStat
    ? pokeStat
    : {
        hp: 0,
        attack: 0,
        defense: 0,
        special_attack: 0,
        special_defense: 0,
        speed: 0,
      };

  const total = Object.values(stats).reduce((acc, cur) => acc + cur, 0);

  const statList = [
    { stat: 'hp', value: stats.hp },
    { stat: 'attack', value: stats.attack },
    { stat: 'defense', value: stats.defense },
    { stat: 'special_attack', value: stats.special_attack },
    { stat: 'special_defense', value: stats.special_defense },
    { stat: 'speed', value: stats.speed },
  ];

  return (
    <tr className="h-[4.25rem] hover:bg-blue-100/80 border-b border-slate-300">
      <td>
        <div className="px-2.5 text-sm text-slate-600 font-semibold">
          {`#${formatPokedexNumber(no)}`}
        </div>
      </td>
      <td>
        <div className="flex">
          <div className="px-2">
            <PokeImage src={src} alt={name} />
          </div>
          <div className="flex flex-col justify-center px-3 xl:px-3.5">
            <Link href={`/pokedex/${pokeKey}`}>
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
        <div className="px-2 flex flex-col gap-y-1 items-center justify-center">
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
