import { setPokeTypeDefense } from '../lib';
import DamageRate from './damage-rate';

interface PokeTypeDefense {
  pokeTypes: string[];
}

export default function PokeTypeDefense({ pokeTypes }: PokeTypeDefense) {
  const pokeTypeDefense = setPokeTypeDefense(pokeTypes);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
      {pokeTypeDefense?.map(({ damageRate, types }) => (
        // <div key={damageRate} className="">
        <DamageRate key={damageRate} damageRate={damageRate} types={types} />
        // </div>
      ))}
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
