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
    const contentHeight = contentRef.current.offsetHeight;

    const visualViewport = window.visualViewport;
    const visualHeight = visualViewport?.height || window.innerHeight;
    const visualOffsetTop = visualViewport?.offsetTop || 0;

    const spaceBelow = visualHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const shouldOpenAbove =
      spaceBelow < contentHeight && spaceAbove > contentHeight;

    const x = triggerRect.left;
    const y = shouldOpenAbove
      ? triggerRect.top - contentHeight - 3
      : triggerRect.bottom + 3;

    // visualViewport offsetTop 보정
    const adjustedY = y + visualOffsetTop;

    const newPosition: React.CSSProperties = {
      position: 'fixed',
      transform: `translate(${x}px, ${adjustedY}px)`,
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
    window.visualViewport?.addEventListener('scroll', handleUpdate); // 모바일 키보드 대응

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
      window.visualViewport?.removeEventListener('resize', handleUpdate);
      window.visualViewport?.removeEventListener('scroll', handleUpdate);
    };
  }, [isOpen, itemCount]);

  return {
    position,
    hasPosition,
  };
}
