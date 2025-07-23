type Move = {
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

export default function formatMove(moves: Move[]) {
  const idMoves = [...moves]
    .sort((a, b) => a.id - b.id)
    .map((d, index) => {
      return {
        ...d,
        id: index + 1,
        move_number: index + 1,
      };
    })
    .map((d) => {
      if (
        d.move_number === 135 ||
        d.move_number === 156 ||
        d.move_number === 165
      ) {
        return {
          ...d,
          pp: 10,
        };
      }
      return d;
    })
    .map((d) => {
      const en = d.name_en?.toLowerCase().split(' ').join('-');

      return { ...d, identifier: en };
    });
  // flavor text 추가 로 마무리
  return idMoves;
  console.log(idMoves, idMoves[-1]);
}
