import Image from 'next/image';
import ArrowRightIcon from '@/app/components/icon/arrow-right';
import ArrowDownIcon from '@/app/components/icon/arrow-down';

function ArrowIcon() {
  const color = '#1d293d';
  const size = '24px';

  return (
    <>
      <div className="hidden lg:block">
        <ArrowRightIcon size={size} color={color} />
      </div>
      <div className="lg:hidden">
        <ArrowDownIcon size={size} color={color} />
      </div>
    </>
  );
}

function ChainNodeSkeleton() {
  const src = '/pokeball.svg';
  const alt = 'poke-ball';

  return (
    <div className="flex flex-col items-center w-[130px] pt-2">
      <div className="w-[4.5rem] h-[4.5rem] relative my-1">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="72px"
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="bg-neutral-200 h-4 rounded w-10" />
      <div className="bg-neutral-200 h-4 rounded w-12 my-1" />
      <div className="h-5" />
    </div>
  );
}

function DetailSkeleton() {
  return (
    <div className="w-full lg:w-[200px] py-2.5 px-1 flex justify-center items-center flex-col gap-y-1">
      <div className="bg-neutral-200 rounded w-1/4 lg:w-2/3 h-5" />
      <ArrowIcon />
    </div>
  );
}

export default function EvolutionSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="pb-3 mt-12 mb-6 pt-10 border-t border-gray-200">
        <div className="h-6.5 bg-neutral-200 rounded w-14" />
      </div>
      <div className="flex lg:flex-col lg:items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-fit">
          <ChainNodeSkeleton />
          <DetailSkeleton />
          <ChainNodeSkeleton />
          <DetailSkeleton />
          <ChainNodeSkeleton />
        </div>
      </div>
    </div>
  );
}
