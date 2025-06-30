import { useListRef, useItems, useInputValue } from '../combobox.context';

export default function useComboboxList() {
  const { listRef } = useListRef();
  const { filteredItems } = useItems();
  const { inputValue } = useInputValue();

  return {
    listRef,
    filteredItems,
    // handleBlur,
    inputValue,
  };
}
