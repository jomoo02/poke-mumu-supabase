'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxContent,
} from '@/app/components/combobox';
import { getNatureComboboxData } from '../utils/get-data';

interface CustomComboboxProps {
  onSelect: (value: string | null) => void;
}

export default function NatureCombobox({ onSelect }: CustomComboboxProps) {
  const data = getNatureComboboxData();

  return (
    <div className="w-48">
      <Combobox onSelect={onSelect}>
        <ComboboxTrigger defaultLabel="성격을 골라주세요" />
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
