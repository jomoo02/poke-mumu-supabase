import { useRef, useEffect } from 'react';
import {
  useInputValue,
  useListOpen,
  useHasPosition,
} from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';
import { isMobileDevice } from '@/app/utils/device';

// import { useRef } from 'react';
// import { useInputValue, useInputRef } from '../combobox.context';
// import { useHandleKeyDown } from './useListHandle';

export default function useComboboxInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, onChangeInputValue } = useInputValue();
  const { isOpen } = useListOpen();
  const { handleKeyDown } = useHandleKeyDown();
  const { hasPosition } = useHasPosition();

  useEffect(() => {
    if (isOpen && hasPosition && !isMobileDevice()) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inputRef.current?.focus({ preventScroll: true });
        });
      });
    }
  }, [isOpen, hasPosition]);

  // useEffect(() => {
  //   if (isOpen) {
  //     inputRef.current?.focus({ preventScroll: true });
  //   }
  // }, [isOpen]);

  // useLayoutEffect(() => {
  //   if (isOpen && hasPosition && inputRef.current) {
  //     inputRef.current.focus({ preventScroll: true });
  //   }
  // }, [isOpen, hasPosition]);

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
