import { createContext, RefObject, useContext, useMemo } from 'react';

interface OptionBarContextValue {
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  items: string[];
  itemRefs: RefObject<Map<string, HTMLDivElement | null>>;
  containerRef: RefObject<HTMLDivElement | null>;
  registerItem: (value: string, ref: HTMLDivElement | null) => void;
  layoutId: string;
}

const OptionBarContext = createContext<OptionBarContextValue | null>(null);

function useOptionBarContext() {
  const context = useContext(OptionBarContext);

  if (!context) {
    throw new Error('OptionBarContext must be used within OptionBarProvider');
  }

  return context;
}

export function useSelectedValue() {
  const { selectedValue } = useOptionBarContext();

  return {
    selectedValue,
  };
}

export function useOnSelect() {
  const { onSelect } = useOptionBarContext();

  return { onSelect };
}

export function useItem() {
  const { items, registerItem, itemRefs } = useOptionBarContext();

  return { items, registerItem, itemRefs };
}

export function useContainerRef() {
  const { containerRef } = useOptionBarContext();
  return { containerRef };
}

export function useLayoutId() {
  const { layoutId } = useOptionBarContext();

  return { layoutId };
}

export function OptionBarProvider({
  children,
  selectedValue,
  onSelect,
  items,
  registerItem,
  itemRefs,
  containerRef,
  layoutId,
}: OptionBarContextValue & { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      children,
      selectedValue,
      onSelect,
      items,
      registerItem,
      itemRefs,
      containerRef,
      layoutId,
    }),
    [
      children,
      selectedValue,
      onSelect,
      items,
      registerItem,
      itemRefs,
      containerRef,
      layoutId,
    ],
  );

  return (
    <OptionBarContext.Provider value={value}>
      {children}
    </OptionBarContext.Provider>
  );
}
