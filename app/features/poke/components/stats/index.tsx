'use client';

import type { PokeStats } from './types';
import TotalStat from './components/total-stat';
import {
  calculateMaxStatValue,
  calculateTotalStatValue,
  formatStats,
} from './lib';
import useLevel from './hooks/useStatLevel';
import Stat from './components/basic-stat';
import LevelSelect from './components/level-select';
import SectionHeader from '../section-header';

interface StatsProps {
  stats: PokeStats | null;
}

export default function Stats({ stats }: StatsProps) {
  const { level, handleOnSelect, initialLevel, selectItems } = useLevel();

  const statList = formatStats(stats);

  const statValueList = statList.map(({ value }) => value);
  const maxStatValue = calculateMaxStatValue(statValueList);
  const totalStatValue = calculateTotalStatValue(statValueList);

  return (
    <div>
      <SectionHeader id="stats" sectionTitle="능력치" />
      <div className="relative">
        <div className="flex justify-end absolute right-0 -top-9.5">
          <LevelSelect
            initialLevel={initialLevel}
            handleOnSelect={handleOnSelect}
            selectItems={selectItems}
          />
        </div>
        <div className="grid divide-y divide-slate-300 border border-slate-300 rounded-lg bg-white shadow-md shadow-slate-300">
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
    </div>
  );
}
