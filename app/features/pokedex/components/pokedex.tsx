'use client';

import { useMemo, useState } from 'react';
import { getPokeTypeList, getPokeTypeKo } from '@/app/lib/poke-type';
import type { PokedexPoke } from '../types';
import TypeSelect from './type-select';
import PokedexTableV3 from './pokedex-table-v3';
import PokeCard from './poke-card';
import usePokedex from '../hooks/usePokedex';
import { cn } from '@/app/lib/utils';

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
