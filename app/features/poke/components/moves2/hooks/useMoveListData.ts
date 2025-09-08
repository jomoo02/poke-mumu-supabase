import {
  type FormattedTableData,
  type FormattedVersionMove,
  formatMachineMove,
} from '../utils/format';
import useSWR, { preload } from 'swr';
import { getVersionMoves } from '../api/get-version-move';
import { MachineType } from '../types';

const REST_METHODS = ['pre', 'egg', 'tutor', 'reminder', 'evolution'] as const;

preload('1', getVersionMoves);
preload('3', getVersionMoves);
preload('5', getVersionMoves);
preload('8', getVersionMoves);
preload('11', getVersionMoves);
preload('15', getVersionMoves);
preload('18', getVersionMoves);
preload('21', getVersionMoves);

export default function useMoveListData(
  moves: FormattedTableData,
  versionGroupId: number,
) {
  const { data, error, isLoading } = useSWR(
    `${versionGroupId}`,
    getVersionMoves,
    { keepPreviousData: true },
  );

  const found = moves.find((m) => m.versionGroupId === versionGroupId)?.moves;

  if (!found || !data) {
    const levelUp: (FormattedVersionMove & { level: number })[] = [];
    const rest: {
      method: string;
      moves: FormattedVersionMove[];
    }[] = [];
    const machine: {
      machineType: MachineType;
      moves: FormattedVersionMove[];
    }[] = [];
    return {
      data,
      error,
      isLoading,
      levelUp,
      machine,
      rest,
    };
  }

  const levelUp: (FormattedVersionMove & { level: number })[] = found.level_up
    .map(({ move_id, level }) => {
      const move = data.get(move_id);
      return move ? { level, ...move } : null;
    })
    .filter((move) => !!move);

  const machine = formatMachineMove(
    (found.machine ?? [])
      .map((moveId) => data.get(moveId))
      .filter((move) => !!move),
  );

  const rest = REST_METHODS.filter((method) => found[method]?.length)
    .map((method) => {
      if (found[method]) {
        const moves = found[method]
          .map((moveId) => {
            const move = data.get(moveId);
            return move ? move : null;
          })
          .filter((data) => !!data);
        return {
          method,
          moves,
        };
      }
      return null;
    })
    .filter((data) => !!data);

  return {
    data,
    error,
    isLoading,
    levelUp,
    machine,
    rest,
  };
}
