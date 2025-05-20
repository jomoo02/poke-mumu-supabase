import { useState, useEffect } from 'react';

type TocItem = {
  id: string;
  content: string | null;
};

export default function useToc() {
  const [tocs, setTocs] = useState<TocItem[]>([]);

  useEffect(() => {
    const updateTocs = () => {
      const elements = Array.from(document.querySelectorAll('h2[id]'));
      const newHeadings = elements.map((el) => ({
        id: el.id,
        content: el.textContent,
      }));

      setTocs(newHeadings);
    };

    updateTocs(); // 초기 호출

    const observer = new MutationObserver(() => {
      updateTocs();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return {
    tocs,
  };
}
