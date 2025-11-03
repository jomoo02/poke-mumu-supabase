export interface Poke {
  id: number;
  dexNumber: number;
  pokeKey: string;
  sprite: string;
  name: string;
  type1: string;
  type2: string | null;
  form?: string | null;
}

export const getSpriteSrc = (poke: Poke) =>
  `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${poke.sprite}.png`;

export const getSpriteInfoSrc = (poke: Poke) =>
  `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/info/${poke.sprite}.png`;
