import { useCallback, useMemo, useRef, useState, useTransition } from 'react';
import { PokedexPoke } from '../types';
import { SelectType } from '../components/pokedex.context';
import {
  getPokeTypeList,
  getPokeTypeKo,
  isPokeType,
} from '@/app/lib/poke-type';

export default function usePokedexType(pokes: PokedexPoke[]) {
  const [targetType, setTargetType] = useState<SelectType>('all');
  const [isPending, startTransition] = useTransition();

  const targetTypeRef = useRef<SelectType>(targetType);
  const showOpacity = isPending && targetTypeRef.current === 'all';

  const typeList = useMemo(
    () =>
      getPokeTypeList()
        .filter((t) => t !== 'unknown')
        .map((type) => ({ value: type, content: getPokeTypeKo(type) })),
    [],
  );

  const selectTypeItems: { value: SelectType; content: string }[] = [
    { value: 'all', content: '모든타입' },
    ...typeList,
  ];

  const targetTypePokeList = useMemo(() => {
    if (targetType === 'all') {
      return pokes;
    }
    return pokes.filter(
      ({ type1, type2 }) => type1 === targetType || type2 === targetType,
    );
  }, [pokes, targetType]);

  const handleTargetTypeChange = useCallback((target: string) => {
    if (target === 'all' || isPokeType(target)) {
      targetTypeRef.current = target;
      startTransition(() => {
        setTargetType(target);
      });
    }
  }, []);

  return {
    targetTypePokeList,
    handleTargetTypeChange,
    selectTypeItems,
    showOpacity,
    targetType,
  };
}
