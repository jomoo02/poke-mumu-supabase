import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import {
  getPokeTypeList,
  getPokeTypeKo,
  type PokeType,
  isPokeType,
} from '@/app/lib/poke-type';
import type { PokedexPoke } from '../types';

type SortState = {
  id: string;
  direction: 'asc' | 'desc';
};

// 1) 비교 함수 맵 - 파일 상단에 한 번만 정의 (재생성 방지)
const comparators: Record<string, (a: PokedexPoke, b: PokedexPoke) => number> =
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
  id: string,
  direction: 'asc' | 'desc',
) => {
  const cmp = comparators[id];
  if (!cmp) return pokeList.slice(); // 알 수 없는 id면 복사 반환(부작용 방지)

  const factor = direction === 'asc' ? 1 : -1;

  return [...pokeList].sort((a, b) => {
    const res = factor * cmp(a, b);
    if (res !== 0) return res;

    // tie-breaker: id 기준, direction에 따라 순서 변경
    return direction === 'asc' ? a.id - b.id : b.id - a.id;
  });
};

export default function usePokedex(pokes: PokedexPoke[]) {
  const [targetType, setTargetType] = useState<PokeType | 'all'>('all');
  const [isPending, startTransition] = useTransition();

  const prevTargetType = useRef<PokeType | 'all'>(targetType);

  // useEffect(() => {
  //   prevTargetType.current = targetType;
  // }, [targetType]);

  // CSS 적용 여부
  const showOpacity = isPending && prevTargetType.current === 'all'; // 이전이 all이 아닌 상태에서
  // targetType === 'all'; // 현재 all로 변경 중

  const typeList = useMemo(
    () =>
      getPokeTypeList()
        .filter((t) => t !== 'unknown')
        .map((type) => ({ value: type, content: getPokeTypeKo(type) })),
    [],
  );

  const selectItmes = [{ value: 'all', content: '모든타입' }, ...typeList];

  const targetPokeList = useMemo(() => {
    if (targetType === 'all') {
      return pokes;
    }
    return pokes.filter(
      ({ type1, type2 }) => type1 === targetType || type2 === targetType,
    );
  }, [pokes, targetType]);

  const handleTypeChange = useCallback((target: string) => {
    if (target === 'all' || isPokeType(target)) {
      prevTargetType.current = target;
      startTransition(() => {
        setTargetType(target);
        setSortState({ id: 'no', direction: 'asc' });
      });
    }
  }, []);

  const [sortState, setSortState] = useState<SortState>({
    id: 'no',
    direction: 'asc',
  });

  useEffect(() => {
    setSortState({ id: 'no', direction: 'asc' });
  }, [targetType]);

  const handleSortStateChange = useCallback((targetId: string) => {
    startTransition(() => {
      setSortState((prev) => {
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
    return sortPokeList(targetPokeList, sortState.id, sortState.direction);
  }, [targetPokeList, sortState.direction, sortState.id]);

  return {
    targetType,
    handleTypeChange,
    types: selectItmes,
    handleSortStateChange,
    pokes: sortedPokes,
    isPending,
    showOpacity,
  };
}
