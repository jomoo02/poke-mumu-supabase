import { TabsProvider } from './context';

interface TabsRootProps {
  value?: string;
  onValueChange?: (v: string | null) => void;
  children: React.ReactNode;
}

export default function TabsRoot({
  value,
  onValueChange,
  children,
}: TabsRootProps) {
  return (
    <TabsProvider value={value} onValueChange={onValueChange}>
      {children}
    </TabsProvider>
  );
}
