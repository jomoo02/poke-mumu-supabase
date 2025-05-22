interface AbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function Ability({ isHidden, name, flavorText }: AbilityProps) {
  return (
    <div
      className={`first:rounded-t-xl last:rounded-b-lg flex min-h-12 ${
        isHidden ? 'bg-blue-50/70' : 'bg-white'
      }`}
    >
      <div className="w-[6.75rem] sm:w-[10.5rem] border-r border-slate-300 py-3 px-2 md:px-3 text-zinc-950 flex flex-col justify-center items-center text-center">
        <div className="truncate font-medium w-full">{name}</div>
        {isHidden && (
          <div className="text-sm font-medium text-zinc-900">(숨겨진 특성)</div>
        )}
      </div>

      <div className="flex-1 p-3 flex items-center">
        <p className="text-pretty text-zinc-950">{flavorText}</p>
      </div>
    </div>
  );
}
