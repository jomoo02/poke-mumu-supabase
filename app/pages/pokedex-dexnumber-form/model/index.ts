import type { Poke } from '@/app/entities/poke/model';
import type { Ability } from '@/app/entities/ability/model';
import type { StatEntity } from '@/app/entities/stat/model';

export interface PokeDetailAbility extends Ability {
  slot: number;
  isHidden: boolean;
}

export interface PokeDetailStat extends StatEntity {
  min?: number;
  max?: number;
}

export interface PokeDetail extends Poke {
  abilities: Ability[];
}
