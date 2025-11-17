import { IconArrowRight } from '@tabler/icons-react';

interface ArrowRightIconProps {
  size?: string;
  color?: string;
}

export default function ArrowRightIcon({
  size = '1rem',
  color = '#344155',
}: ArrowRightIconProps) {
  return <IconArrowRight size={size} stroke={2} color={color} />;
}
