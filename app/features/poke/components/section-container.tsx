interface SectionContainerProps {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div>
      {children}
      <div className="border-b border-zinc-300 mt-12" />
    </div>
  );
}
