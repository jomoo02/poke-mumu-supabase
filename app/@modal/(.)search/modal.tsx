'use client';

// import Search from '@/app/_features/search/containers/search';
import Search from '@/app/pages/search/ui/search';

export default function Modal() {
  return (
    <div className="backdrop-blur-sm bg-slate-700/60 z-[5000] inset-0 fixed w-screen h-dvh flex justify-center items-center">
      <div className="w-full h-[550px] p-2 lg:w-[650px]">
        <Search />
      </div>
    </div>
  );
}
