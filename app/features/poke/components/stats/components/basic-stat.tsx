import { getStatKo } from '@/app/lib/stat';
import StatBar from './stat-bar';
import { calculateMinStat, calculateMaxStat } from '../lib';

interface StatProps {
  stat: string;
  value: number;
  targetLevel: '50' | '100';
  maxStatValue: number;
}

export default function Stat({
  stat,
  targetLevel = '50',
  value,
  maxStatValue,
}: StatProps) {
  const statText = getStatKo(stat);
  const level = Number(targetLevel);
  const maxStat = calculateMaxStat(stat, value, level);
  const minStat = calculateMinStat(stat, value, level);

  return (
    <div className="flex px-1.5 gap-x-1.5 md:gap-x-3 items-center h-[30px] first:rounded-t-lg">
      <div className="text-sm md:text-base text-slate-700 font-medium text-right pr-1 w-16 md:w-24">
        {statText}
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center text-sm md:text-base text-slate-700 font-medium">
          {value}
        </div>
        <StatBar value={value} max={maxStatValue} />
      </div>
      <div className="w-10 md:w-14 text-center text-sm md:text-base text-slate-700 font-medium">
        {minStat}
      </div>
      <div className="w-10 md:w-14 text-center text-sm md:text-base text-slate-700 font-medium">
        {maxStat}
      </div>
    </div>
  );
}
