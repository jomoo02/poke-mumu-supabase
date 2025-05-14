import { useEffect, useState } from 'react';
import { useTriggerRef, useSelectOpen, useContentRef } from '../select.context';

export function useOnClickOutsideEffect() {
  const { isOpen, onClose } = useSelectOpen();
  const { contentRef } = useContentRef();
  const { triggerRef } = useTriggerRef();
  const [openedAt, setOpenedAt] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setOpenedAt(Date.now());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (Date.now() - openedAt < 200) {
        return;
      }

      // e.preventDefault();
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, contentRef, triggerRef, onClose, openedAt]);

  useEffect(() => {
    if (!isOpen) return;

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as Node;

      if (
        !contentRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, contentRef, triggerRef, onClose]);
}

export function useOnOrientationChangeEffect() {
  const { isOpen, onClose } = useSelectOpen();

  useEffect(() => {
    if (!isOpen) return;

    let lastOrientation = window.orientation;

    const handleResize = () => {
      // orientation 값이 바뀐 경우에만 닫기
      const currentOrientation = window.orientation;
      if (currentOrientation !== lastOrientation) {
        lastOrientation = currentOrientation;
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);
}

// export function useOnResizeEffect() {
//   const { isOpen, onClose } = useSelectOpen();
//   const [openedAt, setOpenedAt] = useState(0);

//   useEffect(() => {
//     if (isOpen) {
//       setOpenedAt(Date.now());
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) return;

//     const handleResize = () => {
//       const timeSinceOpen = Date.now() - openedAt;
//       console.log('resize');
//       if (timeSinceOpen < 500) {
//         // 무시 (모바일 키보드일 가능성 높음)
//         return;
//       }

//       onClose();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isOpen, onClose, openedAt]);
// }
