'use client';

import { ComboboxProvider } from '../combobox.context';
import useCombobox from './useCombobox';

interface ComboboxProps {
  onSelect?: (value: string) => void;
  children: React.ReactNode;
}

export default function Combobox({ onSelect, children }: ComboboxProps) {
  const {
    isOpen,
    items,
    containerRef,
    triggerRef,
    listRef,
    activeIndex,
    setActiveIndex,
    registerItem,
    handleSelect,
    open,
    close,
    selectedItem,
    filteredItems,
    inputValue,
    handleChangeInputValue,
    contentRef,
    hasPosition,
    setHasPosition,
  } = useCombobox(onSelect);

  return (
    <ComboboxProvider
      isOpen={isOpen}
      items={items}
      containerRef={containerRef}
      triggerRef={triggerRef}
      listRef={listRef}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      registerItem={registerItem}
      onSelect={handleSelect}
      open={open}
      close={close}
      selectedItem={selectedItem}
      filteredItems={filteredItems}
      inputValue={inputValue}
      onChangeInputValue={handleChangeInputValue}
      contentRef={contentRef}
      hasPosition={hasPosition}
      setHasPosition={setHasPosition}
    >
      {children}
    </ComboboxProvider>
  );
}
