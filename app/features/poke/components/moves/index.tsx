'use client';

import type { PokeMoveTableWithVersion } from './types';
import useMoves from './hooks/useMoves';
import GenList from './components/gen-list';
import VersionGroup from './components/version-group';

interface MovesProps {
  pokeMoves: PokeMoveTableWithVersion[];
}

export default function Moves({ pokeMoves }: MovesProps) {
  const { gens, targetGen, setTargetGen, targetGenMoves } = useMoves(pokeMoves);

  return (
    <div className="">
      <div className="px-2.5 lg:px-8 c-border-outer border-t-0 border-x-0 py-0.5">
        <GenList
          gens={gens}
          targetGen={targetGen}
          setTargetGen={setTargetGen}
        />
      </div>
      <VersionGroup key={targetGen} moves={targetGenMoves} />
    </div>
  );
}
