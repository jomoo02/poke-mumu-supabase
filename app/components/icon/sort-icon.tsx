import CaretDownIcon from './caret-down';
import CaretUpIcon from '@/app/components/icon/caret-up';
import CaretUpDownIcon from '@/app/components/icon/caret-up-down';

interface SortIconProps {
  isSelect: boolean;
  direction: 'asc' | 'desc' | null;
  size?: string;
  color?: string;
}

export default function SortIcon({
  isSelect,
  direction,
  size = '1rem',
  color = '#344155',
}: SortIconProps) {
  if (!isSelect) {
    return <CaretUpDownIcon size={size} color={color} />;
  }

  if (direction === 'asc') {
    return <CaretDownIcon size={size} color={color} />;
  }

  return <CaretUpIcon size={size} color={color} />;
}
