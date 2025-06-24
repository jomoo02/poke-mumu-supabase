'use client';

import Search from '@/app/features/search/containers/search';

export default function Modal() {
  return (
    <div className="lg:backdrop-blur-sm bg-white lg:bg-slate-900/30 z-[5000] inset-0 fixed w-screen h-dvh flex justify-center lg:items-center">
      <div className="w-full h-dvh lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
