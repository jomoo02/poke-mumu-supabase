import Pokedex from './components/pokedex';
import PokedexServer from './components/pokedex-server';
import { Suspense } from 'react';
import Loading from './components/poke-card/loading';

export default function PokedexPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PokedexServer />
    </Suspense>
  );
}
