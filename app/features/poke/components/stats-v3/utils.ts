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

const calculateMaxStat = (stat: string, value: number, level: number) => {
  if (stat === 'hp') {
    return calculateHpStat(value, 31, 252, level);
  }
  return calculateStat(value, 31, 252, level, 1.1);
};

const calculateMinStat = (stat: string, value: number, level: number) => {
  if (stat === 'hp') {
    return calculateHpStat(value, 0, 0, level);
  }
  return calculateStat(value, 0, 0, level, 0.9);
};

export { calculateMaxStat, calculateMinStat };
