import { Poke } from '@/app/entities/poke/model';
import { TypeDto } from '@/app/entities/type/model';

export interface SearchPoke extends Poke {
  nameEn: string;
  typeDto1: TypeDto;
  typeDto2: TypeDto | null;
}
