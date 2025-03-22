'use client';

import type { PokedexPoke } from '../utils/set-pokedex-poke-list';
import TableHeader from './table-header';
import TableRow from './table-row';
import usePokedexSort from '../hooks/usePokedexSort';

interface PokedexProps {
  pokeList: PokedexPoke[];
}

export default function Pokedex({ pokeList }: PokedexProps) {
  const { sortedPokeList, toggleSort, sortState } = usePokedexSort(pokeList);

  return (
    <table>
      <thead className="sticky top-[55px] z-20">
        <TableHeader sortState={sortState} setSortState={toggleSort} />
      </thead>
      <tbody>
        {sortedPokeList.map((poke) => (
          <TableRow key={poke.id} poke={poke} />
        ))}
      </tbody>
    </table>
  );
}
