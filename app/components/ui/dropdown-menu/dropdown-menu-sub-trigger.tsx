import {
  useFloatingParentNodeId,
  useListItem,
  useMergeRefs,
} from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useDropdownMenuContext } from './context';

interface DropdownMenuSubTrigger
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
  externalRef?: React.Ref<HTMLButtonElement>;
  label?: string;
}

export default function DropdownMenuSubTrigger({
  ref,
  children,
  className,
  label,
  ...props
}: DropdownMenuSubTrigger) {
  const {
    isOpen,
    getReferenceProps,
    hasFocusInside,
    setHasFocusInside,
    activeIndex,
    refs,
    parent,
  } = useDropdownMenuContext();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = parentId !== null;

  return (
    <button
      ref={useMergeRefs([refs.setReference, item.ref, ref])}
      className={cn(
        'flex cursor-default items-center rounded-md h-full px-2.5 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
        'w-full text-left border-none shadow-none focus-visible:ring-0 focus-visible:border-none focus:bg-accent',
        'data-[focus-inside]:bg-accent',
        className,
      )}
      role="menuitem"
      tabIndex={!isNested ? undefined : activeIndex === item.index ? 0 : -1}
      data-state={isOpen ? 'open' : 'closed'}
      data-nested={isNested ? 'nested' : undefined}
      data-focus-inside={hasFocusInside ? '' : undefined}
      {...getReferenceProps(
        parent?.getItemProps({
          ...props,
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event);
            setHasFocusInside(false);
            parent.setHasFocusInside(true);
          },
        }),
      )}
    >
      {children ?? label}
      <span aria-hidden style={{ marginLeft: 8, fontSize: 10 }}>
        ▶
      </span>
    </button>
  );
}
