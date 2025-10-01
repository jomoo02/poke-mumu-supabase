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
    <div className=" border border-border rounded-lg overflow-hidden shadow-sm p-4 xl:p-6 h-full flex flex-col min-h-10 hover:top-1 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-1 text-lg font-medium text-foreground bg-secondry/60 border-border">
        {name}
        {isHidden && (
          <span className="text-sm text-muted-foreground"> (숨겨진 특성) </span>
        )}
      </div>

      <p className="text-pretty break-keep text-foreground flex line-clamp-3">
        {flavorText}
      </p>
    </div>
  );
}
