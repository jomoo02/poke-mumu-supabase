import Image from 'next/image';

function Info1() {
  return (
    <div className="flex min-h-9.5 items-center border-b border-gray-200 p-1.5">
      <div className="w-68 px-4">
        <div className="w-28 bg-neutral-200 h-4 rounded-md" />
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="flex min-h-9.5 items-center border-b border-gray-200 p-1.5">
      <div className="w-68 px-4">
        <div className="w-40 bg-neutral-200 h-4 rounded-md" />
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="flex min-h-9.5 items-center border-b border-gray-200 p-1.5">
      <div className="w-68 px-4">
        <div className="w-48 bg-neutral-200 h-4 rounded-md" />
      </div>
    </div>
  );
}

export default function PokedexInformationSkeleton() {
  const src = '/pokeball.svg';
  const alt = 'poke-image';
  return (
    <div className="animate-pulse">
      <div className="pb-3 mb-6 pt-10">
        <div className="h-8 bg-neutral-200 rounded-md w-20" />
      </div>
      <div className="flex gap-11 flex-col lg:flex-row lg:justify-around py-4 px-2.5 sm:px-4">
        {/* 이미지 */}
        <div className="flex items-center justify-center">
          <Image src={src} alt={alt} width={300} height={300} priority />
        </div>
        {/* 정보 */}
        <div>
          <Info1 />
          <Info1 />
          <Info2 />
          <Info1 />
          <Info1 />
          <Info2 />
          <Info2 />
          <Info3 />
          <Info2 />
          <Info3 />
        </div>
      </div>
    </div>
  );
}
