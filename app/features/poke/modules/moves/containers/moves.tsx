'use client';

import type { PokeMoveTableWithVersion } from '../types';
import useMoves from '../hooks/useMoves';
import GenList from '../components/gen-list';
import VersionGroup from '../components/version-group';

interface MovesProps {
  pokeMoves: PokeMoveTableWithVersion[];
}

export default function Moves({ pokeMoves }: MovesProps) {
  const { gens, targetGen, setTargetGen, targetGenMoves } = useMoves(pokeMoves);

  // console.log(gens, targetGen, targetGenMoves);                                       z
  return (
    <div>
      <GenList gens={gens} targetGen={targetGen} setTargetGen={setTargetGen} />
      <VersionGroup key={targetGen} moves={targetGenMoves} />
    </div>
  );
}
