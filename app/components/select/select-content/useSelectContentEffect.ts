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

      e.preventDefault();
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, contentRef, triggerRef, onClose, openedAt]);
}

export function useOnResizeEffect() {
  const { isOpen, onClose } = useSelectOpen();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleResize = () => {
      onClose();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);
}
