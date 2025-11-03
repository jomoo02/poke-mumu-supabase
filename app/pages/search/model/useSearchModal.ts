import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useLockBodyScroll from './useLockBodyScroll';

export default function useSearchModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useLockBodyScroll();

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        router.back();
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [router]);

  return {
    modalRef,
  };
}
