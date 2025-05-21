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
      className="text-2xl font-bold py-3 mt-12 mb-4 scroll-mt-12 text-zinc-950 pt-10"
      id={id}
    >
      <Link href={`#${id}`} className="outline-zinc-500 rounded-sm p-1">
        {sectionTitle}
      </Link>
    </h2>
  );
}
