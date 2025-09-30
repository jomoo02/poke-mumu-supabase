import {
  OptionBar,
  OptionBarContent,
  OptionBarItem,
} from '@/app/components/option-bar';
import { Tabs, TabsItem } from '@/app/components/ui/tabs';
import TabsContent from '@/app/components/ui/tabs/tabs-content';
import { useLayoutEffect, useRef } from 'react';

interface SelectGenProps {
  gens: string[];
  selectedGen: string;
  onSelect: (gen: string) => void;
}

export default function SelectGen({
  gens,
  selectedGen,
  onSelect,
}: SelectGenProps) {
  const handleGenSelect = (gen: string | null) => {
    console.log(gen);
    if (gen) {
      onSelect(gen);
    }
  };
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    });
  }, []);
  return (
    <div className="flex p-2">
      <Tabs value={selectedGen} onValueChange={handleGenSelect}>
        <TabsContent ref={ref}>
          {gens.map((gen) => (
            <TabsItem key={gen} value={gen}>
              {gen}세대
            </TabsItem>
          ))}
        </TabsContent>
      </Tabs>

      {/* <OptionBar initialValue={selectedGen} onValueSelect={handleGenSelect}>
        <OptionBarContent>
          {gens.map((gen) => (
            <OptionBarItem key={gen} value={gen}>
              {gen}th
            </OptionBarItem>
          ))}
        </OptionBarContent>
      </OptionBar> */}
    </div>
  );
}
