import { IconArrowUp } from '@tabler/icons-react';

interface ArrowUpIconProps {
  size?: string;
  color?: string;
  hidden?: boolean;
}

export default function ArrowUpIcon({
  size = '1rem',
  color = '#0a0a0a',
}: ArrowUpIconProps) {
  return <IconArrowUp size={size} stroke={2} color={color} />;
}
