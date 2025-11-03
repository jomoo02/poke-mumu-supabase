import type { Poke } from '@/app/entities/poke/model';
import { type Stat } from '@/app/entities/stat/model';
import type { TypeDto } from '@/app/entities/type/model';

export interface NationalPoke extends Poke, Stat {
  typeDto1: TypeDto;
  typeDto2: TypeDto | null;
  total: number;
}

export { PokedexProvider, usePokedexContext } from './pokedex.context';
