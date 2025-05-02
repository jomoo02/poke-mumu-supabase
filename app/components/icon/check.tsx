import { IconCheck } from '@tabler/icons-react';

interface CheckIconProps {
  size?: string;
  stroke?: number;
  color?: string;
}

export default function CheckIcon({
  size = '1rem',
  stroke = 2,
  color = '#344155',
}: CheckIconProps) {
  return <IconCheck size={size} stroke={stroke} color={color} />;
}
