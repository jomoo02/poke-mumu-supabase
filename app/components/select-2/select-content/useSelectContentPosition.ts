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

      // const spaceBelow = height - triggerRect.bottom;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      const shouldOpenAbove =
        spaceBelow < contentHeight && spaceAbove > contentHeight;

      // const top = shouldOpenAbove
      //   ? triggerRect.top + window.scrollY - contentHeight - 3
      //   : triggerRect.bottom + window.scrollY + 3;

      requestAnimationFrame(() => {
        setPosition({
          position: 'fixed', // 중요!
          top: shouldOpenAbove
            ? triggerRect.top - contentHeight - 3
            : triggerRect.bottom + 3,
          left: triggerRect.left,
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
