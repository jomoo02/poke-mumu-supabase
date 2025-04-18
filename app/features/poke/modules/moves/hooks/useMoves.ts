import { useState } from 'react';
import type { PokeMoveTableWithVersion } from '../types';
import { formatMovesFromTable } from '../lib/format';

export default function useMoves(moves: PokeMoveTableWithVersion[]) {
  const formattedMoves = formatMovesFromTable(moves);

  const gens = [...new Set(formattedMoves.map(({ gen }) => gen))].sort(
    (a, b) => a - b,
  );

  const initTargetGen = gens.at(-1) || gens[0];

  const [targetGen, setTargetGen] = useState(initTargetGen);

  const targetGenMoves = formattedMoves.filter(({ gen }) => gen === targetGen);

  const handleTargetGen = (gen: number) => {
    if (gen >= 1 && gen <= 9 && gen !== targetGen) {
      setTargetGen(gen);
    }
  };

  return {
    gens,
    targetGen,
    setTargetGen: handleTargetGen,
    targetGenMoves,
  };
}
