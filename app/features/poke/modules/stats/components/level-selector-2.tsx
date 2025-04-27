import useSelect from '@/app/components/select/useSelect';

interface LevelSelectorProps {
  levels: number[];
  targetLevel: number;
  setTargetLevel: (level: number) => void;
}

export default function LevelSelector2({
  levels,
  targetLevel,
  setTargetLevel,
}: LevelSelectorProps) {
  const itemHeight = 32.5;
  const height = itemHeight * levels.length;

  // const { isOpen, show, position, selectorRef, buttonRef, open, close } =
  //   useSelect(height);

  // const handleLevelClick = (level: number) => {
  //   setTargetLevel(level);
  //   close();
  // };

  return (
    <select className="relative w-20">
      {/* <button
        className="flex justify-center w-full c-border-outer py-0.5 rounded-sm"
        onClick={open}
        ref={buttonRef}
      >
        Lv.{targetLevel}
      </button> */}

      {levels.map((level) => (
        <option
          value={level}
          key={level}
          className="w-full h-full text-center hover:bg-blue-100 py-1 first:rounded-t-sm  last:rounded-b-sm"
        >
          Lv.{level}
        </option>
      ))}
    </select>
  );
}
