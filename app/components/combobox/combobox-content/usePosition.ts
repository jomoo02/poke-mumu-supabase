import { useLayoutEffect, useState, useRef, type CSSProperties } from 'react';
import {
  useTriggerRef,
  useListOpen,
  useItems,
  useContentRef,
} from '../combobox.context';

export default function usePosition() {
  const { triggerRef } = useTriggerRef();
  const { contentRef } = useContentRef();
  const { isOpen } = useListOpen();
  const { itemCount } = useItems();

  const [position, setPosition] = useState<CSSProperties>({});
  const [isAbove, setIsAbove] = useState<boolean>(false); // 위에 렌더링 여부
  const ticking = useRef(false); // requestAnimationFrame 중복 방지

  const calculatePosition = () => {
    if (
      !triggerRef.current ||
      !contentRef.current ||
      !isOpen ||
      itemCount === 0
    ) {
      return;
    }

    const trigger = triggerRef.current;
    const content = contentRef.current;

    const triggerRect = trigger.getBoundingClientRect();
    const contentHeight = content.offsetHeight;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;

    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const shouldOpenAbove =
      spaceBelow < contentHeight && spaceAbove > contentHeight;

    // 이전 방향과 다를 때만 업데이트
    if (shouldOpenAbove !== isAbove) {
      setIsAbove(shouldOpenAbove);
    }

    const top = shouldOpenAbove
      ? triggerRect.top + scrollY - contentHeight - 3
      : triggerRect.bottom + scrollY + 3;

    const left = triggerRect.left + scrollX;

    setPosition({
      position: 'absolute',
      top,
      left,
      width: trigger.offsetWidth,
      zIndex: 100,
    });
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

    window.addEventListener('scroll', handleScrollOrResize, true); // capture 단계
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [isOpen, itemCount]);

  return { position };
}
