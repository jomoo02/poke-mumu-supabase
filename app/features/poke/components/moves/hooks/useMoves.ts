import { useMemo, useState } from 'react';
import type { PokeMoveTableWithVersion, PokeMoveJsonByMethod } from '../types';

// move table에서 가져온 데이터 포맷
export const formatMovesFromTable = (
  tableMoves: PokeMoveTableWithVersion[],
) => {
  return tableMoves
    .map(({ version_group, moves, ...rest }) => ({
      ...rest,
      gen: version_group.generation,
      versionGroupId: version_group.id,
      versionGroup: version_group.identifier,
      order: version_group.order,
      moves: moves as PokeMoveJsonByMethod,
    }))
    .sort((a, b) => a.order - b.order);
};

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
    handleTargetGen,
    targetGenMoves,
  };
}
