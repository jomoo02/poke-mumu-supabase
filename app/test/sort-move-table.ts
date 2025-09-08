import type { Move } from './type';

export const sortMoveTable = (a: Move, b: Move, headerKey: string): number => {
  const safeStr = (s?: string) => s ?? '';

  const compareFunctionList: Record<string, (a: Move, b: Move) => number> = {
    level: (a, b) => (a.level ?? -1) - (b.level ?? -1),
    type: (a, b) => safeStr(a.type).localeCompare(safeStr(b.type)),
    damageClass: (a, b) =>
      safeStr(a.damageClass).localeCompare(safeStr(b.damageClass)),
    name: (a, b) => safeStr(a.name).localeCompare(safeStr(b.name)),
    machine: (a, b) => (a.machineNumber ?? -1) - (b.machineNumber ?? -1),
    power: (a, b) => (a.power ?? -1) - (b.power ?? -1),
    accuracy: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
  };

  const compare = compareFunctionList[headerKey];

  if (!compare) {
    return 0;
  }

  const result = compare(a, b);

  return result !== 0 ? result : safeStr(a.name).localeCompare(safeStr(b.name));
};
