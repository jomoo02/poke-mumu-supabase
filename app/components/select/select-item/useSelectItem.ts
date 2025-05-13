import { useEffect, useRef } from 'react';
import {
  useActiveIndex,
  useOnSelect,
  useRegisterItem,
  useItems,
  useSelectedValue,
} from '../select.context';

export default function useSelectItem(
  value: string,
  children: React.ReactNode,
) {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { onSelect } = useOnSelect();
  const { registerItem } = useRegisterItem();
  const { items } = useItems();
  const { selectedValue } = useSelectedValue();
  const itemRef = useRef<HTMLDivElement>(null);

  const index = items.indexOf(value);
  const isActive = activeIndex === index;
  const isSelected = selectedValue === value;

  const handleOnClick = () => {
    onSelect(value);
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
    registerItem({ value, content: children });
  }, [value, registerItem, children]);

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
