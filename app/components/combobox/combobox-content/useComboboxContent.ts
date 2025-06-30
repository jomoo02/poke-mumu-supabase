import { useState, useEffect } from 'react';
import {
  useListOpen,
  useContentRef,
  useHasPosition,
} from '../combobox.context';
import usePosition from './usePosition';
import { useHandleKeyDown } from './useListHandle';
import {
  useClickOutsideEffect,
  useOrientationChangeEffect,
} from './useListEffect';

export default function useComboboxContent() {
  const { isOpen } = useListOpen();
  const [show, setShow] = useState(false);
  const { position } = usePosition();
  const { contentRef } = useContentRef();

  const { handleKeyDown } = useHandleKeyDown();

  useClickOutsideEffect();
  useOrientationChangeEffect();

  const { hasPosition, setHasPosition } = useHasPosition();

  useEffect(() => {
    const isValid =
      typeof position.top === 'number' && typeof position.left === 'number';
    setHasPosition(isValid);
  }, [position, isOpen, setHasPosition]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  return {
    isOpen,
    position,
    show,
    contentRef,
    handleKeyDown,
    hasPosition,
  };
}
