// Select.tsx (Compound Select with Keyboard Navigation)
'use client';

import {
  useRef,
  useState,
  useEffect,
  KeyboardEvent,
  useCallback,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { SelectContext } from './select.context';
import { useSelectOpen } from './useSelect';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
interface SelectProps {
  value: string | null;
  onChange: (val: string) => void;
  children: React.ReactNode;
  renderItem: (val: string) => string;
}

export default function Select({
  value,
  onChange,
  children,
  renderItem,
}: SelectProps) {
  console.log(children);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemValues, setItemValues] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const open = () => {
    setIsOpen(true);
    setTimeout(() => {
      portalRef.current?.focus(); // DOM 업데이트 이후 실행
    }, 0);
  };
  const close = () => setIsOpen(false);

  const onSelect = (val: string) => {
    onChange(val);
    close();
  };

  useLockBodyScroll(isOpen);

  const registerItem = useCallback(
    (value: string) => {
      setItemValues((prev) => {
        if (!prev.includes(value)) return [...prev, value];
        return prev;
      });
      return itemValues.indexOf(value);
    },
    [itemValues],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return;
    console.log(e.key);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % itemValues.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(
        (prev) => (prev - 1 + itemValues.length) % itemValues.length,
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const value = itemValues[activeIndex];
      if (value) onSelect(value);
    } else if (e.key === 'Escape') {
      close();
    } else if (e.key === 'Tab') {
      e.preventDefault(); // trap focus inside
    }
  };

  useSelectOpen(portalRef, close);

  useEffect(() => {
    if (!isOpen) setItemValues([]);
  }, [isOpen]);

  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPositionStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, [isOpen]);

  return (
    <SelectContext.Provider
      value={{
        selectedValue: value,
        onSelect,
        activeIndex,
        registerItem,
        itemValues,
        renderItem,
      }}
    >
      <div className="relative w-24" ref={containerRef}>
        <button onClick={open} ref={buttonRef} className="w-full bg-blue-300">
          {value ?? 'Select...'}
        </button>
        {isOpen &&
          createPortal(
            <div
              role="listbox"
              tabIndex={0}
              style={positionStyle}
              className="absolute bg-white shadow-md mt-1 w-full rounded border outline-none focus:outline-none"
              onKeyDown={handleKeyDown}
              ref={portalRef}
              onBlur={(e) => {
                const relatedTarget = e.relatedTarget as HTMLElement | null;
                const container = containerRef.current;
                if (!relatedTarget || !container?.contains(relatedTarget)) {
                  close(); // 진짜 외부로 나간 경우만 닫기
                }
              }}
            >
              {children}
            </div>,
            document.body,
          )}
      </div>
    </SelectContext.Provider>
  );
}
