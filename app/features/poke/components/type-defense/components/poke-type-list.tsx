import PokeTypeBadge from '@/app/components/badge/poke-type';

interface PokeTypeListProps {
  pokeTypes: string[];
}

export default function PokeTypeList({ pokeTypes }: PokeTypeListProps) {
  return (
    <div className="flex gap-x-2 px-1 justify-center items-center p-1 my-4">
      <div className="flex items-center gap-2">
        <div className="flex gap-x-2.5">
          {pokeTypes.map((type) => (
            <PokeTypeBadge key={type} type={type} />
          ))}
        </div>
        <div className="text-muted-foreground text-sm inset-x-0 text-center font-semibold font-suite">
          타입이 받는 피해
        </div>
      </div>
    </div>
  );
}
