'use client';

import Search from '@/app/features/search/containers/search';

export default function Modal() {
  return (
    <div className="lg:backdrop-blur-sm bg-white lg:bg-zinc-900/30 z-[5000] inset-0 fixed w-screen h-full flex justify-center lg:items-center">
      <div className="w-full max-h-lvh lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
