import { useEffect } from 'react';

export default function useInputBlur() {
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;

      const isFormElement =
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[contenteditable="true"]');

      // form 요소 외부를 터치한 경우에만 blur
      if (!isFormElement) {
        const active = document.activeElement as HTMLElement;
        if (
          active &&
          (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')
        ) {
          active.blur();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);
}
