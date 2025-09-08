import useSelectGen from './useSelectGen';
import useSelectVersionGroup from './useSelectVersionGroup';
import useMoveData from './useMoveData';
import type { PokeMove } from '../../../utils/format-move';

export default function usePokeMove(pokeMoves: PokeMove[]) {
  const moveGens = pokeMoves.map(({ gen }) => gen);

  const { gens, selectedGen, selectGen } = useSelectGen(moveGens);

  const {
    versionGroups,
    selectedVersionGroup,
    selectedVersionGroupId,
    selectVersionGroup,
  } = useSelectVersionGroup(pokeMoves, selectedGen);

  const { levelUpMoves, machineMoves, restMoves, isLoading } = useMoveData(
    pokeMoves,
    selectedVersionGroupId,
  );

  return {
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
  };
}
