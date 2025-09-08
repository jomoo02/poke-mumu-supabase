import { useCallback, useMemo } from 'react';
import type { TableData, MoveLearnMethod } from '../types';
import { formatDataFromTableData } from '../utils/format';

export type ParsedMoves = {
  levelUpMoves: { move_id: number; level: number }[];
  machineMoves: number[];
  restMoves: {
    method: Exclude<MoveLearnMethod, 'level_up' | 'machine'>;
    moves: number[];
  }[];
};

export default function useMove(tableData: TableData) {
  const moves = useMemo(() => formatDataFromTableData(tableData), [tableData]);

  const gens = [...new Set(moves.map(({ gen }) => gen))].sort(
    (a, b) => Number(a) - Number(b),
  );

  const initialGen = gens.at(-1) || gens[0];

  const versionGroups = moves.map(
    ({ versionGroup, versionGroupId, gen, order }) => ({
      versionGroup,
      versionGroupId,
      gen,
      order,
    }),
  );

  const initialVersionGroup = moves
    .filter(({ gen }) => gen === initialGen)
    .sort((a, b) => a.order - b.order)[0].versionGroup;

  const getMovesByVersionGroup = useCallback(
    (versionGroup: string): ParsedMoves => {
      const found = moves.find((m) => m.versionGroup === versionGroup)?.moves;

      if (!found) {
        return { levelUpMoves: [], machineMoves: [], restMoves: [] };
      }

      const levelUpMoves = found.level_up ?? [];

      const machineMoves = found.machine ?? [];

      const restMethods = [
        'pre',
        'egg',
        'tutor',
        'reminder',
        'evolution',
      ] as const;

      const restMoves = restMethods
        .filter((method) => found[method]?.length)
        .map((method) => ({
          method,
          moves: found[method]!,
        }));

      return { levelUpMoves, machineMoves, restMoves };
    },
    [moves],
  );

  return {
    gens,
    initialGen,
    versionGroups,
    initialVersionGroup,
    getMovesByVersionGroup,
  };
}
