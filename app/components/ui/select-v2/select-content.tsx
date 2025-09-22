import {
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react';
import { cn } from '@/app/lib/utils';
import { useSelectContext } from './context';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

interface SelectCotentProps {
  children: React.ReactNode;
  className?: string;
}

export default function SelectContent({
  children,
  className,
}: SelectCotentProps) {
  const {
    isOpen,
    context,
    refs,
    floatingStyles,
    getFloatingProps,
    elementsRef,
    labelsRef,
  } = useSelectContext();

  useLockBodyScroll(isOpen);

  return (
    <>
      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay />
          {/* <div className="fixed inset-0 z-100 pointer-events-auto" /> */}
          <FloatingFocusManager
            context={context}
            // initialFocus={refs.floating}
            modal={false}
          >
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cn(
                'border border-border bg-white rounded-md p-1 outline-none shadow-lg z-50',
                className,
              )}
              {...getFloatingProps()}
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}
