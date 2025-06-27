import { useState, useEffect } from 'react';
import { useListOpen, useContentRef } from '../combobox.context';
import usePosition from './usePosition';
import useContentBlur from './useContentBlur';
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
  const { handleBlur } = useContentBlur();

  useClickOutsideEffect();
  useOrientationChangeEffect();

  const [hasPosition, setHasPosition] = useState(false);

  useEffect(() => {
    const isValid =
      typeof position.top === 'number' && typeof position.left === 'number';
    setHasPosition(isValid);
  }, [position, isOpen]);

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
    handleBlur,
    handleKeyDown,
    hasPosition,
  };
}
