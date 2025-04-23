import { getStatKo } from '@/app/lib/stat';
import StatBar from './stat-bar';

interface BasicStatProps {
  stat: string;
  value: number;
  maxStatValue: number;
}

export default function BasicStat({
  stat,
  value,
  maxStatValue,
}: BasicStatProps) {
  const statText = getStatKo(stat);

  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px] first:rounded-t-lg">
      <div className="c-text-base leading-4 text-right pr-0.5 sm:pr-1.5">
        {statText}
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center c-text-base">{value}</div>
        <StatBar value={value} max={maxStatValue} />
      </div>
    </div>
  );
}
