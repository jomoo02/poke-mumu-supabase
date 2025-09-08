import { createClient } from '@/app/utils/supabase/server';

export default async function fetchSupaLetsgo() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('move_lets_go')
    .select('*')
    .gte('move_id', 729)
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
