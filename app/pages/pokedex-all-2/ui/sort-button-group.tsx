'use client';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/app/shared/lib';
import Button from '@/app/shared/ui/button';
import { useOptimistic, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface SortButtonProps {
  id: string;
  children: React.ReactNode;
  isActive: boolean;
  direction?: string;
  onClick: (id: string) => void;
}

function SortButton({
  id,
  children,
  onClick,
  isActive,
  direction,
}: SortButtonProps) {
  return (
    <Button
      onClick={() => onClick(id)}
      className={cn(
        'border border-border rounded-lg px-2 py-1.5 flex items-center text-sm shadow-sm gap-1',
        isActive ? 'bg-accent' : 'bg-background hover:bg-accent',
      )}
    >
      <span className="text-nowrap">{children}</span>
      <div className="size-4">
        <div className={cn(isActive ? '' : 'hidden')} aria-hidden>
          <ChevronDown
            data-state={isActive ? direction : 'inactive'}
            className={cn(
              'size-4 transition-transform duration-300 will-change-transform',
              'data-[state=desc]:rotate-180',
            )}
          />
        </div>
      </div>
    </Button>
  );
}
const sortByData = [
  { id: 'dexNumber', children: <>번호</> },
  { id: 'name', children: <>이름</> },
  { id: 'total', children: <>종족값</> },
  { id: 'hp', children: <>HP</> },
  { id: 'attack', children: <>공격</> },
  { id: 'defense', children: <>방어</> },
  { id: 'specialAttack', children: <>특수공격</> },
  { id: 'specialDefense', children: <>특수방어</> },
  { id: 'speed', children: <>스피드</> },
];

export default function SortButtonGroup() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();

  const sortBy = params.get('sortBy') || 'dexNumber';
  const direction = params.get('direction') || 'asc';

  const [optimisticSortBy, setOptimisticSortBy] = useOptimistic(
    sortBy,
    (prev, next: string) => next,
  );

  const handleSortClick = (id: string) => {
    startTransition(() => {
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set('sortBy', id);
      setOptimisticSortBy(id);
      if (sortBy === id) {
        const nextDirection = direction === 'asc' ? 'desc' : 'asc';
        next.set('direction', nextDirection);
      } else {
        next.set('direction', 'asc');
      }

      router.push(`?${next.toString()}`, { scroll: false });
    });
  };

  return (
    <div
      data-state={isPending ? 'pending' : undefined}
      className={cn(
        'flex transition-opacity min-w-0 flex-wrap gap-2 relative my-2',
        // isPending ? 'pointer-events-none opacity-40' : 'pointer-events-auto',
      )}
    >
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        정렬
      </span>
      {sortByData.map((d) => (
        <SortButton
          key={d.id}
          id={d.id}
          onClick={handleSortClick}
          isActive={optimisticSortBy === d.id}
          direction={sortBy === d.id ? direction : undefined}
        >
          {d.children}
        </SortButton>
      ))}
    </div>
  );
}
