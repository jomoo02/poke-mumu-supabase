import { type FocusEvent } from 'react';
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
        setActiveIndex((prev: number) => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
        setActiveIndex((prev: number) => (prev - 1 + itemCount) % itemCount);
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
  const { onClose } = useSelectOpen();

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    const container = containerRef.current;

    if (!relatedTarget || !container?.contains(relatedTarget)) {
      onClose();
    }
  };

  return { handleBlur };
}
