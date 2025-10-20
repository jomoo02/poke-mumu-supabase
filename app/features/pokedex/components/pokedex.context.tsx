import { createContext, useContext, useMemo } from 'react';
import { type PokeType } from '@/app/lib/poke-type';
import { PokedexPoke } from '../types';
import usePokedexType from '../hooks/usePokedexType';
import usePokedexSort, { type SortingState } from '../hooks/usePokedexSort';

export type SelectType = PokeType | 'all';

interface PokedexContextValue {
  pokes: PokedexPoke[];
  sortingState: SortingState;
  targetType: SelectType;
  handleTargetTypeChange: (type: string) => void;
  selectTypeItems: { value: SelectType; content: string }[];
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
  pokes: PokedexPoke[];
  children: React.ReactNode;
}

function PokedexProvider({ pokes, children }: PokedexProviderProps) {
  const {
    targetTypePokeList,
    handleTargetTypeChange,
    selectTypeItems,
    showOpacity,
    targetType,
  } = usePokedexType(pokes);

  const { sortedPokes, handleSortingStateChange, sortingState, sortPending } =
    usePokedexSort(targetTypePokeList, targetType);

  const value = useMemo(
    () => ({
      pokes: sortedPokes,
      targetType,
      handleTargetTypeChange,
      selectTypeItems,
      handleSortingStateChange,
      sortingState,
      isPending: showOpacity || sortPending,
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
