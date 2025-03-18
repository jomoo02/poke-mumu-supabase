import { useState, useMemo, useLayoutEffect } from 'react';
import type { PokedexPoke } from '../utils/set-pokedex-poke-list';

type SortState = {
  column: string | null;
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

    return [...pokeList].sort((a, b) => {
      const valueA = a[sortState.column as keyof PokedexPoke];
      const valueB = b[sortState.column as keyof PokedexPoke];

      if (valueA === null || valueB === null) {
        return 0;
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortState.direction === 'asc'
          ? valueA - valueB
          : valueB - valueA;
      }
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortState.direction === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return 0;
    });
  }, [pokeList, sortState]);

  // ✅ 정렬 후 스크롤 복원
  useLayoutEffect(() => {
    if (prevScrollY !== null) {
      window.scrollTo(0, prevScrollY);
      setPrevScrollY(null); // 초기화
    }
  }, [sortedPokeList]);

  return {
    sortState,
    sortedPokeList,
    toggleSort,
  };
}
