import { SelectProvider } from './select.context';
import useSelect from './useSelect';

interface SelectProps {
  value: string;
  onSelect: (value: string) => void;
  children: React.ReactNode;
}

export default function Select({ value, onSelect, children }: SelectProps) {
  const {
    isOpen,
    onOpen,
    onClose,
    activeIndex,
    setActiveIndex,
    itemValues,
    containerRef,
    triggerRef,
    registerItem,
    contentRef,
    handleOnSelect,
  } = useSelect(value, onSelect);

  return (
    <SelectProvider
      selectedValue={value}
      isOpen={isOpen}
      onSelect={handleOnSelect}
      onOpen={onOpen}
      onClose={onClose}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      itemValues={itemValues}
      registerItem={registerItem}
      containerRef={containerRef}
      triggerRef={triggerRef}
      contentRef={contentRef}
    >
      <div ref={containerRef} className="w-24">
        {children}
      </div>
    </SelectProvider>
  );
}
