import type { Poke } from '@/app/entities/poke/model';
import type { TypeDto } from '@/app/entities/type/model';

export interface RegionalPoke extends Omit<Poke, 'type1' | 'type2'> {
  regionalDexNumber: number;
  typeDto1: TypeDto | null;
  typeDto2: TypeDto | null;
}
