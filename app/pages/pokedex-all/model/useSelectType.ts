import { useCallback, useMemo, useRef, useState, useTransition } from 'react';

import { TypeDto } from '@/app/entities/type/model';

import type { NationalPoke } from './index';

export default function useSelectType(pokes: NationalPoke[], types: TypeDto[]) {
  const [targetType, setTargetType] = useState<string>('all');
  const [isPending, startTransition] = useTransition();

  const targetTypeRef = useRef<string>(targetType);
  const showOpacity = isPending || targetTypeRef.current === 'all';

  const typeList = useMemo(
    () =>
      types
        .filter((type) => type.identifier !== 'unknown')
        .map((type) => ({ value: type.identifier, content: type.typeKo })),

    [types],
  );

  const isPokeType = useCallback(
    (type: string) => {
      const keys = typeList.map(({ value }) => value);
      return keys.includes(type);
    },
    [typeList],
  );

  // const selectTypeItems: { value: string; content: string }[] = [

  // const selectTypeItems: { value: string; content: string }[] = [
  //   { value: 'all', content: '모든타입' },
  //   ...typeList,
  // ];

  const selectTypeItems: { value: string; content: string }[] = [
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

  const handleTargetTypeChange = useCallback(
    (target: string) => {
      if (target === 'all' || isPokeType(target)) {
        targetTypeRef.current = target;
        startTransition(() => {
          setTargetType(target);
        });
      }
    },
    [isPokeType],
  );

  return {
    targetTypePokeList,
    handleTargetTypeChange,
    selectTypeItems,
    showOpacity,
    targetType,
  };
}
