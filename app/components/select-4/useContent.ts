import {
  useLayoutEffect,
  useState,
  useEffect,
  CSSProperties,
  KeyboardEvent,
  FocusEvent,
} from 'react';
import {
  useTriggerRef,
  useSelectOpen,
  useActiveIndex,
  useItemValues,
  useOnSelect,
  useContainerRef,
  useContentRef,
} from './select.context';

export default function useContent() {
  const { isOpen, onClose } = useSelectOpen();
  const { triggerRef } = useTriggerRef();
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { itemValues, itemCount } = useItemValues();
  const { onSelect } = useOnSelect();
  const [position, setPosition] = useState<CSSProperties>({});
  const { containerRef } = useContainerRef();
  const { contentRef } = useContentRef();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
        const value = itemValues[activeIndex];
        onSelect(value);
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    const container = containerRef.current;

    if (!relatedTarget || !container?.contains(relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
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
  }, [isOpen, contentRef, triggerRef]);

  useLayoutEffect(() => {
    if (triggerRef.current && contentRef.current && isOpen && itemCount > 0) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const itemHeight = triggerRect.height;
      const dropdownHeight = Math.min(itemHeight * itemCount, 800);

      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      const shouldOpenAbove =
        spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;

      const top = shouldOpenAbove
        ? triggerRect.top + window.scrollY - dropdownHeight
        : triggerRect.bottom + window.scrollY;

      requestAnimationFrame(() => {
        setPosition({
          position: 'absolute',
          top,
          left: triggerRect.left + window.scrollX,
          width: triggerRect.width,
          zIndex: 9999,
        });
      });
    }
  }, [isOpen, triggerRef, contentRef, itemCount]);

  return {
    isOpen,
    position,
    contentRef,
    handleBlur,
    handleKeyDown,
  };
}
