import { useState } from 'react';

export default function useLevel() {
  const [level, setLevel] = useState<'50' | '100'>('50');

  const handleLevel = (lv: string) => {
    if (lv === '50' || lv === '100') {
      setLevel(lv);
    }
  };

  return {
    level,
    setLevel: handleLevel,
  };
}
