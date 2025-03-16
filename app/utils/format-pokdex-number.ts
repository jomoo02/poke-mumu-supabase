function formatPokedexNumber(pokedexNumber: number) {
  return pokedexNumber.toString().padStart(4, '0');
}

export { formatPokedexNumber };
