import { useMemo } from 'react';
import type { PokeMove, MachineType } from '../types';

type TargetMove = {
  method: string;
  moves: PokeMove[];
};

const sortMoveGroups = (targetMoves: TargetMove[]) => {
  const order = ['level_up', 'egg', 'tutor', 'pre', 'reminder'];
  const orderMap = new Map(order.map((key, index) => [key, index]));

  return [...targetMoves].sort((a, b) => {
    const aIndex = orderMap.has(a.method) ? orderMap.get(a.method)! : Infinity;
    const bIndex = orderMap.has(b.method) ? orderMap.get(b.method)! : Infinity;
    return aIndex - bIndex;
  });
};

const groupMachineMoves = (targetMove: TargetMove | undefined) => {
  if (!targetMove) {
    return [];
  }

  const grouped: Record<MachineType, PokeMove[]> = {
    TM: [],
    TR: [],
    HM: [],
  };

  const { method, moves } = targetMove;

  moves.forEach((move) => {
    if (move.machine_type) {
      grouped[move.machine_type].push(move);
    }
  });

  return (Object.keys(grouped) as MachineType[])
    .filter((type) => grouped[type].length > 0)
    .map((type) => ({
      method,
      machineType: type,
      moves: grouped[type],
    }));
};

export default function useTargetMoves(targetMoves: TargetMove[]) {
  const machineMoves = useMemo(
    () =>
      groupMachineMoves(targetMoves.find(({ method }) => method === 'machine')),
    [targetMoves],
  );
  const restMoves = useMemo(
    () =>
      sortMoveGroups(targetMoves.filter(({ method }) => method !== 'machine')),
    [targetMoves],
  );

  return {
    machineMoves,
    moves: restMoves,
  };
}
