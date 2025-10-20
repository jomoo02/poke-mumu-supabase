import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { PokedexPoke } from '../types';

const SORT_IDS = [
  'no',
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

export type SortingState = {
  id: SortId;
  direction: 'asc' | 'desc';
};

// 타입 가드
const isSortId = (value: string): value is SortId => {
  return (SORT_IDS as readonly string[]).includes(value);
};

const defaultSortingState: SortingState = {
  id: 'no',
  direction: 'asc',
};

// 1) 비교 함수 맵 - 파일 상단에 한 번만 정의 (재생성 방지)
const comparators: Record<SortId, (a: PokedexPoke, b: PokedexPoke) => number> =
  {
    no: (a, b) => a.no - b.no,
    name: (a, b) => String(a.name).localeCompare(String(b.name)),
    total: (a, b) => a.total - b.total,
    hp: (a, b) => a.hp - b.hp,
    attack: (a, b) => a.attack - b.attack,
    defense: (a, b) => a.defense - b.defense,
    specialAttack: (a, b) => a.specialAttack - b.specialAttack,
    specialDefense: (a, b) => a.specialDefense - b.specialDefense,
    speed: (a, b) => a.speed - b.speed,
    // 필요 시 다른 키 추가
  };

// 2) 정렬 함수: 비교 맵을 사용하도록 변경
const sortPokeList = (
  pokeList: PokedexPoke[],
  id: SortId,
  direction: 'asc' | 'desc',
) => {
  const cmp = comparators[id];
  if (!cmp) return pokeList.slice(); // 알 수 없는 id면 복사 반환(부작용 방지)

  const factor = direction === 'asc' ? 1 : -1;

  return [...pokeList].sort((a, b) => {
    const res = factor * cmp(a, b);

    if (res !== 0) {
      return res;
    }

    if (id !== 'no') {
      // return direction === 'asc' ? a.no - b.no : b.no - a.no;
      return a.no - b.no;
    }

    return a.id - b.id;

    // return direction === 'asc' ? a.id - b.id : b.id - a.id;
  });
};

export default function usePokedexSort(
  pokes: PokedexPoke[],
  targetType: string,
) {
  const [sortingState, setSortingState] = useState<SortingState>({
    ...defaultSortingState,
  });

  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    setSortingState({ ...defaultSortingState });
  }, [targetType]);

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

  const sortedPokes = useMemo(() => {
    return sortPokeList(pokes, sortingState.id, sortingState.direction);
  }, [pokes, sortingState.direction, sortingState.id]);

  return {
    sortedPokes,
    handleSortingStateChange,
    sortingState,
    sortPending: isPending,
  };
}
