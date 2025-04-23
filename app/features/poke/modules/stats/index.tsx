import type { PokeStats } from './types/stats';
import BasicStat from './components/basic-stat';
import TotalStat from './components/total-stat';
import { calculateMaxStatValue, calculateTotalStatValue } from './lib/stats';

interface StatsProps {
  stats: PokeStats | null;
}

export default function Stats({ stats }: StatsProps) {
  if (!stats) {
    return null;
  }

  const statList: { stat: string; value: number }[] = [
    { stat: 'hp', value: stats.hp },
    { stat: 'attack', value: stats.attack },
    { stat: 'defense', value: stats.defense },
    { stat: 'special_attack', value: stats.special_attack },
    { stat: 'special_defense', value: stats.special_defense },
    { stat: 'speed', value: stats.speed },
  ];

  const statValueList = statList.map(({ value }) => value);
  const maxStatValue = calculateMaxStatValue(statValueList);
  const totalStatValue = calculateTotalStatValue(statValueList);

  return (
    <>
      {statList.map(({ stat, value }) => (
        <BasicStat
          key={stat}
          stat={stat}
          value={value}
          maxStatValue={maxStatValue}
        />
      ))}
      <TotalStat totalStatValue={totalStatValue} />
    </>
  );
}
