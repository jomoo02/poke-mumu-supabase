interface SelectLabelProps {
  children: React.ReactNode;
}

export default function SelectLabel({ children }: SelectLabelProps) {
  return (
    <div className="text-slate-800 font-bold text-sm px-2 h-8 min-h-8 max-h-8 flex items-center">
      {children}
    </div>
  );
}
