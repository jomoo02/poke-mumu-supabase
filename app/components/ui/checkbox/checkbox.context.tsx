import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type CheckedState = boolean | 'indeterminate';

type CheckboxContextValue<State extends CheckedState = CheckedState> = {
  checked?: State;
  setChecked: React.Dispatch<React.SetStateAction<State>>;
  defaultChecked?: State;
  disabled?: boolean;
  required?: boolean;
  name?: string;
};

export const CheckboxContext = createContext<CheckboxContextValue>({
  checked: false,
  setChecked: () => {},
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  name: undefined,
});

export function useCheckbox() {
  const context = useContext(CheckboxContext);

  return context;
}

export interface CheckboxProviderProps<
  State extends CheckedState = CheckedState,
> {
  checked?: State;
  defaultChecked?: State;
  required?: boolean;
  onCheckedChange?(checked: State | boolean): void;
  name?: string;
  // form?: string;
  disabled?: boolean;
  // value?: string | number | readonly string[];
  children?: React.ReactNode;
}

export function CheckboxProvider(props: CheckboxProviderProps<CheckedState>) {
  const {
    checked: controlledChecked,
    defaultChecked,
    children,
    onCheckedChange,
    ...rest
  } = props;

  const isControlled = controlledChecked !== undefined;

  const [internalChecked, setInternalChecked] = useState<CheckedState>(() =>
    defaultChecked === undefined ? false : defaultChecked,
  );

  const setChecked: React.Dispatch<React.SetStateAction<CheckedState>> = (
    next,
  ) => {
    if (typeof next === 'function') {
      const updater = next as (prev: CheckedState) => CheckedState;
      if (isControlled) {
        const nextValue = updater(controlledChecked as CheckedState);
        onCheckedChange?.(nextValue);
      } else {
        setInternalChecked((prev) => {
          const nextValue = updater(prev);
          onCheckedChange?.(nextValue);
          return nextValue;
        });
      }
    } else {
      const nextValue = next as CheckedState;
      if (!isControlled) setInternalChecked(nextValue);
      onCheckedChange?.(nextValue);
    }
  };

  const currentChecked: CheckedState = isControlled
    ? (controlledChecked as CheckedState)
    : internalChecked;

  const value: CheckboxContextValue<CheckedState> = {
    checked: currentChecked,
    defaultChecked: defaultChecked,
    setChecked,
    ...rest,
  };

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
}
