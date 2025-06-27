import { useListRef, useItems, useInputValue } from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';

export default function useComboboxList() {
  const { listRef } = useListRef();
  const { handleKeyDown } = useHandleKeyDown();
  const { filteredItems } = useItems();
  const { inputValue } = useInputValue();

  return {
    listRef,
    filteredItems,
    // handleBlur,
    handleKeyDown,
    inputValue,
  };
}
