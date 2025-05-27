import PokeTypeBadge from '@/app/components/badge/poke-type';

interface DamageRateProps {
  damageRate: number;
  types: string[];
}

export default function DamageRate({ damageRate, types }: DamageRateProps) {
  return (
    <div className="flex divide-x divide-zinc-200">
      <div className="flex justify-center items-center border-zinc-200 min-w-[4.5rem] md:min-w-20 w-[4.5rem] md:w-20 text-[15px] text-zinc-900 p-2">
        {`x ${damageRate}`}
      </div>
      <div className="p-2 md:p-3 flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3">
        {types.map((type) => (
          <PokeTypeBadge type={type} key={type} />
        ))}
      </div>
    </div>
  );
}
