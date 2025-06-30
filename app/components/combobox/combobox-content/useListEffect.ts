import { useEffect, useState, useRef } from 'react';
import { useTriggerRef, useListOpen, useContentRef } from '../combobox.context';

export function useClickOutsideEffect() {
  const { isOpen, close } = useListOpen();
  const { contentRef } = useContentRef();
  const { triggerRef } = useTriggerRef();
  const [openedAt, setOpenedAt] = useState(0);
  const touchMoved = useRef(false);

  useEffect(() => {
    if (isOpen) {
      setOpenedAt(Date.now());
    }
  }, [isOpen]);

  // PC: 클릭으로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (Date.now() - openedAt < 200) return;

      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, contentRef, triggerRef, close, openedAt]);

  // ✅ 모바일: 터치 시작 시 초기화
  useEffect(() => {
    if (!isOpen) return;

    const handleTouchStart = () => {
      touchMoved.current = false;
    };

    const handleTouchMove = () => {
      touchMoved.current = true;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchMoved.current) return; // 스크롤로 간주하고 무시

      const target = e.target as Node;
      if (
        !contentRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, contentRef, triggerRef, close]);
}

// export function useClickOutsideEffect() {
//   const { isOpen, close } = useListOpen();
//   const { contentRef } = useContentRef();
//   const { triggerRef } = useTriggerRef();
//   const [openedAt, setOpenedAt] = useState(0);

//   useEffect(() => {
//     if (isOpen) {
//       setOpenedAt(Date.now());
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) {
//       return;
//     }

//     const handleClickOutside = (e: MouseEvent) => {
//       if (Date.now() - openedAt < 200) {
//         return;
//       }

//       // e.preventDefault();
//       if (
//         contentRef.current &&
//         !contentRef.current.contains(e.target as Node) &&
//         !triggerRef.current?.contains(e.target as Node)
//       ) {
//         close();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside, {
//       passive: true,
//     });

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, contentRef, triggerRef, close, openedAt]);

//   useEffect(() => {
//     if (!isOpen) {
//       return;
//     }

//     const handleTouchEnd = (e: TouchEvent) => {
//       const target = e.target as Node;

//       if (
//         !contentRef.current?.contains(target) &&
//         !triggerRef.current?.contains(target)
//       ) {
//         e.preventDefault();
//         close();
//       }
//     };

//     document.addEventListener('touchend', handleTouchEnd, { passive: false });

//     return () => {
//       document.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [isOpen, contentRef, triggerRef, close]);
// }

export function useOrientationChangeEffect() {
  const { isOpen, close } = useListOpen();

  useEffect(() => {
    if (!isOpen) return;

    const handleChange = () => {
      close();
    };

    const orientation = screen.orientation;

    orientation?.addEventListener?.('change', handleChange);

    return () => {
      orientation?.removeEventListener?.('change', handleChange);
    };
  }, [isOpen, close]);
}
