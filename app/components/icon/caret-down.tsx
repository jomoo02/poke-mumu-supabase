import { IconCaretDownFilled } from '@tabler/icons-react';

interface CaretDownIconProps {
  size?: string;
  color?: string;
}

export default function CaretDownIcon({
  size = '1rem',
  color = '#344155',
}: CaretDownIconProps) {
  return <IconCaretDownFilled size={size} stroke={2} color={color} />;
}
