'use server';

import { createClient } from '@/app/utils/supabase/server';
import type { SpeciesPoke } from '../types';

export async function fetchSpeciesNav(
  ndex: number,
): Promise<{ prev: SpeciesPoke | null; next: SpeciesPoke | null } | null> {
  const supabase = await createClient();

  if (isNaN(ndex)) {
    return null;
  }

  const { data: speciesData, error } = await supabase
    .from('species')
    .select('*')
    .in('no', [ndex - 1, ndex + 1]);

  if (error || !speciesData) {
    return null;
  }

  const prev = speciesData.find(({ no }) => no === ndex - 1) || null;
  const next = speciesData.find(({ no }) => no === ndex + 1) || null;

  return { prev, next };
}

export async function fetchSpeciesTitle(ndex: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('species')
    .select(
      `
      name_ko,
      no
      `,
    )
    .eq('no', ndex)
    .maybeSingle();

  if (error || !data) {
    return {
      name_ko: '',
      no: 0,
    };
  }

  return data;
}

export async function fetchSpeciesVarieties(ndex: number) {
  const supabase = await createClient();

  const { data: variantPokeList, error: variantPokeError } = await supabase
    .from('poke')
    .select(
      `
      poke_key,
      name_ko,
      form
    `,
    )
    .eq('no', ndex)
    .order('id', { ascending: true });

  if (variantPokeError) {
    return null;
  }

  return variantPokeList;
}
