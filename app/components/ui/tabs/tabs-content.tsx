import { cn } from '@/app/lib/utils';
import { RefObject, useLayoutEffect, useRef } from 'react';

interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

export default function TabsContent({
  children,
  className,
  ref,
}: TabsContentProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex overflow-auto bg-accent border-border rounded-lg p-1 gap-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
