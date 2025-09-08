import type { FormattedVersionMove } from '../../utils/format';

export const sortMoveTable = (
  a: FormattedVersionMove & { level?: number },
  b: FormattedVersionMove & { level?: number },
  headerKey: string,
): number => {
  const compareFunctionList: Record<
    string,
    (
      a: FormattedVersionMove & { level?: number },
      b: FormattedVersionMove & { level?: number },
    ) => number
  > = {
    level: (a, b) => (a.level ?? -1) - (b.level ?? -1),
    type: (a, b) => a.type.localeCompare(b.type),
    damageClass: (a, b) => a.damageClass.localeCompare(b.damageClass),
    name: (a, b) => a.name.localeCompare(b.name),
    machine: (a, b) => (a.machineNumber ?? -1) - (b.machineNumber ?? -1),
    power: (a, b) => (a.power ?? -1) - (b.power ?? -1),
    accuracy: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
  };

  const compare = compareFunctionList[headerKey];

  if (!compare) {
    return 0;
  }

  const result = compare(a, b);

  return result !== 0 ? result : a.name.localeCompare(b.name);
  // return compare ? compare(a, b) : 0;
};
