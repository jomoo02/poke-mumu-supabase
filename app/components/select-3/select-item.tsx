// SelectItem.tsx
import { useEffect, useRef } from 'react';
import { useSelectContext } from './select.context';

export function SelectItem({
  item,
  children,
}: {
  item: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { onSelect, selectedValue, activeIndex, registerItem, itemValues } =
    useSelectContext();

  const index = itemValues.indexOf(item);
  const isActive = activeIndex === index;
  const isSelected = selectedValue === item;

  useEffect(() => {
    registerItem(item);
  }, [item]);
  console.log(activeIndex);

  useEffect(() => {
    if (isActive && ref.current)
      ref.current.scrollIntoView({ block: 'nearest' });
  }, [isActive]);

  return (
    <div
      ref={ref}
      role="option"
      aria-selected={isSelected}
      onClick={() => onSelect(item)}
      className={`cursor-pointer px-3 py-2 hover:bg-blue-100 ${
        isActive ? 'bg-blue-100' : isSelected ? 'bg-blue-50' : ''
      }`}
    >
      {children}
    </div>
  );
}
