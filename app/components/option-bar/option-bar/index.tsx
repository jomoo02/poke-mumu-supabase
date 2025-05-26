import useOptionBar from './useOptionBar';
import { OptionBarProvider } from '../option-bar.context';

interface OptionBarProps {
  initialValue?: string;
  onSelect?: (value: string) => void;
  layoutId: string;
  children: React.ReactNode;
}

export default function OptionBar({
  initialValue,
  onSelect,
  layoutId,
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
      layoutId={layoutId}
    >
      {children}
    </OptionBarProvider>
  );
}
