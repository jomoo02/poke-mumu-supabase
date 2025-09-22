'use client';

// import {
//   Select,
//   SelectContent,
//   SelectTrigger,
//   SelectItem,
//   SelectGroup,
// } from '@/app/components/ui/select';
// import { SelectRoot, SelectTrigger, SelectItem, SelectContent } from './test';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from '@/app/components/ui/select-v2';

type Item = {
  value: string;
  content: string;
};

interface LevelSelectProps {
  initialLevel: Item;
  handleOnSelect: (lv: string) => void;
  selectItems: Item[];
}

export default function LevelSelectTests({
  initialLevel,
  handleOnSelect,
  selectItems,
}: LevelSelectProps) {
  const item = { label: '100', value: 'Lv.100' };
  const handleValueChange = (v: string | null) => {
    if (v) handleOnSelect(v);
  };

  return (
    <div>
      <Select>
        <SelectTrigger placeholder="select" />
        <SelectContent>
          <SelectItem value="10">Lv10</SelectItem>
          <SelectItem value="20">Lv20</SelectItem>
          <SelectItem value="30">Lv30</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
