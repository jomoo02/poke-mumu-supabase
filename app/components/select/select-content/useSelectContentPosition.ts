import { useLayoutEffect, useState, type CSSProperties } from 'react';
import {
  useTriggerRef,
  useSelectOpen,
  useItemValues,
  useContentRef,
} from '../select.context';

export default function useSelectContentPosition() {
  const { triggerRef } = useTriggerRef();
  const { contentRef } = useContentRef();
  const { isOpen } = useSelectOpen();
  const { itemCount } = useItemValues();
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
        ? triggerRect.top + window.scrollY - contentHeight - 3
        : triggerRect.bottom + window.scrollY + 3;

      requestAnimationFrame(() => {
        setPosition({
          position: 'absolute',
          top,
          left: triggerRect.left + window.scrollX,
          width: triggerRect.width,
          zIndex: 9999,
        });
      });
    }
  }, [isOpen, triggerRef, contentRef, itemCount]);

  return {
    position,
  };
}
