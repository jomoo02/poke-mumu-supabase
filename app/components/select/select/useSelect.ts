import { useState, useRef, useCallback, useEffect, ReactNode } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

export default function useSelect(
  value: string,
  onSelect: (value: string) => void | null,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemValues, setItemValues] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  //
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [itemValues2, setItemValues2] = useState<
    { item: string; content: ReactNode }[]
  >([]);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    setSelectedValue(itemValues[0]);
  }, [itemValues]);

  const registerItem2 = useCallback(
    (item: { item: string; content: ReactNode }) => {
      setItemValues2((prev) => {
        if (!prev.map((p) => p.item).includes(item.item)) {
          return [...prev, item];
        }
        return prev;
      });

      return itemValues2.map(({ item }) => item).indexOf(item.item);
    },
    [itemValues2],
  );

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
    setTimeout(() => {
      triggerRef.current?.focus({ preventScroll: true });
    }, 0);
  };

  const handleOnSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }
    setSelectedValue(value);
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
    selectedValue,

    //
    itemValues2,
    registerItem2,
  };
}
