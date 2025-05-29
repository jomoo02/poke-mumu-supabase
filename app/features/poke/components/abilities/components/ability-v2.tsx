interface AbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function AbilityV2({
  isHidden,
  name,
  flavorText,
}: AbilityProps) {
  return (
    <div className="my-4">
      <div className="font-medium text-slate-800 text-lg my-0.5">
        <span className="text-base pr-1.5 font-medium text-slate-800">-</span>
        {name}
        {isHidden && (
          <span className="font-medium text-sm text-slate-800">
            {' '}
            (숨겨진 특성){' '}
          </span>
        )}
      </div>

      <p className="text-pretty text-slate-800 indent-0.5 p-1">{flavorText}</p>
    </div>
  );
}
