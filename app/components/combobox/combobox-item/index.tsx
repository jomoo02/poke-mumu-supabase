'use client';

import CheckIcon from '@/app/components/icon/check';
import useComboboxItem from './useComboboxItem';
import type { ComboboxItem } from '../combobox.context';

interface ComboboxItemProps {
  item: ComboboxItem;
}

export default function ComboboxItem({ item }: ComboboxItemProps) {
  const {
    itemRef,
    isActive,
    isSelected,
    handleMouseDown,
    handleMouseEnter,
    handleMouseMove,
  } = useComboboxItem(item);

  return (
    <div
      ref={itemRef}
      role="option"
      aria-selected={isSelected}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className={`cursor-pointer pl-2 pr-1 overflow-hidden rounded-sm flex justify-between items-center h-8 min-h-8 ${
        isActive ? 'bg-neutral-100' : 'bg-white'
      }`}
    >
      <div className="truncate text-slate-800 text-sm">{item.label}</div>
      <div className="min-w-[0.9rem]">
        {isSelected && <CheckIcon size="0.9rem" stroke={2.5} color="#1d293d" />}
      </div>
    </div>
  );
}
