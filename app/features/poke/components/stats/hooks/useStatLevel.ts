import { useState } from 'react';

export type StatLevel = '50' | '100';

const isStatLevel = (value: unknown): value is StatLevel =>
  value === '50' || value === '100';

export default function useStatLevel() {
  const [level, setLevel] = useState<StatLevel>('50');

  const handleOnSelect = (lv: string) => {
    if (isStatLevel(lv)) {
      setLevel(lv);
    }
  };

  const initialLevel: { value: string; content: string } = {
    value: '50',
    content: 'Lv.50',
  };

  const selectItems: { value: string; content: string }[] = [
    { value: '50', content: 'Lv.50' },
    { value: '100', content: 'Lv.100' },
  ];

  return {
    level,
    handleOnSelect,
    initialLevel,
    selectItems,
  };
}
