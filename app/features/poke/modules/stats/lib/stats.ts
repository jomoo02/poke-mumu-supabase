import type { Stat } from '../../../types/stats';

export function getKoStatText(stat: Stat) {
  const koStatMap: Record<Stat, string> = {
    hp: '체력',
    attack: '공격',
    defense: '방어',
    special_attack: '특수공격',
    special_defense: '특수방어',
    speed: '스피드',
  };

  return koStatMap[stat];
}

export function calculateTotalStatValue(statValueList: number[]) {
  const totalStatvalue = statValueList.reduce(
    (total, value) => total + value,
    0,
  );

  return totalStatvalue;
}

export function calculateMaxStatValue(statValueList: number[]) {
  const maxStatValue = Math.max(...statValueList);

  return maxStatValue;
}
