import { useRef, useEffect } from 'react';
import {
  useInputValue,
  useListOpen,
  useHasPosition,
} from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';

export default function useComboboxInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, onChangeInputValue } = useInputValue();
  const { isOpen } = useListOpen();
  const { handleKeyDown } = useHandleKeyDown();
  const { hasPosition } = useHasPosition();

  useEffect(() => {
    if (isOpen && hasPosition) {
      setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 0);
    }
  }, [isOpen, hasPosition]);

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
