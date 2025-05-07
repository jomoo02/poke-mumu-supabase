import useTrigger from './useSelectTrigger';
import CaretDownIcon from '../../icon/caret-down';

interface SelectTriggerProps {
  children: React.ReactNode;
}

export default function SelectTrigger({ children }: SelectTriggerProps) {
  const { triggerRef, handleOnClick } = useTrigger();
  return (
    <button
      onClick={handleOnClick}
      ref={triggerRef}
      className="flex justify-between items-center pl-3 pr-2 w-full border-1 cursor-pointer border-slate-400 shadow-sm h-8 min-h-8 max-h-8 rounded-md"
    >
      <span className="truncate font-medium text-sm text-slate-600">
        {children}
      </span>
      <CaretDownIcon size="0.9rem" color="#1d293d" />
    </button>
  );
}
