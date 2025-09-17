import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useDropdownMenuContext } from './context';

interface DropdownMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export default function DropdownMenuItem({
  label,
  disabled,
  className,
  ref,
  ...props
}: DropdownMenuItemProps) {
  const { activeIndex, getItemProps, setHasFocusInside } =
    useDropdownMenuContext();
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();

  const isActive = item.index === activeIndex;

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, ref])}
      type="button"
      role="menuitem"
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none outline-none w-full',
        'focus:bg-accent',
        'disabled:pointer-events-none disabled:opacity-40',
        className,
      )}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit('click');
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          setHasFocusInside(true);
        },
      })}
    ></button>
  );
}
