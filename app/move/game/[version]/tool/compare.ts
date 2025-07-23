// import { getPokeTypeKo } from '@/app/lib/poke-type';
// import podicData from './podic.json';
// import fetchSupaBefore from './fetch-supa-before';

// type SupaMove = {
//   id: number;
//   type: string;
//   power: number | null;
//   pp: number;
//   accuracy: number | null;
//   damage_class: string;
//   name_ko: string;
// };

// export default async function compareMove(supaMoves: SupaMove[]) {
//   const { moves } = podicData;

//   const before = await fetchSupaBefore();

//   return supaMoves
//     .sort((a, b) => a.id - b.id)
//     .map((d, index) => {
//       const { damage_class, type } = d;

//       const damageClass = (() => {
//         if (damage_class === 'physical') return '물리';
//         if (damage_class === 'special') return '특수';
//         if (damage_class === 'status') return '변화';
//         return '???';
//       })();

//       return {
//         ...d,
//         id: index + 1,
//         type: getPokeTypeKo(type),
//         damage_class: damageClass,
//       };
//     })

//     .map(({ id, type, power, pp, accuracy, damage_class, name_ko }, index) => {
//       const targetCheckMove = moves[index];

//       const idCheck = id === Number(targetCheckMove[0]);
//       const typeCheck = targetCheckMove[2] === type;
//       const powerCheck =
//         (!targetCheckMove[4] && !power) || Number(targetCheckMove[4]) === power;
//       const accuracyCheck =
//         Number(targetCheckMove[5].split('%')[0]) === accuracy;
//       const damageClassCheck = damage_class === targetCheckMove[3];
//       const nameCheck = name_ko === targetCheckMove[1];

//       const targetBeforeMove = before.find((b) => b.move_id === id);

//       const ppCheck = targetBeforeMove ? targetBeforeMove.pp === pp : false;

//       return {
//         idCheck,
//         typeCheck,
//         powerCheck,
//         accuracyCheck,
//         damageClassCheck,
//         nameCheck,
//         id,
//         type,
//         power,
//         pp,
//         accuracy,
//         damage_class,
//         name_ko,
//         ppCheck,
//       };
//     });
// }
