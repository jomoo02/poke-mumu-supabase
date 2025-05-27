import { useEffect, useState } from 'react';

type TocItem = {
  id: string;
  content: string | null;
};

export default function useActiveHeading(titles: TocItem[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2[id]'));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }));

        if (visibleHeadings.length > 0) {
          const topHeading = visibleHeadings.reduce((a, b) =>
            a.top < b.top ? a : b,
          );
          setActiveId(topHeading.id);
        }
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    // Fallback: 빠른 스크롤에 대비해 직접 계산
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const current = headings.findLast(
          (heading) =>
            heading.getBoundingClientRect().top < window.innerHeight * 0.2,
        );
        if (current) {
          setActiveId(current.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [titles]);

  return activeId;
}
