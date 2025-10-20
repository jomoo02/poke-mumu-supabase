import { cn } from '@/app/lib/utils';

interface InfoProps {
  subject: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoV2({ subject, children, className }: InfoProps) {
  return (
    <div className={cn('flex flex-col items-center  py-2', className)}>
      <div className="text-muted-foreground font-medium font-suite">
        {subject}
      </div>
      <div className="text-foreground font-suit lg:text-lg font-medium">
        {children}
      </div>
    </div>
  );
}
