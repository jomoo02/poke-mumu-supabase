import type { PokeList } from './get-poke';

export type PokedexPoke = {
  form: string | null;
  id: number;
  name: string;
  no: number;
  pokeKey: string;
  sprite: string;
  type1: string;
  type2: string | null;
  attack: number;
  defense: number;
  hp: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  total: number;
};

export default function setPokedexPokeList(pokeList: PokeList): PokedexPoke[] {
  const pokedexPokeList = pokeList.map(
    ({ poke_key, name_ko, poke_stat, type_1, type_2, ...rest }) => {
      if (!poke_stat) {
        return {
          ...rest,
          pokeKey: poke_key,
          name: name_ko,
          type1: type_1,
          type2: type_2,
          attack: 0,
          defense: 0,
          hp: 0,
          special_attack: 0,
          special_defense: 0,
          speed: 0,
          total: 0,
        };
      }
      const total = Object.values(poke_stat).reduce((acc, cur) => acc + cur, 0);
      return {
        ...rest,
        ...poke_stat,
        total,
        pokeKey: poke_key,
        name: name_ko,
        type1: type_1,
        type2: type_2,
      };
    },
  );
  return pokedexPokeList;
}
