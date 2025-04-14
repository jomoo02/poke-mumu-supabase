import Ability from '../components/ability';
import { formatPokeAbility } from '../lib/ability';

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

  const formattedAbilities = formatPokeAbility(abilities);

  return (
    <>
      {formattedAbilities.map(({ id, name, flavorText, isHidden }) => (
        <Ability
          key={id}
          name={name}
          flavorText={flavorText}
          isHidden={isHidden}
        />
      ))}
    </>
  );
}
