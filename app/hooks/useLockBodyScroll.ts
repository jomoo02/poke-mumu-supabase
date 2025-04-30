import { useEffect } from 'react';

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export default function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    const body = document.body;
    const originalStyle = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    if (lock) {
      const scrollbarWidth = getScrollbarWidth();

      body.style.overflow = 'hidden';

      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      body.style.overflow = originalStyle.overflow;
      body.style.paddingRight = originalStyle.paddingRight;
    }

    return () => {
      body.style.overflow = originalStyle.overflow;
      body.style.paddingRight = originalStyle.paddingRight;
    };
  }, [lock]);
}
