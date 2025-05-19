import useOptionBarCotent from './useOptionBarCotent';
interface OptionBarContentProps {
  children: React.ReactNode;
}

export default function OptionBarContent({ children }: OptionBarContentProps) {
  const { containerRef } = useOptionBarCotent();

  return (
    <div
      ref={containerRef}
      className="flex divide-x divide-slate-300 border-slate-300 border rounded-md py-1 gap-y-2 items-center overflow-auto scroll-smooth"
    >
      {children}
    </div>
  );
}
