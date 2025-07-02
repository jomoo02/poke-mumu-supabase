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
    console.log(isOpen);
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      e.preventDefault();
      if (Date.now() - openedAt < 200) {
        return;
      }

      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, contentRef, triggerRef, close, openedAt]);

  // ✅ 모바일: 터치 시작 시 초기화
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleTouchStart = () => {
      touchMoved.current = false;
    };

    const handleTouchMove = () => {
      touchMoved.current = true;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchMoved.current) {
        return;
      }

      const target = e.target as Node;
      const isOutside =
        !contentRef.current?.contains(target) &&
        !triggerRef.current?.contains(target);

      if (isOutside) {
        e.preventDefault();
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
