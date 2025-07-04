import { useInputValue, useInputRef } from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';

export default function useComboboxInput() {
  const { inputRef } = useInputRef();
  const { inputValue, onChangeInputValue } = useInputValue();
  const { handleKeyDown } = useHandleKeyDown();

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
