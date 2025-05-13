interface AbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function Ability({ isHidden, name, flavorText }: AbilityProps) {
  return (
    <div
      className={`first:rounded-t-xl last:rounded-b-lg flex min-h-12 ${
        isHidden ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <div className="w-28 sm:w-40 border-r border-slate-300 py-3 px-2 md:px-3 font-medium text-slate-700 text-sm md:text-base flex flex-col justify-center items-center text-center">
        <div className="truncate w-full">{name}</div>
        {isHidden && (
          <div className="text-xs md:text-sm text-slate-600">(숨겨진 특성)</div>
        )}
      </div>

      <div className="flex-1 py-3 px-2 md:px-3 flex items-center">
        <p className="text-pretty font font-medium text-slate-700 text-sm md:text-base">
          {flavorText}
        </p>
      </div>
    </div>
  );
}
