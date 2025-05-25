import { useEffect, useState } from 'react';
import {
  useContainerRef,
  useItem,
  useSelectedValue,
} from '../option-bar.context';

export default function useOptionBarContent() {
  const { itemRefs } = useItem();
  const { selectedValue } = useSelectedValue();
  const { containerRef } = useContainerRef();

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  // active 아이템 스크롤 처리
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

  // indicatorStyle 계산
  useEffect(() => {
    if (selectedValue && itemRefs.current && containerRef.current) {
      const ref = itemRefs.current.get(selectedValue);
      const container = containerRef.current;

      if (ref && container) {
        const itemRect = ref.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicatorStyle({
          left: itemRect.left - containerRect.left + container.scrollLeft,
          width: itemRect.width,
        });
      }
    }
  }, [selectedValue, containerRef, itemRefs]);

  return { containerRef, indicatorStyle };
}
