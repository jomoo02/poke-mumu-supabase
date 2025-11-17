import { createClient } from '@/app/utils/supabase/client';

import { StatDto, adaptStatEntity } from '@/app/entities/stat/model';

// import { adaptStatEntity } from '@/app/entities/stat/model/stat';

import type { PokeDetailAbility, PokeDetailStat } from '../model';

interface AbilitiyDto {
  slot: number;
  ability: {
    id: number;
    name: string;
    flavorText: string;
  };
}

const formatAbilities = (
  abilities: AbilitiyDto[] | null,
): PokeDetailAbility[] => {
  if (!abilities) {
    return [];
  }

  return abilities.map(({ slot, ability }) => ({
    slot,
    isHidden: slot === 3,
    ...ability,
  }));
};

const formatStat = (stat: StatDto | null): PokeDetailStat[] => {
  return adaptStatEntity(stat);
};

export const getPokeDetail = async (pokeKey: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('poke')
    .select(
      `
        id,
        type1: type!type_1_id (
          id,
          identifier,
          type:type_ko
        ),
        type2: type!type_2_id (
          id,
          identifier,
          type:type_ko
        ),
        dexNumber:no,
        name:name_ko,
        form,
        sprite,
        stat:poke_stat (
          hp,
          attack,
          defense,
          specialAttack:special_attack,
          specialDefense:special_defense,
          speed
        ),
        abilities:poke_ability (
          slot,
          ability (
            id,
            name:name_ko,
            flavorText:flavor_text
          )
        ),
        evolutionId:evolution_id,
        moves:poke_moves (
          id,
          versionGroup:version_group (
            id,
            generation,
            identifier,
            order
          ),
          moves
        ),
        pokedexInfo:pokedex_info (
          id,
          weight,
          height,
          genera
        ),
        pokedexNumber:pokedex_number (
          id,
          dex_type,
          dex_number
        ),
        breeding:poke_breeding (
          id,
          eggGroup1:egg_group_1,
          eggGroup2:egg_group_2,
          genderRate:gender_rate,
          hatchCounter:hatch_counter
        ),
        poke_effort_value (
          id,
          stat_name,
          stat_value
        ),
        poke_detail (
          id,
          capture_rate,
          growth_rate,
          base_friendship
        )
    `,
    )
    .eq('poke_key', pokeKey)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error(`${error}`);
  }

  if (!data) {
    throw new Error('Error not exist pokedetail');
  }

  const abilities = formatAbilities(data.abilities);

  const stats = formatStat(data.stat);

  return { abilities, stats };
};
