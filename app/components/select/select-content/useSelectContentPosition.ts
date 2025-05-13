import { useLayoutEffect, useState, type CSSProperties } from 'react';
import {
  useTriggerRef,
  useSelectOpen,
  useItems,
  useContentRef,
} from '../select.context';

export default function useSelectContentPosition() {
  const { triggerRef } = useTriggerRef();
  const { contentRef } = useContentRef();
  const { isOpen } = useSelectOpen();
  const { itemCount } = useItems();
  const [position, setPosition] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    if (triggerRef.current && contentRef.current && isOpen && itemCount > 0) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentEl = contentRef.current;
      const contentHeight = contentEl.offsetHeight;

      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      const shouldOpenAbove =
        spaceBelow < contentHeight && spaceAbove > contentHeight;

      const top = shouldOpenAbove
        ? triggerRect.top - contentHeight - 3
        : triggerRect.bottom + 3;

      requestAnimationFrame(() => {
        setPosition({
          position: 'fixed',
          top,
          left: triggerRect.left,
          width: triggerRect.width,
          zIndex: 100,
        });
      });
    }
  }, [isOpen, triggerRef, contentRef, itemCount]);

  return {
    position,
  };
}
