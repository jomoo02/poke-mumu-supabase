export interface Stat {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export const getStatTotal = (stat: Stat): number => {
  const keys: (keyof Stat)[] = [
    'hp',
    'attack',
    'defense',
    'specialAttack',
    'specialDefense',
    'speed',
  ];

  return keys.reduce((acc, key) => acc + stat[key], 0);
};
