'use client';

import type { PokeMove } from '../../utils/format-move';
import SectionHeader from '../section-header';
import usePokeMove from './hooks/usePokeMove';
import MoveList from './components/move-list';
import SelectGen from './components/select-gen';
import SelectionVersionGroup from './components/select-version-group';

interface PokeMovesProps {
  pokeMoves: PokeMove[];
}

export default function PokeMoves({ pokeMoves }: PokeMovesProps) {
  const {
    gens,
    selectedGen,
    selectGen,
    versionGroups,
    selectedVersionGroup,
    selectVersionGroup,
    levelUpMoves,
    machineMoves,
    restMoves,
    isLoading,
  } = usePokeMove(pokeMoves);

  return (
    <div>
      <SectionHeader id="move" sectionTitle="기술" />
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">세대</h3>
        <SelectGen gens={gens} selectedGen={selectedGen} onSelect={selectGen} />
      </div>
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">버전</h3>
        <SelectionVersionGroup
          versionGroups={versionGroups}
          selectedVersionGroup={selectedVersionGroup}
          onSelect={selectVersionGroup}
        />
      </div>
      <TableTest moves={moves} />

      {/* {!isLoading && (
        <MoveList
          levelUpMoves={levelUpMoves}
          restMoves={restMoves}
          machineMoves={machineMoves}
          versionGroup={selectedVersionGroup}
        />
      )} */}
    </div>
  );
}
