import { createContext, useContext } from 'react';

interface SelectContextProps {
  selectedValue: string | null;
  activeIndex: number;
  onSelect: (value: string) => void;
  registerItem: (value: string) => number;
  itemValues: string[];
  renderItem: (value: string) => string;
}

export const SelectContext = createContext<SelectContextProps | null>(null);

export const useSelectContext = () => useContext(SelectContext)!;
