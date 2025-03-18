import { IconCaretUpFilled } from '@tabler/icons-react';

interface CaretUpIconProps {
  size?: string;
  color?: string;
}

export default function CaretUpIcon({
  size = '1rem',
  color = '#344155',
}: CaretUpIconProps) {
  return <IconCaretUpFilled size={size} stroke={2} color={color} />;
}
