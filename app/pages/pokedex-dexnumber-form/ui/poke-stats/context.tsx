'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { calculateMaxStat, calculateMinStat } from '@/app/entities/stat/lib';

import type { PokeDetailStat } from '../../model';

export type StatLevel = '50' | '100';

const LEVELS: StatLevel[] = ['50', '100'];

interface StatsContextValue {
  level: StatLevel;
  levels: StatLevel[];
  onLevelChange: (level: StatLevel) => void;
  maxStatValue: number;
  stats: PokeDetailStat[];
}

const StatContext = createContext<StatsContextValue | undefined>(undefined);

function useStatContext() {
  const context = useContext(StatContext);
  if (!context) {
    throw new Error('stat context error');
  }
  return context;
}

function StatProvider({
  stats,
  children,
}: {
  stats: PokeDetailStat[];
  children: React.ReactNode;
}) {
  const [level, setLevel] = useState<StatLevel>('50');

  const maxStatValue = useMemo(() => {
    if (!stats) {
      return 80;
    }

    return Math.max(...stats.map(({ value }) => value));
  }, [stats]);

  const statData = useMemo(() => {
    const targetLevel = Number(level);

    return stats.map((stat) => {
      if (stat.id !== 'total') {
        const max = calculateMaxStat(stat.id, stat.value, targetLevel);
        const min = calculateMinStat(stat.id, stat.value, targetLevel);
        return {
          ...stat,
          max,
          min,
        };
      }
      return stat;
    });
  }, [level, stats]);

  const value = useMemo(() => {
    const levels = [...LEVELS];
    return {
      level,
      levels,
      maxStatValue,
      onLevelChange: setLevel,
      stats: statData,
    };
  }, [level, maxStatValue, statData]);

  return <StatContext.Provider value={value}>{children}</StatContext.Provider>;
}

export { StatProvider, useStatContext };
