'use client';

import SectionHeader from '../section-header';
import useMoveData from './hooks/useMoveData';
import useMoveSelection from './hooks/useMoveSelection';
import MoveSelectGen from './components/move-selection-gen';
import MoveSelectionVersionGroup from './components/move-selection-version';
import type { TableData } from './types';
import MoveList from './components/move-list';
import useMove from './hooks/useMove';
import useVersionGroup from './hooks/useVersionGroup';
import useGen from './hooks/useGen';
import useTotal from './hooks/useTotal';
import MovesSkeleton from './components/skeleton';

interface MovesProps {
  pokeMoves: TableData;
}

export default function Moves({ pokeMoves }: MovesProps) {
  const {
    gens,
    selectedGen,
    handleGenSelect,
    selectedVersionGroup,
    versionGroups,
    handleVersionGroupSelect,
    levelUp,
    machine,
    rest,
  } = useTotal(pokeMoves);

  return (
    <div>
      <SectionHeader id="move" sectionTitle="기술" />
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">세대</h3>
        <MoveSelectGen
          gens={gens}
          targetGen={selectedGen}
          onSelect={handleGenSelect}
        />
      </div>
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">버전</h3>
        <MoveSelectionVersionGroup
          versionGroups={versionGroups}
          targetVersionGroup={selectedVersionGroup}
          onSelect={handleVersionGroupSelect}
        />
      </div>

      <MoveList
        levelUpMoves={levelUp}
        restMoves={rest}
        machineMoves={machine}
      />
    </div>
  );
}
