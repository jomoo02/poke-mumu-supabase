import type { PokeDetailAbility } from '../../model';

export default function Ability({
  isHidden,
  name,
  flavorText,
}: PokeDetailAbility) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm p-4 lg:p-6 h-full flex flex-col min-h-10">
      <div className="text-xl font-semibold text-foreground">
        {name}
        {isHidden && (
          <span className="text-sm text-muted-foreground font-medium px-1">
            (숨겨진 특성)
          </span>
        )}
      </div>
      <p className="break-keep text-foreground my-2">{flavorText}</p>
    </div>
  );
}
