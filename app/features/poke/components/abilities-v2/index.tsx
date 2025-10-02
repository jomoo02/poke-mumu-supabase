import SectionHeader from '../section-header';
import Ability from './ability';
import type { Ability as FormattedAbility } from '../../utils/format-abilities';

interface PokeAbilitiesProps {
  abilities: FormattedAbility[];
}

export default function PokeAbilities({ abilities }: PokeAbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  return (
    <div>
      <SectionHeader id="ability" sectionTitle="특성" />
      <div className="grid gap-6 xl:gap-8 lg:grid-cols-3">
        {abilities.map(({ id, name, flavorText, isHidden }) => (
          <Ability
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
