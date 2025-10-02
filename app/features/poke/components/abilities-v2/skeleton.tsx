import SectionHeaderSkeleton from '../section-header-skeleton';

function AbilitySkeleton() {
  return (
    <div className="border border-border rounded-xl shadow-sm p-4 lg:p-6 h-full flex flex-col min-h-10">
      <div className="mb-1 h-7">
        <div className="h-6 bg-accent rounded-md w-14" />
      </div>
      <div className="grid gap-2 my-1">
        <div className="h-5 bg-accent rounded-md" />
        <div className="h-5 bg-accent rounded-md" />
      </div>
    </div>
  );
}

export default function AbilitiesSkeleton() {
  return (
    <div className="animate-pulse">
      <SectionHeaderSkeleton />
      <div className="grid gap-6 xl:gap-8 lg:grid-cols-3">
        <AbilitySkeleton />
        <AbilitySkeleton />
        <AbilitySkeleton />
      </div>
    </div>
  );
}
