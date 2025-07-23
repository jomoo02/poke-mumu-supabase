import data from './test.json';

type Move = {
  id: number;
  type: string;
  power: number | null;
  pp: number;
  accuracy: number | null;
  damageClass: string;
  name: string;
};

export function compareMove(movesD: Move[]) {
  const { moves } = data;

  return movesD.map(
    ({ id, type, power, pp, accuracy, damageClass, name }, index) => {
      const targetCheckMove = moves[index];

      const idCheck = id === Number(targetCheckMove[0]);
      const typeCheck = targetCheckMove[2] === type;
      const powerCheck =
        (!targetCheckMove[4] && !power) || Number(targetCheckMove[4]) === power;
      const accuracyCheck =
        Number(targetCheckMove[5].split('%')[0]) === accuracy;
      const damageClassCheck = damageClass === targetCheckMove[3];
      const nameCheck = name === targetCheckMove[1];

      if (id === 135 || id === 156 || id === 165) {
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
          pp: 10,
          accuracy,
          damageClass,
          name,
        };
      }

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
        damageClass,
        name,
      };
    },
  );
}
