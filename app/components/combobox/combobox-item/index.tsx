import CheckIcon from '@/app/components/icon/check';
import useComboboxItem from './useComboboxItem';
import type { ComboboxItem } from '../combobox.context';

interface ComboboxItemProps {
  item: ComboboxItem;
}

export default function Combobox({ item }: ComboboxItem) {
  const {
    itemRef,
    isActive,
    isSelected,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useComboboxItem(item);
}
