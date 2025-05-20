import Link from 'next/link';

interface SectionHeaderProps {
  id: string;
  sectionTitle: string;
}

export default function SectionHeader({
  id,
  sectionTitle = '',
}: SectionHeaderProps) {
  return (
    <h2
      className="text-2xl font-bold py-3 mt-12 mb-4 scroll-mt-12 text-slate-800 pt-10"
      id={id}
    >
      <Link href={`#${id}`} className="outline-slate-800 rounded-sm p-0.5">
        {sectionTitle}
      </Link>
    </h2>
  );
}
