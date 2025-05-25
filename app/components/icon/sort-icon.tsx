import { motion } from 'framer-motion';
import CaretDownIcon from './caret-down';
import CaretUpIcon from './caret-up';
import CaretUpDownIcon from './caret-up-down';

interface SortIconProps {
  isSelect: boolean;
  direction: 'asc' | 'desc' | null;
  size?: string;
  color?: string;
}

export default function SortIcon({
  isSelect,
  direction,
  size = '1rem',
  color = '#344155',
}: SortIconProps) {
  if (!isSelect) {
    // 선택 안됐으면 그냥 바로 렌더링 (motion 없이)
    return <CaretUpDownIcon size={size} color={color} />;
  }

  // 선택됐으면 motion으로 펄스 애니메이션 적용
  return (
    <motion.div
      key={direction} // direction 바뀌면 애니메이션 재생
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 0.5 }}
      style={{ display: 'inline-block' }} // 아이콘이 인라인 요소일 경우 대비
    >
      {direction === 'asc' ? (
        <CaretDownIcon size={size} color={color} />
      ) : (
        <CaretUpIcon size={size} color={color} />
      )}
    </motion.div>
  );
}
