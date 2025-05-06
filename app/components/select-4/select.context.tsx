import {
  createContext,
  useContext,
  useMemo,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';

interface SelectContextValue {
  selectedValue: string | null;
  isOpen: boolean;
  onSelect: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  itemValues: string[];
  registerItem: (value: string) => number;
  containerRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
}

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('SelectContext must be used within SelectProvider');
  }

  return context;
}

export function useSelectedValue() {
  const { selectedValue } = useSelectContext();
  return { selectedValue };
}

export function useSelectOpen() {
  const { isOpen, onOpen, onClose } = useSelectContext();

  return { isOpen, onOpen, onClose };
}

export function useActiveIndex() {
  const { activeIndex, setActiveIndex } = useSelectContext();
  return { activeIndex, setActiveIndex };
}

export function useItemValues() {
  const { itemValues } = useSelectContext();
  const itemCount = itemValues.length;

  return { itemValues, itemCount };
}

export function useRegisterItem() {
  const { registerItem } = useSelectContext();
  return { registerItem };
}

export function useTriggerRef() {
  const { triggerRef } = useSelectContext();
  return { triggerRef };
}

export function useOnSelect() {
  const { onSelect } = useSelectContext();

  return { onSelect };
}

export function useContainerRef() {
  const { containerRef } = useSelectContext();

  return { containerRef };
}

export function useContentRef() {
  const { contentRef } = useSelectContext();
  return { contentRef };
}

export function SelectProvider({
  children,
  selectedValue,
  isOpen,
  onSelect,
  onOpen,
  onClose,
  activeIndex,
  setActiveIndex,
  itemValues,
  registerItem,
  triggerRef,
  containerRef,
  contentRef,
}: SelectContextValue & { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      selectedValue,
      isOpen,
      onSelect,
      onOpen,
      onClose,
      activeIndex,
      setActiveIndex,
      itemValues,
      registerItem,
      triggerRef,
      containerRef,
      contentRef,
    }),
    [
      selectedValue,
      isOpen,
      onSelect,
      onOpen,
      onClose,
      activeIndex,
      setActiveIndex,
      itemValues,
      registerItem,
      triggerRef,
      containerRef,
      contentRef,
    ],
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}
