// import Table from '@/app/components/table/table';
// import TableBody from '@/app/components/table/table-body';
// import TableRow from '@/app/components/table/table-row';
// import TableCell from '@/app/components/table/table-cell';
// import TableHeader from '@/app/components/table/table-header';
// import TableHeaderCell from '@/app/components/table/table-hader-cell';
// import Level from '../../../components/moves/components/move-table/level';

// import useVersion from '../hooks/useVersion';
// import type { PokeMoveListItem } from '../types';
// import MoveTable from './move-table';
// import VersionList from './version-list';

// interface VersionGroupProps {
//   moves: PokeMoveListItem[];
// }

// export default function VersionGroup({ moves }: VersionGroupProps) {
//   const {
//     versionGroups,
//     targetMachineMoves,
//     targetMoves,
//     targetVersionGroup,
//     setTargetVersion,
//   } = useVersion(moves);

//   return (
//     <>
//       <div className="px-1 sm:px-2 lg:px-7 border-b-2 sm:pt-3 border-slate-500">
//         <VersionList
//           versionGroups={versionGroups}
//           targetVersionGroup={targetVersionGroup}
//           setTargetVersion={setTargetVersion}
//         />
//       </div>
//       <div
//         key={targetVersionGroup}
//         className="px-1 xs:px-2 md:px-3 xl:px-7 pb-2 "
//       >
//         <div className="grid xl:grid-cols-2">
//           {/* <div>
//             <Table tableData={targetMoves[0].moves}>
//               <TableHeader>
//                 <TableHeaderCell
//                   headerKey="name"
//                   sortAble={true}
//                   className="w-28"
//                 >
//                   이름
//                 </TableHeaderCell>
//                 <TableHeaderCell headerKey="type" sortAble={true}>
//                   타입
//                 </TableHeaderCell>
//                 <TableHeaderCell headerKey="power" sortAble={true}>
//                   위력
//                 </TableHeaderCell>
//               </TableHeader>
//               <TableBody>
//                 {(rows) =>
//                   rows.map((row, index) => (
//                     <TableRow key={index}>
//                       <TableCell className="border px-1">{row.name}</TableCell>
//                       <TableCell className="border px-1">{row.type}</TableCell>
//                       <TableCell className="border px-1">{row.power}</TableCell>
//                     </TableRow>
//                   ))
//                 }
//               </TableBody>
//             </Table>
//           </div> */}
//           <div>
//             <Level
//               moves={
//                 targetMoves.find(({ method }) => method === 'level_up')?.moves
//               }
//             />
//           </div>

//           {targetMoves && (
//             <div className="overflow-x-hidden">
//               {targetMoves.map(({ method, moves }) => (
//                 <MoveTable method={method} moves={moves} key={method} />
//               ))}
//             </div>
//           )}
//           {targetMachineMoves && (
//             <div className="overflow-x-hidden xl:grid xl:justify-end">
//               {targetMachineMoves.map(({ machineType, moves }) => (
//                 <MoveTable
//                   key={machineType}
//                   moves={moves}
//                   method="machine"
//                   machineType={machineType}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
