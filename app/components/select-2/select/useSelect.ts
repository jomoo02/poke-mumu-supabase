import { useState, useRef, useCallback, useEffect } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import type { SelectItem } from '../select.context';

export default function useSelect({
  onSelect,
  initialValue,
}: {
  onSelect: ((value: string) => void) | undefined;
  initialValue:
    | {
        value: string;
        content: React.ReactNode;
      }
    | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [items, setItems] = useState<string[]>([]);
  const [itemValueMap, setItemValueMap] = useState<
    Map<string, React.ReactNode>
  >(() => new Map());
  const [selectedValue, setSelectedValue] = useState<string>(
    initialValue?.value ?? '',
  );
  const [selectedContent, setSelectedContent] =
    useState<React.ReactNode | null>(initialValue?.content ?? null);

  useLockBodyScroll(isOpen);

  const registerItem = useCallback(({ value, content }: SelectItem) => {
    setItems((prev) => {
      const next = prev.includes(value) ? prev : [...prev, value];
      // selectedValue가 비어있으면 초기값 지정
      if (next.length === 1) {
        setSelectedValue(value);
      }
      return next;
    });

    setItemValueMap((prev) => {
      if (!prev.has(value)) {
        return new Map(prev).set(value, content);
      }
      return new Map(prev);
    });
  }, []);

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

  const handleOnSelect = (targetItem: string) => {
    if (onSelect) {
      onSelect(targetItem);
    }
    setSelectedValue(targetItem);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const index = items.findIndex((item) => item === selectedValue);
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  }, [isOpen, items, selectedValue]);

  useEffect(() => {
    if (selectedValue && itemValueMap.has(selectedValue)) {
      setSelectedContent(itemValueMap.get(selectedValue)!);
    }
  }, [selectedValue, itemValueMap]);

  return {
    isOpen,
    items,
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
    itemValueMap,
    selectedContent,
  };
}
