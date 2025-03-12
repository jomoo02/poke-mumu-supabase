import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';
import { QueryData } from '@supabase/supabase-js';

export const dynamic = 'force-static';

type PokeStat = Tables<'poke_stat'>;
type Poke = Tables<'poke'>;

type TargetPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_en' | 'name_ja'
>;

export type PokedexPoke = TargetPoke & { poke_stat: PokeStat[] };

export async function GET() {
  const supabase = await createClient();

  const pokeListQuery = supabase
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

  type PokeList = QueryData<typeof pokeListQuery>;

  const { data, error } = await pokeListQuery;

  if (error) {
    console.error(error);
    return Response.json({ data: [] });
  }

  const pokeList: PokeList = data;

  return Response.json({ data: pokeList });
}
