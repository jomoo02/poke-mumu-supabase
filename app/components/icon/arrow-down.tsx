import { IconArrowDown } from '@tabler/icons-react';

interface ArrowDownIconProps {
  size?: string;
  color?: string;
  hidden?: boolean;
}

export default function ArrowDownIcon({
  size = '1rem',
  color = '#344155',
}: ArrowDownIconProps) {
  return <IconArrowDown size={size} stroke={2} color={color} />;
}
