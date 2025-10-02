interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Card({ title, icon, children }: CardProps) {
  return (
    <div className="border border-border rounded-xl p-3 sm:p-4 flex gap-4 items-center shadow-sm">
      <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex justify-center items-center">
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-suite text-muted-foreground font-bold text-sm">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
