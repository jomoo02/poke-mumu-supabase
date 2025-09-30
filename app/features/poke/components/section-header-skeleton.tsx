import { cn } from '@/app/lib/utils';

export default function SectionHeaderSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 pt-10 border-t border-border',
        className,
      )}
    >
      <div className="min-w-20 max-w-20 h-9 rounded-md bg-accent" />
    </div>
  );
}
