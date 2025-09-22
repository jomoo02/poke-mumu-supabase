import {
  UseInteractionsReturn,
  UseFloatingReturn,
  useFloating,
  autoUpdate,
  flip,
  useListNavigation,
  useTypeahead,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  offset,
} from '@floating-ui/react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

interface SelectContextValue {
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: UseInteractionsReturn['getItemProps'];
  getFloatingProps: UseInteractionsReturn['getFloatingProps'];
  getReferenceProps: UseInteractionsReturn['getReferenceProps'];
  handleSelect: (index: number | null) => void;
  refs: UseFloatingReturn['refs'];
  context: UseFloatingReturn['context'];
  isOpen: boolean;
  floatingStyles: React.CSSProperties;
  elementsRef: React.RefObject<(HTMLElement | null)[]>;
  labelsRef: React.RefObject<(string | null)[]>;
  getSelectedValue: () => string | null;
}

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) throw new Error('SelectContext Error');

  return context;
}

export interface SelectProviderProps {
  open?: boolean;
  value?: string;
  items?: string[];
  onValueChange?: (label: string | null) => void;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function SelectProvider({
  open,
  value,
  items,
  onValueChange,
  onOpenChange,
  children,
}: SelectProviderProps) {
  const initialIndex = useMemo(() => {
    if (value && items) {
      const index = items.findIndex((item) => item === value);
      return index === -1 ? null : index;
    }
    return null;
  }, [value, items]);

  const [unControlledOpen, setUnControlledOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(initialIndex);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    initialIndex,
  );
  const [selectedLabel, setSelectedLabel] = useState<string | null>(
    () => value ?? null,
  );

  const isOpen = open ?? unControlledOpen;
  const handleOpenChange = onOpenChange ?? setUnControlledOpen;

  const { refs, context, floatingStyles, middlewareData } = useFloating({
    placement: 'bottom',
    open: isOpen,
    onOpenChange: handleOpenChange,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip()],
  });

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const getSelectedValue = useCallback(() => {
    return selectedLabel;
  }, [selectedLabel]);

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      handleOpenChange(false);

      if (index !== null) {
        setSelectedLabel(labelsRef.current[index]);
        if (onValueChange && items) {
          onValueChange(items[index]);
        }
      }
    },
    [handleOpenChange, items, onValueChange],
  );

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex: selectedIndex,
    onNavigate: setActiveIndex,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex: selectedIndex,
    onMatch: handleTypeaheadMatch,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role],
  );

  const providerValue = useMemo(
    () => ({
      refs,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      context,
      floatingStyles,
      middlewareData,
      activeIndex,
      selectedIndex,
      handleSelect,
      isOpen,
      elementsRef,
      labelsRef,
      getSelectedValue,
    }),
    [
      activeIndex,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      handleSelect,
      isOpen,
      middlewareData,
      refs,
      selectedIndex,
      getSelectedValue,
    ],
  );

  return (
    <SelectContext.Provider value={providerValue}>
      {children}
    </SelectContext.Provider>
  );
}

export { SelectProvider, useSelectContext };
