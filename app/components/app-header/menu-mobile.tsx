'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import MenuIcon from '../icon/menu';
import CloseIcon from '../icon/close';
import { usePathname } from 'next/navigation';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <div className="sm:hidden" onClick={() => setIsOpen(true)}>
        <MenuIcon size={22} />
      </div>
    );
  }

  return (
    <div className="sm:hidden">
      <div onClick={() => setIsOpen(false)}>
        <CloseIcon size={22} />
      </div>
      {typeof window !== 'undefined' && document.getElementById('ttt')
        ? createPortal(
            <div className="absolute inset-0 bg-white overflow-hidden w-screen h-screen z-60">
              <ul className="p-5 space-y-4">
                <li>
                  <Link
                    href={'/pokedex'}
                    className={`font-medium ${pathName === '/pokedex' ? 'text-slate-900' : ' text-slate-600'}`}
                  >
                    도감
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/natures'}
                    className={`font-medium ${pathName === '/natures' ? 'text-slate-900' : ' text-slate-600'}`}
                  >
                    성격
                  </Link>
                </li>
              </ul>
            </div>,
            document.getElementById('ttt') as Element,
          )
        : null}
    </div>
  );
}
