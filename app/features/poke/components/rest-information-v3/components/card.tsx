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
        'overflow-hidden w-full min-w-0 p-3 sm:p-4 flex flex-col items-start shadow-sm border border-border bg-white rounded-xl',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="flex justify-between w-full mb-2">
        <div className="font-suite font-medium text-muted-foreground">
          {title}
        </div>
        <div className="text-primary bg-primary/10 rounded-2xl size-9 flex items-center justify-center">
          {icon}
        </div>

        {/* <div className="bg-primary/10 text-primary w-10 h-10 rounded-2xl flex justify-center items-center">
          {icon}
        </div> */}
      </div>

      <div className=" min-w-0 overflow-hidden w-full">{children}</div>
    </div>
  );
}
