import useTrigger from './useSelectTrigger';
import CaretDownIcon from '../../icon/caret-down';

export default function SelectTrigger() {
  const { triggerRef, handleOnKeyDown, handleOnMouseDown, triggerContent } =
    useTrigger();

  return (
    <button
      ref={triggerRef}
      onMouseDown={handleOnMouseDown}
      onKeyDown={handleOnKeyDown}
      className="flex justify-between items-center pl-3 pr-2 w-full border cursor-pointer border-gray-300 h-8 min-h-8 max-h-8 rounded-md outline-none focus:ring ring-gray-700"
    >
      <span className="truncate text-sm text-slate-800">{triggerContent}</span>
      <CaretDownIcon size="0.9rem" color="#1d293d" />
    </button>
  );
}
