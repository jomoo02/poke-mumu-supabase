import { cn } from '@/app/lib/utils';
import Input from '../input';

export default function FloatingInput({
  type,
  className,
  placeholder,
  id,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        className={cn('peer placeholder:opacity-0', className)}
        placeholder={placeholder}
        {...props}
        required
      />
      <label
        htmlFor={id}
        className={cn(
          'flex items-center absolute top-1 left-2.5',
          'text-muted-foreground transition-all text-base md:text-sm px-0.5',
          'not-peer-placeholder-shown:-translate-y-3 not-peer-placeholder-shown:text-foreground not-peer-placeholder-shown:font-medium not-peer-placeholder-shown:text-xs not-peer-placeholder-shown:bg-background',
          'peer-focus:font-medium peer-focus:-translate-y-3 peer-focus:bg-background peer-focus:text-foreground peer-focus:text-xs',
        )}
      >
        {placeholder}
      </label>
    </div>
  );
}
