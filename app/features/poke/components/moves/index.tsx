'use client';

import type { PokeMoveTableWithVersion } from './types';
import useMoves from './hooks/useMoves';
import GenList from './components/gen-list';
import VersionGroup from './components/version-group';
import SectionHeader from '../section-header';

interface MovesProps {
  pokeMoves: PokeMoveTableWithVersion[];
}

export default function Moves({ pokeMoves }: MovesProps) {
  const { gens, targetGen, setTargetGen, targetGenMoves } = useMoves(pokeMoves);

  return (
    <div>
      <SectionHeader id="move" sectionTitle="기술" />
      <div className="border border-slate-500 bg-white rounded-lg shadow-md shadow-slate-300">
        <div className="px-2.5 lg:px-8 border-b border-slate-300 py-0.5">
          <GenList
            gens={gens}
            targetGen={targetGen}
            setTargetGen={setTargetGen}
          />
        </div>
        <VersionGroup key={targetGen} moves={targetGenMoves} />
      </div>
    </div>
  );
}
