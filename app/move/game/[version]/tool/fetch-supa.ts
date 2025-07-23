import { createClient } from '@/app/utils/supabase/server';

export default async function fetchSupa() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('move_list_gen2')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    return [];
  }

  return data;
}
