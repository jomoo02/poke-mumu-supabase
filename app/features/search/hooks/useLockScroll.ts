import { useEffect } from 'react';

export default function useLockBodyScroll(
  modalRef: React.RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const preventTouchMove = (e: TouchEvent) => {
      const target = e.target as Node;

      // 모달 내부에서만 스크롤 허용
      if (modalRef.current && modalRef.current.contains(target)) {
        return;
      }

      // 외부 영역 터치 → 스크롤 차단
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventTouchMove, {
      passive: false,
    });

    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
    };
  }, []);
}

// export default function useLockBodyScroll(lock: boolean) {
//   useEffect(() => {
//     const scrollY = window.scrollY;
//     const body = document.body;

//     if (lock) {
//       body.style.position = 'fixed';
//       body.style.top = `-${scrollY}px`;
//       body.style.width = '100%';
//       body.style.overflow = 'hidden';
//     }

//     return () => {
//       const top = body.style.top;
//       body.style.position = '';
//       body.style.top = '';
//       body.style.overflow = '';
//       body.style.width = '';

//       if (top) {
//         const scrollToY = parseInt(top) * -1;
//         window.scrollTo(0, scrollToY);
//       }
//     };
//   }, [lock]);
// }
