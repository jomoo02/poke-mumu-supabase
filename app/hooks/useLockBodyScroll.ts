// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export default function useLockBodyScroll(lock: boolean) {
  useLayoutEffect(() => {
    const scrollbarWidth = getScrollbarWidth();

    if (lock) {
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [lock]);
}

// export default function useLockBodyScroll(isLock: boolean) {
//   const className1 = 'overflow-hidden';
//   const className2 = 'lg:pr-[15px]';

//   useEffect(() => {
//     // const body = document.querySelector('body');
//     // if (body) {
//     //   document.body.style.touchAction = isLock ? 'none' : 'auto';
//     //   document.body.style.overflow = isLock ? 'hidden' : 'auto';
//     //   // if (isLock) {
//     //   //   body.classList.add(className);
//     //   // } else {
//     //   //   body.classList.remove(className);
//     //   // }
//     // }

//     const disableScroll = () => {
//       // document.body.style.overflow = 'hidden'; // 스크롤 비활성화
//       // document.body.style.paddingRight = '15px';
//       // document.body.classList.add(className1);
//       // document.body.classList.add(className2);
//       // document.body.style.position = 'fixed'; // 고정 위치 유지
//       // document.body.style.width = '100%'; // 고정된 너비로 스크롤바 제거 방지
//     };

//     const enableScroll = () => {
//       document.body.classList.remove(className1);
//       document.body.classList.remove(className2);
//       // document.body.style.overflow = ''; // 스크롤 복원
//       // // document.body.style.position = ''; // 기본 위치로 되돌리기
//       // document.body.style.paddingRight = ''; // 공간 확보 제거
//       // document.body.style.width = ''; // 너비 복원
//     };

//     // open일 때 스크롤 막기
//     if (isLock) {
//       disableScroll();
//     } else {
//       enableScroll();
//     }
//     return () => {
//       // if (body) {
//       enableScroll();
//       // document.body.style.touchAction = 'auto';
//       // document.body.style.overflow = 'auto';
//       // body.classList.remove(className);
//       // }
//     };
//   }, [isLock]);
// }
