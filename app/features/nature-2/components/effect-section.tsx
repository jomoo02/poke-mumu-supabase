'use client';

// import Input from '@/app/components/input';
import NatureTable from './nature-table';
import { useState } from 'react';
import NatureTable2 from './nature-table-2';

export default function EffectSection() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2
        id="nature-effect"
        className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-slate-900 pt-10 border-t border-gray-200"
      >
        성격에 따른 변화
      </h2>
      <NatureTable2 />
    </div>
  );
}
