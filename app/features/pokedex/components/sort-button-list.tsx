import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePokedexContext } from './pokedex.context';
import { cn } from '@/app/lib/utils';
import Button from '@/app/components/ui/button';

interface SortButtonProps {
  id: string;
  children: React.ReactNode;
}

function SortButton({ id, children }: SortButtonProps) {
  const { handleSortingStateChange, sortingState } = usePokedexContext();

  return (
    <Button
      onClick={() => handleSortingStateChange(id)}
      className={cn(
        'border border-border rounded-lg px-2 py-1.5 flex items-center text-sm hover:bg-accent shadow-sm gap-1',
        sortingState.id === id ? 'bg-accent' : 'bg-white',
      )}
    >
      <span className="text-nowrap">{children}</span>
      {sortingState.id === id ? (
        sortingState.direction === 'asc' ? (
          <ChevronDown className="size-4 inline" />
        ) : (
          <ChevronUp className="size-4 inline" />
        )
      ) : (
        <div className="size-4 inline-block" />
      )}
    </Button>
  );
}

export default function SortButtonList() {
  const { isPending } = usePokedexContext();
  return (
    <div
      className={cn(
        'flex transition-opacity min-w-0 flex-wrap gap-2',
        isPending ? 'pointer-events-none opacity-40' : '',
      )}
    >
      <SortButton id="no">번호</SortButton>
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
