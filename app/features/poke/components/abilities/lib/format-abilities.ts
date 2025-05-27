type PokeAbilityData = {
  slot: number;
  ability: {
    id: number;
    name_ko: string;
    flavor_text: string;
  };
}[];

export const formatPokeAbilities = (abilities: PokeAbilityData) => {
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
