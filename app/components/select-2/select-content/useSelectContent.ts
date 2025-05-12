'use client';

import { useState, useEffect } from 'react';
import { useSelectOpen, useContentRef } from '../select.context';
import useSelectContentPosition from './useSelectContentPosition';
import { useHandleKeyDown, useHandleBlur } from './useSelectContentHandlers';
import {
  useOnClickOutsideEffect,
  useOnResizeEffect,
} from './useSelectContentEffect';

export default function useSelectContent() {
  const { isOpen } = useSelectOpen();
  const { contentRef } = useContentRef();
  const [show, setShow] = useState(false);

  const { position } = useSelectContentPosition();
  const { handleKeyDown } = useHandleKeyDown();
  const { handleBlur } = useHandleBlur();

  useOnClickOutsideEffect();
  useOnResizeEffect();

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
    contentRef,
    show,
    handleBlur,
    handleKeyDown,
  };
}
