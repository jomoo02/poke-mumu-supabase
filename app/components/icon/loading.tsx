import { IconLoader2 } from '@tabler/icons-react';

interface LoadingIconProps {
  size?: string;
  color?: string;
}

export default function LoadingIcon({
  size = '1rem',
  color = '#344155',
}: LoadingIconProps) {
  return <IconLoader2 size={size} stroke={2} color={color} />;
}
