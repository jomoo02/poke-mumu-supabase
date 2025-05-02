import { createContext, useContext } from 'react';

interface SelectContextProps {
  selectedValue: string;
  onSelect: (value: string) => void;
  close: () => void;
  renderItem: (item: string) => string;
}

export const SelectContext = createContext<SelectContextProps | undefined>(
  undefined,
);

export function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('SelectItem must be used within a Select');
  }
  return context;
}
