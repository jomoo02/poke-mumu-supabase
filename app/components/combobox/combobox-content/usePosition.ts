import { useLayoutEffect, useState, useRef } from 'react';
import {
  useTriggerRef,
  useListOpen,
  useItems,
  useContentRef,
  useHasPosition,
} from '../combobox.context';

export default function usePosition() {
  const { triggerRef } = useTriggerRef();
  const { contentRef } = useContentRef();
  const { isOpen } = useListOpen();
  const { itemCount } = useItems();
  const { hasPosition, setHasPosition } = useHasPosition();

  const [position, setPosition] = useState<React.CSSProperties | null>(null);
  const ticking = useRef(false);

  const calculatePosition = () => {
    if (
      !triggerRef.current ||
      !contentRef.current ||
      !isOpen ||
      itemCount === 0
    ) {
      setHasPosition(false);
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const content = contentRef.current;
    console.log(content);

    const contentHeight = content.offsetHeight;
    console.log(contentHeight);

    const visualHeight = window.visualViewport?.height || window.innerHeight;
    const spaceBelow = visualHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const shouldOpenAbove =
      spaceBelow < contentHeight && spaceAbove > contentHeight;

    const x = triggerRect.left;
    const y = shouldOpenAbove
      ? triggerRect.top - contentHeight - 3
      : triggerRect.bottom + 3;

    const newPosition: React.CSSProperties = {
      position: 'fixed',
      transform: `translate(${x}px, ${y}px)`,
      minWidth: 'max-content',
      zIndex: 50,
    };

    setPosition(newPosition);
    setHasPosition(true);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    const handleUpdate = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          calculatePosition();
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);
    window.visualViewport?.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
      window.visualViewport?.removeEventListener('resize', handleUpdate);
    };
  }, [isOpen, itemCount]);

  return {
    position,
    hasPosition,
  };
}
