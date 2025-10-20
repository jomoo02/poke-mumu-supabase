import { cn } from '@/app/lib/utils';
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        ' border-border w-full overflow-hidden py-2 flex  gap-4 items-center ',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}

      <div className="overflow-hidden w-full min-w-0 flex items-center">
        <div className="font-suite text-muted-foreground font-medium  min-w-28">
          {title}
        </div>
        <div className="text-center flex col-span-2">{children}</div>
      </div>
      {/* <div className="bg-primary/10 text-primary min-w-10 min-h-10 w-10 h-10 rounded-2xl flex justify-center items-center">
        {icon}
      </div> */}
    </div>
  );
}
