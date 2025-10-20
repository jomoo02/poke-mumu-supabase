import { cn } from '@/app/lib/utils';
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden p-3 sm:p-3.5 flex  gap-4 items-center border-border border-b',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="bg-primary/10 text-primary w-14 h-14 rounded-4xl flex justify-center items-center">
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-suite  text-muted-foreground font-medium">
          {title}
        </div>
        <div className="font-medium text-lg">{children}</div>
      </div>
    </div>
  );
}

export function CardV2({ title, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden p-3 sm:p-3.5 flex  gap-4 items-center border-border border-b ',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="bg-primary/10 text-primary w-14 h-14 rounded-4xl flex justify-center items-center">
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-suite  text-muted-foreground font-medium">
          {title}
        </div>
        <div className="font-medium text-lg">{children}</div>
      </div>
    </div>
  );
}

export function CardV3({ title, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden p-3 sm:p-3.5 flex  gap-4 items-center',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="bg-[#0086a9]/10 text-[#0086a9] w-12 h-14 rounded-2xl flex justify-center items-center">
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-suite  text-muted-foreground font-medium">
          {title}
        </div>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  );
}
