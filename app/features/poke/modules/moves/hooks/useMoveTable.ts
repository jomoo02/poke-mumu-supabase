import { useState } from 'react';
import type { PokeMove, MoveMethod } from '../types';
import type { HeaderKey } from '../types/move-table';

export interface SortOrder {
  target: HeaderKey;
  direction: 'asc' | 'desc';
}

export default function useMoveTable(
  pokeMoves: PokeMove[],
  method: MoveMethod,
) {
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    target: 'name',
    direction: 'asc',
  });

  const sortedPokeMoves = pokeMoves;

  const handleSortOrder = (key: HeaderKey) => {
    setSortOrder((prev) => {
      const direction =
        prev.target === key && prev.direction === 'asc' ? 'desc' : 'asc';
      return {
        direction,
        target: key,
      };
    });
  };

  return {
    sortOrder,
    setSortOrder: handleSortOrder,
    pokeMoves: sortedPokeMoves,
  };
}
