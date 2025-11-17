import { useEffect } from 'react';
import {
  useContentRef,
  useOptionValueRefMap,
  useSelectedValue,
} from '../option-bar.context';

export default function useOptionBarContent() {
  const { optionValueRefMap } = useOptionValueRefMap();
  const { selectedValue } = useSelectedValue();
  const { contentRef } = useContentRef();

  // active 아이템 스크롤 처리
  useEffect(() => {
    if (selectedValue && optionValueRefMap.current && contentRef.current) {
      const ref = optionValueRefMap.current.get(selectedValue);
      const container = contentRef.current;

      if (ref && container) {
        const itemLeft = ref.offsetLeft;
        const itemWidth = ref.offsetWidth;
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        // 아이템이 왼쪽 바깥에 있는 경우
        if (itemLeft - 20 < containerScrollLeft) {
          container.scrollTo({
            left: itemLeft - itemWidth,
            behavior: 'smooth',
          });
        }
        // 아이템이 오른쪽 바깥에 있는 경우
        else if (itemLeft + itemWidth > containerScrollLeft + containerWidth) {
          container.scrollTo({
            left: itemLeft - containerWidth + itemWidth * 2,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [selectedValue, contentRef, optionValueRefMap]);

  return { contentRef };
}
