type InfoCategory = 'pokedex' | 'breeding' | 'detail';

interface InfoTitleProps {
  category: InfoCategory;
}

export default function InfoTitle({ category }: InfoTitleProps) {
  const titleMap: Record<InfoCategory, string> = {
    pokedex: '도감 정보',
    breeding: '유전 정보',
    detail: '세부 정보',
  };

  const title = titleMap[category] || '정보';

  return (
    <h4 className="text-xl font-bold px-2.5 py-2 text-slate-800">{title}</h4>
  );
}
