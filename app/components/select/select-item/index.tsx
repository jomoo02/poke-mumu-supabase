import CheckIcon from '@/app/components/icon/check';
import useSelectItem from './useSelectItem';

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export default function SelectItem({ value, children }: SelectItemProps) {
  const {
    itemRef,
    isActive,
    isSelected,
    handleOnClick,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  } = useSelectItem(value, children);

  return (
    <div
      ref={itemRef}
      role="option"
      aria-selected={isSelected}
      onPointerDown={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`cursor-pointer pl-2 pr-1 overflow-hidden rounded-sm flex justify-between items-center h-8 min-h-8 max-h-8 ${
        isActive ? 'bg-neutral-300/40' : 'bg-white'
      }`}
    >
      <span className="truncate text-slate-800 font-medium text-sm">
        {children}
      </span>
      <div className="min-w-[0.9rem]">
        {isSelected && <CheckIcon size="0.9rem" stroke={2.5} color="#1d293d" />}
      </div>
    </div>
  );
}
