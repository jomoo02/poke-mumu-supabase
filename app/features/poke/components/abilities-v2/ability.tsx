interface AbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function Ability({ isHidden, name, flavorText }: AbilityProps) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm p-4 lg:p-6  h-full flex flex-col min-h-10 hover:top-1 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="text-xl font-semibold text-foreground font-suite">
        {name}
        {isHidden && (
          <span className="text-sm text-muted-foreground font-medium px-1">
            (숨겨진 특성)
          </span>
        )}
      </div>
      <p className="text-pretty break-keep text-foreground my-1">
        {flavorText}
      </p>
    </div>
  );
}
