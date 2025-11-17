import { AnimatePresence, motion } from 'framer-motion';
import { useTabsContext } from './context';
import Button from '../button';
import { cn } from '@/app/lib/utils';

interface TabsItemProps {
  value: string;
  children?: React.ReactNode;
}

export default function TabsItem({ value, children }: TabsItemProps) {
  const { selectedValue, setSelectedValue } = useTabsContext();
  const isSelected = selectedValue === value;

  const handleClick = () => {
    setSelectedValue(value);
  };

  return (
    <div className="relative flex">
      <Button
        onClick={handleClick}
        className={cn(
          `flex items-center z-20 cursor-pointer rounded-lg px-3 py-1.5`,
          'text-foreground',
          isSelected ? '' : 'hover:opacity-50',
        )}
        type="button"
        role="tab"
      >
        {children}
      </Button>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key="highlight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 bg-white rounded-lg shadow-xs border border-border"
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
