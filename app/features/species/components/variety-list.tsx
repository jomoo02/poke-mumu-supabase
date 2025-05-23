import type { VarietyPoke } from '../types';
import Variety from './variety';

interface VarietyListProps {
  ndex: number;
  speciesVarieties: VarietyPoke[] | null;
}

export default function VarietyList({
  ndex,
  speciesVarieties,
}: VarietyListProps) {
  if (!speciesVarieties || speciesVarieties.length === 0) {
    return null;
  }

  const formattedVarietyList = speciesVarieties.map(
    ({ form, poke_key, name_ko }) => {
      return {
        pokeKey: poke_key,
        name: name_ko,
        href: `/pokedex/${ndex}/${poke_key}`,
        formText: form,
        form: poke_key,
      };
    },
  );

  return (
    <div className="flex gap-x-2">
      {formattedVarietyList.map(({ pokeKey, name, href, formText, form }) => (
        <Variety
          key={pokeKey}
          name={name}
          href={href}
          form={form}
          formText={formText}
        />
      ))}
    </div>
  );
}
