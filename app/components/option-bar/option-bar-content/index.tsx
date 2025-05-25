import { motion } from 'framer-motion';
import useOptionBarCotent from './useOptionBarCotent';

interface OptionBarContentProps {
  children: React.ReactNode;
}

export default function OptionBarContent({ children }: OptionBarContentProps) {
  const { containerRef, indicatorStyle } = useOptionBarCotent();

  return (
    <div
      ref={containerRef}
      className="relative border-zinc-200 border rounded-md p-1 overflow-auto scroll-smooth"
    >
      <motion.div
        className="absolute bg-zinc-100 rounded-md z-0 border-0 h-[30px]"
        animate={indicatorStyle}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <div className="flex">{children}</div>
    </div>
  );
}
