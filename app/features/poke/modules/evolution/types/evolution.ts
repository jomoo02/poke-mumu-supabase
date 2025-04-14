import { Tables } from '@/types_db';
import type { ConditionValue, TriggerKey, ConditionKey } from '.';

type Poke = Tables<'poke'>;

export type EvolutionPoke = Pick<
  Poke,
  'id' | 'name_ko' | 'form' | 'poke_key' | 'no' | 'sprite'
>;

export type EvolutionCondition = {
  key: ConditionKey;
  value: ConditionValue;
};

export type Detail = {
  trigger: TriggerKey;
  condition: EvolutionCondition[];
};

export type EvolutionData = {
  stage: number;
  to_detail: Detail[] | null;
  to_poke_id: number;
  from_poke_id: number | null;
};

export type EvolutionChain = {
  pokeId: number;
  toDetail: Detail[];
  toPokes: EvolutionChain[];
};
