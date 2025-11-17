import useOptionBarItem from './useOptionBarItem';
import { AnimatePresence, motion } from 'framer-motion';

interface OptionBarItemProps {
  value: string;
  children: React.ReactNode;
}

export default function OptionBarItem({ value, children }: OptionBarItemProps) {
  const { handleItemClick, itemRef, isSelected } = useOptionBarItem(value);

  return (
    <div className="relative" ref={itemRef}>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key="highlight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 bg-neutral-100 rounded-md"
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>
      <button
        onClick={handleItemClick}
        className={`flex items-center w-full z-20 justify-center-safe focus:outline-none focus-visible:ring ring-gray-600 cursor-pointer rounded-md px-2.5 py-1 min-h-[30px] h-[30px] max-h-[30px] `}
        type="button"
        role="tab"
      >
        <span className="font-medium z-20 text-[15px] text-nowrap text-slate-700">
          {children}
        </span>
      </button>
    </div>
  );
}
