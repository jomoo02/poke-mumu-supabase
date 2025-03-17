'use client';

import type { PokedexPoke } from '../utils/get-poke';
import PokedexTableHeader from './pokedex-table-header';
import PokedexTableRow from './pokedex-table-row';

interface PokedexProps {
  pokeList: PokedexPoke[];
}

export default function Pokedex({ pokeList }: PokedexProps) {
  const pokeTest = pokeList;
  return (
    <table className="">
      <thead className="sticky top-[55px] z-20">
        <PokedexTableHeader />
      </thead>
      <tbody className="">
        {pokeTest.map((poke) => (
          <PokedexTableRow
            key={poke.id}
            name={poke.name_ko || ''}
            no={poke.no}
            sprite={poke.sprite || ''}
            type1={poke.type_1 || ''}
            type2={poke.type_2}
            pokeKey={poke.poke_key || ''}
            form={poke.form}
            pokeStat={poke.poke_stat}
          />
        ))}
      </tbody>
    </table>
  );
}
