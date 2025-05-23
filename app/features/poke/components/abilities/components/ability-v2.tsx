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
      <div className="font-semibold text-zinc-900 text-lg my-0.5">
        <span className="text-base pr-1.5 font-medium text-zinc-600">-</span>
        {name}
        {isHidden && <span className="font-medium"> (숨겨진 특성) </span>}
      </div>

      <p className="text-pretty text-zinc-900 indent-0.5 p-1">{flavorText}</p>
    </div>
  );
}
