import { SelectProvider } from '../select.context';
import useSelect from './useSelect';

interface SelectProps {
  value: string;
  onSelect?: (value: string) => void;
  initValue?: string;
  initialValue?: {
    value: string;
    content: React.ReactNode;
  };
  children: React.ReactNode;
}

export default function Select({
  onSelect,
  children,
  initialValue,
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
  } = useSelect({ onSelect, initialValue });

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
