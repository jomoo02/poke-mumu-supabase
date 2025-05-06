import useTrigger from './useTrigger';

interface SelectTriggerProps {
  children: React.ReactNode;
}

export default function SelectTrigger({ children }: SelectTriggerProps) {
  const { triggerRef, handleOnClick } = useTrigger();
  return (
    <button
      onClick={handleOnClick}
      ref={triggerRef}
      className="w-full bg-blue-300 h-9 min-h-9 max-h-9"
    >
      {children}
    </button>
  );
}
