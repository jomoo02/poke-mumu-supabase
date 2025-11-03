import type { Poke } from '@/app/entities/poke/model';
import type { TypeDto } from '@/app/entities/type/model';

interface RegionalPoke extends Poke {
  regionalDexNumber: number;
  typeDto1: TypeDto;
  typeDto2: TypeDto | null;
}

export { type RegionalPoke };
