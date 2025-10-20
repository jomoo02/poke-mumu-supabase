import { cn } from '@/app/lib/utils';
import PokeCard from './poke-card';
import { usePokedexContext } from './pokedex.context';

export default function PokeCardList() {
  const { pokes, isPending } = usePokedexContext();

  return (
    <div
      className={cn(
        'grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 transition-opacity',
        isPending ? 'opacity-40 pointer-events-none' : 'pointer-events-auto',
      )}
    >
      {pokes.map((poke) => (
        <PokeCard key={poke.id} poke={poke} />
      ))}
    </div>
  );
}
