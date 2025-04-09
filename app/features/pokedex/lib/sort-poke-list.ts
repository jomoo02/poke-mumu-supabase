import type { PokedexPoke } from '../types';

export default function sortPokeList(
  pokeList: PokedexPoke[],
  column: string,
  direction: 'asc' | 'desc',
) {
  return [...pokeList].sort((a, b) => {
    const valueA = a[column as keyof PokedexPoke];
    const valueB = b[column as keyof PokedexPoke];

    if (valueA === null || valueB === null) {
      return 0;
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return direction === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    return 0;
  });
}
