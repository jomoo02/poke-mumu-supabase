import { useEffect, useRef } from 'react';
import { useOnSelect, useItem, useSelectedValue } from '../option-bar.context';

export default function useOptionBarItem(value: string) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { onSelect } = useOnSelect();
  const { registerItem } = useItem();
  const { selectedValue } = useSelectedValue();

  const isSelected = selectedValue === value;

  const handleOnClick = () => {
    onSelect(value);
  };

  useEffect(() => {
    registerItem(value, buttonRef.current);
  }, [value, registerItem]);

  return {
    isSelected,
    handleOnClick,
    buttonRef,
  };
}
