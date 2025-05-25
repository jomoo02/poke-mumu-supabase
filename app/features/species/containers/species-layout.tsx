import {
  fetchSpeciesNav,
  fetchSpeciesTitle,
  fetchSpeciesVarieties,
} from '../api/species';
import SpeciesNav from '../components/species-nav';
import SpeciesTitle from '../components/species-title';
// import VarietyList from '../components/variety-list';
import VarietyList from '../components/variety/variety-list';
interface SpeciesLayoutProps {
  ndex: number;
}

export default async function SpeciesLayout({ ndex }: SpeciesLayoutProps) {
  const [speciesNav, speciesTitle, speciesVarieties] = await Promise.all([
    fetchSpeciesNav(ndex),
    fetchSpeciesTitle(ndex),
    fetchSpeciesVarieties(ndex),
  ]);

  return (
    <div className="">
      <SpeciesNav speciesNav={speciesNav} />
      <SpeciesTitle pokeName={speciesTitle.name_ko} no={speciesTitle.no} />
      {speciesVarieties && (
        <VarietyList ndex={ndex} speciesVarieties={speciesVarieties} />
      )}
    </div>
  );
}
