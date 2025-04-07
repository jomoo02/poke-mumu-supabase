import { fetchPokeSpecies } from './lib/poke';

interface PokeSpeciesProps {
  ndex: number;
}

export default async function PokeSpecies({ ndex }: PokeSpeciesProps) {
  const species = await fetchPokeSpecies(ndex);

  return (
    <h2 className="text-center text-3xl font-bold text-slate-800 my-4">
      {species}
    </h2>
  );
}
