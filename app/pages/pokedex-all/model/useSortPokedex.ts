import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';

import type { NationalPoke } from '.';

const SORT_IDS = [
  'dexNumber',
  'name',
  'total',
  'hp',
  'attack',
  'defense',
  'specialAttack',
  'specialDefense',
  'speed',
] as const;

type SortId = (typeof SORT_IDS)[number];

type Direction = 'asc' | 'desc';

type SortingState = {
  id: SortId;
  direction: Direction;
};

const isSortId = (value: string): value is SortId => {
  return (SORT_IDS as readonly string[]).includes(value);
};

// 1) 비교 함수 맵 - 파일 상단에 한 번만 정의 (재생성 방지)
const comparators: Record<
  SortId,
  (a: NationalPoke, b: NationalPoke) => number
> = {
  dexNumber: (a, b) => a.dexNumber - b.dexNumber,
  name: (a, b) => String(a.name).localeCompare(String(b.name)),
  total: (a, b) => a.total - b.total,
  hp: (a, b) => a.hp - b.hp,
  attack: (a, b) => a.attack - b.attack,
  defense: (a, b) => a.defense - b.defense,
  specialAttack: (a, b) => a.specialAttack - b.specialAttack,
  specialDefense: (a, b) => a.specialDefense - b.specialDefense,
  speed: (a, b) => a.speed - b.speed,
};

const sortPoke = (pokes: NationalPoke[], id: SortId, direction: Direction) => {
  const cmp = comparators[id];

  if (!cmp) {
    return [...pokes];
  }

  const factor = direction === 'asc' ? 1 : -1;

  return [...pokes].sort((a, b) => {
    const res = factor * cmp(a, b);

    if (res !== 0) {
      return res;
    }

    if (id !== 'dexNumber') {
      return a.dexNumber - b.dexNumber;
    }

    return a.id - b.id;
  });
};

export { isSortId, sortPoke, type SortId, type SortingState };

const defaultSortingState: SortingState = {
  id: 'dexNumber',
  direction: 'asc',
};

export default function useSortPokedex(
  pokes: NationalPoke[],
  resetKey: string,
) {
  const [sortingState, setSortingState] = useState<SortingState>({
    ...defaultSortingState,
  });

  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    setSortingState({ ...defaultSortingState });
  }, [resetKey]);

  const sortedPokes = useMemo(
    () => sortPoke(pokes, sortingState.id, sortingState.direction),
    [pokes, sortingState.direction, sortingState.id],
  );

  const handleSortingStateChange = useCallback((targetId: string) => {
    if (!isSortId(targetId)) {
      return;
    }

    startTransition(() => {
      setSortingState((prev) => {
        if (prev.id === targetId) {
          return {
            id: targetId,
            direction: prev.direction === 'asc' ? 'desc' : 'asc',
          };
        }
        return { id: targetId, direction: 'asc' };
      });
    });
  }, []);

  return {
    sortedPokes,
    sortingState,
    isPending,
    handleSortingStateChange,
  };
}
