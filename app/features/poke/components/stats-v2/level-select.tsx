import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/components/ui/select-v2';
import { useStatContext } from './context';
import { ChevronDown, CheckIcon } from 'lucide-react';

export default function LevelSelect() {
  const { level, levels, handleLevelChange } = useStatContext();

  const handleValueChange = (v: string | null) => {
    if (v === '50' || v === '100') {
      handleLevelChange(v);
    }
  };

  return (
    <Select items={levels} value={level} onValueChange={handleValueChange}>
      <SelectTrigger
        placeholder="select level"
        className="py-1 flex justify-between w-24 "
      >
        <span className="">Lv.{level}</span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </SelectTrigger>
      <SelectContent className="w-24">
        {levels.map((lv) => (
          <SelectItem key={lv} value={lv} className="py-1 flex justify-between">
            <span className="">Lv.{lv}</span>
            {level === lv && (
              <CheckIcon className="size-3.5 text-foreground " />
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
