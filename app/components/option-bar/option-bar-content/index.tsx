import useOptionBarCotent from './useOptionBarCotent';

interface OptionBarContentProps {
  children: React.ReactNode;
}

export default function OptionBarContent({ children }: OptionBarContentProps) {
  const { containerRef } = useOptionBarCotent();

  return (
    <div
      ref={containerRef}
      className="border-zinc-200 border rounded-lg p-1 overflow-x-auto overflow-y-hidden scroll-smooth flex space-x-1"
      style={{ overflowAnchor: 'none' }}
    >
      {children}
    </div>
  );
}
