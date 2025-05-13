import PokeTypeBadge from '@/app/components/badge/poke-type';

interface DamageRateProps {
  damageRate: number;
  types: string[];
}

export default function DamageRate({ damageRate, types }: DamageRateProps) {
  return (
    <div className="flex divide-x divide-slate-300">
      <div className="flex justify-center items-center border-slate-300 min-w-16 md:min-w-20 max-w-16 md:max-w-20 text-sm md:text-base font-medium text-slate-700">
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
