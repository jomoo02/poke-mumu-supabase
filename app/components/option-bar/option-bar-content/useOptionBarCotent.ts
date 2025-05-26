// import { useEffect } from 'react';
import {
  useContainerRef,
  // useItem,
  // useSelectedValue,
} from '../option-bar.context';

export default function useOptionBarContent() {
  // const { itemRefs } = useItem();
  // const { selectedValue } = useSelectedValue();
  const { containerRef } = useContainerRef();

  // active 아이템 스크롤 처리
  // useEffect(() => {
  //   if (selectedValue && itemRefs.current && containerRef.current) {
  //     const ref = itemRefs.current.get(selectedValue);
  //     const container = containerRef.current;

  //     if (ref && container) {
  //       const itemLeft = ref.offsetLeft;
  //       const itemWidth = ref.offsetWidth;
  //       const containerScrollLeft = container.scrollLeft;
  //       const containerWidth = container.offsetWidth;

  //       // 아이템이 왼쪽 바깥에 있는 경우
  //       if (itemLeft - 20 < containerScrollLeft) {
  //         container.scrollTo({
  //           left: itemLeft - itemWidth,
  //           behavior: 'smooth',
  //         });
  //       }
  //       // 아이템이 오른쪽 바깥에 있는 경우
  //       else if (itemLeft + itemWidth > containerScrollLeft + containerWidth) {
  //         container.scrollTo({
  //           left: itemLeft - containerWidth + itemWidth * 2,
  //           behavior: 'smooth',
  //         });
  //       }
  //     }
  //   }
  // }, [selectedValue, containerRef, itemRefs]);

  return { containerRef };
}
