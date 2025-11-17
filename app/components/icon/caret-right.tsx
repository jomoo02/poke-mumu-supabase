import { IconCaretRightFilled } from '@tabler/icons-react';

interface CaretRightIconProps {
  size?: string;
  color?: string;
}

export default function CaretRightIcon({
  size = '1rem',
  color = '#344155',
}: CaretRightIconProps) {
  return <IconCaretRightFilled size={size} stroke={2} color={color} />;
}
