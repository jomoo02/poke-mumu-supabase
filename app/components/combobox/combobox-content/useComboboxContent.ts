import { useState, useEffect } from 'react';
import {
  useListOpen,
  useContentRef,
  useHasPosition,
} from '../combobox.context';
import usePosition from './usePosition';
import {
  useClickOutsideEffect,
  useOrientationChangeEffect,
} from './useListEffect';

export default function useComboboxContent() {
  const { isOpen } = useListOpen();
  const [show, setShow] = useState(false);
  const { position } = usePosition();
  const { contentRef } = useContentRef();

  useClickOutsideEffect();
  useOrientationChangeEffect();

  const { hasPosition } = useHasPosition();

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
    hasPosition,
  };
}
