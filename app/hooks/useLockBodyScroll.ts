import { useEffect } from 'react';

export default function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // prevent touch scroll on iOS
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (lock) {
      body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // prevent iOS touch scroll
      document.addEventListener('touchmove', preventScroll, {
        passive: false,
      });
    } else {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;

      document.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;

      document.removeEventListener('touchmove', preventScroll);
    };
  }, [lock]);
}
