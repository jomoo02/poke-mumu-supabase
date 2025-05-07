import { useEffect, useRef } from 'react';
import {
  useActiveIndex,
  useOnSelect,
  useRegisterItem,
  useItemValues,
  useSelectedValue,
} from '../select.context';

export default function useSelectItem(item: string) {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { onSelect } = useOnSelect();
  const { registerItem } = useRegisterItem();
  const { itemValues } = useItemValues();
  const { selectedValue } = useSelectedValue();
  const itemRef = useRef<HTMLDivElement>(null);

  const index = itemValues.indexOf(item);
  const isActive = activeIndex === index;
  const isSelected = selectedValue === item;

  const handleOnClick = () => {
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
    handleMouseEnter,
    handleOnClick,
    handleMouseMove,
    handleMouseLeave,
  };
}
