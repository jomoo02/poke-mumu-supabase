import useOptionBarContent from './useOptionBarContent';

interface OptionBarContentProps {
  children: React.ReactNode;
}

export default function OptionBarContent({ children }: OptionBarContentProps) {
  const { contentRef } = useOptionBarContent();

  return (
    <div
      ref={contentRef}
      className="border-gray-200 border rounded-lg p-1 overflow-x-auto overflow-y-hidden scroll-smooth flex space-x-1"
      style={{ overflowAnchor: 'none' }}
    >
      {children}
    </div>
  );
}
