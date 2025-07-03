import { useState, useRef, useCallback, useMemo } from 'react';
import type { ComboboxItem } from '../combobox.context';

export default function useCombobox(
  onSelect: ((value: string) => void) | undefined,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<ComboboxItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ComboboxItem | null>(null);
  const [hasPosition, setHasPosition] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const filteredItems = useMemo(() => {
    if (!inputValue) {
      return items;
    }

    return items.filter(({ label }) => label.includes(inputValue));
  }, [inputValue, items]);

  const registerItem = useCallback(({ value, label }: ComboboxItem) => {
    setItems((prev) => {
      const has = prev.map((prevItem) => prevItem.value).includes(value);
      const next = has ? prev : [...prev, { value, label }];
      return next;
    });
  }, []);

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const open = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  const close = () => {
    setIsOpen(false);
    setHasPosition(false);
    setInputValue('');
    setActiveIndex(-1);

    requestAnimationFrame(() => {
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  const handleSelect = (targetItem: ComboboxItem) => {
    close();
    setSelectedItem(targetItem);
    if (onSelect) {
      onSelect(targetItem.value);
    }
  };

  return {
    isOpen,
    items,
    containerRef,
    triggerRef,
    listRef,
    activeIndex,
    setActiveIndex,
    registerItem,
    handleSelect,
    open,
    close,
    selectedItem,
    filteredItems,
    inputValue,
    handleChangeInputValue,
    contentRef,
    hasPosition,
    setHasPosition,
    inputRef,
  };
}
