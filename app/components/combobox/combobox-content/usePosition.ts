import { useLayoutEffect, useState, useRef, type CSSProperties } from 'react';
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

  const [position, setPosition] = useState<CSSProperties | null>(null);
  const { hasPosition, setHasPosition } = useHasPosition();
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

    const trigger = triggerRef.current;
    const content = contentRef.current;

    const triggerRect = trigger.getBoundingClientRect();
    const contentHeight = content.offsetHeight;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const visualHeight = window.visualViewport?.height || window.innerHeight;

    const spaceBelow = visualHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const shouldOpenAbove =
      spaceBelow < contentHeight && spaceAbove > contentHeight;

    const top = shouldOpenAbove
      ? triggerRect.top + scrollY - contentHeight - 3
      : triggerRect.bottom + scrollY + 3;

    const left = triggerRect.left + scrollX;

    const newPosition: CSSProperties = {
      position: 'absolute',
      top,
      left,
      width: trigger.offsetWidth,
      zIndex: 100,
    };

    setPosition(newPosition);
    setHasPosition(true);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    const handleScrollOrResize = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          calculatePosition();
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);
    window.visualViewport?.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
      window.visualViewport?.removeEventListener(
        'resize',
        handleScrollOrResize,
      );
    };
  }, [isOpen, itemCount]);

  return {
    position,
    hasPosition,
  };
}
