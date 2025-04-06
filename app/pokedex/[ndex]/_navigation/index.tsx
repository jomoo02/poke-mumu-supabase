import NavButton from './components/nav-button';
import { fetchNavPoke } from './lib/poke';

interface PokeNavigationProps {
  ndex: string;
}

export default async function PokeNavigation({ ndex }: PokeNavigationProps) {
  const poke = await fetchNavPoke(ndex);

  if (!poke) {
    return null;
  }

  const { prev, next } = poke;

  return (
    <nav className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0">
      {prev && <NavButton.Prev poke={prev} />}
      <div className="lg:col-start-3 xl:col-start-3">
        {next && <NavButton.Next poke={next} />}
      </div>
    </nav>
  );
}
