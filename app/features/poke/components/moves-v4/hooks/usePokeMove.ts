import useGen from './useGen';
import useVersionGroup from './useVersionGroup';
import useMoveData from './useMoveData';
import type { PokeMove } from '../../../utils/format-move';

export default function usePokeMove(pokeMoves: PokeMove[]) {
  const moveGens = pokeMoves.map(({ gen }) => gen);

  const { gens, selectedGen, handleGenChange } = useGen(moveGens);

  const {
    versionGroups,
    selectedVersionGroup,
    selectedVersionGroupId,
    handleVersionGroupChange,
  } = useVersionGroup(pokeMoves, selectedGen);

  const { levelUpMoves, machineMoves, restMoves, isLoading } = useMoveData(
    pokeMoves,
    selectedVersionGroupId,
  );

  return {
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
  };
}
