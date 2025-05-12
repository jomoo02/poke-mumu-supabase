import useTrigger from './useSelectTrigger';
import CaretDownIcon from '../../icon/caret-down';

interface SelectTriggerProps {
  children: React.ReactNode;
}

export default function SelectTrigger({}: SelectTriggerProps) {
  const { triggerRef, handleOnKeyDown, handleOnMouseDown, triggerContent } =
    useTrigger();

  // console.log(triggerContent);

  return (
    <button
      ref={triggerRef}
      onMouseDown={handleOnMouseDown}
      onKeyDown={handleOnKeyDown}
      className={`flex justify-between items-center pl-3 pr-2 w-full border-1 cursor-pointer border-slate-300 h-8 min-h-8 max-h-8 rounded-md
       outline-none focus:ring ring-slate-500`}
    >
      <span className="truncate font-medium text-sm text-slate-800">
        {triggerContent || 'select Level'}
      </span>
      <CaretDownIcon size="0.9rem" color="#1d293d" />
    </button>
  );
}
