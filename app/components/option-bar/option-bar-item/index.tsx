import useOptionBarItem from './useOptionBarItem';
import { motion } from 'framer-motion';
interface OptionBarItemProps {
  value: string;
  children: React.ReactNode;
}

export default function OptionBarItem({ value, children }: OptionBarItemProps) {
  const { handleOnClick, itemRef, isSelected, layoutId } =
    useOptionBarItem(value);

  return (
    <div className="relative" ref={itemRef}>
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-zinc-100 rounded-md z-0"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
      <button
        onClick={handleOnClick}
        className={`flex items-center w-full z-20 justify-center-safe focus:outline-none focus-visible:ring ring-zinc-500 cursor-pointer rounded-md px-2.5 py-1 min-h-[30px] h-[30px] max-h-[30px] `}
        type="button"
      >
        <span className="font-medium z-20 text-[15px] text-nowrap text-zinc-900">
          {children}
        </span>
      </button>
    </div>
  );
}
