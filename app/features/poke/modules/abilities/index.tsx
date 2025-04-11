import Ability from './components/ability';

interface AbilitiesProps {
  abilities: {
    slot: number;
    id: number;
    name: string;
    flavorText: string;
    isHidden: boolean;
  }[];
}

export default function Abilities({ abilities }: AbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  return (
    <>
      {abilities.map(({ id, name, flavorText, isHidden }) => (
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
