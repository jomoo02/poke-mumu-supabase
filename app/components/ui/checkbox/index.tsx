'use client';

import { CheckIcon } from 'lucide-react';
import {
  useCheckbox,
  CheckboxProvider,
  CheckboxProviderProps,
  CheckboxContext,
} from './checkbox.context';
import { cn } from '@/app/lib/utils';
import { ChangeEvent, useEffect, useRef } from 'react';

function CheckboxRoot(props: CheckboxProviderProps & { className?: string }) {
  return (
    <CheckboxProvider {...props}>
      <CheckboxTrigger className={props.className}>
        {props.children}
        {/* <CheckboxInput /> */}
      </CheckboxTrigger>
    </CheckboxProvider>
  );
}

function CheckboxIndicator({ className }: { className: string }) {
  const { checked } = useCheckbox();

  const bgVariants = {
    check: 'bg-primary',
    unCheck: 'bg-white',
    indeterminate: 'bg-white',
  };

  if (checked === 'indeterminate') {
    return (
      // <span className={cn(bgVariants.indeterminate, className)}>
      <CheckIcon className="size-3.5" />
      // </span>
    );
  }

  if (checked === false) {
    return null;
  }
  return (
    // <span className={cn(bgVariants.check, className)}>
    <CheckIcon className="size-3.5 text-white" />
    // </span>
  );
}

function CheckboxInput({ className, ...props }: React.ComponentProps<'input'>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    checked: checkboxChecked,
    setChecked,
    defaultChecked,
  } = useCheckbox();

  const isIndeterminate = checkboxChecked === 'indeterminate';
  const checked = isIndeterminate ? false : checkboxChecked;

  const handleCheckedChange = () => {
    const nextChecked = isIndeterminate ? true : !checkboxChecked;
    setChecked(nextChecked);
  };

  // indeterminate 초기 상태 DOM 반영
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = defaultChecked === 'indeterminate';
    }
  }, [defaultChecked]);

  const inputProps: React.ComponentProps<'input'> = {
    ref: inputRef,
    type: 'checkbox',
    id: 'checkbox-input',
    onChange: handleCheckedChange,
    'aria-hidden': true,
    className: cn('appearance-none', className),
    ...props,
  };

  if (checkboxChecked !== undefined) {
    // Controlled
    inputProps.checked = checked;
  } else {
    // Uncontrolled
    inputProps.defaultChecked =
      defaultChecked === 'indeterminate' ? false : defaultChecked;
  }

  return <input {...inputProps} />;
}

function CheckboxTrigger({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  const { checked: checkboxChecked, setChecked } = useCheckbox();

  const isIndeterminate = checkboxChecked === 'indeterminate';

  const handleClick = () => {
    const nextChecked = isIndeterminate ? true : !checkboxChecked;
    console.log(
      isIndeterminate,
      checkboxChecked,
      !checkboxChecked,
      nextChecked,
    );
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

export default function Checkbox({
  className,
  ...props
}: CheckboxProviderProps & { className?: string }) {
  console.log(props);
  return (
    <CheckboxRoot
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50',
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
