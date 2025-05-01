'use client';

// import Select from '@/app/components/select-2';
import SelectItem from '@/app/components/select-2/select-item';
import Select from '@/app/components/select-2/select';
import type { PokeStats } from './types/stats';
// import BasicStat from './components/basic-stat';
import TotalStat from './components/total-stat';
import { calculateMaxStatValue, calculateTotalStatValue } from './lib/stats';
import useLevel from './hooks/useLevel';
import Stat from './components/stat';
// import LevelSelector from './components/level-selector';
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
        <Select height={50} defaultValue={level} onSelect={setLevel}>
          <SelectItem item="50">Lv.50</SelectItem>
          <SelectItem item="100">Lv.100</SelectItem>
        </Select>
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
