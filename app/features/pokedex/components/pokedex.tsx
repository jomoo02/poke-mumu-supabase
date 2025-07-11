'use client';

import { useMemo, useState } from 'react';
import { getPokeTypeList, getPokeTypeKo } from '@/app/lib/poke-type';
import type { PokedexPoke } from '../types';
import TypeSelect from './type-select';
import PokedexTableV2 from './pokedex-table-v2';

interface PokedexProps {
  pokeList: PokedexPoke[];
}

export default function Pokedex({ pokeList }: PokedexProps) {
  const [targetType, setTargetType] = useState('all');

  const typeList = getPokeTypeList()
    .filter((type) => type !== 'unknown')
    .map((type) => {
      const value = type;
      const content = getPokeTypeKo(type);
      return { value, content };
    });
  const selectItmes = [{ value: 'all', content: '모든타입' }, ...typeList];

  const targetPokeList = useMemo(() => {
    if (targetType === 'all') {
      return pokeList;
    }
    return pokeList.filter(
      ({ type1, type2 }) => type1 === targetType || type2 === targetType,
    );
  }, [targetType]);
  return (
    <div>
      <TypeSelect
        initialType={{ value: 'all', content: '모든타입' }}
        onSelect={setTargetType}
        selectItems={selectItmes}
      ></TypeSelect>
      <PokedexTableV2 pokeList={targetPokeList} />
    </div>
  );
}
