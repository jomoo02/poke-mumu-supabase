import { createClient } from '@/app/utils/supabase/client';

interface GenPageProps {
  params: Promise<{ gen: string }>;
}

export default async function GenPage({ params }: GenPageProps) {
  const supabase = createClient();

  const { gen } = await params;

  const { data, error } = await supabase.from('move_list_gen1').select('*');

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.name_ko}</div>
      ))}
    </div>
  );
}
