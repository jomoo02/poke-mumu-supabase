import PokeTypeBadge from '@/app/components/badge/poke-type';
import PokeTypeIcon from '@/app/components/poke-type/icon';

interface PokeTypeListProps {
  pokeTypes: string[];
}

export default function PokeTypeList({ pokeTypes }: PokeTypeListProps) {
  return (
    <div className="flex gap-x-2 px-1 justify-center  p-1 my-4">
      <div className="flex gap-2">
        <div className="flex gap-x-2.5">
          {pokeTypes.map((type) => (
            <PokeTypeIcon key={type} type={type} isVisibleContent size={28} />
          ))}
        </div>
        <div className="text-muted-foreground text-sm inset-x-0 text-center font-medium font-suite mt-2">
          타입이 받는 피해
        </div>
      </div>
    </div>
  );
}
