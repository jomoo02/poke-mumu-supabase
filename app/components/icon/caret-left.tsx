import { IconCaretLeftFilled } from '@tabler/icons-react';

interface CaretLeftIconProps {
  size?: string;
  color?: string;
}

export default function CaretLeftIcon({
  size = '1rem',
  color = '#344155',
}: CaretLeftIconProps) {
  return <IconCaretLeftFilled size={size} stroke={2} color={color} />;
}
