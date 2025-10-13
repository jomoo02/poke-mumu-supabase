import PokeTypeBadge from '@/app/components/badge/poke-type';

interface DamageRateProps {
  damageRate: number;
  types: string[];
}

export default function DamageRate({ damageRate, types }: DamageRateProps) {
  return (
    <div className="border border-border rounded-xl p-4 shadow-md sm:p-6">
      <div className="flex mb-4 px-2">
        <div className="flex justify-center items-center text-xl font-medium rounded-xl font-suite">
          {`${damageRate}배`}
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-2.5"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(64,1fr))] gap-x-1 gap-y-2 justify-items-center">
        {types.map((type) => (
          <PokeTypeBadge type={type} key={type} />
        ))}
      </div>
    </div>

    // <div className="flex divide-x divide-gray-200">
    //   <div className="flex justify-center items-center border-gray-200 min-w-[4.5rem] md:min-w-20 w-[4.5rem] md:w-20 text-[15px] text-slate-700 p-2">
    //     {`x ${damageRate}`}
    //   </div>
    //   <div className="p-2 md:p-3 flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3">
    //     {types.map((type) => (
    //       <PokeTypeBadge type={type} key={type} />
    //     ))}
    //   </div>
    // </div>
  );
}
