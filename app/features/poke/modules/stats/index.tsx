'use client';

// import SelectItem from '@/app/components/select-2/select-item';
// import Select from '@/app/components/select-2/select';
import Select from '@/app/components/select-3/select';
import { SelectItem } from '@/app/components/select-3/select-item';
import type { PokeStats } from './types/stats';
import TotalStat from './components/total-stat';
import { calculateMaxStatValue, calculateTotalStatValue } from './lib/stats';
import useLevel from './hooks/useLevel';
import Stat from './components/stat';

interface StatsProps {
  stats: PokeStats | null;
}

export default function Stats({ stats }: StatsProps) {
  const { level, setLevel, renderItem } = useLevel();

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
        <Select value={level} onChange={setLevel} renderItem={renderItem}>
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
