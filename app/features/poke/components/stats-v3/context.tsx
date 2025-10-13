import { createContext, useContext, useMemo, useState } from 'react';
import { getStatKo } from '@/app/lib/stat';
import type { PokeStats, Stat } from './types';
import { calculateMaxStat, calculateMinStat } from './utils';

export type StatLevel = '50' | '100';

const LEVELS: StatLevel[] = ['50', '100'];

const STAT_KEYS: Stat[] = [
  'hp',
  'attack',
  'defense',
  'special_attack',
  'special_defense',
  'speed',
] as const;

interface StatsContextValue {
  level: StatLevel;
  levels: StatLevel[];
  handleLevelChange: (level: StatLevel) => void;
  maxStatValue: number;
  total: number;
  statData: Record<
    Stat,
    {
      text: string;
      maxValue: number;
      minValue: number;
      value: number;
    }
  >;
  statKeys: Stat[];
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
  pokeStats,
  children,
}: {
  pokeStats: PokeStats;
  children: React.ReactNode;
}) {
  const [level, setLevel] = useState<StatLevel>('50');

  const handleLevelChange = (value: StatLevel) => {
    if (value === '50' || value === '100') {
      setLevel(value);
    }
  };

  const levels = LEVELS;
  const statKeys = STAT_KEYS;

  const total = Object.values(pokeStats).reduce((acc, cur) => acc + cur, 0);

  const maxStatValue = useMemo(() => {
    if (!pokeStats) {
      return 80;
    }

    return Math.max(...Object.values(pokeStats));
  }, [pokeStats]);

  const statData = useMemo(() => {
    const targetLevel = Number(level);
    const map: Record<
      Stat,
      { text: string; maxValue: number; minValue: number; value: number }
    > = {} as Record<
      Stat,
      { text: string; maxValue: number; minValue: number; value: number }
    >;

    statKeys.forEach((stat) => {
      const statValue = pokeStats ? pokeStats[stat] : 10;
      const maxValue = calculateMaxStat(stat, statValue, targetLevel);
      const minValue = calculateMinStat(stat, statValue, targetLevel);

      map[stat] = {
        text: getStatKo(stat),
        value: statValue,
        maxValue,
        minValue,
      };
    });

    return map;
  }, [level, pokeStats, statKeys]);

  const value = useMemo(
    () => ({
      level,
      handleLevelChange,
      levels,
      maxStatValue,
      statData,
      statKeys,
      total,
    }),
    [level, levels, maxStatValue, statData, total, statKeys],
  );

  return <StatContext.Provider value={value}>{children}</StatContext.Provider>;
}

export { StatProvider, useStatContext };
