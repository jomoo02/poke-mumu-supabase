import type { PokeMove } from '../../types';

export const sortMoveTable = (
  a: PokeMove,
  b: PokeMove,
  headerKey: string,
): number => {
  const compareFunctionList: Record<
    string,
    (a: PokeMove, b: PokeMove) => number
  > = {
    level: (a, b) => a.level - b.level,
    type: (a, b) => a.type.localeCompare(b.type),
    damageClass: (a, b) => a.damage_class.localeCompare(b.damage_class),
    name: (a, b) => a.name.localeCompare(b.name),
    machine: (a, b) => (a.machine_number ?? -1) - (b.machine_number ?? -1),
    power: (a, b) => (a.power ?? -1) - (b.power ?? -1),
    accuracy: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
  };

  const compare = compareFunctionList[headerKey];

  return compare ? compare(a, b) : 0;
};
