import { SelectProvider } from '../select.context';
import useSelect, { type InitialItem } from './useSelect';

interface SelectProps {
  onSelect?: (value: string) => void;
  initialItem?: InitialItem;
  children: React.ReactNode;
}

export default function Select({
  onSelect,
  initialItem,
  children,
}: SelectProps) {
  const {
    isOpen,
    items,
    containerRef,
    triggerRef,
    contentRef,
    activeIndex,
    setActiveIndex,
    registerItem,
    handleOnSelect,
    onOpen,
    onClose,
    selectedValue,
    itemValueMap,
    selectedContent,
  } = useSelect({ onSelect, initialItem });

  return (
    <SelectProvider
      selectedValue={selectedValue}
      isOpen={isOpen}
      onSelect={handleOnSelect}
      onOpen={onOpen}
      onClose={onClose}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      items={items}
      registerItem={registerItem}
      containerRef={containerRef}
      triggerRef={triggerRef}
      contentRef={contentRef}
      itemValueMap={itemValueMap}
      selectedContent={selectedContent}
    >
      <div ref={containerRef} className="w-28 sm:w-32">
        {children}
      </div>
    </SelectProvider>
  );
}
