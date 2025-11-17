import type { Poke } from '@/app/entities/poke/model';
import type { StatDto } from '@/app/entities/stat/model';
import type { TypeDto } from '@/app/entities/type/model';

export interface NationalPoke extends Poke, StatDto {
  total: number;
  type1: TypeDto | null;
  type2: TypeDto | null;
}

export type SearchParams = {
  sortBy?: string;
  type?: string;
  direction?: string;
};
