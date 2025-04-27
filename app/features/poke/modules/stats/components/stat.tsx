import { getStatKo } from '@/app/lib/stat';
import StatBar from './stat-bar';
import { calculateMinStat, calculateMaxStat } from '../lib/stats';

interface StatProps {
  stat: string;
  value: number;
  targetLevel: 50 | 100;
  maxStatValue: number;
}

export default function Stat({
  stat,
  targetLevel,
  value,
  maxStatValue,
}: StatProps) {
  const statText = getStatKo(stat);

  const maxStat = calculateMaxStat(stat, value, targetLevel);
  const minStat = calculateMinStat(stat, value, targetLevel);

  return (
    <div className="flex py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px] first:rounded-t-lg">
      <div className="c-text-base leading-4 text-right pr-0.5 sm:pr-1.5 w-28">
        {statText}
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center c-text-base">{value}</div>
        <StatBar value={value} max={maxStatValue} />
      </div>
      <div className="w-10 text-center">{minStat}</div>
      <div className="w-10 text-center">{maxStat}</div>
    </div>
  );
}
