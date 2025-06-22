'use client';

import Search from '@/app/features/search/containers/search';
import { createPortal } from 'react-dom';

export default function Modal() {
  return createPortal(
    <div className="backdrop-blur-sm bg-zinc-900/30 z-[5000] top-0 bottom-0 left-0 fixed w-screen h-screen flex justify-center lg:items-center">
      <div className="w-full p-4 h-[calc(100%-100px)] lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
}
