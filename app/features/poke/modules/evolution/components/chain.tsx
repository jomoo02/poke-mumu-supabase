'use client';

import { ChainProvider, useChainMaxWidth } from './chain.context';
import type { EvolutionChain, EvolutionData } from '../types/evolution';
import ChainPoke from './chain-poke';
import type { EvolutionPoke } from '../types/evolution';
import {
  buildEvolutionTrees,
  formatEvolutionPokeMap,
  getEvolutionTreeDimensions,
} from '../lib/evolution-chain';

const gridColsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2 md:grid-cols-1',
  3: 'grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid-cols-7 md:grid-cols-1',
  8: 'grid-cols-2 lg:grid-cols-4',
};

function NestedChain({ chain }: { chain: EvolutionChain }) {
  const chainMaxWidth = useChainMaxWidth();

  const { pokeId, toDetail, toPokes } = chain;

  return (
    <div className={chainMaxWidth === 8 ? '' : 'md:flex'}>
      <ChainPoke pokeId={pokeId} conditionDetails={toDetail} />
      {toPokes.length > 0 && (
        <div className={`grid gap-y-4 ${gridColsMap[toPokes.length]}`}>
          {toPokes.map((poke) => (
            <NestedChain key={poke.pokeId} chain={poke} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Chain({
  evolutionData,
  evolutionPokeList,
}: {
  evolutionData: EvolutionData[];
  evolutionPokeList: EvolutionPoke[];
}) {
  const { maxDepth, maxWidth } = getEvolutionTreeDimensions(evolutionData);
  const chainList = buildEvolutionTrees(evolutionData);
  const pokeMap = formatEvolutionPokeMap(evolutionPokeList);

  return (
    <ChainProvider maxDepth={maxDepth} maxWidth={maxWidth} pokeMap={pokeMap}>
      <div className="md:flex justify-center pt-2 pb-1">
        <div className={`grid md:gap-y-4 ${gridColsMap[chainList.length]}`}>
          {chainList.map((chain) => (
            <NestedChain key={chain.pokeId} chain={chain} />
          ))}
        </div>
      </div>
    </ChainProvider>
  );
}
