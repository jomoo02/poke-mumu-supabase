interface TotalStatProps {
  totalStatValue: number;
}

export default function TotalStat({ totalStatValue }: TotalStatProps) {
  return (
    <div className="flex px-1.5 gap-x-1.5 md:gap-x-3 items-center h-[30px] rounded-b-lg">
      <div className="text-sm md:text-base text-slate-700 font-medium text-right pr-1 w-16 md:w-24">
        합계
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center text-sm md:text-base text-slate-800 font-medium">
          {totalStatValue}
        </div>
      </div>
      <div className="w-10 md:w-14 text-center text-sm md:text-base text-slate-500 font-medium">
        MIN
      </div>
      <div className="w-10 md:w-14 text-center text-sm md:text-base text-slate-500 font-medium">
        MAX
      </div>
    </div>
  );
}
