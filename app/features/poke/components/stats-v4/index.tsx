'use client';

import SectionHeader from '../section-header';
import { StatProvider } from './context';
import LevelSelect from './level-select';
import StatList from './stat-list';
import type { PokeStats as Stats } from './types';

interface PokeStatsProps {
  stats: Stats;
}

export default function PokeStatsV4({ stats }: PokeStatsProps) {
  return (
    <StatProvider pokeStats={stats}>
      <SectionHeader id="stats" sectionTitle="능력치" />
      <div className="py-4 flex justify-end">{/* <LevelSelect /> */}</div>
      <StatList />
    </StatProvider>
  );
}
