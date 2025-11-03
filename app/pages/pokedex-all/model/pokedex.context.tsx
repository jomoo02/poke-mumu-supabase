'use client';
import { createContext, useContext, useMemo } from 'react';

import { type PokeType } from '@/app/lib/poke-type';
import { TypeDto } from '@/app/entities/type/model';

import type { NationalPoke } from '../model';
import useSortPokedex, { SortingState } from './useSortPokedex';
import useSelectType from './useSelectType';

export type SelectType = PokeType | 'all';

interface PokedexContextValue {
  pokes: NationalPoke[];
  sortingState: SortingState;
  targetType: string;
  handleTargetTypeChange: (type: string) => void;
  selectTypeItems: { value: string; content: string }[];
  handleSortingStateChange: (id: string) => void;
  isPending: boolean;
}

const PokedexContext = createContext<PokedexContextValue | null>(null);

function usePokedexContext() {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error('usePokedexContext Error');
  }

  return context;
}

interface PokedexProviderProps {
  pokes: NationalPoke[];
  types: TypeDto[];
  children: React.ReactNode;
}

function PokedexProvider({ pokes, types, children }: PokedexProviderProps) {
  const {
    targetTypePokeList,
    handleTargetTypeChange,
    selectTypeItems,
    showOpacity,
    targetType,
  } = useSelectType(pokes, types);

  const {
    sortedPokes,
    handleSortingStateChange,
    sortingState,
    isPending: sortPending,
  } = useSortPokedex(targetTypePokeList, targetType);

  const value = useMemo(
    () => ({
      pokes: sortedPokes,
      targetType,
      handleTargetTypeChange,
      selectTypeItems,
      handleSortingStateChange,
      sortingState,
      isPending: showOpacity && sortPending,
    }),
    [
      handleSortingStateChange,
      handleTargetTypeChange,
      selectTypeItems,
      showOpacity,
      sortPending,
      sortingState,
      sortedPokes,
      targetType,
    ],
  );

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
}

export { usePokedexContext, PokedexProvider };
