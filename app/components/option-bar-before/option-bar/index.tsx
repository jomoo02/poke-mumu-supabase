import useOptionBar from './useOptionBar';
import { OptionBarProvider } from '../option-bar.context';

interface OptionBarProps {
  initialValue?: string;
  onSelect?: (value: string) => void;
  children: React.ReactNode;
}

export default function OptionBar({
  initialValue,
  onSelect,
  children,
}: OptionBarProps) {
  const {
    selectedValue,
    handleOnSelect,
    registerItem,
    items,
    itemRefs,
    containerRef,
  } = useOptionBar(initialValue, onSelect);

  return (
    <OptionBarProvider
      selectedValue={selectedValue}
      onSelect={handleOnSelect}
      registerItem={registerItem}
      items={items}
      itemRefs={itemRefs}
      containerRef={containerRef}
    >
      {children}
    </OptionBarProvider>
  );
}
