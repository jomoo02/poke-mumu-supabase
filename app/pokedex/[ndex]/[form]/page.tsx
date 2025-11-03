import { Suspense } from 'react';
import Loading from './loading';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <div>{form}</div>
      {/* <PokeDetail pokeKey={form} /> */}
    </Suspense>
  );
}
