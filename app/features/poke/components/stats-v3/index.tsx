'use client';

import SectionHeader from '../section-header';
import { StatProvider } from './context';
import LevelSelect from './level-select';
import MinMax from './minmax';
import StatList from './stat-list';
import type { PokeStats as Stats } from './types';

interface PokeStatsProps {
  stats: Stats;
}

export default function PokeStatsV3({ stats }: PokeStatsProps) {
  return (
    <StatProvider pokeStats={stats}>
      <SectionHeader id="stats" sectionTitle="능력치" />
      {/* <div className="py-4 flex justify-end"></div> */}
      {/* <div className="flex flex-col lg:flex-row gap-10"> */}
      <div className="w-full mx-auto">
        <StatList />
        {/* <MinMax /> */}
      </div>
    </StatProvider>
  );
}
