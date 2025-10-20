import Link from 'next/link';

interface SectionHeaderProps {
  id: string;
  sectionTitle: string;
  isFirst?: boolean;
}

function SectionHeaderFirst({ id, sectionTitle = '' }: SectionHeaderProps) {
  return (
    <h2
      className="text-2xl font-bold pb-3 mb-6 scroll-mt-12 text-slate-900 pt-10"
      id={id}
    >
      <Link href={`#${id}`} className="outline-gray-600 rounded-sm p-1">
        {sectionTitle}
      </Link>
    </h2>
  );
}

export default function SectionHeader({
  id,
  sectionTitle = '',
  isFirst = false,
}: SectionHeaderProps) {
  if (isFirst) {
    return <SectionHeaderFirst id={id} sectionTitle={sectionTitle} />;
  }
  return (
    <h2
      className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-foreground pt-10 border- border-gray-200 font-suite"
      id={id}
    >
      <Link href={`#${id}`} className="outline-gray-600 rounded-sm py-1 px-0.5">
        {sectionTitle}
      </Link>
    </h2>
  );
}
