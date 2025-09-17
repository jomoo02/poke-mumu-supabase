import { useListItem, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useDropdownMenuContext } from './context';

interface DropdownMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
  label?: string;
}

export default function DropdownMenuTrigger({
  children,
  className,
  label,
  ref,
}: DropdownMenuTriggerProps) {
  const { refs, hasFocusInside, isOpen, getReferenceProps } =
    useDropdownMenuContext();

  const item = useListItem();

  return (
    <button
      ref={useMergeRefs([refs.setReference, item.ref, ref])}
      data-slot="button"
      data-focus-inside={hasFocusInside ? '' : undefined}
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'border border-border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'shadow-xs',
        'flex cursor-default items-center rounded-md h-full px-2.5 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
        className,
      )}
      {...getReferenceProps()}
    >
      {children ?? label}
    </button>
  );
}
