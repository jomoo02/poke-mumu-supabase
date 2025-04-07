import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';

interface LoadingProps {
  ndex: number;
}

export default function Loading({ ndex }: LoadingProps) {
  const prevCondition = ndex > 1;
  const nextCondition = ndex < 1025;

  return (
    <div className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0 ">
      {prevCondition && (
        <div className="flex border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500">
          <div className="flex justify-center items-center border-r-2 border-slate-500 px-3 sm:px-4">
            <ArrowLeftIcon size="1.6rem" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[120px] bg-slate-300/50 rounded-sm h-4 animate-pulse" />
          </div>
        </div>
      )}
      <div className="lg:col-start-3 xl:col-start-3">
        {nextCondition && (
          <div className="flex flex-row-reverse border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500">
            <div className="flex justify-center items-center border-l-2 border-slate-500 px-3 sm:px-4">
              <ArrowRightIcon size="1.6rem" />
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-[120px] bg-slate-300/50 rounded-sm h-4 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
