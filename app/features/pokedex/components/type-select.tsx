import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/components/ui/select-v2';
import { Check, ChevronDown } from 'lucide-react';

type Item = {
  value: string;
  content: string;
};

interface TypeSelectProps {
  type: string;
  handleTypeChange: (type: string) => void;
  typeItems: Item[];
}

export default function TypeSelect({
  type,
  handleTypeChange,
  typeItems,
}: TypeSelectProps) {
  const itemsContentMap: Record<string, string> = Object.fromEntries(
    typeItems.map(({ value, content }) => [value, content]),
  );

  const items = Object.keys(itemsContentMap);

  const handleValueChange = (v: string | null) => {
    if (v) {
      handleTypeChange(v);
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className="text-foreground px-2 text-sm">타입:</div>
      <Select items={items} value={type} onValueChange={handleValueChange}>
        <SelectTrigger className="w-28 justify-between">
          <span>{itemsContentMap[type]}</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </SelectTrigger>

        <SelectContent className="overflow-auto h-52 w-28 scrollbar-hidden">
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="py-1 flex justify-between"
            >
              <span>{itemsContentMap[item]}</span>
              {type === item && <Check className="size-3.5 text-foreground" />}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
