'use client';

import useSearchModal from '../model/useSearchModal';
import Search from './search';

export default function SearchModal() {
  const { modalRef } = useSearchModal();

  return (
    <div className="backdrop-blur-sm bg-slate-500/60 z-[5000] inset-0 fixed w-screen h-dvh flex justify-center items-center">
      <div className="w-full h-[550px] px-2.5 max-w-[600px]" ref={modalRef}>
        <Search />
      </div>
    </div>
  );
}
