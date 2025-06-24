import { useEffect } from 'react';

// export default function useLockBodyScroll(
//   modalRef: React.RefObject<HTMLDivElement | null>,
// ) {
//   useEffect(() => {
//     const body = document.body;
//     const originalOverflow = body.style.overflow;
//     const originalPaddingRight = body.style.paddingRight;
//     const scrollY = window.scrollY;
//     const scrollbarWidth =
//       window.innerWidth - document.documentElement.clientWidth;

//     // 외부 스크롤 차단: Safari 포함
//     const preventTouchMove = (e: TouchEvent) => {
//       const target = e.target as Node;

//       // 모달 내부 터치 허용
//       if (modalRef.current && modalRef.current.contains(target)) {
//         return;
//       }

//       // 모달 외부 터치 → 차단
//       e.preventDefault();
//     };

//     // 1. 스크롤 락
//     body.style.overflow = 'hidden';

//     // 2. 스크롤바 보정 (PC 환경)
//     if (scrollbarWidth > 0) {
//       body.style.paddingRight = `${scrollbarWidth}px`;
//     }

//     // 3. 고정 위치 유지 (모바일 대응)
//     body.style.position = 'fixed';
//     body.style.top = `-${scrollY}px`;
//     body.style.width = '100%';

//     // 4. iOS Safari 대응
//     document.addEventListener('touchmove', preventTouchMove, {
//       passive: false,
//     });

//     return () => {
//       // 원복
//       const top = body.style.top;
//       console.log(top);
//       body.style.overflow = originalOverflow;
//       body.style.paddingRight = originalPaddingRight;
//       body.style.position = '';
//       body.style.top = '';
//       body.style.width = '';
//       if (top) {
//         const scrollToY = parseInt(top) * -1;
//         window.scrollTo(0, scrollToY);
//       }

//       document.removeEventListener('touchmove', preventTouchMove);
//     };
//   }, [modalRef]);
// }

// import { useEffect } from 'react';

export default function useLockBodyScroll() {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    //
    // body.style.position = 'fixed';
    // body.style.top = `-${scrollY}px`;
    // body.style.width = '100%';
    //

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;

      //
      // const scrollY = parseInt(body.style.top || '0');
      // window.scrollTo(0, -scrollY);
      // body.style.position = '';
      // body.style.top = '';
      // body.style.width = '';
      //
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
