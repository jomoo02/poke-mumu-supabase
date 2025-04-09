'use client';

import type { PokedexPoke } from '../types';
import PokedexTableHeader from './pokedex-table-header';
import PokedexTableRow from './pokedex-table-row';
import usePokedexSort from '../hooks/usePokedexTableSort';

interface PokedexTableProps {
  pokeList: PokedexPoke[];
}

export default function PokedexTable({ pokeList }: PokedexTableProps) {
  const { sortedPokeList, toggleSort, sortState } = usePokedexSort(pokeList);

  return (
    <table>
      <thead className="sticky top-[55px] z-20">
        <PokedexTableHeader sortState={sortState} setSortState={toggleSort} />
      </thead>
      <tbody>
        {sortedPokeList.map((poke) => (
          <PokedexTableRow key={poke.id} poke={poke} />
        ))}
      </tbody>
    </table>
  );
}
