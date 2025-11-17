import {
  autoUpdate,
  flip,
  FloatingNode,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  UseFloatingReturn,
  useFloatingTree,
  useHover,
  useInteractions,
  UseInteractionsReturn,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type DropdownMenuCotext = {
  isOpen: boolean;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  getFloatingProps: UseInteractionsReturn['getFloatingProps'];
  getReferenceProps: UseInteractionsReturn['getReferenceProps'];
  nodeId: string | undefined;
  refs: UseFloatingReturn['refs'];
  floatingStyles: UseFloatingReturn['floatingStyles'];
  hasFocusInside: boolean;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  elementsRef: RefObject<(HTMLButtonElement | null)[]>;
  labelsRef: RefObject<(string | null)[]>;
  context: UseFloatingReturn['context'];
  parentId: string | null;
  parent: DropdownMenuCotext | null;
};

const DropdownMenuContext = createContext<DropdownMenuCotext>({
  isOpen: false,
  activeIndex: null,
  setActiveIndex: () => {},
  getReferenceProps: () => ({}),
  getItemProps: () => ({}),
  getFloatingProps: () => ({}),
  nodeId: undefined,
  refs: {
    reference: { current: null },
    floating: { current: null },
    domReference: { current: null },
    setReference: () => {},
    setFloating: () => {},
    setPositionReference: () => {},
  },
  floatingStyles: {},
  hasFocusInside: false,
  setHasFocusInside: () => {},
  elementsRef: { current: [] },
  labelsRef: { current: [] },
  context: {} as UseFloatingReturn['context'],
  parentId: null,
  parent: null,
});

function useDropdownMenuContext() {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('useDropdownMenuContext Context error');
  }
  return context;
}

interface DropdownMenuProviderProps {
  parent?: DropdownMenuCotext;
  children: React.ReactNode;
}

function DropdownMenuProvider({ children, parent }: DropdownMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId !== null;

  const { context, refs, floatingStyles } = useFloating({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-end',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  const click = useClick(context, {
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested,
  });

  const role = useRole(context, { role: 'menu' });
  const dismiss = useDismiss(context, { bubbles: true });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId });
    }
  }, [tree, nodeId, parentId, isOpen]);

  const value = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      isOpen,
      getReferenceProps,
      getItemProps,
      getFloatingProps,
      nodeId,
      refs,
      floatingStyles,
      hasFocusInside,
      setHasFocusInside,
      elementsRef,
      labelsRef,
      context,
      parentId,
      parent: parent ?? null,
    }),
    [
      activeIndex,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      isOpen,
      nodeId,
      refs,
      floatingStyles,
      hasFocusInside,
      setHasFocusInside,
      elementsRef,
      labelsRef,
      context,
      parentId,
      parent,
    ],
  );

  return (
    <DropdownMenuContext.Provider value={value}>
      <FloatingNode id={nodeId}>{children}</FloatingNode>
    </DropdownMenuContext.Provider>
  );
}

export { useDropdownMenuContext, DropdownMenuProvider };
