import { useMemo, useState } from 'react';

export default function useSelectGen(gens: string[]) {
  const sortedGens = useMemo(
    () => [...new Set(gens)].sort((a, b) => Number(a) - Number(b)),
    [gens],
  );

  const initialGen = sortedGens.at(-1) || gens[0];

  const [selectedGen, setSelectedGen] = useState(initialGen);

  const selectGen = (gen: string) => {
    if (gens.includes(gen)) {
      setSelectedGen(gen);
    }
  };

  return {
    selectedGen,
    selectGen,
    gens: sortedGens,
  };
}
