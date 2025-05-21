import SpeciesNavButton from './species-nav-button';
import type { SpeciesPoke } from '../types';

interface SpeciesNavProps {
  speciesNav: {
    prev: SpeciesPoke | null;
    next: SpeciesPoke | null;
  } | null;
}

export default function SpeciesNav({ speciesNav }: SpeciesNavProps) {
  if (!speciesNav) {
    return null;
  }

  const { prev, next } = speciesNav;

  return (
    <nav className="flex justify-between items-center">
      {prev ? <SpeciesNavButton.Prev poke={prev} /> : <div />}

      {next && <SpeciesNavButton.Next poke={next} />}
    </nav>
  );
}
