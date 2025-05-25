import useOptionBarItem from './useOptionBarItem';

interface OptionBarItemProps {
  value: string;
  children: React.ReactNode;
}

export default function OptionBarItem({ value, children }: OptionBarItemProps) {
  const { handleOnClick, buttonRef } = useOptionBarItem(value);

  return (
    <div className="z-10">
      <button
        ref={buttonRef}
        onClick={handleOnClick}
        className={`flex z-10 min-w-12 items-center justify-center-safe focus:outline-none focus-visible:ring ring-zinc-500 cursor-pointer rounded-md px-2 py-1 h-[30px] `}
        type="button"
      >
        <span className="font-medium text-[15px] text-nowrap text-zinc-900">
          {children}
        </span>
      </button>
    </div>
  );
}
