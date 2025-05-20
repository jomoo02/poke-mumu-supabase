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
    // <nav className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0">
    <nav className="flex justify-between">
      {prev ? <SpeciesNavButton.Prev poke={prev} /> : <div />}
      <div className="lg:col-start-3 xl:col-start-3">
        {next && <SpeciesNavButton.Next poke={next} />}
      </div>
    </nav>
  );
}
