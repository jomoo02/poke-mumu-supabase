'use server';

import { createClient } from '@/app/utils/supabase/client';
import type { PokeList, PokedexPoke } from '../types';

const formatPokedexList = (pokeList: PokeList): PokedexPoke[] =>
  pokeList.map(({ poke_key, name_ko, poke_stat, type_1, type_2, ...rest }) => {
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
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
        total: 0,
      };
    }

    const {
      special_attack: specialAttack,
      special_defense: specialDefense,
      ...restStat
    } = poke_stat;

    return {
      ...rest,
      ...restStat,
      specialAttack,
      specialDefense,
      total: Object.values(poke_stat).reduce((acc, cur) => acc + cur, 0),
      pokeKey: poke_key,
      name: name_ko,
      type1: type_1,
      type2: type_2,
    };
  });

export async function fetchPokedexPokeList(): Promise<PokedexPoke[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('poke')
    .select(
      `
      id,
      poke_key,
      no,
      name_ko,
      sprite,
      form,
      type_1,
      type_2,
      poke_stat (
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed
      )
    `,
    )
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return formatPokedexList(data);
}
