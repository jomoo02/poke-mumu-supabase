import { useState, useRef, useCallback, useEffect } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

export default function useSelect(
  value: string,
  onSelect: (value: string) => void,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemValues, setItemValues] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isOpen);

  const registerItem = useCallback(
    (value: string) => {
      setItemValues((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      });

      return itemValues.indexOf(value);
    },
    [itemValues],
  );

  const onOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      contentRef.current?.focus({ preventScroll: true });
    }, 0);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleOnSelect = (value: string) => {
    onSelect(value);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const index = itemValues.findIndex((item) => item === value);
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  }, [isOpen, itemValues, value]);

  return {
    isOpen,
    itemValues,
    containerRef,
    triggerRef,
    contentRef,
    activeIndex,
    setActiveIndex,
    registerItem,
    handleOnSelect,
    onOpen,
    onClose,
  };
}
