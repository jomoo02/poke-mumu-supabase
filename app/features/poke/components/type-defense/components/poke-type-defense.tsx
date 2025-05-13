import PokeTypeBadge from '@/app/components/badge/poke-type';
import { setPokeTypeDefense } from '../lib';
import DamageRate from './damage-rate';

interface PokeTypeDefense {
  pokeTypes: string[];
}

export default function PokeTypeDefense({ pokeTypes }: PokeTypeDefense) {
  const pokeTypeDefense = setPokeTypeDefense(pokeTypes);

  return (
    <>
      <div className="flex justify-center items-center gap-x-2.5 border-b border-slate-300">
        <div className="flex gap-x-3 p-2 md:p-3">
          {pokeTypes.map((type) => (
            <PokeTypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
      <div className="flex justify-center flex-col">
        {pokeTypeDefense?.map(({ damageRate, types }) => (
          <div
            key={damageRate}
            className="flex gap-x-2 border-b border-slate-300 last:border-0"
          >
            <DamageRate damageRate={damageRate} types={types} />
          </div>
        ))}
      </div>
    </>
  );
}
