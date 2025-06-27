import { useLayoutEffect, useState, type CSSProperties } from 'react';
import {
  useTriggerRef,
  useListOpen,
  useItems,
  useListRef,
} from '../combobox.context';

export default function usePosition() {
  const { triggerRef } = useTriggerRef();
  const { listRef } = useListRef();
  const { isOpen } = useListOpen();
  const { itemCount } = useItems();
  const [position, setPosition] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    if (triggerRef.current && listRef.current && isOpen && itemCount > 0) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentEl = listRef.current;
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
  }, [isOpen, triggerRef, listRef, itemCount]);

  return {
    position,
  };
}
