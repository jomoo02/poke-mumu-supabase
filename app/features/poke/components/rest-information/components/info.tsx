interface InfoProps {
  category: string;
  children: React.ReactNode;
}
export default function Info({ category, children }: InfoProps) {
  return (
    <div className="flex items-center py-1.5 border-b border-gray-200 last:border-0">
      <div className="min-w-[6.5rem] w-[6.5rem] sm:min-w-[150px] sm:w-[150px] mx-1">
        {category}
      </div>
      <div className="flex-1 text-slate-800">{children}</div>
    </div>
  );
}
