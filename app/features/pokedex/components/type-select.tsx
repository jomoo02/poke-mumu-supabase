'use client';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/app/components/select';

type Item = {
  value: string;
  content: string;
};

interface TypeSelectProps {
  initialType: Item;
  onSelect: (type: string) => void;
  selectItems: Item[];
}

export default function TypeSelect({
  initialType,
  onSelect,
  selectItems,
}: TypeSelectProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-[15px] text-slate-800 pr-2">타입:</div>
      <Select initialItem={initialType} onSelect={onSelect}>
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {selectItems.map(({ value, content }) => (
              <SelectItem key={value} value={value}>
                {content}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
