import type { VersionGroup } from '@/app/data/version-group/version-group';
import type { PokeMoveTableWithVersion, PokeMoveJsonByMethod } from '../types';

// move table에서 가져온 데이터 포맷
export function formatMovesFromTable(tableMoves: PokeMoveTableWithVersion[]) {
  return tableMoves
    .map(({ version_group, moves, ...rest }) => ({
      ...rest,
      gen: version_group.generation,
      versionGroupId: version_group.id,
      versionGroup: version_group.identifier as VersionGroup,
      order: version_group.order,
      moves: moves as PokeMoveJsonByMethod,
    }))
    .sort((a, b) => a.order - b.order);
}

// // move json에 저장된 machine move 포맷
// function formatMachineMovesByType(machineMoves: PokeMove[]) {
//   const machineTypes: MachineType[] = ['HM', 'TM', 'TR'];

//   return machineTypes
//     .map((type) => {
//       const targetTypeMoves = machineMoves.filter(
//         ({ machine_type }) => machine_type === type,
//       );

//       return {
//         method: type.toLowerCase() as MoveMethod,
//         moves: targetTypeMoves,
//       };
//     })
//     .filter(({ moves }) => moves.length > 0);
// }

// // move Json 포맷
// export function formatMovesByMethod(movesJson: PokeMoveJsonByMethod) {
//   return (Object.keys(movesJson) as MoveMethod[]).reduce<
//     FormattedMovesByMethod[]
//   >((acc, key) => {
//     const moveList = movesJson[key];

//     if (!moveList) return acc;

//     if (key === 'level_up') {
//       acc.push({ method: 'level_up', moves: moveList });
//     } else if (key === 'machine') {
//       const formattedMachineMoves = formatMachineMovesByType(moveList);
//       acc.push(...formattedMachineMoves);
//     } else {
//       acc.push({
//         method: key as MoveMethod,
//         moves: moveList,
//       });
//     }
//     return acc;
//   }, []);
// }
