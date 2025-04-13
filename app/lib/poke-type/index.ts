import { POKE_TYPE_MAP_KO } from '@/app/data/type/type-ko';
import { pokeTypeList, type PokeType } from '@/app/data/type/type';

export const pokeTypeObj: Record<PokeType, PokeType> = Object.fromEntries(
  pokeTypeList.map((type) => [type, type]),
) as Record<PokeType, PokeType>;

export function isPokeType(type: string): type is PokeType {
  return (pokeTypeList as readonly string[]).includes(type);
}

export function getPokeTypeKo(type: string): string {
  return isPokeType(type) ? POKE_TYPE_MAP_KO[type] : POKE_TYPE_MAP_KO.unknown;
}
