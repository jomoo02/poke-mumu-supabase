import { IconCaretUpDownFilled } from '@tabler/icons-react';

interface CaretUpDownIconProps {
  size?: string;
  color?: string;
}

export default function CaretUpDownIcon({
  size = '1rem',
  color = '#344155',
}: CaretUpDownIconProps) {
  return <IconCaretUpDownFilled size={size} stroke={2} color={color} />;
}
