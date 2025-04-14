export function getPokedexPokeHref({
  no,
  pokeKey,
}: {
  no: number;
  pokeKey: string;
}) {
  return `/pokedex/${no}/${pokeKey}`;
}
