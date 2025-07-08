'use client';

import CustomCombobox from './nature-combobox';
import useNatureCombobox from '../hooks/useNatureCombobox';
import NatureTable from './nature-table';

export default function NatureEffect() {
  const { selectNature, selectedNature } = useNatureCombobox();

  return (
    <div>
      <h2
        id="nature-effect"
        className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-slate-900 pt-10 border-t border-gray-200"
      >
        성격에 따른 변화
      </h2>
      <div className="flex justify-center py-1">
        <div className="overflow-hidden">
          <div className="p-2 flex justify-center ">
            <CustomCombobox onSelect={selectNature} />
          </div>
          <div>
            <NatureTable targetNature={selectedNature} />
          </div>
        </div>
      </div>
    </div>
  );
}
