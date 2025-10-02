type AbilityData = {
  slot: number;
  ability: {
    id: number;
    name_ko: string;
    flavor_text: string;
  };
}[];

export type Ability = {
  slot: number;
  id: number;
  name: string;
  flavorText: string;
  isHidden: boolean;
};

export const formatPokeAbilities = (abilities: AbilityData) => {
  const formattedAbilities = abilities
    .map(({ slot, ability }) => {
      const { id, name_ko, flavor_text } = ability;

      return {
        slot,
        id,
        name: name_ko,
        flavorText: flavor_text,
        isHidden: slot === 3 ? true : false,
      };
    })
    .sort((a, b) => a.slot - b.slot);

  return formattedAbilities;
};
