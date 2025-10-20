import PokeTypeBadge from '@/app/components/badge/poke-type';
import PokeTypeIcon from '@/app/components/poke-type/icon';
import { setPokeTypeDefense } from '../lib';
import DamageRate from './damage-rate';

interface PokeTypeDefense {
  pokeTypes: string[];
}

export default function PokeTypeDefense({ pokeTypes }: PokeTypeDefense) {
  const pokeTypeDefense = setPokeTypeDefense(pokeTypes);
  console.log(pokeTypeDefense);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
      {pokeTypeDefense?.map(([type, value]) => (
        <div key={type} className="flex flex-col items-center">
          <PokeTypeIcon type={type} isVisibleContent />
          {value !== 1 ? (
            <div className="h-6">x{value}</div>
          ) : (
            <div className="h-6">x{value}</div>
          )}
        </div>
      ))}
      {/* {pokeTypeDefense?.map(({ damageRate, types }) => (
        // <div key={damageRate} className="">
        <DamageRate key={damageRate} damageRate={damageRate} types={types} />
        // </div>
      ))} */}
    </div>
    // <div className="flex justify-center flex-col">
    //   {pokeTypeDefense?.map(({ damageRate, types }) => (
    //     <div
    //       key={damageRate}
    //       className="flex gap-x-2 border-b border-gray-200 last:border-0"
    //     >
    //       <DamageRate damageRate={damageRate} types={types} />
    //     </div>
    //   ))}
    // </div>
  );
}
