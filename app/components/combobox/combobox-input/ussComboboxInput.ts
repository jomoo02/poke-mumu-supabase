import { useRef, useEffect } from 'react';
import {
  useInputValue,
  useListOpen,
  useHasPosition,
} from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';
// import { useRef } from 'react';
// import { useInputValue } from '../combobox.context';
// import { useHandleKeyDown } from './useListHandle';

export default function useComboboxInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, onChangeInputValue } = useInputValue();
  const { isOpen } = useListOpen();
  const { handleKeyDown } = useHandleKeyDown();
  const { hasPosition } = useHasPosition();

  useEffect(() => {
    if (!isOpen) return;

    const waitForFocus = () => {
      if (inputRef.current && hasPosition) {
        inputRef.current.focus({ preventScroll: true });
      } else {
        requestAnimationFrame(waitForFocus);
      }
    };

    waitForFocus();
  }, [isOpen, hasPosition]);

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
