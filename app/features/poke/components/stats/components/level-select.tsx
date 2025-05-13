import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/app/components/select';

type Item = {
  value: string;
  content: string;
};

interface LevelSelectProps {
  initialLevel: Item;
  handleOnSelect: (lv: string) => void;
  selectItems: Item[];
}

export default function LevelSelect({
  initialLevel,
  handleOnSelect,
  selectItems,
}: LevelSelectProps) {
  return (
    <Select initialItem={initialLevel} onSelect={handleOnSelect}>
      <SelectTrigger />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Level</SelectLabel>
          {selectItems.map(({ value, content }) => (
            <SelectItem key={value} value={value}>
              {content}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
