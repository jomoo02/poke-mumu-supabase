import PokeTypeDefense from './components/poke-type-defense';
import SectionHeader from '../section-header';

interface TypeDefenseProps {
  types: string[];
}

export default function TypeDefense({ types }: TypeDefenseProps) {
  return (
    <div>
      <SectionHeader id="type-defense" sectionTitle="방어 상성" />
      <div className="border border-zinc-200 bg-white rounded-lg shadow-md shadow-zinc-200">
        <PokeTypeDefense pokeTypes={types} />
      </div>
    </div>
  );
}
