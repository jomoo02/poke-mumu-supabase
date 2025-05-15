import { useMemo, useState } from 'react';
import type { PokeMoveTableWithVersion } from '../types';
import { formatMovesFromTable } from '../lib/format';

export default function useMoves(moves: PokeMoveTableWithVersion[]) {
  const formattedMoves = useMemo(() => formatMovesFromTable(moves), [moves]);

  const gens = [...new Set(formattedMoves.map(({ gen }) => gen))].sort(
    (a, b) => a - b,
  );

  const initTargetGen = gens.at(-1) || gens[0];

  const [targetGen, setTargetGen] = useState(initTargetGen);

  const targetGenMoves = useMemo(
    () => formattedMoves.filter(({ gen }) => gen === targetGen),
    [targetGen, formattedMoves],
  );

  const handleTargetGen = (gen: number) => {
    if (gens.includes(gen) && gen !== targetGen) {
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
