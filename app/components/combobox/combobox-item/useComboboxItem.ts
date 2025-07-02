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
  const { filteredItems } = useItems();
  const { selectedItem } = useSelectedItem();
  const itemRef = useRef<HTMLDivElement>(null);

  const index = filteredItems.map(({ value }) => value).indexOf(item.value);
  const isActive = activeIndex === index;
  const isSelected = selectedItem?.value === item.value;

  // const isActive = (() => {
  //   if (activeIndex === -1) {
  //     return isSelected;
  //   }
  //   return activeIndex === index;
  // })();

  const handleMouseDown = () => {
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

  useEffect(() => {
    registerItem(item);
  }, [item, registerItem]);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [isActive]);

  return {
    itemRef,
    isActive,
    isSelected,
    handleMouseDown,
    handleMouseEnter,
    handleMouseMove,
  };
}
