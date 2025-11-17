import useComboboxTrigger from './useCombobxTrigger';

interface ComboboxTriggerProps {
  defaultLabel: string;
  className?: string;
}

export default function ComboboxTrigger({
  defaultLabel,
  className,
}: ComboboxTriggerProps) {
  const { triggerRef, handleKeyDown, handleMouseDown, content } =
    useComboboxTrigger(defaultLabel);

  return (
    <button
      ref={triggerRef}
      role="button"
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      className={`flex items-center w-full border cursor-pointer border-gray-300 min-h-8.5 h-8.5 rounded-md outline-none focus:ring ring-gray-700 ${
        className
      }`}
    >
      <span className="truncate  text-slate-800 w-full text-center">
        {content}
      </span>
    </button>
  );
}
