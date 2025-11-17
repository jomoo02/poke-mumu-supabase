import { IconArrowLeft } from '@tabler/icons-react';

interface ArrowLeftIconProps {
  size?: string;
  color?: string;
}

export default function ArrowLeftIcon({
  size = '1rem',
  color = '#344155',
}: ArrowLeftIconProps) {
  return <IconArrowLeft size={size} stroke={2} color={color} />;
}
