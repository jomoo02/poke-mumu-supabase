'use client';

import { Check, ChevronDown } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/shared/ui/select';
import { cn } from '@/app/shared/lib';

import { usePokedexContext } from '../model';

export default function TypeSelect() {
  const { targetType, handleTargetTypeChange, selectTypeItems, isPending } =
    usePokedexContext();

  const itemsContentMap: Record<string, string> = Object.fromEntries(
    selectTypeItems.map(({ value, content }) => [value, content]),
  );

  const items = Object.keys(itemsContentMap);

  const handleValueChange = (v: string | null) => {
    if (v) {
      handleTargetTypeChange(v);
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-centr relative mb-2',
        isPending ? 'pointer-events-none opacity-40' : 'pointer-events-auto',
      )}
    >
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        타입
      </span>
      <Select
        items={items}
        value={targetType}
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-28 justify-between">
          <span>{itemsContentMap[targetType]}</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </SelectTrigger>
        <SelectContent className="overflow-auto h-52 w-28 scrollbar-hidden">
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="py-1 flex justify-between"
            >
              <span>{itemsContentMap[item]}</span>
              {targetType === item && (
                <Check className="size-3.5 text-foreground" />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
