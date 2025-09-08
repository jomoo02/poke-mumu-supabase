import { getPokeTypeKo } from '@/app/lib/poke-type';
// import podicData from './podic.json';
import fetchSupaBefore from './fetch-supa-before';

type SupaMove = {
  accuracy: number | null;
  damage_class: string | null;
  id: number;
  move_id: number | null;
  name_en: string | null;
  name_ja: string | null;
  name_ko: string | null;
  power: number | null;
  pp: number | null;
  type: string | null;
};

export default async function compareMove(supaMoves: SupaMove[]) {
  // const { moves } = podicData;

  const before = await fetchSupaBefore();
  // console.log(before);

  return supaMoves
    .sort((a, b) => a.id - b.id)
    .map((d, index) => {
      const { damage_class, type } = d;

      const damageClass = (() => {
        if (damage_class === 'physical') return '물리';
        if (damage_class === 'special') return '특수';
        if (damage_class === 'status') return '변화';
        return '???';
      })();

      return {
        ...d,
        id: index + 1,
        // type: getPokeTypeKo(type),
        // damage_class: damageClass,
      };
    })
    .map(
      ({ id, type, power, pp, accuracy, damage_class, name_ko, move_id }) => {
        // const targetCheckMove = moves[index];

        // if (id === 200) {
        //   console.log(targetCheckMove, moves[index]);
        // }

        // if (!targetCheckMove) {
        //   // console.log(id, index);
        //   return {
        //     idCheck: false,
        //     typeCheck: false,
        //     powerCheck: false,
        //     accuracyCheck: false,
        //     damageClassCheck: false,
        //     nameCheck: false,
        //     id,
        //     type,
        //     power,
        //     pp,
        //     accuracy,
        //     damage_class,
        //     name_ko,
        //     ppCheck: false,
        //   };
        // }
        // console.log(index);

        // const idCheck = id === Number(targetCheckMove[0]);
        // const typeCheck = targetCheckMove[2] === type;
        // const powerCheck =
        //   (!targetCheckMove[4] && !power) || Number(targetCheckMove[4]) === power;
        // const accuracyCheck =
        //   Number(targetCheckMove[5].split('%')[0]) === accuracy;
        // const damageClassCheck = damage_class === targetCheckMove[3];
        // const nameCheck = name_ko === targetCheckMove[1];

        const targetBeforeMove = before.find((b) => b.move_id === id);
        const idCheck = targetBeforeMove
          ? targetBeforeMove.move_id === move_id
          : false;
        const typeCheck = targetBeforeMove
          ? targetBeforeMove.type === type
          : false;
        const powerCheck = targetBeforeMove
          ? targetBeforeMove.power === power
          : false;
        const accuracyCheck = targetBeforeMove
          ? targetBeforeMove.accuracy === accuracy
          : false;
        const damageClassCheck = targetBeforeMove
          ? targetBeforeMove.damage_class === damage_class
          : false;
        const nameCheck = targetBeforeMove
          ? targetBeforeMove.name_ko === name_ko
          : false;

        const ppCheck = targetBeforeMove ? targetBeforeMove.pp === pp : false;

        return {
          idCheck,
          typeCheck,
          powerCheck,
          accuracyCheck,
          damageClassCheck,
          nameCheck,
          id,
          type,
          power,
          pp,
          accuracy,
          damage_class,
          name_ko,
          ppCheck,
        };
      },
    );
}
