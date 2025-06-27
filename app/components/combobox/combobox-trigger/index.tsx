import useComboboxTrigger from './useCombobxTrigger';

export default function ComboboxTrigger() {
  const { triggerRef, handleKeyDown, handleMouseDown, content } =
    useComboboxTrigger();

  return (
    <button
      ref={triggerRef}
      role="button"
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      className="flex justify-between items-center pl-3 pr-2 w-full border cursor-pointer border-gray-300 min-h-8 h-8 rounded-md outline-none focus:ring ring-gray-700"
    >
      <span className="truncate text-sm text-slate-800">{content}</span>
    </button>
  );
}
