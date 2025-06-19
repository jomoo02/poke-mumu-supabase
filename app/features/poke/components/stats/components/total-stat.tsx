interface TotalStatProps {
  totalStatValue: number;
}

export default function TotalStat({ totalStatValue }: TotalStatProps) {
  return (
    <div className="flex px-1.5 gap-x-1 md:gap-x-3 items-center h-8 rounded-b-lg">
      <div className="text-slate-800 text-right pr-1 w-[4.375rem] md:w-24">
        합계
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-3">
        <div className="min-w-9 max-w-9 text-center text-slate-800">
          {totalStatValue}
        </div>
      </div>
      <div className="w-11 md:w-14 text-center text-slate-800">MIN</div>
      <div className="w-11 md:w-14 text-center text-slate-800">MAX</div>
    </div>
  );
}
