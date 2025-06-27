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

export default function CustomCombobox() {
  const data = getNatureComboboxData();

  return (
    <div className="w-64">
      <Combobox>
        <ComboboxTrigger />
        <ComboboxContent>
          <ComboboxInput
            placeholder="성격을 선택해 주세요."
            className="outline-none"
          />
          <ComboboxList>
            {data.map((d) => (
              <ComboboxItem key={d.value} item={d} />
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
