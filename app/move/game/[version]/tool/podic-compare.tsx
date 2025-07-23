// import fetchSupa from './fetch-supa';
// import compareMove from './compare';
// export default async function PodicCompareTable() {
//   const data = await fetchSupa();
//   const comparedMoves = await compareMove(data);

//   return (
//     <div>
//       {JSON.stringify(data)};
//       <div className="grid grid-cols-7 gap-x-1 border m-1 sticky top-16 bg-white">
//         <div>id</div>
//         <div>name</div>
//         <div>type</div>
//         <div>damageclass</div>
//         <div>power</div>
//         <div>acc</div>
//         <div>pp</div>
//       </div>
//       {comparedMoves.map((move) => (
//         <div
//           key={move.id}
//           className="grid grid-cols-7 gap-x-1 border m-1 hover:bg-green-100"
//         >
//           <div className={move.idCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.id}
//           </div>
//           <div className={move.nameCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.name_ko}
//           </div>
//           <div className={move.typeCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.type}
//           </div>
//           <div className={move.damageClassCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.damage_class}
//           </div>
//           <div className={move.powerCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.power || '-'}
//           </div>
//           <div className={move.accuracyCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.accuracy || '-'}
//           </div>
//           <div className={move.ppCheck ? 'bg-blue-100' : 'bg-red-100'}>
//             {move.pp || '-'}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
