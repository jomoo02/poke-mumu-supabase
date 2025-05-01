import useSelect from './useSelect';

interface SelectProps {
  levels: number[];
  targetLevel: number;
  setTargetLevel: (level: number) => void;
}

export function SelectItem({
  item,
  onClickItem,
}: {
  item: string;
  onClickItem: (item: string) => void;
}) {
  const handleItemClick = () => {
    onClickItem(item);
  };
  return (
    <div
      className="w-full h-full text-center hover:bg-blue-100 py-1 first:rounded-t-sm last:rounded-b-sm "
      onClick={handleItemClick}
    >
      <span>{item}</span>
    </div>
  );
}

export default function Select({
  levels,
  targetLevel,
  setTargetLevel,
}: SelectProps) {
  const itemHeight = 32.5;
  const height = itemHeight * 2;

  const { isOpen, show, position, selectorRef, buttonRef, open, close } =
    useSelect(height);

  const handleLevelClick = (level: number) => {
    setTargetLevel(level);
    close();
  };

  return (
    <div className="relative w-20" ref={selectorRef}>
      <button
        className="flex justify-center w-full c-border-outer py-0.5 rounded-sm"
        onClick={open}
        ref={buttonRef}
      >
        Lv.{targetLevel}
      </button>

      {isOpen && (
        <ul
          className={`absolute z-10 w-20 c-border-outer bg-slate-50 rounded-sm transition-all duration-200 origin-top
            ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            ${position === 'bottom' ? 'top-8.5' : 'bottom-8.5'}
          `}
        >
          {levels.map((level) => (
            <li
              key={level}
              className="w-full h-full text-center hover:bg-blue-100 py-1 first:rounded-t-sm last:rounded-b-sm"
            >
              <button onClick={() => handleLevelClick(level)}>
                Lv.{level}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
