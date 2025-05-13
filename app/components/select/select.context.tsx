import {
  createContext,
  useContext,
  useMemo,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';

export type SelectItem = {
  value: string;
  content: React.ReactNode;
};

interface SelectContextValue {
  selectedValue: string | null;
  isOpen: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  containerRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  onSelect: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
  items: string[];
  itemValueMap: Map<string, React.ReactNode>;
  registerItem: (item: SelectItem) => void;
  selectedContent: React.ReactNode | null;
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
  const { selectedValue, selectedContent } = useSelectContext();
  return { selectedValue, selectedContent };
}

export function useSelectOpen() {
  const { isOpen, onOpen, onClose } = useSelectContext();

  return { isOpen, onOpen, onClose };
}

export function useActiveIndex() {
  const { activeIndex, setActiveIndex } = useSelectContext();
  return { activeIndex, setActiveIndex };
}

export function useItems() {
  const { items, itemValueMap } = useSelectContext();
  const itemCount = items.length;

  return { items, itemCount, itemValueMap };
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
  items,
  itemValueMap,
  registerItem,
  triggerRef,
  containerRef,
  contentRef,
  selectedContent,
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
      items,
      itemValueMap,
      registerItem,
      triggerRef,
      containerRef,
      contentRef,
      selectedContent,
    }),
    [
      selectedValue,
      isOpen,
      onSelect,
      onOpen,
      onClose,
      activeIndex,
      setActiveIndex,
      items,
      itemValueMap,
      registerItem,
      triggerRef,
      containerRef,
      contentRef,
      selectedContent,
    ],
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}
