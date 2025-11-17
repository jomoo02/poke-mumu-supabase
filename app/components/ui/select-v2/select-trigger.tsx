import { cn } from '@/app/lib/utils';
import { useSelectContext } from './context';

interface SelectTriggerProps {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SelectTrigger({
  placeholder,
  className,
  children,
}: SelectTriggerProps) {
  const { refs, getReferenceProps, getSelectedValue } = useSelectContext();

  return (
    <div
      ref={refs.setReference}
      tabIndex={0}
      {...getReferenceProps()}
      className={cn(
        'border border-border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'shadow-xs hover:not-focus-visible:bg-accent',
        'flex cursor-default items-center rounded-md h-full px-2.5 py-1.5 text-sm outline-hidden select-none',
        className,
      )}
    >
      {children ?? getSelectedValue() ?? placeholder}
    </div>
  );
}
