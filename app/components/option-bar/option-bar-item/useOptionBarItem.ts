import { useEffect, useRef } from 'react';
import {
  useOnValueSelect,
  useRegisterOption,
  useSelectedValue,
} from '../option-bar.context';

export default function useOptionBarItem(value: string) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { onValueSelct } = useOnValueSelect();
  const { registerOption } = useRegisterOption();
  const { selectedValue } = useSelectedValue();

  const isSelected = selectedValue === value;

  const handleItemClick = () => {
    onValueSelct(value);
  };

  useEffect(() => {
    registerOption(value, itemRef.current);
  }, [value, registerOption]);

  return {
    isSelected,
    handleItemClick,
    itemRef,
  };
}
