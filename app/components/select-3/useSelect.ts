import { useState, useEffect, useRef } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

export function useSelectOpen(
  ref: React.RefObject<HTMLElement | null>,
  close: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, close]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [close]);
}

function useSelectPosition(
  isOpen: boolean,
  buttonRef: React.RefObject<HTMLButtonElement | null>,
  selectorRef: React.RefObject<HTMLDivElement | null>,
) {
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShow(false);
      return;
    }
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    const selectorRect = selectorRef.current?.getBoundingClientRect();

    if (buttonRect && selectorRect) {
      const dropdownHeight = selectorRect.height + 40;

      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow > dropdownHeight) {
        setPosition('bottom');
      } else if (spaceAbove > dropdownHeight) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }

    requestAnimationFrame(() => setShow(true));
  }, [isOpen, buttonRef]);

  return { position, show };
}

export default function useSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const open = () => {
    setIsOpen(true);
    selectorRef.current?.focus();
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useLockBodyScroll(isOpen);
  useSelectOpen(selectorRef, close);
  const { position, show } = useSelectPosition(isOpen, buttonRef, selectorRef);

  return {
    isOpen,
    show,
    position,
    selectorRef,
    buttonRef,
    open,
    close,
    toggle,
  };
}
