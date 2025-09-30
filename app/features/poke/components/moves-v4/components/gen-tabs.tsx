import { useLayoutEffect, useRef } from 'react';
import { Tabs, TabsItem, TabsContent } from '@/app/components/ui/tabs';

interface GenTabsProps {
  gens: string[];
  gen: string;
  onGenChange: (gen: string) => void;
}

export default function GenTabs({ gens, gen, onGenChange }: GenTabsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleGenChange = (gen: string | null) => {
    if (gen) {
      onGenChange(gen);
    }
  };

  useLayoutEffect(() => {
    const el = contentRef.current;

    if (!el) {
      return;
    }

    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    });
  }, []);

  return (
    <div className="flex p-1">
      <Tabs value={gen} onValueChange={handleGenChange}>
        <TabsContent ref={contentRef}>
          {gens.map((item) => (
            <TabsItem key={item} value={item}>
              {item}세대
            </TabsItem>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
