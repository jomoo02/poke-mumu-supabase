import * as React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  arrow,
  FloatingArrow,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';

interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useTooltip({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const arrowRef = React.useRef(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      arrowRef,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

export function Tooltip({
  children,
  ...options
}: { children: React.ReactNode } & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps extends React.HTMLProps<HTMLElement> {
  children: React.ReactNode;
}

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  const context = useTooltipContext();

  const ref = useMergeRefs([context.refs.setReference]);

  return (
    <button
      ref={ref}
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
}

export function TooltipContent({ ...props }: React.HTMLProps<HTMLDivElement>) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating]);

  if (!context.open) {
    return null;
  }

  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{
          ...context.floatingStyles,
        }}
        {...context.getFloatingProps(props)}
      >
        {props.children}
        <FloatingArrow
          ref={context.arrowRef}
          fill="#09090b"
          context={context.context}
          tipRadius={1}
          // className="bg-foreground w-2 h-2"
          style={{
            position: 'absolute',
            transform: 'translateY(-1px)',
            left: context.middlewareData.arrow?.x,
            top: context.middlewareData.arrow?.y,
          }}
        />
      </div>
    </FloatingPortal>
  );
}
