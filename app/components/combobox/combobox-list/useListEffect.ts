import { useEffect, useState } from 'react';
import { useTriggerRef, useListOpen, useListRef } from '../combobox.context';

export function useClickOutsideEffect() {
  const { isOpen, close } = useListOpen();
  const { listRef } = useListRef();
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
        listRef.current &&
        !listRef.current.contains(e.target as Node) &&
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
  }, [isOpen, listRef, triggerRef, close, openedAt]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as Node;

      if (
        !listRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, listRef, triggerRef, close]);
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
