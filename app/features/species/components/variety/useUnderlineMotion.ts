import { useRef, useLayoutEffect, useState } from 'react';

export default function useUnderlineMotion<T extends HTMLElement>(
  form: string,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(T | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const index = itemRefs.current.findIndex(
      (el) => el?.dataset.active === 'true',
    );
    const activeEl = itemRefs.current[index];
    const containerEl = containerRef.current;

    if (activeEl && containerEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      setIndicatorStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [form]);

  return { containerRef, itemRefs, indicatorStyle };
}
