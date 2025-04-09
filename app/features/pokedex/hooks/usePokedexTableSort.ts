import { useState, useMemo, useLayoutEffect } from 'react';
import type { PokedexPoke } from '../types';
import sortPokeList from '../lib/sort-poke-list';

export type SortState = {
  column: string;
  direction: 'asc' | 'desc';
};

export default function usePokedexSort(pokeList: PokedexPoke[]) {
  const [sortState, setSortState] = useState<SortState>({
    column: 'no',
    direction: 'asc',
  });

  const [prevScrollY, setPrevScrollY] = useState<number | null>(null);

  const toggleSort = (column: string) => {
    setPrevScrollY(window.scrollY);

    setSortState((prev) => ({
      column,
      direction:
        prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedPokeList = useMemo(() => {
    if (!sortState.column) {
      return pokeList;
    }

    return sortPokeList(pokeList, sortState.column, sortState.direction);
  }, [pokeList, sortState]);

  useLayoutEffect(() => {
    if (prevScrollY !== null) {
      window.scrollTo(0, prevScrollY);
      setPrevScrollY(null);
    }
  }, [sortedPokeList]);

  return {
    sortState,
    sortedPokeList,
    toggleSort,
  };
}
