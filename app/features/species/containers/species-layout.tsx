import {
  fetchSpeciesNav,
  fetchSpeciesName,
  fetchSpeciesVarieties,
} from '../api/species';
import SpeciesNav from '../components/species-nav';
import SpeciesTitle from '../components/species-title';
import VarietyList from '../components/variety-list';

interface SpeciesLayoutProps {
  ndex: number;
}

export default async function SpeciesLayout({ ndex }: SpeciesLayoutProps) {
  const [speciesNav, speciesName, speciesVarieties] = await Promise.all([
    fetchSpeciesNav(ndex),
    fetchSpeciesName(ndex),
    fetchSpeciesVarieties(ndex),
  ]);

  return (
    <div className="grid gap-4">
      <SpeciesNav speciesNav={speciesNav} />
      <SpeciesTitle pokeName={speciesName} />
      <VarietyList ndex={ndex} speciesVarieties={speciesVarieties} />
    </div>
  );
}
