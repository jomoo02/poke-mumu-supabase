import { useEffect, useRef } from 'react';

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export default function useLockBodyScroll(lock: boolean) {
  const scrollPosition = useRef(0);
  const prevStyle = useRef({
    overflow: '',
    paddingRight: '',
    position: '',
    top: '',
    width: '',
  });

  useEffect(() => {
    if (!lock) return;

    const body = document.body;
    const scrollbarWidth = getScrollbarWidth();

    // 1프레임 뒤에 정확한 scrollY 값 얻기
    const raf = requestAnimationFrame(() => {
      scrollPosition.current = window.scrollY;

      prevStyle.current = {
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
      };

      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition.current}px`;
      body.style.width = '100%';

      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    });

    return () => {
      cancelAnimationFrame(raf);

      const y = scrollPosition.current;

      body.style.position = prevStyle.current.position;
      body.style.top = prevStyle.current.top;
      body.style.width = prevStyle.current.width;

      window.scrollTo(0, y);

      body.style.overflow = prevStyle.current.overflow;
      body.style.paddingRight = prevStyle.current.paddingRight;
    };
  }, [lock]);
}
