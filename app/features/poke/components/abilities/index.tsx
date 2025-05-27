import SectionHeader from '../section-header';
import AbilityV2 from './components/ability-v2';
import { formatPokeAbilities } from './lib/format-abilities';

interface AbilitiesProps {
  abilities: {
    slot: number;
    ability: {
      name_ko: string;
      flavor_text: string;
      id: number;
    };
  }[];
}

export default function Abilities({ abilities }: AbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  const formattedAbilities = formatPokeAbilities(abilities);

  return (
    <div>
      <SectionHeader id="ability" sectionTitle="특성" />
      <div className="px-1">
        {formattedAbilities.map(({ id, name, flavorText, isHidden }) => (
          <AbilityV2
            key={id}
            name={name}
            flavorText={flavorText}
            isHidden={isHidden}
          />
        ))}
      </div>
    </div>
  );
}
