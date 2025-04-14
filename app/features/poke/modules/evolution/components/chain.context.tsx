import { useContext, createContext, useMemo } from 'react';
import type { EvolutionPoke } from '../types/evolution';

const ChainContext = createContext({
  maxDepth: 0,
  maxWidth: 0,
  pokeMap: new Map<number, EvolutionPoke>(),
});

export function useChainMaxWidth() {
  const { maxWidth } = useContext(ChainContext);

  return maxWidth;
}

export function useChainMaxDepth() {
  const { maxDepth } = useContext(ChainContext);

  return maxDepth;
}

export function usePokeMap() {
  const { pokeMap } = useContext(ChainContext);

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
