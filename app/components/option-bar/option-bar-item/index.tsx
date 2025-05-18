import useOptionBarItem from './useOptionBarItem';

interface OptionBarItemProps {
  value: string;
  children: React.ReactNode;
}

export default function OptionBarItem({ value, children }: OptionBarItemProps) {
  const { isSelected, handleOnClick, buttonRef } = useOptionBarItem(value);

  return (
    <div className="px-1">
      <button
        ref={buttonRef}
        onClick={handleOnClick}
        className={`flex min-w-12  items-center justify-center-safe focus:outline-none focus-visible:ring ring-slate-500 cursor-pointer rounded-md px-2 py-1 h-[30px] transition duration-250 ${
          isSelected ? 'bg-slate-800' : 'hover:bg-slate-100 '
        } `}
        type="button"
      >
        <span
          className={`font-semibold text-sm text-nowrap ${
            isSelected ? 'text-white' : 'text-slate-800'
          }`}
        >
          {children}
        </span>
      </button>
    </div>
  );
}
