'use server';

import { createClient } from '@/app/utils/supabase/server';

export default async function compareMove() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('move')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
