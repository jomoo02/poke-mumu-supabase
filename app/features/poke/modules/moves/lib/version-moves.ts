import type { MachineType, MoveMethod, PokeMove } from '../types';

export const groupMachineMovesByMachineType = (machineMoves: PokeMove[]) => {
  const grouped: Record<MachineType, PokeMove[]> = {
    TM: [],
    TR: [],
    HM: [],
  };

  machineMoves.forEach((move) => {
    if (move.machine_type) {
      grouped[move.machine_type].push(move);
    }
  });

  return (Object.keys(grouped) as MachineType[])
    .filter((type) => grouped[type].length > 0)
    .map((type) => ({ machineType: type, moves: grouped[type] }));
};

export const sortMoveMethodOrder = (
  moves: { method: MoveMethod; moves: PokeMove[] }[],
  order: MoveMethod[],
) => {
  const orderMap = new Map(order.map((method, i) => [method, i]));

  return [...moves].sort((a, b) => {
    const aIndex = orderMap.has(a.method) ? orderMap.get(a.method)! : Infinity;
    const bIndex = orderMap.has(b.method) ? orderMap.get(b.method)! : Infinity;
    return aIndex - bIndex;
  });
};

export const sortMachineMoves = (
  groupmachineMoves: { machineType: MachineType; moves: PokeMove[] }[],
  order: MachineType[],
) => {
  const orderMap = new Map(order.map((method, i) => [method, i]));

  return [...groupmachineMoves].sort((a, b) => {
    const aIndex = orderMap.has(a.machineType)
      ? orderMap.get(a.machineType)!
      : Infinity;
    const bIndex = orderMap.has(b.machineType)
      ? orderMap.get(b.machineType)!
      : Infinity;
    return aIndex - bIndex;
  });
};
