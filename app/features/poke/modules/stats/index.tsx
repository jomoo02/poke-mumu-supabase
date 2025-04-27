'use client';

import type { PokeStats } from './types/stats';
import BasicStat from './components/basic-stat';
import TotalStat from './components/total-stat';
import { calculateMaxStatValue, calculateTotalStatValue } from './lib/stats';
import useLevel from './hooks/useLevel';
import Stat from './components/stat';
import LevelSelector from './components/level-selector';
// import LevelSelector2 from './components/level-selector-2';

interface StatsProps {
  stats: PokeStats | null;
}

export default function Stats({ stats }: StatsProps) {
  const { level, setLevel } = useLevel();
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
    <div className="relative">
      <div className="flex justify-end absolute right-0 -top-9">
        <LevelSelector
          targetLevel={level}
          setTargetLevel={setLevel}
          levels={[50, 100]}
        />
      </div>

      <div className="grid divide-y divide-slate-300 c-border-outer rounded-lg bg-white">
        {statList.map(({ stat, value }) => (
          <Stat
            key={stat}
            stat={stat}
            targetLevel={level}
            value={value}
            maxStatValue={maxStatValue}
          />
        ))}
        <TotalStat totalStatValue={totalStatValue} />
      </div>
    </div>
  );
}
