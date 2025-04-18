// import type { MovesTableItem, MovesJson, Move, MachineType } from '../types';
// import type { MoveMethod, HeaderKey } from '../types/move-table';

// interface FormattedMoves {
//   method: HeaderKey;
//   moves: Move[];
// }

// export function formatMoves(moves: MovesTableItem[]) {
//   const formattedMoves = moves
//     .map(({ version_group, ...rest }) => ({
//       ...rest,
//       gen: version_group.generation,
//       versionGroupId: version_group.id,
//       versionGroup: version_group.identifier,
//       order: version_group.order,
//     }))
//     .sort((a, b) => a.order - b.order);

//   return formattedMoves;
// }

// function formatMoveTableMachineMove(machineMoves: Move[]) {
//   const machineTypes: MachineType[] = ['HM', 'TM', 'TR'];

//   return machineTypes
//     .map((type) => {
//       const targetTypeMoves = machineMoves.filter(
//         ({ machine_type }) => machine_type === type,
//       );

//       return {
//         method: type.toLowerCase() as HeaderKey,
//         moves: targetTypeMoves,
//       };
//     })
//     .filter(({ moves }) => moves.length > 0);
// }

// export function formatMoveTable(moves: MovesJson): FormattedMoves[] {
//   return (Object.keys(moves) as MoveMethod[]).reduce<FormattedMoves[]>(
//     (acc, key) => {
//       const moveList = moves[key];
//       if (!moveList) return acc;

//       if (key === 'level_up') {
//         acc.push({ method: 'level', moves: moveList });
//       } else if (key === 'machine') {
//         const formattedMachineMoves = formatMoveTableMachineMove(moveList);
//         acc.push(...formattedMachineMoves);
//       } else {
//         acc.push({
//           method: key as HeaderKey,
//           moves: moveList,
//         });
//       }
//       return acc;
//     },
//     [],
//   );
// }
