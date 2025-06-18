function Stat1() {
  const width = `${(75 / 255) * 100}%`;

  return (
    <div className="flex px-1.5 gap-x-1.5 sm:gap-x-3 items-center h-8">
      <div className="flex justify-end w-[4.375rem] md:w-24">
        <div className="w-1/2 bg-neutral-200 h-4 rounded" />
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 flex justify-center">
          <div className="bg-neutral-200 rounded h-4 w-6.5 md:w-8" />
        </div>
        <svg width="100%" height="12">
          <g className="bars">
            <rect fill="#e5e5e5" width={width} height="12" rx="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Stat2() {
  const width = `${(100 / 255) * 100}%`;

  return (
    <div className="flex px-1.5 gap-x-1.5 sm:gap-x-3 items-center h-8">
      <div className="flex justify-end w-[4.375rem] md:w-24">
        <div className="w-1/2 bg-neutral-200 h-4 rounded" />
      </div>
      <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 flex justify-center  ">
          <div className="bg-neutral-200 rounded h-4 w-6.5 md:w-8" />
        </div>
        <svg width="100%" height="12">
          <g className="bars">
            <rect fill="#e5e5e5" width={width} height="12" rx="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="pb-3 mt-12 mb-6 pt-10 border-t border-gray-200">
        <div className="h-6.5 bg-neutral-200 rounded w-14" />
      </div>
      <div className="grid divide-y  divide-gray-200 border border-gray-200 rounded-lg bg-white shaodw-md  shadow-gray-200">
        <Stat1 />
        <Stat2 />
        <Stat2 />
        <Stat1 />
        <Stat2 />
        <Stat2 />
        <div className="flex px-1.5 gap-x-1.5 sm:gap-x-3 items-center h-8 rounded-b-lg">
          <div className="flex justify-end w-[4.375rem] md:w-24">
            <div className="w-1/2 bg-neutral-200 h-4 rounded" />
          </div>
          <div className="flex-1 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
            <div className="min-w-9 max-w-9 flex justify-center  ">
              <div className="bg-neutral-200 rounded h-4 w-6.5 md:w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
