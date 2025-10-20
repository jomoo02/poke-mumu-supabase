import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/components/ui/select-v2';
import { Check, ChevronDown } from 'lucide-react';
import { usePokedexContext } from './pokedex.context';

type Item = {
  value: string;
  content: string;
};

interface TypeSelectProps {
  type: string;
  handleTypeChange: (type: string) => void;
  typeItems: Item[];
}

export default function TypeSelect() {
  const { targetType, handleTargetTypeChange, selectTypeItems } =
    usePokedexContext();
  const itemsContentMap: Record<string, string> = Object.fromEntries(
    selectTypeItems.map(({ value, content }) => [value, content]),
  );

  const items = Object.keys(itemsContentMap);

  const handleValueChange = (v: string | null) => {
    if (v) {
      handleTargetTypeChange(v);
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className="text-foreground px-2 text-sm">타입:</div>
      <Select
        items={items}
        value={targetType}
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-28 justify-between">
          <span>{itemsContentMap[targetType]}</span>
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
              {targetType === item && (
                <Check className="size-3.5 text-foreground" />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
