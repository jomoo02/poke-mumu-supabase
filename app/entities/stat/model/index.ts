export interface StatDto {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

const STAT_ID = [
  'hp',
  'attack',
  'defense',
  'specialAttack',
  'specialDefense',
  'speed',
  'total',
] as const;

type StatId = (typeof STAT_ID)[number];

export interface StatEntity {
  id: StatId;
  value: number;
  text: string;
}

const STAT_TEXT_MAP_KO: Record<StatId, string> = {
  hp: 'HP',
  attack: '공격',
  defense: '방어',
  specialAttack: '특수공격',
  specialDefense: '특수방어',
  speed: '스피드',
  total: '총합',
};

export const getStatTotal = (statDto: StatDto | null): number => {
  if (!statDto) {
    return 0;
  }
  return (Object.values(statDto) as number[]).reduce(
    (acc, cur) => acc + cur,
    0,
  );
};

export const setDefaultStat = (): Record<keyof StatDto, number> => {
  return {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  };
};

export const adaptStatEntity = (statDto: StatDto | null): StatEntity[] => {
  const targetStatDto = statDto ? statDto : setDefaultStat();

  const list = [
    ...Object.entries(targetStatDto).map(([id, value]) => ({
      id: id as StatId,
      value: value as number,
      text: STAT_TEXT_MAP_KO[id as StatId],
    })),
    {
      id: 'total' as StatId,
      value: getStatTotal(targetStatDto),
      text: STAT_TEXT_MAP_KO.total,
    },
  ];
  return list.sort((a, b) => STAT_ID.indexOf(a.id) - STAT_ID.indexOf(b.id));
};
