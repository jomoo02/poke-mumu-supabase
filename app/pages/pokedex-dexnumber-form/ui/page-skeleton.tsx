import { cn } from '@/app/lib/utils';

import AbilitiesSkeleton from './poke-abilities/skeleton';
import StatsSkeleton from './poke-stats/skeleton';

function SectionHeaderSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'text-2xl font-bold pb-3 scroll-mt-12 mb-6 pt-10',
        className,
      )}
    >
      <div className="min-w-20 max-w-20 h-8 rounded-md bg-accent" />
    </div>
  );
}
export default function PokedexDexNumberFormPageSkeleton() {
  return (
    <div className="animate-pulse">
      <div>
        <SectionHeaderSkeleton />
        <AbilitiesSkeleton />
      </div>
      <div>
        <SectionHeaderSkeleton />
        <StatsSkeleton />
      </div>
    </div>
  );
}
