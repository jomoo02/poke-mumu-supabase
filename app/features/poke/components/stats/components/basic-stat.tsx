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
    <div className="flex px-1.5 gap-x-1 md:gap-x-3 items-center h-8 first:rounded-t-lg">
      <div className="text-slate-800 text-right pr-1 w-[4.375rem] md:w-24">
        {statText}
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-3">
        <div className="min-w-9 max-w-9 text-center text-slate-800">
          {value}
        </div>
        <StatBar value={value} max={maxStatValue} />
      </div>
      <div className="w-11 md:w-14 text-center text-slate-800">{minStat}</div>
      <div className="w-11 md:w-14 text-center text-slate-800">{maxStat}</div>
    </div>
  );
}
