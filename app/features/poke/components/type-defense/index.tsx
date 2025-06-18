import PokeTypeDefense from './components/poke-type-defense';
import SectionHeader from '../section-header';
import PokeTypeList from './components/poke-type-list';
import TypeDefenseSkeleton from './components/skeleton';

interface TypeDefenseProps {
  types: string[];
}

export default function TypeDefense({ types }: TypeDefenseProps) {
  return (
    <div>
      <SectionHeader id="type-defense" sectionTitle="방어 상성" />
      <PokeTypeList pokeTypes={types} />
      <div className="border border-gray-200 bg-white rounded-lg shadow-md shadow-gray-200">
        <PokeTypeDefense pokeTypes={types} />
      </div>
      <TypeDefenseSkeleton />
    </div>
  );
}
