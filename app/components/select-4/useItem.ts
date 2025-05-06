import { useEffect, useRef } from 'react';
import {
  useActiveIndex,
  useOnSelect,
  useRegisterItem,
  useItemValues,
  useSelectedValue,
} from './select.context';

export default function useItem(item: string) {
  const { activeIndex } = useActiveIndex();
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

  useEffect(() => {
    registerItem(item);
  }, [item]);

  return {
    itemRef,
    handleOnClick,
    isActive,
    isSelected,
  };
}
