'use client';

import type { PokedexPoke } from '../utils/set-pokedex-poke-list';
import PokedexTableHeader from './pokedex-table-header';
import PokedexTableRow from './pokedex-table-row';
import usePokedexSort from '../hooks/usePokedexSort';

interface PokedexProps {
  pokeList: PokedexPoke[];
}

export default function Pokedex({ pokeList }: PokedexProps) {
  const pokeTest = pokeList;

  const { sortedPokeList, toggleSort, sortState } = usePokedexSort(pokeTest);

  return (
    <table>
      <thead className="sticky top-[55px] z-20">
        <PokedexTableHeader toggleSort={toggleSort} sortState={sortState} />
      </thead>
      <tbody>
        {sortedPokeList.map((poke) => (
          <PokedexTableRow key={poke.id} poke={poke} />
        ))}
      </tbody>
    </table>
  );
}
