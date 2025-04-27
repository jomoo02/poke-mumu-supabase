import { useState, useEffect } from 'react';

export function useFadeToggle(isOpen: boolean, duration: number) {
  const [show, setShow] = useState(isOpen);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      // setShouldRender(true); // 열 때 DOM에 요소를 렌더링
      requestAnimationFrame(() => {
        setShouldRender(true);
        setShow(true);
      });

      // setTimeout(() => {
      //   setShow(true); // 애니메이션 시작 (opacity, scale)
      // }, 0); // 애니메이션 시작을 바로 트리거
    } else {
      setShow(false); // 애니메이션 시작
      setTimeout(() => {
        setShouldRender(false); // 애니메이션 종료 후 DOM에서 요소 제거
      }, duration); // duration 만큼 기다린 후 DOM에서 제거
    }
  }, [isOpen, duration]);

  return { shouldRender, show };
}
