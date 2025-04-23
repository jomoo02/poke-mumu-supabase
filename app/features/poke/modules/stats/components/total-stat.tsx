interface TotalStatProps {
  totalStatValue: number;
}

export default function TotalStat({ totalStatValue }: TotalStatProps) {
  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px] rounded-b-lg">
      <div className="c-text-base leading-4 text-right pr-0.5 sm:pr-1.5">
        합계
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center c-text-base font-semibold">
          {totalStatValue}
        </div>
      </div>
    </div>
  );
}
