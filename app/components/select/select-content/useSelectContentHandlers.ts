import { useState, useEffect, type FocusEvent } from 'react';
import {
  useSelectOpen,
  useActiveIndex,
  useItems,
  useOnSelect,
  useContainerRef,
} from '../select.context';

export function useHandleKeyDown() {
  const { isOpen, onClose } = useSelectOpen();
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { items, itemCount } = useItems();
  const { onSelect } = useOnSelect();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      return;
    }

    e.preventDefault();

    switch (e.key) {
      case 'ArrowDown':
        const next =
          activeIndex + 1 >= itemCount ? activeIndex : activeIndex + 1;
        setActiveIndex(next, 'keyboard');
        break;
      case 'ArrowUp':
        const before = activeIndex - 1 <= 0 ? 0 : activeIndex - 1;
        setActiveIndex(before, 'keyboard');
        break;
      case 'Enter':
        const value = items[activeIndex];
        onSelect(value);
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };

  return { handleKeyDown };
}

export function useHandleBlur() {
  const { containerRef } = useContainerRef();
  const { onClose, isOpen } = useSelectOpen();
  const [openAt, setOpenAt] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setOpenAt(Date.now());
    }
  }, [isOpen]);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (Date.now() - openAt < 300) {
      return;
    }

    const relatedTarget = e.relatedTarget as HTMLElement | null;
    const container = containerRef.current;

    if (!relatedTarget || !container?.contains(relatedTarget)) {
      onClose();
    }
  };

  return { handleBlur };
}
