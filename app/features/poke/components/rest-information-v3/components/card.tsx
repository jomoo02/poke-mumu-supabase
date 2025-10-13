import { cn } from '@/app/lib/utils';
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, icon, children, className }: CardProps) {
  return (
    // <div className="border overflow-hidden border-border rounded-xl p-4 flex flex-col gap-4 shadow-sm">
    //   <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex justify-center items-center">
    //     {icon}
    //   </div>
    //   <div className="flex flex-col">
    //     <div className="font-suite font-medium text-lg">{title}</div>
    //     {children}
    //   </div>
    // </div>

    <div
      className={cn(
        'overflow-hidden  p-3 sm:p-3.5 flex  gap-4 items-center lg:flex-col lg:items-',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex justify-center items-center">
        {icon}
      </div>

      <div className="flex flex-col items-center">
        <div className="font-suite font-semibold text-muted-foreground">
          {title}
        </div>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  );
}
