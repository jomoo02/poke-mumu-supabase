'use client';

import type { PokeMove } from './types/move';
import SectionHeader from '../section-header';
import GenTabs from './components/gen-tabs';
import VersionGroupTabs from './components/version-group-tabs';
import usePokeMove from './hooks/usePokeMove';
import MoveList from './components/move-list';

interface PokeMovesProps {
  pokeMoves: PokeMove[];
}

export default function PokeMoves({ pokeMoves }: PokeMovesProps) {
  const {
    gens,
    selectedGen,
    handleGenChange,
    versionGroups,
    selectedVersionGroup,
    handleVersionGroupChange,
    levelUpMoves,
    machineMoves,
    restMoves,
    isLoading,
  } = usePokeMove(pokeMoves);

  return (
    <div>
      <SectionHeader id="move" sectionTitle="기술" />
      <h3 className="mt-6 mb-4">세대</h3>
      <GenTabs gens={gens} onGenChange={handleGenChange} gen={selectedGen} />
      <h3 className="mt-6 mb-4">버전</h3>
      <VersionGroupTabs
        versionGroup={selectedVersionGroup}
        onVersionGroupChange={handleVersionGroupChange}
        versionGroups={versionGroups}
      />
      {!isLoading && (
        <MoveList
          levelUpMoves={levelUpMoves}
          machineMoves={machineMoves}
          restMoves={restMoves}
          versionGroup={selectedVersionGroup}
        />
      )}
    </div>
  );
}
