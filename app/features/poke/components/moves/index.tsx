'use client';

import type { PokeMoveTableWithVersion } from './types';
import useMoves from './hooks/useMoves';
import VersionGroup from './components/version-group';
import SectionHeader from '../section-header';
import OptionGen from './components/option-gen';

interface MovesProps {
  pokeMoves: PokeMoveTableWithVersion[];
}

export default function Moves({ pokeMoves }: MovesProps) {
  const { gens, targetGen, handleTargetGen, targetGenMoves } =
    useMoves(pokeMoves);

  return (
    <div>
      <SectionHeader id="move" sectionTitle="기술" />
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">세대</h3>
        <OptionGen
          gens={gens}
          targetGen={targetGen}
          handleTargetGen={handleTargetGen}
        />
        <VersionGroup key={targetGen} moves={targetGenMoves} />
      </div>
    </div>
  );
}
