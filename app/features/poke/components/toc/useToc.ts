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

      const headingMap = new Map<string, string | null>();

      for (const { id, content } of newHeadings) {
        if (!headingMap.has(id)) {
          headingMap.set(id, content);
        }
      }

      const uniqueHeadings = Array.from(headingMap.entries()).map(
        ([id, content]) => ({
          id,
          content,
        }),
      );

      setTocs(uniqueHeadings);
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
