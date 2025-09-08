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

const REST_METHODS = ['pre', 'egg', 'tutor', 'reminder', 'evolution'] as const;

export default function useMoveData(tableData: TableData) {
  const moves = useMemo(() => formatDataFromTableData(tableData), [tableData]);

  const gens = useMemo(
    () =>
      [...new Set(moves.map(({ gen }) => gen))].sort(
        (a, b) => Number(a) - Number(b),
      ),
    [moves],
  );

  const getVersionGroupsByGen = useCallback(
    (gen: string) => {
      return moves
        .filter((m) => m.gen === gen)
        .map(({ versionGroup, order, versionGroupId }) => ({
          versionGroup,
          order,
          versionGroupId,
        }))
        .sort((a, b) => a.order - b.order)
        .map(({ versionGroup, versionGroupId }) => ({
          versionGroup,
          versionGroupId,
        }));
    },
    [moves],
  );

  const getMovesByVersionGroup = (versionGroup: string): ParsedMoves => {
    const found = moves.find((m) => m.versionGroup === versionGroup)?.moves;

    if (!found) {
      return { levelUpMoves: [], machineMoves: [], restMoves: [] };
    }

    const levelUpMoves = found.level_up ?? [];

    const machineMoves = found.machine ?? [];

    const restMoves = REST_METHODS.filter(
      (method) => found[method]?.length,
    ).map((method) => ({
      method,
      moves: found[method]!,
    }));

    return { levelUpMoves, machineMoves, restMoves };
  };

  return { gens, getVersionGroupsByGen, getMovesByVersionGroup };
}
