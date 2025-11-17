import { useListItem } from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useSelectContext } from './context';

interface SelectItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SelectItme({
  value,
  children,
  className,
  ...props
}: SelectItemProps) {
  const { activeIndex, selectedIndex, getItemProps, handleSelect } =
    useSelectContext();

  const { ref, index } = useListItem();

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <button
      {...props}
      ref={ref}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none outline-none w-full',
        'focus:bg-accent',
        'disabled:pointer-events-none disabled:opacity-40',
        className,
      )}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {children ?? value}
    </button>
  );
}
