import PokeTypeBadge from '@/app/components/badge/poke-type';

interface PokeTypeListProps {
  pokeTypes: string[];
}

export default function PokeTypeList({ pokeTypes }: PokeTypeListProps) {
  return (
    <div className="flex gap-x-2 px-1 pb-4 justify-center items-center">
      <div className="flex gap-x-2.5">
        {pokeTypes.map((type) => (
          <PokeTypeBadge key={type} type={type} />
        ))}
      </div>
      <div className="text-slate-700 text-[15px] font-medium">타입 상성</div>
    </div>
  );
}
