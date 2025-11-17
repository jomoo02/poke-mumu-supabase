import { createContext, useContext, useState } from 'react';

interface TabsContextValue {
  selectedValue: string | null;
  setSelectedValue: (v: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('tabs context Erorr');
  }

  return context;
}

interface TabsProviderProps {
  value?: string;
  onValueChange?: (v: string | null) => void;
  children: React.ReactNode;
}

function TabsProvider({
  value: controlledValue,
  onValueChange,
  children,
}: TabsProviderProps) {
  const [unControlledValue, setUnControlledValue] = useState<string | null>(
    null,
  );

  const selectedValue = controlledValue ?? unControlledValue;
  const handleValueChange = onValueChange ?? setUnControlledValue;

  const value = {
    selectedValue,
    setSelectedValue: handleValueChange,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export { useTabsContext, TabsProvider };
