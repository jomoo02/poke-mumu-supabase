import { IconMenu } from '@tabler/icons-react';

interface MenuIconProps {
  size?: string | number;
  color?: string;
}

export default function MenuIcon({
  size = '1rem',
  color = '#344155',
}: MenuIconProps) {
  return <IconMenu size={size} stroke={2} color={color} />;
}
