import ArrowRightIcon from '@/app/components/icon/arrow-right';
import ArrowDownIcon from '@/app/components/icon/arrow-down';

interface ArrowIconProps {
  maxWidth: number;
}

export default function ArrowIcon({ maxWidth = 1 }: ArrowIconProps) {
  const color = '#64748b';
  const size = '1.75rem';

  return (
    <>
      <div className="hidden md:block">
        {maxWidth === 8 ? (
          <ArrowDownIcon size={size} color={color} />
        ) : (
          <ArrowRightIcon size={size} color={color} />
        )}
      </div>
      <div className="md:hidden">
        <ArrowDownIcon size={size} color={color} />
      </div>
    </>
  );
}
