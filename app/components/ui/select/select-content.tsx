import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import { useSelectContext } from './context';
import type { CollectionChildren }
interface SelectCotentProps {
  children: React.ReactNode;
  forceMount: boolean;
}

export default function SelectContent({
  children,
  forceMount = true,
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
  // console.log(children, elementsRef, labelsRef);

  if (!isOpen && !forceMount) return null;

  const hiddenWhenClosed = !isOpen
    ? {
        'aria-hidden': true,
        style: {
          position: 'absolute',
          left: -9999,
          width: 1,
          height: 1,
          overflow: 'hidden',
          pointerEvents: 'none',
          visibility: 'hidden',
          ...floatingStyles,
        } as React.CSSProperties,
      }
    : { style: { ...floatingStyles } };

  return (
    <>
      {isOpen && (
        <FloatingFocusManager context={context} modal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
              {children}
            </FloatingList>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
