import NavButton from './components/nav-button';
import { fetchNavPoke } from './lib/poke';

interface PokeNavigationProps {
  pokeKey: string;
}

export default async function PokeNavigation({ pokeKey }: PokeNavigationProps) {
  const data = await fetchNavPoke(pokeKey);

  if (!data) {
    return null;
  }

  const { before, next } = data;

  return (
    <nav className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0">
      {before && <NavButton.Before poke={before} />}
      <div className="lg:col-start-3 xl:col-start-3">
        {next && <NavButton.Next poke={next} />}
      </div>
    </nav>
  );
}
