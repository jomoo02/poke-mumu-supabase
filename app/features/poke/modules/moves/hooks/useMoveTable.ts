import { useMemo, useState } from 'react';
import type { PokeMove, MoveMethod } from '../types';
import type { HeaderKey } from '../types/move-table';

export interface SortOrder {
  target: HeaderKey;
  direction: 'asc' | 'desc';
}

const setInitialTarget = (method: MoveMethod): HeaderKey => {
  if (method === 'level_up') {
    return 'level';
  }

  if (method === 'machine') {
    return 'machine';
  }
  return 'name';
};

const compareFunctionList: Record<
  HeaderKey,
  (a: PokeMove, b: PokeMove) => number
> = {
  level: (a, b) => a.level - b.level,
  type: (a, b) => a.type.localeCompare(b.type),
  damageClass: (a, b) => a.damage_class.localeCompare(b.damage_class),
  name: (a, b) => a.name.localeCompare(b.name),
  machine: (a, b) => (a?.machine_number ?? -1) - (b?.machine_number ?? -1),
  power: (a, b) => (a.power ?? -1) - (b.power ?? -1),
  accuracy: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
};

export default function useMoveTable(
  pokeMoves: PokeMove[],
  method: MoveMethod,
) {
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    target: setInitialTarget(method),
    direction: 'asc',
  });

  const sortedPokeMoves = useMemo(() => {
    const sorted = [...pokeMoves].sort(
      compareFunctionList[sortOrder.target] ?? (() => 0),
    );
    return sortOrder.direction === 'asc' ? sorted : sorted.reverse();
  }, [pokeMoves, sortOrder]);

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
