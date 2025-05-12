import { useEffect, useRef } from 'react';
import {
  useActiveIndex,
  useOnSelect,
  useRegisterItem,
  useItems,
  useSelectedValue,
} from '../select.context';

export default function useSelectItem(item: string, children: React.ReactNode) {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { onSelect } = useOnSelect();
  const { registerItem } = useRegisterItem();
  const { items } = useItems();
  const { selectedValue } = useSelectedValue();
  const itemRef = useRef<HTMLDivElement>(null);

  const index = items.indexOf(item);
  const isActive = activeIndex === index;
  const isSelected = selectedValue === item;

  console.log(index, isActive, isSelected);

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
    registerItem({ value: item, content: children });
  }, [item, registerItem, children]);

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
