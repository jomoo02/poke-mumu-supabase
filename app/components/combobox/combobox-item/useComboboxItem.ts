import { useEffect, useRef } from 'react';
import {
  useActiveIndex,
  useOnSelect,
  useRegisterItem,
  useItems,
  useSelectedItem,
  type ComboboxItem,
} from '../combobox.context';

export default function useComboboxItem(item: ComboboxItem) {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { onSelect } = useOnSelect();
  const { registerItem } = useRegisterItem();
  const { items } = useItems();
  const { selectedItem } = useSelectedItem();
  const itemRef = useRef<HTMLDivElement>(null);

  const index = items.map(({ value }) => value).indexOf(item.value);
  const isActive = activeIndex === index;
  const isSelected = selectedItem?.value === item.value;

  const handleClick = () => {
    onSelect(item);
  };

  const handleMouseEnter = () => {
    setActiveIndex(index);
  };

  const handleMouseMove = () => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    registerItem(item);
  }, [item, registerItem]);

  return {
    itemRef,
    isActive,
    isSelected,
    handleClick,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  };
}
