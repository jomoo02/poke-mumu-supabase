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
        ' border-border  overflow-hidden p-3 sm:p-3.5 flex  gap-4 items-center',
        className,
      )}
    >
      {/* <div className=" border-border overflow-hidden py-3 sm:py-3.5 flex gap-4 items-center flex-col "> */}
      <div className="bg-white text-primary min-w-12 min-h-12 w-12 h-12 rounded-2xl flex justify-center items-center">
        {icon}
      </div>

      <div className="overflow-hidden w-full min-w-0">
        <div className="font-suite  font-semibold">{title}</div>
        {children}
      </div>
    </div>
  );
}
