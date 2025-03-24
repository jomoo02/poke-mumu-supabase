import { IconX } from '@tabler/icons-react';

interface CloseIconProps {
  size?: string;
  color?: string;
}

export default function CloseIcon({
  size = '1rem',
  color = '#334155',
}: CloseIconProps) {
  return <IconX size={size} stroke={2} color={color} />;
}
