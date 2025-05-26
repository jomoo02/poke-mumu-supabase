import { useEffect, useRef } from 'react';
import {
  useOnSelect,
  useItem,
  useSelectedValue,
  useLayoutId,
  useContainerRef,
} from '../option-bar.context';

export default function useOptionBarItem(value: string) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { onSelect } = useOnSelect();
  const { registerItem } = useItem();
  const { selectedValue } = useSelectedValue();
  const { layoutId } = useLayoutId();
  const { containerRef } = useContainerRef();

  const isSelected = selectedValue === value;

  const handleOnClick = () => {
    onSelect(value);
  };

  useEffect(() => {
    registerItem(value, itemRef.current);
  }, [value, registerItem]);

  return {
    isSelected,
    handleOnClick,
    itemRef,
    layoutId,
    containerRef,
  };
}
