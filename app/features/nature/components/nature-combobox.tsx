'use client';

import CustomCombobox from './combobox';
import useNatureCombobox from '../hooks/useNatureCombobox';
import SelectedNature from './selected-nature';

export default function NatureCombobox() {
  const { selectNature, selectedNature } = useNatureCombobox();

  return (
    <div className="h-full min-h-48 w-full lg:w-56 xl:w-70">
      <CustomCombobox onSelect={selectNature} />
      <SelectedNature selectedNature={selectedNature} />
    </div>
  );
}
