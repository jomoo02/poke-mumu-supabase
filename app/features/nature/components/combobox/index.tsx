'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxContent,
} from '@/app/components/combobox';
import { getNatureComboboxData } from '../../utils/get-data';

interface CustomComboboxProps {
  onSelect: (value: string) => void;
}

export default function CustomCombobox({ onSelect }: CustomComboboxProps) {
  const data = getNatureComboboxData();

  return (
    <div className="w-56 lg:w-full">
      <Combobox onSelect={onSelect}>
        <ComboboxTrigger />
        <ComboboxContent className="w-full max-h-52 sm:max-h-56">
          <ComboboxInput
            placeholder="성격을 입력하세요"
            className="outline-none w-full text-slate-800 text-base"
          />
          <ComboboxList className="bg-white h-60">
            {data.map((d) => (
              <ComboboxItem key={d.value} item={d} />
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
