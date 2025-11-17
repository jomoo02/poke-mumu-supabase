import { createContext, useContext, useState } from 'react';

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
  disabled?: boolean;
  children?: React.ReactNode;
}

export function CheckboxProvider(props: CheckboxProviderProps<CheckedState>) {
  const {
    defaultChecked,
    children,
    onCheckedChange,
    checked: controlledChecked,
    ...rest
  } = props;

  const isControlled = controlledChecked !== undefined;

  const [internalChecked, setInternalChecked] = useState<CheckedState>(() =>
    defaultChecked === undefined ? false : defaultChecked,
  );

  const setChecked: React.Dispatch<React.SetStateAction<CheckedState>> = (
    next,
  ) => {
    const prev = isControlled ? controlledChecked : internalChecked;

    const nextValue = typeof next === 'function' ? next(prev) : next;

    if (!isControlled) {
      setInternalChecked(nextValue);
    }

    // 변경이 실제로 일어났을 때만 콜백(선택)
    if (nextValue !== prev) {
      onCheckedChange?.(nextValue);
    }
  };

  const currentChecked: CheckedState = isControlled
    ? controlledChecked
    : internalChecked;

  const value: CheckboxContextValue<CheckedState> = {
    setChecked,
    checked: currentChecked,
    defaultChecked: defaultChecked,
    ...rest,
  };

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
}
