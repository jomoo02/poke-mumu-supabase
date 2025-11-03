'use client';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/app/shared/lib';
import Button from '@/app/shared/ui/button';

import { usePokedexContext } from '../model';

interface SortButtonProps {
  id: string;
  children: React.ReactNode;
}

function SortButton({ id, children }: SortButtonProps) {
  const { handleSortingStateChange, sortingState } = usePokedexContext();

  const isActive = sortingState.id === id;
  const direction = sortingState.direction;

  const handleClick = () => {
    handleSortingStateChange(id);
  };

  return (
    <Button
      onClick={handleClick}
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

export default function SortButtonGroup() {
  const { isPending } = usePokedexContext();

  return (
    <div
      className={cn(
        'flex transition-opacity min-w-0 flex-wrap gap-2 relative my-2',
        isPending ? 'pointer-events-none opacity-40' : 'pointer-events-auto',
      )}
    >
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        정렬
      </span>
      <SortButton id="dexNumber">번호</SortButton>
      <SortButton id="name">이름</SortButton>
      <SortButton id="total">종족값</SortButton>
      <SortButton id="hp">HP</SortButton>
      <SortButton id="attack">공격</SortButton>
      <SortButton id="defense">방어</SortButton>
      <SortButton id="specialAttack">특수공격</SortButton>
      <SortButton id="specialDefense">특수방어</SortButton>
      <SortButton id="speed">스피드</SortButton>
    </div>
  );
}
