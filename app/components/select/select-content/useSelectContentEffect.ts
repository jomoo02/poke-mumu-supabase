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
    if (!isOpen) {
      return;
    }

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

    const handleChange = () => {
      onClose();
    };

    const orientation = screen.orientation;

    orientation?.addEventListener?.('change', handleChange);

    return () => {
      orientation?.removeEventListener?.('change', handleChange);
    };
  }, [isOpen, onClose]);
}
