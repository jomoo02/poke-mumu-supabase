import useSWR, { preload } from 'swr';
import { getVersionMoves } from '../api/version-move';
import type { Move, MachineType } from '../types/move';
import { formatMachineMove } from '../utils/format';
import type { PokeMove } from '../types/move';

const REST_METHODS = [
  'evolution',
  'reminder',
  'egg',
  'tutor',
  'pre',
  'form',
] as const;

const PRELOAD_IDS = ['1', '3', '5', '8', '11', '15', '18', '21'];

// 미리 데이터 캐싱
PRELOAD_IDS.forEach((id) => preload(id, getVersionMoves));

export type LevelUpMove = Move;
export type RestMove = { method: string; moves: Move[] };
export type MachineMove = { machineType: MachineType; moves: Move[] };
// export type FormMove = Move & { detail: string };

export default function useMoveData(moves: PokeMove[], versionGroupId: number) {
  const { data, error, isLoading } = useSWR(
    `${versionGroupId}`,
    getVersionMoves,
    { keepPreviousData: true },
  );

  const found = moves.find((m) => m.versionGroupId === versionGroupId)?.moves;

  // 공통 빈 데이터
  const emptyResult = {
    data,
    error,
    isLoading,
    levelUpMoves: [] as LevelUpMove[],
    machineMoves: [] as MachineMove[],
    restMoves: [] as RestMove[],
  };

  if (!found || !data) return emptyResult;

  // moveId 배열을 move 객체 배열로 변환
  const getMovesByIds = (ids: number[]) =>
    ids
      .map((id) => data.get(id))
      .filter((d) => !!d)
      .map((d) => ({ level: 0, ...d }));

  const levelUp: LevelUpMove[] = found.level_up
    .map(({ move_id, level }) => {
      const move = data.get(move_id);
      return move ? { level, ...move } : null;
    })
    .filter((d) => !!d);

  const machine = formatMachineMove(getMovesByIds(found.machine ?? []));

  const rest: RestMove[] = REST_METHODS.filter(
    (method) => found[method]?.length,
  ).map((method) => ({
    method,
    moves: getMovesByIds(found[method]!),
  }));

  return {
    data,
    error,
    isLoading,
    levelUpMoves: levelUp,
    machineMoves: machine,
    restMoves: rest,
  };
}
