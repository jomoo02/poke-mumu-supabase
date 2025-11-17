import { cn } from '@/app/shared/lib';
import Button from '@/app/shared/ui/button';

import { useStatContext, type StatLevel } from './context';

export default function LevelSelect() {
  const { level, levels, onLevelChange } = useStatContext();

  const handleClick = (lv: StatLevel) => {
    onLevelChange(lv);
  };

  return (
    <div className="flex justify-end w-full gap-2 items-center">
      {levels.map((lv) => (
        <Button
          key={lv}
          name={lv}
          role="button"
          onClick={() => handleClick(lv)}
          data-state={lv === level ? 'active' : 'inactive'}
          className={cn(
            'border border-border rounded-lg py-1.5 px-3 text-sm',
            'transition-colors duration-100',
            'data-[state=active]:bg-accent data-[state=inactive]:bg-transparent',
          )}
        >
          Lv.{lv}
        </Button>
      ))}
    </div>
  );
}
