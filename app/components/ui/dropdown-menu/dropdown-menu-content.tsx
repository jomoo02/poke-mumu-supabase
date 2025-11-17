import {
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useDropdownMenuContext } from './context';

interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  const {
    elementsRef,
    labelsRef,
    isOpen,
    context,
    refs,
    floatingStyles,
    getFloatingProps,
    parentId,
  } = useDropdownMenuContext();

  const isNested = parentId !== null;

  return (
    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
      {isOpen && (
        <FloatingPortal>
          {!isNested && <FloatingOverlay lockScroll />}
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={isNested ? -1 : 0}
            returnFocus={!isNested}
          >
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className={cn(
                'border border-border bg-white rounded-md p-1 outline-none shadow-lg z-50',
                className,
              )}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </FloatingList>
  );
}
