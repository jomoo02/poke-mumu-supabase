import { useRef } from 'react';
import { useInputValue } from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';

export default function useComboboxInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, onChangeInputValue } = useInputValue();
  // const { isOpen } = useListOpen();
  const { handleKeyDown } = useHandleKeyDown();

  // useEffect(() => {
  //   if (isOpen) {
  //     requestAnimationFrame(() => {
  //       requestAnimationFrame(() => {
  //         inputRef.current?.focus({ preventScroll: true });
  //       });
  //     });
  //   }
  // }, [isOpen]);

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
