import { useEffect } from 'react';

export default function useLockBodyScroll(
  lock: boolean,
  allowScrollElement?: HTMLElement | null,
) {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const preventTouchMove = (e: TouchEvent) => {
      if (
        allowScrollElement &&
        allowScrollElement?.contains(e.target as Node)
      ) {
        return;
      }
      e.preventDefault();
    };

    if (lock) {
      body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.addEventListener('touchmove', preventTouchMove, {
        passive: false,
      });
    } else {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;

      document.removeEventListener('touchmove', preventTouchMove);
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;

      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [lock, allowScrollElement]);
}
