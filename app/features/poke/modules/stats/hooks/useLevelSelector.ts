import { useState, useEffect, useRef } from 'react';

export default function useLevelSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        closeSelector();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setShow(true));
      setShow(true);
    } else {
      setShow(false);
      // setTimeout(() => , 300);
    }
  }, [isOpen]);

  const closeSelector = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    selectorRef,
    show,
    closeSelector,
  };
}
