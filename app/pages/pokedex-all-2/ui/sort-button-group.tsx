'use client';

import { ChevronDown, ChevronUp, ArrowUp, ArrowDown } from 'lucide-react';

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
        'relative overflow-hidden border border-border rounded-lg px-2 py-1.5 flex items-center text-sm shadow-sm gap-1',
        // 버튼 텍스트/아이콘은 z-10 위에, overlay가 배경 역할
        // 'border border-border rounded-lg px-2 py-1.5 flex items-center text-sm shadow-sm gap-1',
        // 'transition-colors duration-300 ease-out',
        // isActive ? 'bg-accent' : 'bg-background hover:bg-accent',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-lg pointer-events-none z-0  bg-accent ',
          // 애니메이션을 쓰려면 duration-150 등 동일하게 설정
          'transform-gpu will-change-transform will-change-opacity',
          'transition-opacity duration-100 ease-out ',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
      />
      <span className="text-nowrap relative z-10">{children}</span>
      <div className="size-3.5 relative z-10">
        <div
          className={cn(
            isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
            'transition-opacity duration-100',
          )}
          aria-hidden
        >
          {direction === 'asc' && <ArrowUp className="size-3.5" />}
          {direction === 'desc' && <ArrowDown className="size-3.5" />}
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

  const [optimisticDirection, setOptimisticDirection] = useOptimistic(
    direction,
    (prev, next: string) => next,
  );

  const handleSortClick = (id: string) => {
    startTransition(() => {
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set('sortBy', id);
      setOptimisticSortBy(id);
      if (sortBy === id) {
        const nextDirection = direction === 'asc' ? 'desc' : 'asc';
        setOptimisticDirection(nextDirection);
        next.set('direction', nextDirection);
      } else {
        setOptimisticDirection('asc');
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
          direction={
            optimisticSortBy === d.id ? optimisticDirection : undefined
          }
        >
          {d.children}
        </SortButton>
      ))}
    </div>
  );
}
