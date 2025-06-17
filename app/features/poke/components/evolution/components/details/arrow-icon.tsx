import ArrowRightIcon from '@/app/components/icon/arrow-right';
import ArrowDownIcon from '@/app/components/icon/arrow-down';

interface ArrowIconProps {
  evolutionId: number;
}

export default function ArrowIcon({ evolutionId }: ArrowIconProps) {
  const color = '#1d293d';
  const size = '24px';

  if (evolutionId === 62) {
    return <ArrowDownIcon size={size} color={color} />;
  }

  return (
    <>
      <div className="hidden lg:block">
        <ArrowRightIcon size={size} color={color} />
      </div>
      <div className="lg:hidden">
        <ArrowDownIcon size={size} color={color} />
      </div>
    </>
  );
}
