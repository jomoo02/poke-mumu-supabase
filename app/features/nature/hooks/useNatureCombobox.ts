import { useState } from 'react';
import { natures, type Nature } from '../data/nature';

export default function useNatureCombobox() {
  const [selectedNature, setSelectedNature] = useState<Nature | null>(null);

  const isNature = (value: string): value is Nature =>
    natures.includes(value as Nature);

  const selectNature = (targetNature: string) => {
    if (isNature(targetNature)) {
      setSelectedNature(targetNature);
    }
  };

  return {
    selectedNature,
    selectNature,
  };
}
