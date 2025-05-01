export const calculateTotalStatValue = (statValueList: number[]) => {
  const totalStatvalue = statValueList.reduce(
    (total, value) => total + value,
    0,
  );

  return totalStatvalue;
};

export const calculateMaxStatValue = (statValueList: number[]) => {
  const maxStatValue = Math.max(...statValueList);

  return maxStatValue;
};

// (종족값, 개체값, 노력치, 레벨)
const calculateHpStat = (
  hpBaseStat: number,
  individualValue: number,
  effortValue: number,
  level: number,
) => {
  return Math.floor(
    ((hpBaseStat * 2 + individualValue + effortValue / 4 + 100) * level) / 100 +
      10,
  );
};

// (종족값, 개체값, 노력치, 레벨, 성격 보정)
const calculateStat = (
  baseStat: number,
  individualValue: number,
  effortValue: number,
  level: number,
  natureModifier: number,
) => {
  const stat =
    (baseStat * 2 + individualValue + effortValue / 4) * (level / 100) + 5;
  const natureModifierStat = Math.floor(stat) * natureModifier;

  return Math.floor(natureModifierStat);
};

export const calculateMaxStat = (
  stat: string,
  value: number,
  level: number,
) => {
  if (stat === 'hp') {
    return calculateHpStat(value, 31, 252, level);
  }
  return calculateStat(value, 31, 252, level, 1.1);
};

export const calculateMinStat = (
  stat: string,
  value: number,
  level: number,
) => {
  if (stat === 'hp') {
    return calculateHpStat(value, 0, 0, level);
  }
  return calculateStat(value, 0, 0, level, 0.9);
};

export const calculateMaxHpAt50 = (hpBastStat: number) => {
  return calculateHpStat(hpBastStat, 50, 252, 31);
};

export const calculateMaxHpAt100 = (hpBastStat: number) => {
  return calculateHpStat(hpBastStat, 100, 252, 31);
};

export const calculateStatAt50 = (baseStat: number) => {
  return calculateStat(baseStat, 31, 252, 50, 1.1);
};

export const calculateStatAt100 = (baseStat: number) => {
  return calculateStat(baseStat, 31, 252, 100, 1.1);
};
