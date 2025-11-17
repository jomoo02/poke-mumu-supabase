'use client';

import { StatProvider } from './context';
import LevelSelect from './level-select';
import StatList from './stat-list';

import type { PokeDetailStat } from '../../model';

interface PokeStatProps {
  stats: PokeDetailStat[];
}

export default function PokeStats({ stats }: PokeStatProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold pb-3 mb-6 scroll-mt-12 text-foreground pt-10">
        스탯
      </h2>
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-2 sm:gap-4">
        <StatProvider stats={stats}>
          <LevelSelect />
          <StatList />
        </StatProvider>
      </div>
    </div>
  );
}
