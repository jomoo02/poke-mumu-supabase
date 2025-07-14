import { useState, useRef, useCallback, useEffect } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import type { SelectItem } from '../select.context';

type Interaction = 'keyboard' | 'mouse' | 'programmatic';

export type InitialItem = {
  value: string;
  content: React.ReactNode;
};

export default function useSelect({
  onSelect,
  initialItem,
}: {
  onSelect: ((value: string) => void) | undefined;
  initialItem: InitialItem | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, _setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [items, setItems] = useState<string[]>([]);
  const [itemValueMap, setItemValueMap] = useState<
    Map<string, React.ReactNode>
  >(() => new Map());
  const [selectedValue, setSelectedValue] = useState<string>(
    initialItem?.value ?? '',
  );
  const [selectedContent, setSelectedContent] =
    useState<React.ReactNode | null>(initialItem?.content ?? null);

  const [lastInteraction, setLastInteraction] =
    useState<Interaction>('programmatic');

  const [isContentMounted, setIsContentMounted] = useState(false);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setIsContentMounted(true);
    } else {
      setIsContentMounted(false);
    }
  }, [isOpen]);
  useLockBodyScroll(isContentMounted, contentRef.current);

  const setActiveIndex = useCallback(
    (index: number, source: Interaction = 'programmatic') => {
      _setActiveIndex(index);
      setLastInteraction(source);
    },
    [],
  );

  const registerItem = useCallback(({ value, content }: SelectItem) => {
    setItems((prev) => {
      const next = prev.includes(value) ? prev : [...prev, value];

      return next;
    });

    setItemValueMap((prev) => {
      if (!prev.has(value)) {
        return new Map(prev).set(value, content);
      }
      return prev;
    });
  }, []);

  const onOpen = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        contentRef.current?.focus({ preventScroll: true });
      });
    });
  };

  const onClose = () => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  const handleOnSelect = (targetItem: string) => {
    onClose();
    setSelectedValue(targetItem);
    if (onSelect) {
      onSelect(targetItem);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const index = items.findIndex((item) => item === selectedValue);
      setActiveIndex(index, 'programmatic');
    } else {
      // setActiveIndex(-1, 'programmatic');
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
    lastInteraction,
  };
}
