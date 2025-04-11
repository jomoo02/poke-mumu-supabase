interface AbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function Ability({ isHidden, name, flavorText }: AbilityProps) {
  return (
    <div
      className={`first:rounded-t-xl last:rounded-b-lg grid grid-cols-10 min-h-12 ${isHidden ? 'bg-blue-50' : 'bg-white'}`}
    >
      <div className="col-span-3 xl:col-span-2 border-r border-slate-300 py-0.5 px-1 flex flex-col items-center justify-center c-text-base">
        {name}
        {isHidden && (
          <span className="text-xs md:text-sm text-center">(숨겨진 특성)</span>
        )}
      </div>
      <p className="col-span-7 text-pretty p-1.5 xs:p-2 flex items-center c-text-base">
        {flavorText}
      </p>
    </div>
  );
}
