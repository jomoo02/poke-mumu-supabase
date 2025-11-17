'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Check, ChevronDown } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/shared/ui/select';
import { cn } from '@/app/shared/lib';
import { TypeDto } from '@/app/entities/type/model';

interface TypeSelectProps {
  types: TypeDto[];
}

export default function TypeSelect({ types }: TypeSelectProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();

  const itemsContentMap: Record<string, string> = Object.fromEntries(
    types.map((type) => [type.identifier, type.typeKo]),
  );

  const items = Object.keys(itemsContentMap);

  const targetType = params.get('type') || 'all';

  const [targetTypeOptimistic, setTargetTypeOptimistic] = useOptimistic(
    targetType,
    (prev, next: string) => next,
  );

  const handleValueChange = (v: string | null) => {
    if (!v || !items.includes(v)) {
      return;
    }

    startTransition(() => {
      setTargetTypeOptimistic(v);
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set('type', v);
      router.push(`?${next.toString()}`, { scroll: false });
    });
  };

  return (
    <div
      data-state={isPending ? 'pending' : undefined}
      className={cn('flex items-center justify-centr relative mb-2')}
    >
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        타입
      </span>
      <Select
        items={items}
        value={targetTypeOptimistic}
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-28 justify-between">
          <span>{itemsContentMap[targetTypeOptimistic]}</span>
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
              {targetTypeOptimistic === item && (
                <Check className="size-3.5 text-foreground" />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
