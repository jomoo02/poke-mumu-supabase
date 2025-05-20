import { useContext, createContext, useMemo } from 'react';
import type { EvolutionPoke } from '../../types/evolution';

interface ChainContextValue {
  maxDepth: number;
  maxWidth: number;
  pokeMap: Map<number, EvolutionPoke>;
}

const ChainContext = createContext<ChainContextValue | null>(null);

function useChainContext() {
  const context = useContext(ChainContext);

  if (!context) {
    throw new Error('ChainContext must be used within ChainProvider');
  }

  return context;
}

export function useChainMaxWidth() {
  const { maxWidth } = useChainContext();

  return maxWidth;
}

export function useChainMaxDepth() {
  const { maxDepth } = useChainContext();

  return maxDepth;
}

export function usePokeMap() {
  const { pokeMap } = useChainContext();

  return pokeMap;
}

export function ChainProvider({
  maxWidth,
  maxDepth,
  pokeMap,
  children,
}: {
  maxWidth: number;
  maxDepth: number;
  pokeMap: Map<number, EvolutionPoke>;
  children?: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      maxDepth,
      maxWidth,
      pokeMap,
    }),
    [maxDepth, maxWidth, pokeMap],
  );

  return (
    <ChainContext.Provider value={value}>{children}</ChainContext.Provider>
  );
}
