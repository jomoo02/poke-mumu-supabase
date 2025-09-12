import { cn } from '@/app/lib/utils';
import { CheckboxIndicator, CheckboxRoot } from './checkbox';
import type { CheckboxProviderProps } from './context';

export default function Checkbox({
  className,
  ...props
}: CheckboxProviderProps & { className?: string }) {
  return (
    <CheckboxRoot
      className={cn(
        'border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxIndicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      />
    </CheckboxRoot>
  );
}
