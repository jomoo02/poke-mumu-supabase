interface SectionHeaderProps {
  sectionTitle: string;
}

export default function SectionHeader({
  sectionTitle = '',
}: SectionHeaderProps) {
  return (
    <h3 className="text-2xl font-bold py-[3px] md:py-1 my-1.5 text-slate-800">
      {sectionTitle}
    </h3>
  );
}
