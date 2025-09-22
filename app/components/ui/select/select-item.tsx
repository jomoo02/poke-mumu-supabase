import { useListItem } from '@floating-ui/react';
import { useSelectContext } from './context';
import { cn } from '@/app/lib/utils';
import { useEffect, useLayoutEffect } from 'react';

interface SelectItemProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  defaultvalue?: boolean;
}

export default function SelectItem({
  label,
  children,
  className,
  defaultvalue,
}: SelectItemProps) {
  const {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
    registerItem,
    // setSelectedLabel,
  } = useSelectContext();

  const { ref, index } = useListItem({ label });

  registerItem({ label, node: children });

  useLayoutEffect(() => {
    registerItem({ label: label, node: children });
  }, [children, label, registerItem]);

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <button
      ref={ref}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        isActive ? 'bg-accent' : '',
        isSelected ? 'bg-black' : '',
        className,
      )}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {children ?? label}
    </button>
  );
}
