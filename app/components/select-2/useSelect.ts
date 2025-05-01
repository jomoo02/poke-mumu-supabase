import { useState, useEffect, useRef } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

export default function useSelect(height: number) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>('50');
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const selectorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const open = () => {
    setIsOpen(true);
    selectorRef.current?.focus();
  };

  const close = () => {
    setIsOpen(false);
  };

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      if (buttonRect) {
        const spaceBelow = window.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;

        if (spaceBelow > height) {
          setPosition('bottom');
        } else if (spaceAbove > height) {
          setPosition('top');
        } else {
          setPosition('bottom');
        }
      }
      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [isOpen, height]);

  return {
    isOpen,
    show,
    position,
    selectorRef,
    buttonRef,
    open,
    close,
    selectedItem,
    setSelectedItem,
  };
}
