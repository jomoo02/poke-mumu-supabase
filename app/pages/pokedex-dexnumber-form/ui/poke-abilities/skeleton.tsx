function AbilityItemSkeleton() {
  return (
    <div className="border bg-white border-border rounded-xl shadow-sm p-4 lg:p-6 h-full flex flex-col min-h-10">
      <div className="h-7">
        <div className="h-6 bg-accent rounded-md w-14" />
      </div>
      <div className="grid gap-2 mt-3 mb-2">
        <div className="h-4.5 bg-accent rounded-md max-w-64" />
        <div className="h-4.5 bg-accent rounded-md max-w-72" />
      </div>
    </div>
  );
}

export default function AbilitySkeleton() {
  return (
    <div className="grid gap-6 xl:gap-8 lg:grid-cols-3">
      <AbilityItemSkeleton />
      <AbilityItemSkeleton />
      <AbilityItemSkeleton />
    </div>
  );
}
