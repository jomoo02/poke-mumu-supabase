import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';

interface LoadingProps {
  ndex: number;
}

function SpeciesNavLoading({ ndex }: LoadingProps) {
  const prevCondition = ndex > 1;
  const nextCondition = ndex < 1025;

  return (
    <div className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0">
      {prevCondition && (
        <div className="flex border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-zinc-500">
          <div className="flex justify-center items-center border-r-2 border-zinc-500 px-3 sm:px-4">
            <ArrowLeftIcon size="1.6rem" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[120px] bg-zinc-300/50 rounded-sm h-4" />
          </div>
        </div>
      )}
      <div className="lg:col-start-3 xl:col-start-3">
        {nextCondition && (
          <div className="flex flex-row-reverse border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-zinc-500">
            <div className="flex justify-center items-center border-l-2 border-zinc-500 px-3 sm:px-4">
              <ArrowRightIcon size="1.6rem" />
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-[120px] bg-zinc-300/50 rounded-sm h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SpeciesLayoutLoading({ ndex }: LoadingProps) {
  return (
    <div className="grid gap-4 animate-pulse">
      <SpeciesNavLoading ndex={ndex} />
      <div className="w-full flex justify-center">
        <div className="my-4 h-9 w-[80px] bg-slate-300/50 rounded-md" />
      </div>
      <div className="flex gap-x-2 w-full my-4 h-9">
        <div className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent bg-gray-200 rounded-md w-16 h-8" />
        <div className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent bg-gray-200 rounded-md w-20 h-8" />
      </div>
    </div>
  );
}
