import {
  createContext,
  useContext,
  useMemo,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';

export type ComboboxItem = {
  value: string;
  label: string;
};

interface ComboboxContextValue {
  selectedItem: ComboboxItem | null;
  isOpen: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  containerRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  listRef: RefObject<HTMLDivElement | null>;
  onSelect: (item: ComboboxItem) => void;
  open: () => void;
  close: () => void;
  items: ComboboxItem[];
  registerItem: (item: ComboboxItem) => void;
  filteredItems: ComboboxItem[];
  inputValue: string;
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contentRef: RefObject<HTMLDivElement | null>;
}

const ComboboxContext = createContext<ComboboxContextValue | null>(null);

function useComboboxContext() {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw new Error('ComboboxContext must be used within ComboboxProvider');
  }

  return context;
}

export function useSelectedItem() {
  const { selectedItem } = useComboboxContext();
  return { selectedItem };
}

export function useListOpen() {
  const { isOpen, open, close } = useComboboxContext();

  return { isOpen, open, close };
}

export function useActiveIndex() {
  const { activeIndex, setActiveIndex } = useComboboxContext();
  return { activeIndex, setActiveIndex };
}

export function useItems() {
  const { items, filteredItems } = useComboboxContext();
  const itemCount = items.length;

  return { items, itemCount, filteredItems };
}

export function useRegisterItem() {
  const { registerItem } = useComboboxContext();
  return { registerItem };
}

export function useTriggerRef() {
  const { triggerRef } = useComboboxContext();
  return { triggerRef };
}

export function useOnSelect() {
  const { onSelect } = useComboboxContext();
  return { onSelect };
}

export function useContainerRef() {
  const { containerRef } = useComboboxContext();
  return { containerRef };
}

export function useListRef() {
  const { listRef } = useComboboxContext();
  return { listRef };
}

export function useInputValue() {
  const { inputValue, onChangeInputValue } = useComboboxContext();
  return {
    inputValue,
    onChangeInputValue,
  };
}

export function useContentRef() {
  const { contentRef } = useComboboxContext();
  return { contentRef };
}

export function ComboboxProvider({
  children,
  selectedItem,
  isOpen,
  onSelect,
  open,
  close,
  activeIndex,
  setActiveIndex,
  items,
  registerItem,
  triggerRef,
  containerRef,
  listRef,
  filteredItems,
  inputValue,
  onChangeInputValue,
  contentRef,
}: ComboboxContextValue & { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      selectedItem,
      isOpen,
      onSelect,
      open,
      close,
      activeIndex,
      setActiveIndex,
      items,
      registerItem,
      triggerRef,
      listRef,
      containerRef,
      filteredItems,
      inputValue,
      onChangeInputValue,
      contentRef,
    }),
    [
      selectedItem,
      isOpen,
      onSelect,
      open,
      close,
      activeIndex,
      setActiveIndex,
      items,
      registerItem,
      triggerRef,
      listRef,
      containerRef,
      filteredItems,
      inputValue,
      onChangeInputValue,
      contentRef,
    ],
  );
  return (
    <ComboboxContext.Provider value={value}>
      {children}
    </ComboboxContext.Provider>
  );
}
