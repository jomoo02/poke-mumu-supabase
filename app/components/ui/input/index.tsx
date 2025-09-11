import { cn } from '@/app/lib/utils';

export default function Input({
  type,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-border flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base md:text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]',
        className,
      )}
      {...props}
    />
  );
}
