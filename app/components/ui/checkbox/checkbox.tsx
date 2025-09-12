'use client';

import { CheckIcon } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import {
  useCheckbox,
  CheckboxProvider,
  CheckboxProviderProps,
} from './context';

function CheckboxIndicator({ className }: { className: string }) {
  const { checked } = useCheckbox();

  const textColorVariants = {
    indeterminate: 'text-current',
    checked: 'text-white',
  };

  if (checked === false || checked === undefined) {
    return null;
  }

  return (
    <span
      data-state={checked === true ? 'checked' : 'indeterminate'}
      data-slot="checkbox-indicator"
    >
      <CheckIcon
        className={cn(
          checked === 'indeterminate'
            ? textColorVariants.indeterminate
            : textColorVariants.checked,
          'size-3.5',
          className,
        )}
      />
    </span>
  );
}

function CheckboxTrigger({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  const { checked: checkboxChecked, setChecked } = useCheckbox();

  const isIndeterminate = checkboxChecked === 'indeterminate';

  const handleClick = () => {
    const nextChecked = isIndeterminate ? true : !checkboxChecked;
    setChecked(nextChecked);
  };

  return (
    <button
      className={className}
      role="checkbox"
      type="button"
      onClick={handleClick}
      data-state={checkboxChecked === true ? 'checked' : 'unchecked'}
      aria-checked={isIndeterminate ? 'mixed' : checkboxChecked}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
      {...props}
    />
  );
}

function CheckboxRoot(props: CheckboxProviderProps & { className?: string }) {
  return (
    <CheckboxProvider {...props}>
      <CheckboxTrigger className={props.className}>
        {props.children}
      </CheckboxTrigger>
    </CheckboxProvider>
  );
}

export { CheckboxRoot, CheckboxTrigger, CheckboxIndicator };
