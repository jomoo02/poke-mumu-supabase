'use client';

import type { PokedexPoke } from '../types';
import TypeSelect from './type-select';
import { PokedexProvider } from './pokedex.context';
import PokeCardList from './poke-card-list';
import SortButtonList from './sort-button-list';

interface PokedexProps {
  pokeList: PokedexPoke[];
}

export default function Pokedex({ pokeList }: PokedexProps) {
  return (
    <PokedexProvider pokes={pokeList}>
      <div className="mb-8 flex flex-col gap-3">
        <TypeSelect />
        <SortButtonList />
        <PokeCardList />
      </div>
    </PokedexProvider>
  );
}
