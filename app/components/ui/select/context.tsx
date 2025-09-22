import {
  autoUpdate,
  flip,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
  UseInteractionsReturn,
  UseFloatingReturn,
  hide,
} from '@floating-ui/react';
import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
  CSSProperties,
  RefObject,
  isValidElement,
  Dispatch,
  useEffect,
  useLayoutEffect,
} from 'react';

interface SelectContextValue {
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: UseInteractionsReturn['getItemProps'];
  getFloatingProps: UseInteractionsReturn['getFloatingProps'];
  getReferenceProps: UseInteractionsReturn['getReferenceProps'];
  handleSelect: (index: number | null) => void;
  selectedLabel: string | null;
  refs: UseFloatingReturn['refs'];
  context: UseFloatingReturn['context'];
  isOpen: boolean;
  floatingStyles: CSSProperties;
  elementsRef: RefObject<(HTMLElement | null)[]>;
  labelsRef: RefObject<(string | null)[]>;
  registerItem: ({
    label,
    node,
  }: {
    label: string;
    node: React.ReactNode;
  }) => void;
  // getSelectedItem: () => React.ReactNode | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedLabel: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectContext = createContext<SelectContextValue>(
  {} as SelectContextValue,
);

function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('SelectContext Error');
  }

  return context;
}

type SelectItem = {
  label: string;
  value: string;
};

export interface SelectProviderProps {
  open?: boolean;
  onValueChange?: (label: string | null) => void;
  onOpenChange?: (isOpen: boolean) => void;
  initialItem?: SelectItem;
  children: React.ReactNode;
}

function SelectProvider(props: SelectProviderProps) {
  // const testDefaultValue = '50';

  const {
    open: controlledOpen,
    onValueChange,
    onOpenChange,
    children,
    initialItem,
  } = props;

  const [unControlledOpen, setUnControlledOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(
    () => initialItem?.label ?? null,
  );

  // if (selectedLabel) {
  //   setSelectedIndex(0);
  // }

  const [labelNodeMap, setLabelNodeMap] = useState<
    Map<string, React.ReactNode>
  >(() => {
    const map = new Map();
    // if (initialItem) {
    //   return map.set('50', initialItem.value);
    // }
    return map;
  });
  // console.log(labelNodeMap);
  const optionsRef = useRef<Map<string, React.ReactNode>>(new Map());
  const registerItem = ({
    label,
    node,
  }: {
    label: string;
    node: React.ReactNode;
  }) => {
    console.log(label, node);
    optionsRef.current.set(label, node);
    // setLabelNodeMap((prev) => {
    //   if (!prev.has(label)) {
    //     return new Map(prev).set(label, node);
    //   }
    //   return prev;
    // });
  };

  useEffect(() => {
    if (selectedLabel && optionsRef.current.get(selectedLabel)) {
      const idx = [...optionsRef.current.keys()].findIndex(
        (v) => v === selectedLabel,
      );
      setSelectedIndex(idx);
    }
  }, [selectedLabel]);

  const isOpen = controlledOpen ?? unControlledOpen;
  const handleOpenChange = onOpenChange ?? setUnControlledOpen;

  const { refs, context, floatingStyles, middlewareData } = useFloating({
    placement: 'bottom',
    open: isOpen,
    onOpenChange: handleOpenChange,
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const selectedItemRef = useRef<string | null>(initialItem?.label ?? null);

  // useEffect(() => {
  //   console.log(isOpen, selectedLabel, labelNodeMap);
  //   if (selectedLabel && labelNodeMap.get(selectedLabel) && isOpen === false) {
  //     console.log('pass');
  //     console.log(labelNodeMap, [...labelNodeMap.keys()], selectedLabel);
  //     const index = [...labelNodeMap.keys()].findIndex(
  //       (v) => v === selectedLabel,
  //     );

  //     // console.log(index);

  //     setSelectedIndex(index);
  //   }
  // }, [selectedLabel, labelNodeMap, isOpen]);

  const getSelectedItem = useCallback(() => {
    console.log(selectedLabel);
    if (selectedLabel) {
      return optionsRef.current.get(selectedLabel);
      // return labelNodeMap.get(selectedLabel);
    }
    return null;
  }, [selectedLabel]);

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      handleOpenChange(false);
      if (index !== null) {
        setSelectedLabel(labelsRef.current[index]);
        // selectedItemRef.current = labelsRef.current[index];
        // console.log(elementsRef.current[index]);
        if (onValueChange) {
          onValueChange(labelsRef.current[index]);
        }
      }
    },
    [handleOpenChange, onValueChange],
  );

  // useLayoutEffect(() => {
  //   const initLabel = initialItem?.label;
  //   const idx = labelsRef.current.findIndex((v) => v === initLabel);

  //   console.log(idx);
  //   if (idx === -1) {
  //     console.log(labelsRef, initLabel);
  //   }
  //   if (initLabel && idx !== -1) {
  //     setSelectedLabel(initLabel);
  //     setSelectedIndex(idx);
  //   }
  // }, [initialItem]);

  // console.log(labelsRef);

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

  // console.log(selectedLabel, labelsRef, elementsRef);

  const value = useMemo(
    () => ({
      refs,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      activeIndex,
      selectedIndex,
      selectedLabel,
      handleSelect,
      context,
      isOpen,
      floatingStyles,
      elementsRef,
      labelsRef,
      registerItem,
      getSelectedItem,
      setActiveIndex,
      setSelectedLabel,
      selectedItemRef,
      middlewareData,
    }),
    [
      refs,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      activeIndex,
      selectedIndex,
      selectedLabel,
      handleSelect,
      context,
      isOpen,
      floatingStyles,
      getSelectedItem,
      setActiveIndex,
      setSelectedLabel,
      selectedItemRef,
      middlewareData,
    ],
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}

export { useSelectContext, SelectProvider };
