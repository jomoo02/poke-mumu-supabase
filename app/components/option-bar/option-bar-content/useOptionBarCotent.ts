import { useEffect, useLayoutEffect, useRef } from 'react';
import {
  useContainerRef,
  useItem,
  useSelectedValue,
} from '../option-bar.context';

export function useScrollIntoViewOnActiveChange<T extends string>(
  selectedValue: T,
  itemRefs: React.RefObject<Map<T, HTMLButtonElement | null>>,
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  const hasScrolledInitially = useRef(false);

  useLayoutEffect(() => {
    if (selectedValue && itemRefs.current && containerRef.current) {
      const ref = itemRefs.current.get(selectedValue);
      const container = containerRef.current;

      if (!ref || !container) return;

      const itemLeft = ref.offsetLeft;
      const itemRight = itemLeft + ref.offsetWidth;
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.offsetWidth;

      const isFirst = itemLeft === 0;
      const isLast = itemRight >= container.scrollWidth;
      const isItemVisible =
        itemLeft >= containerLeft && itemRight <= containerRight;

      // 🧷 초기 진입 시: 중앙 정렬
      if (!hasScrolledInitially.current) {
        if (!isItemVisible) {
          container.scrollTo({
            left: itemLeft - container.offsetWidth / 2 + ref.offsetWidth / 2,
            behavior: 'auto',
          });
        }
        hasScrolledInitially.current = true;
      } else {
        if (isFirst) {
          // 👉 맨 왼쪽 아이템이면 scrollTo(0)
          container.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else if (isLast) {
          // 👉 맨 오른쪽 아이템이면 완전히 보이게
          container.scrollTo({
            left: container.scrollWidth,
            behavior: 'smooth',
          });
        } else if (itemLeft < containerLeft) {
          // 왼쪽 잘림
          container.scrollTo({
            left: itemLeft - 16,
            behavior: 'smooth',
          });
        } else if (itemRight > containerRight) {
          // 오른쪽 잘림
          container.scrollTo({
            left: itemRight - container.offsetWidth + 16,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [selectedValue, containerRef, itemRefs]);
}

export default function useOptionBarContent() {
  const { itemRefs } = useItem();
  const { selectedValue } = useSelectedValue();

  const { containerRef } = useContainerRef();
  // useScrollIntoViewOnActiveChange(selectedValue || '', itemRefs, containerRef);
  // useEffect(() = > {
  //   if (selectedValue) {
  //     const ref = itemRefs.current.get(selectedValue);
  //     ref?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'nearest',
  //       inline: 'center',
  //     });
  //   }
  // }, [selectedValue, itemRefs]);

  useEffect(() => {
    if (selectedValue && itemRefs.current && containerRef.current) {
      const ref = itemRefs.current.get(selectedValue);
      const container = containerRef.current;

      if (ref && container) {
        const itemLeft = ref.offsetLeft;
        const itemWidth = ref.offsetWidth;
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        // 아이템이 왼쪽 바깥에 있는 경우
        if (itemLeft < containerScrollLeft) {
          container.scrollTo({
            left: itemLeft,
            behavior: 'smooth',
          });
        }
        // 아이템이 오른쪽 바깥에 있는 경우
        else if (itemLeft + itemWidth > containerScrollLeft + containerWidth) {
          container.scrollTo({
            left: itemLeft - containerWidth + itemWidth,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [selectedValue, containerRef, itemRefs]);

  return { containerRef };
}
